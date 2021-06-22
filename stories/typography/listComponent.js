import { html } from 'lit-element';

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



export const listComponent = () => {
  return html`
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
      ${entries.map(entry => {
        return html`
          <dt>
            ${entry.label}
          </dt>
          <dd>
            ${entry.content}
          </dd>
        `;
      })}
    </dl>
  `;
};
