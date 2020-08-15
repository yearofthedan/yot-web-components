```js script
import { html } from '@open-wc/demoing-storybook';

export default {
  title: 'foundational'
};
```

## typefaces

|css variable |type| uses                |
|-------------|----|---------------------|
|--font-size-s|size unit|small aside text|
|--font-size-m|size unit|main body content, inputs|
|--font-size-l|size unit|subheadings|
|--font-size-xl|size unit|lead headings|

```js preview-story
export const Typefaces = () => html`
<style>
  dl * {
    margin: 0;
  }
  dl {
    display: grid;
    grid-template-columns: max-content 1fr;
    grid-gap: 1rem;
  }
  
  dd {
    background-color: lightgrey;
    padding: 1rem;
  }
</style>

  <dl>
    <dt>
      <h1>Heading</h1>
    </dt>
    <dd>
<pre>
h1 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  font-size: var(--font-size-xl);
}</pre>
    </dd>
    <dt>
      <h2>Subheading 2</h2>
    </dt>
    <dd>
<pre>
h2 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: var(--font-size-l);
}</pre>
    </dd>
    <dt>
      <h3>Subheading 3</h3>
    </dt>
    <dd>
<pre>
h3 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  font-size: var(--font-size-l);
}</pre>
    </dd>
    <dt>
      <h4>Subheading 4</h4>
    </dt>
    <dd>
<pre>
h4 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: var(--font-size-m);
}</pre>
    </dd>
    <dt>
      <h5>Subheading 5</h5>
    </dt>
    <dd>
<pre>
h5 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: var(--font-size-m);
}</pre>
    </dd>
    <dt>
      <h6>Subheading 6</h6>
    </dt>
    <dd>
<pre>
h6 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: var(--font-size-s);
}</pre>
    </dd>
    <dt>
      <p style="font-family: 'Raleway', sans-serif; font-size: var(--font-size-s); font-weight: 500;">Body text</p>
    </dt>
    <dd>
<pre>
p {
  font-family: 'Raleway', sans-serif;
  font-weight: 500;
  font-size: var(--font-size-s);
}</pre>
    </dd>
    <dt>
        <p style="font-family: 'Raleway', sans-serif; font-size: var(--font-size-xs); font-weight: 700;">Small labels / Asides</p>
    </dt>
    <dd>
<pre>
p {
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  font-size: var(--font-size-xs);
}</pre>
    </dd>
  </dl>
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

```js preview-story
export const Spacing = () => html`
  <style>
    .inline {
      display: table;
      height: 100px;
      padding-bottom: 80px; 
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

    .inset {
      display: flex;
      column-gap: 4px;
      padding-bottom: 20px; 
    }

    .inset > div {
      height: 140px;
      width: 140px;
      background: blue;
      display: inline-block;
      position: relative;
    }

    .inset > div::after {
      content: attr(data-label);
      position: absolute;
      top: 100%;
      width: 200px;
      left: 0;
      font-size: 0.8rem;
    }

    .inset > div > span {
      height: 100%;
      width: 100%;
      background: grey;
      display: inline-block;
    }
    .stack {
      height: fit-content;
      display: inline-block;
    }

    .stack > div {
      width: 8px;
      background: blue;
      position: relative;
      margin-left: 30px;
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
  <dl>
    <dt>Inline density</dt>
    <dd class="inline">
      <span></span>
      <div style="width: var(--inline-density-xs)" data-label="--inline-density-xs"></div>
      <span></span>
      <div style="width: var(--inline-density-s)" data-label="--inline-density-s"></div>
      <span></span>      
      <div style="width: var(--inline-density-m)" data-label="--inline-density-m"></div>
      <span></span>
    </dd>
 
  <dt>Inset density</dt>
    <dd class="inset">
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
    </dd>
<dt>Stack density</dt>
 <dd class="stack">
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
  </dd>
</dl>

`;
```
