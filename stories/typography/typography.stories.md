```js script
import { listComponent } from './listComponent';
import { html } from '@open-wc/demoing-storybook';

export default {
  title: 'Foundational',
  parameters: { component: 'null' },
};
```

```js preview-story
export const Typography = () => {
const entries = [
    {
      label: html`<h1>Heading</h1>`,
      content: html`<pre>
h1 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  font-size: var(--font-size-xl);
}</pre>`
    },
    {
      label: html`<h2>Subheading 2</h2>`,
      content: html`<pre>
h2 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: var(--font-size-l);
}</pre>`
    },
    {
      label: html`<h3>Subheading 3</h3>`,
      content: html`<pre>
h3 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  font-size: var(--font-size-l);
}</pre>`
    },
    {
      label: html`<h4>Subheading 4</h4>`,
      content: html`<pre>
h4 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: var(--font-size-m);
}</pre>`
    },  
    {
      label: html`<h5>Subheading 5</h5>`,
      content: html`<pre>
h5 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: var(--font-size-m);
}</pre>`
    },
    {
      label: html`<h6>Subheading 6</h6>`,
      content: html`<pre>
h6 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: var(--font-size-s);
}</pre>`
    },  
    {
      label: html`<p>Body text</p>`,
      content: html`<pre>
p {
  font-family: 'Raleway', sans-serif;
  font-weight: 500;
  font-size: var(--font-size-s);
}</pre>`
    },  
    {
      label: html`<aside>Small labels / Asides</aside>`,
      content: html`<pre>
aside {
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  font-size: var(--font-size-xs);
}</pre>`
    },  
];

  return listComponent(entries);
 }
```

## typefaces

|css variable  |type      | uses                    |
|--------------|----------|-------------------------|
|--font-size-xl|size unit |lead headings            |
|--font-size-l |size unit |subheadings              |
|--font-size-m |size unit |subheadings              |
|--font-size-s |size unit |main body content, inputs|
|--font-size-xs|size unit |small aside text         |
