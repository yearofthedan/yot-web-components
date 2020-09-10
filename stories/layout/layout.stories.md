```js script
import { html } from '@open-wc/demoing-storybook';
import '../../dist/yot-scrollview.js';
import '../../dist/yot-view.js';

export default {
  title: 'yot-layout',
  component: 'yot-layout',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# yot-layout

Experiments with layout components

## How to use

### Installation

```bash
yarn add yot-field
```

```js
import 'yot-scrollview/yot-scrollview.js';
import 'yot-view/yot-view.js';
```

```js preview-story
export const ScrollView = () => html`
    <yot-view style="height: 100px;">
      <yot-scrollview>
        <p>Blah blah blah</p>
        <p>Blah blah blah</p>
        <p>Blah blah blah</p>
        <p>Blah blah blah</p>
        <p>Blah blah blah</p>
        <p>Blah blah blah</p>
        <p>Blah blah blah</p>
        <button>Some button</button>
        <p>Blah blah blah</p>
      </yot-scrollview>
<yot-scrollview>
        <p>Blah blah blah</p>
        <p>Blah blah blah</p>
        <p>Blah blah blah</p>
        <p>Blah blah blah</p>
        <p>Blah blah blah</p>
        <p>Blah blah blah</p>
        <p>Blah blah blah</p>
        <button>Some button</button>
        <p>Blah blah blah</p>
      </yot-scrollview>
    </div>
`;
```
