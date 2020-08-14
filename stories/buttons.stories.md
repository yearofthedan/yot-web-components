```js script
import { html } from '@open-wc/demoing-storybook';
import '../build/buttons/yot-button.js';

export default {
  title: 'yot-button',
  component: 'yot-button',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# yot-button

Combination of input field + label + error handling

## How to use

### Installation

```bash
yarn add yot-button
```

```js
import 'yot-button/yot-button.js';
```

```js preview-story
export const Normal = () => html`
  <yot-button id="text">text</yot-button>
  <yot-button state="loading" id="text">text</yot-button>
  <yot-button state="success" id="text">text</yot-button>
`;
```
