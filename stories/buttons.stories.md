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
  <yot-button id="button2" state="loading">
    continue
    <span slot="loading">loading...</loading>
  </yot-button>
  <yot-button id="button3" state="loading" data-skip-visual-test>
    continue
  </yot-button>
  <yot-button id="button4" state="success">continue</yot-button>
`;
`````

```js preview-story
export const Sizes = () => html`
  <yot-button size="small" id="button1">small</yot-button>
  <yot-button size="regular" id="button2">regular</yot-button>
  <yot-button size="large" id="button3">large</yot-button>
`;
```
