
```js script
import { html } from '@open-wc/demoing-storybook';

export default {
  title: 'Foundational/Spacing',
  parameters: { component: 'null' },
};
```

## Inline density

```js preview-story
export const Inline = () => html`
<style>
    section {
      display: table;
      padding-bottom: 40px;
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

<section>
   <div class="inline">
     <span></span>
     <div style="width: var(--inline-density-xs)" data-label="--inline-density-xs"></div>
     <span></span>
     <div style="width: var(--inline-density-s)" data-label="--inline-density-s"></div>
     <span></span>
     <div style="width: var(--inline-density-m)" data-label="--inline-density-m"></div>
     <span></span>
   </div>
 <section>`;
```

## Inset density
       
```js preview-story
export const Inset = () => html`
  <style>
    .container {
      height: 140px;
      width: 140px;
      background: blue;
      display: inline-block;
      position: relative;
    }

    .container::after {
      content: attr(data-label);
      position: absolute;
      top: 100%;
      width: 200px;
      left: 0;
      font-size: 0.8rem;
    }

    .content {
      height: 100%;
      width: 100%;
      background: grey;
      display: inline-block;
    }
  </style>
  <div class="container" style="padding: var(--inset-density-xs)" data-label="--inset-density-xs">
    <span class="content"></span>
  </div>
  <div class="container" style="padding: var(--inset-density-s)" data-label="--inset-density-s">
    <span class="content"></span>
  </div>
  <div class="container" style="padding: var(--inset-density-m)" data-label="--inset-density-m">
    <span class="content"></span>
  </div>
  <div class="container" style="padding: var(--inset-density-l)" data-label="--inset-density-l">
    <span class="content"></span>
  </div>
 `;
```

## Stack density

```js preview-story
export const Stack = () => html`
<style>
    .spacing {
      width: 8px;
      background: blue;
      position: relative;
      margin-left: 30px;
      transform: translateX(8px);
    }
    
    .spacing::after {
      content: attr(data-label);
      position: absolute;
      left: calc(8px + 100%);
      top: 50%;
      width: 200px;
      font-size: 0.8rem;
      transform: translateY(-50%);
    }
    
    .content {
      height: 40px;
      width: 40px;
      background: grey;
      display: inline-block;
    }
</style>
  <span class="content"></span>
  <div class="spacing" style="height: var(--stack-density-xs)" data-label="--stack-density-xs"></div>
  <span class="content"></span>
  <div class="spacing"  style="height: var(--stack-density-s)" data-label="--stack-density-s"></div>
  <span class="content"></span>
  <div class="spacing"  style="height: var(--stack-density-m)" data-label="--stack-density-m"></div>
  <span class="content"></span>
  <div class="spacing"  style="height: var(--stack-density-l)" data-label="--stack-density-l"></div>
  <span class="content"></span>
  <div class="spacing"  style="height: var(--stack-density-xl)" data-label="--stack-density-xl"></div>
  <span class="content"></span>
`;
```


## spacing

|css variable |type| uses                |
|-------------|----|---------------------|
|--stack-density-xs|size unit| |
|--stack-density-s|size unit| |
|--stack-density-m|size unit| |
|--stack-density-l|size unit| |
|--stack-density-xl|size unit| |
|--inline-density-xs|size unit| |
|--inline-density-s|size unit| |
|--inline-density-m|size unit| |
|--inset-density-xs|size unit| |
|--inset-density-s|size unit| |
|--inset-density-m|size unit| |
|--inset-density-l|size unit| |
