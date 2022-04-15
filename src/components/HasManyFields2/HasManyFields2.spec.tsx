import assert from 'assert';
import { fireEvent, render, screen, act } from '@testing-library/react';
import React from 'react';
import { HasManyFields2, HasManyFields2Row } from './HasManyFields2';

const tick = async () =>
  new Promise((resolve) => {
    setTimeout(resolve, 0);
  });

describe(`<${HasManyFields2.name} />`, () => {
  it('should render', async () => {
    const props = {
      addButtonLabel: 'Add a row',
      disabled: false,
      onOrderChanged: jest.fn(),
      onAdd: jest.fn(),
      reorderable: false,
      maximumRows: 5,
      minimumRows: 0,
    };
    render(
      <HasManyFields2 {...props}>
        <HasManyFields2Row rowId="row_0">
          <div>row_0 Content</div>
        </HasManyFields2Row>
        <HasManyFields2Row rowId="row_1">
          <div>row_1 Content</div>
        </HasManyFields2Row>
      </HasManyFields2>
    );

    assert(screen.queryByText('row_0 Content'));
    assert(screen.queryByText('row_1 Content'));
  });

  describe('add function', () => {
    it('should not have add buttons when no add function supplied', async () => {
      const props = {
        addButtonLabel: 'add',
        disabled: false,
        onOrderChanged: jest.fn(),
        onAdd: undefined,
        reorderable: false,
        maximumRows: 5,
        minimumRows: 0,
      };
      render(
        <HasManyFields2 {...props}>
          <HasManyFields2Row rowId="row_0">
            <div>row_0 Content</div>
          </HasManyFields2Row>
          <HasManyFields2Row rowId="row_1">
            <div>row_1 Content</div>
          </HasManyFields2Row>
        </HasManyFields2>
      );

      expect(() => screen.getByText('add')).toThrow();
    });

    it('should have add buttons when add function supplied', async () => {
      const props = {
        addButtonLabel: 'add',
        disabled: false,
        onOrderChanged: jest.fn(),
        onAdd: jest.fn(),
        reorderable: false,
        maximumRows: 5,
        minimumRows: 0,
      };
      render(
        <HasManyFields2 {...props}>
          <HasManyFields2Row rowId="row_0">
            <div>row_0 Content</div>
          </HasManyFields2Row>
          <HasManyFields2Row rowId="row_1">
            <div>row_1 Content</div>
          </HasManyFields2Row>
        </HasManyFields2>
      );

      expect(screen.getByText('add')).toBeTruthy();
    });

    it('should call add function when add button clicked', async () => {
      const addFunction = jest.fn();
      const props = {
        addButtonLabel: 'add',
        disabled: false,
        onOrderChanged: jest.fn(),
        onAdd: addFunction,
        reorderable: false,
        maximumRows: 5,
        minimumRows: 0,
      };
      render(
        <HasManyFields2 {...props}>
          <HasManyFields2Row rowId="row_0">
            <div>row_0 Content</div>
          </HasManyFields2Row>
          <HasManyFields2Row rowId="row_1">
            <div>row_1 Content</div>
          </HasManyFields2Row>
        </HasManyFields2>
      );

      const addButton = screen.getByText('add');
      addButton.click();
      expect(addFunction).toBeCalledTimes(1);
    });

    it('should allow setting of add button label', () => {
      const addFunction = jest.fn();
      const addButtonLabel = '8b5776ff-cdcf-411c-8925-476d03c0be40';
      const props = {
        addButtonLabel,
        disabled: false,
        onOrderChanged: jest.fn(),
        onAdd: addFunction,
        reorderable: false,
        maximumRows: 5,
        minimumRows: 0,
      };
      render(
        <HasManyFields2 {...props}>
          <HasManyFields2Row rowId="row_0">
            <div>row_0 Content</div>
          </HasManyFields2Row>
          <HasManyFields2Row rowId="row_1">
            <div>row_1 Content</div>
          </HasManyFields2Row>
        </HasManyFields2>
      );

      const addButton = screen.getByText(addButtonLabel);
      expect(addButton).toBeValid();
    });
  });

  describe('reorderable', () => {
    // setup to test ordering is difficult in `dnd-kit`. This solution was inspired by
    // https://github.com/clauderic/dnd-kit/issues/261#issuecomment-923242587
    const height = 20;
    const width = 100;
    const offsetHeight = 'offsetHeight';
    const offsetWidth = 'offsetWidth';

    const mockGetBoundingClientRect = (element: any, index: number) =>
      jest.spyOn(element, 'getBoundingClientRect').mockImplementation(() => {
        return {
          bottom: 0,
          height,
          left: 0,
          right: 0,
          top: index * height,
          width,
          x: 0,
          y: index * height,
        };
      });

    const originalOffsetHeight = Object.getOwnPropertyDescriptor(
      HTMLElement.prototype,
      offsetHeight
    );
    const originalOffsetWidth = Object.getOwnPropertyDescriptor(HTMLElement.prototype, offsetWidth);

    beforeAll(() => {
      Object.defineProperty(HTMLElement.prototype, offsetHeight, {
        configurable: true,
        value: height,
      });
      Object.defineProperty(HTMLElement.prototype, offsetWidth, {
        configurable: true,
        value: width,
      });
    });

    afterAll(() => {
      Object.defineProperty(HTMLElement.prototype, offsetHeight, originalOffsetHeight!);
      Object.defineProperty(HTMLElement.prototype, offsetWidth, originalOffsetWidth!);
    });

    it('should have grab handle when reorderable', async () => {
      const props = {
        addButtonLabel: 'add',
        disabled: false,
        onOrderChanged: jest.fn(),
        onAdd: undefined,
        reorderable: true,
        maximumRows: 5,
        minimumRows: 0,
      };
      const { container } = render(
        <HasManyFields2 {...props}>
          <HasManyFields2Row rowId="row_0">
            <div>row_0 Content</div>
          </HasManyFields2Row>
          <HasManyFields2Row rowId="row_1">
            <div>row_1 Content</div>
          </HasManyFields2Row>
        </HasManyFields2>
      );

      expect(container.getElementsByClassName('fa-grip-vertical').length).toBeGreaterThan(0);
    });

    it('should not have grab handle when not reorderable', async () => {
      const props = {
        addButtonLabel: 'add',
        disabled: false,
        onOrderChanged: jest.fn(),
        onAdd: undefined,
        reorderable: false,
        maximumRows: 5,
        minimumRows: 0,
      };
      const { container } = render(
        <HasManyFields2 {...props}>
          <HasManyFields2Row rowId="row_0">
            <div>row_0 Content</div>
          </HasManyFields2Row>
          <HasManyFields2Row rowId="row_1">
            <div>row_1 Content</div>
          </HasManyFields2Row>
        </HasManyFields2>
      );

      expect(container.getElementsByClassName('fa-grip-vertical').length).toBeLessThanOrEqual(0);
    });

    it('should call onOrderChanged when order changed', async () => {
      Object.setPrototypeOf(window, Window.prototype);

      const orderChangedFunction = jest.fn();
      const props = {
        addButtonLabel: 'add',
        disabled: false,
        onOrderChanged: orderChangedFunction,
        onAdd: undefined,
        reorderable: true,
        maximumRows: 5,
        minimumRows: 0,
      };
      const { container } = render(
        <HasManyFields2 {...props}>
          <HasManyFields2Row rowId="row_0">
            <div>row_0 Content</div>
          </HasManyFields2Row>
          <HasManyFields2Row rowId="row_1">
            <div>row_1 Content</div>
          </HasManyFields2Row>
        </HasManyFields2>
      );

      const dragHandles = screen.getAllByTitle('drag-handle');
      const draggables = container.querySelectorAll('[aria-roledescription="sortable"]');

      assert(draggables.length > 0);

      draggables.forEach((draggable: Element, index: number) => {
        mockGetBoundingClientRect(draggable, index);
      });

      dragHandles.forEach((draggable: Element, index: number) => {
        mockGetBoundingClientRect(draggable, index);
      });

      const dragHandleRow0 = dragHandles[0];
      assert(dragHandleRow0);

      await act(async () => {
        await tick();
        fireEvent.focus(dragHandleRow0);
        await tick();

        fireEvent.keyDown(dragHandleRow0, {
          code: 'Space',
        });

        await tick();
        fireEvent.keyUp(dragHandleRow0, {
          code: 'Space',
        });

        await tick();
        fireEvent.keyDown(dragHandleRow0, {
          code: 'ArrowDown',
        });

        await tick();
        fireEvent.keyUp(dragHandleRow0, {
          code: 'ArrowDown',
        });

        await tick();
        fireEvent.keyDown(dragHandleRow0, {
          code: 'Space',
        });

        await tick();
        fireEvent.keyUp(dragHandleRow0, {
          code: 'Space',
        });

        await tick();
      });

      expect(orderChangedFunction).toBeCalledWith(['row_1', 'row_0']);
    });
  });

  describe('disabled', () => {
    it('should show disabledReason popup', async () => {
      const props = {
        addButtonLabel: 'add',
        onOrderChanged: jest.fn(),
        onAdd: undefined,
        reorderable: true,
        maximumRows: 5,
        minimumRows: 0,
      };
      const { container } = render(
        <HasManyFields2 {...props}>
          <HasManyFields2Row
            rowId="row_0"
            disabled
            disabledReason="because"
            disabledReasonPlacement="left"
          >
            <div id="test-row-0">row_0 Content</div>
          </HasManyFields2Row>
          <HasManyFields2Row rowId="row_1">
            <div>row_1 Content</div>
          </HasManyFields2Row>
        </HasManyFields2>
      );

      const row0 = container.querySelector('#test-row-0');
      assert(row0);
      act(() => {
        fireEvent.mouseOver(row0);
      });

      expect(Array.from(await screen.findAllByRole('tooltip')).length).toBeGreaterThan(0);
    });
  });

  describe('minimumRows', () => {
    it('should allow deletion when minimumRows not reached', async () => {
      const props = {
        addButtonLabel: 'add',
        disabled: false,
        onOrderChanged: jest.fn(),
        onAdd: undefined,
        reorderable: false,
        maximumRows: 5,
        minimumRows: 0,
      };
      render(
        <HasManyFields2 {...props}>
          <HasManyFields2Row rowId="row_0" onDelete={jest.fn()} deleteable>
            <div>row_0 Content</div>
          </HasManyFields2Row>
          <HasManyFields2Row rowId="row_1" onDelete={jest.fn()} deleteable>
            <div>row_1 Content</div>
          </HasManyFields2Row>
        </HasManyFields2>
      );

      expect(screen.getAllByRole('button', { name: 'Delete' }).length).toBe(2);
    });

    it('should not allow deletion when minimumRows reached', async () => {
      const props = {
        addButtonLabel: 'add',
        disabled: false,
        onOrderChanged: jest.fn(),
        onAdd: undefined,
        reorderable: false,
        maximumRows: 5,
        minimumRows: 2,
      };
      render(
        <HasManyFields2 {...props}>
          <HasManyFields2Row rowId="row_0" onDelete={jest.fn()} deleteable>
            <div>row_0 Content</div>
          </HasManyFields2Row>
          <HasManyFields2Row rowId="row_1" onDelete={jest.fn()} deleteable>
            <div>row_1 Content</div>
          </HasManyFields2Row>
        </HasManyFields2>
      );

      expect(() => screen.getAllByRole('button', { name: 'Delete' })).toThrow();
    });
  });

  describe('maximumRows', () => {
    it('should allow add when maximumRows not reached', async () => {
      const props = {
        addButtonLabel: 'add',
        disabled: false,
        onOrderChanged: jest.fn(),
        onAdd: jest.fn(),
        reorderable: false,
        maximumRows: 5,
        minimumRows: 0,
      };
      render(
        <HasManyFields2 {...props}>
          <HasManyFields2Row rowId="row_0" onDelete={jest.fn()} deleteable>
            <div>row_0 Content</div>
          </HasManyFields2Row>
          <HasManyFields2Row rowId="row_1" onDelete={jest.fn()} deleteable>
            <div>row_1 Content</div>
          </HasManyFields2Row>
        </HasManyFields2>
      );

      expect(screen.getByText('add')).toBeTruthy();
    });

    it('should not allow add when maximumRows reached', async () => {
      const props = {
        addButtonLabel: 'add',
        disabled: false,
        onOrderChanged: jest.fn(),
        onAdd: jest.fn(),
        reorderable: false,
        maximumRows: 2,
        minimumRows: 0,
      };
      render(
        <HasManyFields2 {...props}>
          <HasManyFields2Row rowId="row_0" onDelete={jest.fn()} deleteable>
            <div>row_0 Content</div>
          </HasManyFields2Row>
          <HasManyFields2Row rowId="row_1" onDelete={jest.fn()} deleteable>
            <div>row_1 Content</div>
          </HasManyFields2Row>
        </HasManyFields2>
      );

      expect(() => screen.getByText('add')).toThrow();
    });
  });

  describe('deletable', () => {
    it('should allow deletion', async () => {
      const props = {
        addButtonLabel: 'add',
        disabled: false,
        onOrderChanged: jest.fn(),
        onAdd: jest.fn(),
        reorderable: false,
        maximumRows: 5,
        minimumRows: 0,
      };
      render(
        <HasManyFields2 {...props}>
          <HasManyFields2Row rowId="row_0" onDelete={jest.fn()} deleteable>
            <div>row_0 Content</div>
          </HasManyFields2Row>
          <HasManyFields2Row rowId="row_1" onDelete={jest.fn()} deleteable>
            <div>row_1 Content</div>
          </HasManyFields2Row>
        </HasManyFields2>
      );

      expect(screen.getAllByRole('button', { name: 'Delete' }).length).toBe(2);
    });

    it('should not allow delete when row is marked as not deletable', async () => {
      const props = {
        addButtonLabel: 'add',
        disabled: false,
        onOrderChanged: jest.fn(),
        onAdd: jest.fn(),
        reorderable: false,
        maximumRows: 2,
        minimumRows: 0,
      };
      render(
        <HasManyFields2 {...props}>
          <HasManyFields2Row rowId="row_0" onDelete={jest.fn()} deleteable>
            <div>row_0 Content</div>
          </HasManyFields2Row>
          <HasManyFields2Row rowId="row_1" onDelete={jest.fn()}>
            <div>row_1 Content</div>
          </HasManyFields2Row>
        </HasManyFields2>
      );

      expect(screen.getAllByRole('button', { name: 'Delete' }).length).toBe(1);
    });
  });
});
