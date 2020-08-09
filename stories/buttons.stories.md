```js script
import { html } from '@open-wc/demoing-storybook';
import '../build/yot-button.js';

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
import styles from './styles';

export const Normal = () => html`
  <style>
    ${styles}  
  </style>
  <yot-button id="text">text</yot-button>
  <yot-button state="loading" id="text">text</yot-button>
  <yot-button state="success" id="text">text</yot-button>
`;
```