```js script
import { html } from '@open-wc/demoing-storybook';
import '../dist/yot-field.js';

export default {
  title: 'yot-field',
  component: 'yot-field',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# yot-field

Combination of input field + label + error handling

## How to use

### Installation

```bash
yarn add yot-field
```

```js
import 'yot-field/yot-field.js';
```

```js preview-story
export const Normal = () => html`
  <form style="display: grid; grid-template-columns: fit-content; grid-row-gap: var(--stack-density-s)">
    <yot-field id="text" label="text"></yot-field>
    <yot-field id="prefilled" value="something" label="prefilled"></yot-field>
    <yot-field id="password" type="password" label="password"></yot-field>
    <yot-field id="phone" type="tel" label="phone" placeholder="include the area code"></yot-field>
    <yot-field id="email" type="email" label="email"></yot-field>
    <yot-field id="number" type="number" label="number"></yot-field>
    <yot-field id="datetime-local" type="datetime-local" label="datetime-local"></yot-field>
    <yot-field id="date" type="date" label="date"></yot-field>
    <yot-field id="time" type="time" label="time"></yot-field>
    <yot-field id="month" type="month" label="month"></yot-field>
    <yot-field id="week" type="week" label="week"></yot-field>
    <yot-field id="checkbox" type="checkbox" label="checkbox"></yot-field>
    <yot-field id="radio" type="radio" label="radio"></yot-field>
    <yot-field id="range" type="range" label="range"></yot-field>
  </form>
`;

export const Error = () => html`
  <form>
    <yot-field id="date1" type="date" error="⚠ date cannot be in the past!" label="date"></yot-field>
    <div style="width: 200px;">
      <yot-field id="date2" type="date" error="⚠ date cannot be in the past!" label="date"></yot-field>
    </div>
  </form>

`;

function onsubmit(e) {
e.preventDefault();
console.log(Array.from(e.target.elements).map(e => e.value));
}

export const Example = () => html`
  <form @submit="${onsubmit}">
    <yot-field id="field-id" label="name"></yot-field>
    <yot-button type="submit" id="text">text</yot-button></yot-field>
  </form>
`;
```
