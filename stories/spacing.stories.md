```js script
import { html } from '@open-wc/demoing-storybook';

export default {
  title: 'spacing',
  component: 'spacing',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# spacing

The spacing in use here and how they bind to the css vars

## How to use

### Installation

```js preview-story
export const Spacing = () => html`
  <style>
    .inline {
      display: table;
      height: 100px;
    }

    .inline > div {
      height: 8px;
      background: blue;
      display: inline-block;
      position: relative;
      transform: translateY(8px);
    }

    .inline > div::after {
      content: attr(data-label);
      transform: rotate(28deg);
      position: absolute;
      top: 100%;
      width: 200px;
      left: 50%;
      transform-origin: bottom left;
      font-size: 0.8rem;
    }

    .inline > span {
      height: 40px;
      width: 40px;
      background: grey;
      display: inline-block;
    }

  </style>
 
 <p>Inline density:</p>
  <div class="inline">
      <span></span>
      <div style="width: var(--inline-density-xs)" data-label="--inline-density-xs"></div>
      <span></span>
      <div style="width: var(--inline-density-s)" data-label="--inline-density-s"></div>
      <span></span>      
      <div style="width: var(--inline-density-m)" data-label="--inline-density-m"></div>
      <span></span>
  </div>


 <style>
    .inset {
      display: block;
      height: 200px; 
    }

    .inset > div {
      height: 120px;
      width: 120px;
      background: blue;
      display: inline-block;
      position: relative;
      transform: translateY(8px);
    }

    .inset > div::after {
      content: attr(data-label);
      transform: rotate(28deg);
      position: absolute;
      top: 100%;
      width: 200px;
      left: 50%;
      transform-origin: bottom left;
      font-size: 0.8rem;
    }

    .inset > div > span {
      height: 100%;
      width: 100%;
      background: grey;
      display: inline-block;
    }

  </style>

 <p>Inset density:</p>
  <div class="inset">
      <div style="padding: var(--inset-density-xs)" data-label="--inset-density-xs">
        <span></span>    
      </div>
      <span></span>
      <div style="padding: var(--inset-density-s)" data-label="--inset-density-s">
        <span></span>      
      </div>
      <div style="padding: var(--inset-density-m)" data-label="--inset-density-m">
        <span></span>
      </div>
      <div style="padding: var(--inset-density-l)" data-label="--inset-density-l">
        <span></span>
      </div>
  </div>

 <style>
    .stack {
      height: fit-content;
      display: inline-block;
    }

    .stack > div {
      width: 8px;
      background: blue;
      position: relative;
      margin-left: auto;
      transform: translateX(8px);
    }

    .stack > div::after {
      content: attr(data-label);
      position: absolute;
      left: calc(8px + 100%);
      top: 50%;
      width: 200px;
      font-size: 0.8rem;
      transform: translateY(-50%);
    }

    .stack > span {
      height: 40px;
      width: 40px;
      background: grey;
      display: inline-block;
    }

  </style>


 <p>Stack density:</p>
 <div class="stack">
      <span></span>
      <div style="height: var(--stack-density-xs)" data-label="--stack-density-xs"></div>
      <span></span>
      <div style="height: var(--stack-density-s)" data-label="--stack-density-s"></div>
      <span></span>      
      <div style="height: var(--stack-density-m)" data-label="--stack-density-m"></div>
      <span></span>
      <div style="height: var(--stack-density-l)" data-label="--stack-density-l"></div>
      <span></span>
      <div style="height: var(--stack-density-xl)" data-label="--stack-density-xl"></div>
      <span></span>
  </div>


`;
```
