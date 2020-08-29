```js script
import { html } from '@open-wc/demoing-storybook';
import '../../dist/yot-spinner.js';

export default {
  title: 'yot-spinner',
  component: 'yot-spinner',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# yot-spinner
## How to use

### Installation

```bash
yarn add yot-spinner
```

```js
import 'yot-spinner/yot-spinner.js';
```

```js preview-story
export const Normal = () => html`
  <yot-spinner size="small"></yot-spinner>
  <yot-spinner size="medium"></yot-spinner>
  <yot-spinner size="large"></yot-spinner>
`;
```
