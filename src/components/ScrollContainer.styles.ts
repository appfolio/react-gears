import css from 'styled-jsx/css';

export default css`
  .scroll-container .container-shadow {
    box-shadow: none;
    content: "";
    display: block;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    pointer-events: none;
    position: absolute;
    z-index: 990;
  }
  .scroll-container.overflow-right .container-shadow {
    box-shadow: -8px 0 8px -8px rgba(0, 0, 0, 0.25) inset;
  }
  .scroll-container.overflow-left .container-shadow {
    box-shadow: 8px 0 8px -8px rgba(0, 0, 0, 0.25) inset;
  }
  .scroll-container.overflow-left.overflow-right .container-shadow {
    box-shadow: 8px 0 8px -8px rgba(0, 0, 0, 0.25) inset, -8px 0 8px -8px rgba(0, 0, 0, 0.25) inset;
  }
  .scroll-container.overflow-bottom .container-shadow {
    box-shadow: 0 -8px 8px -8px rgba(0, 0, 0, 0.25) inset;
  }
  .scroll-container.overflow-bottom.overflow-right .container-shadow {
    box-shadow: 0 -8px 8px -8px rgba(0, 0, 0, 0.25) inset, -8px 0 8px -8px rgba(0, 0, 0, 0.25) inset;
  }
  .scroll-container.overflow-bottom.overflow-left .container-shadow {
    box-shadow: 0 -8px 8px -8px rgba(0, 0, 0, 0.25) inset, 8px 0 8px -8px rgba(0, 0, 0, 0.25) inset;
  }
  .scroll-container.overflow-bottom.overflow-left.overflow-right .container-shadow {
    box-shadow: 0 -8px 8px -8px rgba(0, 0, 0, 0.25) inset, 8px 0 8px -8px rgba(0, 0, 0, 0.25) inset, -8px 0 8px -8px rgba(0, 0, 0, 0.25) inset;
  }
  .scroll-container.overflow-top .container-shadow {
    box-shadow: 0 8px 8px -8px rgba(0, 0, 0, 0.25) inset;
  }
  .scroll-container.overflow-top.overflow-right .container-shadow {
    box-shadow: 0 8px 8px -8px rgba(0, 0, 0, 0.25) inset, -8px 0 8px -8px rgba(0, 0, 0, 0.25) inset;
  }
  .scroll-container.overflow-top.overflow-left .container-shadow {
    box-shadow: 0 8px 8px -8px rgba(0, 0, 0, 0.25) inset, 8px 0 8px -8px rgba(0, 0, 0, 0.25) inset;
  }
  .scroll-container.overflow-top.overflow-left.overflow-right .container-shadow {
    box-shadow: 0 8px 8px -8px rgba(0, 0, 0, 0.25) inset, 8px 0 8px -8px rgba(0, 0, 0, 0.25) inset, -8px 0 8px -8px rgba(0, 0, 0, 0.25) inset;
  }
  .scroll-container.overflow-top.overflow-bottom .container-shadow {
    box-shadow: 0 8px 8px -8px rgba(0, 0, 0, 0.25) inset, 0 -8px 8px -8px rgba(0, 0, 0, 0.25) inset;
  }
  .scroll-container.overflow-top.overflow-bottom.overflow-right .container-shadow {
    box-shadow: 0 8px 8px -8px rgba(0, 0, 0, 0.25) inset, -8px 0 8px -8px rgba(0, 0, 0, 0.25) inset;
  }
  .scroll-container.overflow-top.overflow-bottom.overflow-left .container-shadow {
    box-shadow: 0 8px 8px -8px rgba(0, 0, 0, 0.25) inset, 0 -8px 8px -8px rgba(0, 0, 0, 0.25) inset, 8px 0 8px -8px rgba(0, 0, 0, 0.25) inset;
  }
  .scroll-container.overflow-top.overflow-bottom.overflow-left.overflow-right .container-shadow {
    box-shadow: 0 8px 8px -8px rgba(0, 0, 0, 0.25) inset, 8px 0 8px -8px rgba(0, 0, 0, 0.25) inset, -8px 0 8px -8px rgba(0, 0, 0, 0.25) inset, 0 -8px 8px -8px rgba(0, 0, 0, 0.25) inset;
  }
`;
