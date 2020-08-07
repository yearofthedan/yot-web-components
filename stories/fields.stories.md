```js script
import { html } from '@open-wc/demoing-storybook';
import '../build/yot-field.js';

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
import styles from './styles';

export const Normal = () => html`
  <style>
    ${styles}  
  </style>
  <form>
    <yot-field id="text">text</yot-field>
    <yot-field id="text" value="something">prefilled</yot-field>
    <yot-field id="password" type="password">password</yot-field>
    <yot-field id="phone" type="tel" placeholder="include the area code">phone</yot-field>
    <yot-field id="email" type="email">email</yot-field>
    <yot-field id="number" type="number">number</yot-field>
    <yot-field id="datetime-local" type="datetime-local">time and date</yot-field>
    <yot-field id="date" type="date">date</yot-field>
    <yot-field id="time" type="time">time</yot-field>
    <yot-field id="month" type="month">month</yot-field>
    <yot-field id="week" type="week">week</yot-field>
    <yot-field id="checkbox" type="checkbox">agreed?</yot-field>
    <yot-field id="radio" type="radio">agreed?</yot-field>
    <yot-field id="range" type="range">range</yot-field>
  </form>
`;

export const Error = () => html`
  <style>
    ${styles}
  </style>
  <form>
    <yot-field id="date" type="date" error="⚠ date cannot be in the past!">date</yot-field>
    <div style="width: 200px;">
      <yot-field id="date" type="date" error="⚠ date cannot be in the past!">date</yot-field>
    </div>
  </form>

`;
```
