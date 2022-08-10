const PAGINATION_WINDOW_SIZE = 5;

/**
 * Stores and calculates current pagination state based on the current page, page size, and total
 * items
 */
export default class State {
  private readonly currentPage: number;

  private readonly totalItems: number;

  private readonly pageSize: number;

  public totalPages: number;

  public pageRange: { from: number; to: number };

  constructor(currentPage: number, totalItems: number, pageSize: number) {
    this.currentPage = currentPage;
    this.pageSize = pageSize;
    this.totalItems = totalItems;
    this.totalPages = Math.ceil(totalItems / pageSize);

    const offsetToMiddle = Math.floor(PAGINATION_WINDOW_SIZE / 2);
    let from = currentPage - offsetToMiddle;
    let to = currentPage + offsetToMiddle;

    if (from <= 0) {
      from = 1;
      to = this.totalPages < PAGINATION_WINDOW_SIZE ? this.totalPages : PAGINATION_WINDOW_SIZE;
    } else if (to > this.totalPages) {
      from = this.totalPages > PAGINATION_WINDOW_SIZE ? from - (to - this.totalPages) : 1;
      to = this.totalPages;
    }

    this.pageRange = { from, to };
  }

  currentItemRange = () => {
    const itemsBeforePage = (this.currentPage - 1) * this.pageSize;

    let itemsOnPage = this.pageSize;
    if (this.currentPage === this.totalPages) {
      const remainder = this.totalItems % this.pageSize;
      itemsOnPage = remainder || this.pageSize;
    }

    return {
      from: itemsBeforePage + 1,
      to: itemsBeforePage + itemsOnPage,
    };
  };

  showPrevious = () => this.currentPage > 1;

  showNext = () => this.currentPage < this.totalPages;
}
