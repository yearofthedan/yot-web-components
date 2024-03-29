import { swatch } from './swatch';
import { html } from '@open-wc/testing';

export const swatchList = swatches => {
  return html`
    <style>
      ul {
        list-style: none;
        display: inline-block;
        width: 100%;
      }
    </style>
    <ul>
      ${swatches.map(i => swatch(i.name, i.color, i.on))}
    </ul>
  `;
};
