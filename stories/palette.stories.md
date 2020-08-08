```js script
import { html } from '@open-wc/demoing-storybook';

export default {
  title: 'palette',
  component: 'palette',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# palette

The palette in use here and how they bind to the css vars

## How to use

### Installation

```js preview-story
import styles from './styles';

const colors = [
  { name: 'primary-light', color: '#C8E6C9', on: '#151414' },
  { name: 'primary', color: '#66BB6A', on: '#151414' },
  { name: 'primary-dark', color: '#388E3C', on: '#eef2f1' },
  { name: 'secondary-light', color: '#BCAAA4', on: '#151414' },
  { name: 'secondary', color: '#795548', on: '#eef2f1' },
  { name: 'secondary-dark', color: '#4E342E', on: '#eef2f1' },
  { name: 'background-light', color: '#FAFAFA', on: '#151414' },
  { name: 'background', color: '#EEEEEE', on: '#151414' },
  { name: 'background-dark', color: '#CACACA', on: '#151414' },
  { name: 'success', color: '#8BC34A', on: '#151414' },
  { name: 'error', color: '#D84315', on: '#eef2f1' },
  { name: 'info', color: '#FDD835', on: '#151414' },
];

export const Palette = () => html`
  <style>
    ${styles}
    ul {
      display: grid;
      grid-template-areas: 
        "primary-light primary primary-dark"
        "secondary-light secondary secondary-dark"
        "background-light background background-dark"        
        "error success info"
      ;
      grid-row-gap: 4px;
      grid-column-gap: 4px;
      width: fit-content;
      list-style-none;
    }
    li {
      width: 150px;
      height: 100px;
      border: solid 2px black;
      background-color: var(--color-bg);
      color: var(--color-fg);
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
    }
  </style>
  <ul>
    ${colors.map(i => html`
            <li
                style="grid-area: ${i.name}; --color-bg: ${i.color}; --color-fg: ${i.on}" 
            >
              <div>${i.name}</div>
              <div>${i.color}</div>
              <div>${i.on}</div>
            </li>
        `)}
  </section>
`;
```
