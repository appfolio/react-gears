import { useState } from 'react';

export default function usePagination({ size = 10, page = 1, total = 0 }) {
  const [pageSize, setPageSize] = useState(size);
  const [currentPage, setCurrentPage] = useState(page);
  const [totalItems, setTotalItems] = useState(total);

  return {
    currentPage,
    setCurrentPage,
    pageSize,
    setPageSize,
    totalItems,
    setTotalItems,
  };
}
