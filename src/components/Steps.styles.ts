import css from 'styled-jsx/css';

export default css`
  .rg-steps:not(.vertical) {
    align-items: flex-start;
    counter-reset: step;
    display: flex;
    justify-content: space-around;
    padding: 0;
  }
  .rg-steps:not(.vertical) .step {
    background-image: linear-gradient(to right, #818a91, #818a91);
    background-size: 100% 1px;
    background-position: center 1.26rem;
    background-repeat: repeat-x;
    align-items: center;
    display: inline-flex;
    flex-direction: column;
    flex: 1 1 0;
    list-style: square;
    padding: 0.1rem;
    text-align: center;
  }
  .rg-steps:not(.vertical) .step:first-child {
    background-image: linear-gradient(to right, transparent 50%, #818a91 50%, #818a91 100%);
  }
  .rg-steps:not(.vertical) .step:first-child.active {
    background-image: linear-gradient(to right, transparent 50%, #818a91 50%, #818a91 100%);
  }
  .rg-steps:not(.vertical) .step:first-child.complete {
    background-image: linear-gradient(to right, transparent 50%, currentColor 50%, currentColor 100%);
  }
  .rg-steps:not(.vertical) .step:last-child {
    background-image: linear-gradient(to right, #818a91 50%, transparent 50%, transparent 100%);
  }
  .rg-steps:not(.vertical) .step:last-child.active {
    background-image: linear-gradient(to right, currentColor 50%, transparent 50%, transparent 100%);
  }
  .rg-steps:not(.vertical) .step:last-child.complete {
    background-image: linear-gradient(to right, currentColor 50%, transparent 50%, transparent 100%);
  }
  .rg-steps:not(.vertical) .step .bubble {
    align-items: center;
    background-color: white;
    border: 1px solid #818a91;
    border-radius: 100%;
    display: flex;
    font-size: 1.25rem;
    font-weight: bold;
    height: 2.5rem;
    justify-content: center;
    margin-bottom: 0.5rem;
    width: 2.5rem;
  }
  .rg-steps:not(.vertical) .step.active {
    background-image: linear-gradient(to right, currentColor 50%, #818a91 50%, #818a91 100%);
  }
  .rg-steps:not(.vertical) .step.active .bubble {
    border: 1px solid currentColor;
  }
  .rg-steps:not(.vertical) .step.complete {
    background-image: linear-gradient(to right, currentColor, currentColor);
  }
  .rg-steps:not(.vertical) .step.complete .bubble {
    border: 1px solid currentColor;
  }
  .rg-steps:not(.vertical).complete .step {
    background-image: linear-gradient(to right, currentColor, currentColor);
  }
  .rg-steps:not(.vertical).complete .step .bubble {
    border: 1px solid currentColor;
  }
  .rg-steps:not(.vertical).complete .step:first-child {
    background-image: linear-gradient(to right, transparent 50%, currentColor 50%, currentColor 100%);
  }
  .rg-steps:not(.vertical).complete .step:last-child {
    background-image: linear-gradient(to right, currentColor 50%, transparent 50%, transparent 100%);
  }

  .rg-steps.vertical {
    counter-reset: step;
  }
  .rg-steps.vertical .step {
    align-items: center;
    display: flex;
    margin-top: 1.5rem;
  }
  .rg-steps.vertical .step .bubble {
    align-items: center;
    background-color: white;
    border: 1px solid #818a91;
    border-radius: 100%;
    display: flex;
    font-size: 1.25rem;
    font-weight: bold;
    height: 2.5rem;
    justify-content: center;
    margin-right: 0.5rem;
    width: 2.5rem;
  }
  .rg-steps.vertical .step.active .bubble {
    border: 1px solid currentColor;
  }
  .rg-steps.vertical .step.complete .bubble {
    border: 1px solid currentColor;
  }
`;
