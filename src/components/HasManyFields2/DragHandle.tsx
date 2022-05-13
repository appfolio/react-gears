import React from 'react';
import Icon from '../Icon/Icon';

const DragHandle = () => (
    <>
      <div className="rg-DragHandler me-3 align-self-stretch col-auto">
        <span className="d-flex flex-column align-items-center justify-content-center h-100 pe-1">
          <Icon name="grip-vertical" size="lg" />
        </span>
      </div>
      {/*
        // @ts-ignore */}
      <style jsx>
        {`
          .rg-DragHandler {
            cursor: grab;
            opacity: 0.4;
          }
          .rg-DragHandler:hover {
            opacity: 0.8;
          }
        `}
      </style>
    </>
  )

  export default DragHandle;
