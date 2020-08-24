```js script
import { html } from '@open-wc/demoing-storybook';
import '../dist/yot-button.js';

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
  <yot-button id="button1">continue</yot-button>
  <yot-button id="button2" state="loading" id="text">continue</yot-button>
  <yot-button id="button3" state="success" id="text">continue</yot-button>
`;
```
