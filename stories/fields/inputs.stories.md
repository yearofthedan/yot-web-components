```js script
import { html } from '@open-wc/demoing-storybook';
import '../../dist/yot-textbox.js';

export default {
  title: 'yot-textbox',
  component: 'yot-textbox',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# yot-textbox

## How to use

### Installation

```bash
yarn add yot-textbox
```

```js
import 'yot-textbox/yot-textbox.js';
```

```js preview-story
export const TextField = () => html`
  <yot-textbox label="Text field" field-id="text"></yot-textbox>
`;
```

```js preview-story
export const Multiline = () => html`
  <yot-textbox label="Text field" field-id="multiline" multiline="true"></yot-textbox>
`;
```

```js preview-story
export const Phone = () => html`
  <yot-textbox label="Phone" field-id="phone" type="tel" label="phone" placeholder="include the area code"></yot-textbox>
`;
```

```js preview-story
export const Email = () => html`
  <yot-textbox label="Email" field-id="email" type="email" label="email"></yot-textbox>
`;
```

```js preview-story
export const PasswordField = () => html`
  <yot-textbox
    label="Password field"
    type="password"
    field-id="password"
    value="1234">
  </yot-textbox>
`;
```

```js preview-story
export const Number = () => html`
  <yot-textbox label="Number" field-id="number" type="number" label="number"></yot-textbox>
`;
```

```js preview-story
export const Errors = () => html`
  <yot-textbox label="Text field with error" field-id="text-with-error" error="Needs text"></yot-textbox>
`;
```
