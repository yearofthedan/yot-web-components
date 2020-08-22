```js script
import { html } from '@open-wc/demoing-storybook';
import { swatchList } from './swatchList';

export default {
  title: 'Foundational/Palette',
  parameters: { component: 'null' },
};
```

## Primary
```js story
export const Primary = () => {
    return swatchList([
      { name: 'primary-light', color: '#C8E6C9', on: '#151414' },
      { name: 'primary', color: '#66BB6A', on: '#151414' },
      { name: 'primary-dark', color: '#388E3C', on: '#EEF2F1' },
    ]);
};
```

## Secondary
```js story
export const Secondary = () => {
    return swatchList([
      { name: 'secondary-light', color: '#BCAAA4', on: '#151414' },
      { name: 'secondary', color: '#795548', on: '#eef2f1' },
      { name: 'secondary-dark', color: '#4E342E', on: '#eef2f1' },
    ]);
};
```

## Shadowing
```js story
export const Shadowing = () => {
    return swatchList([
      { name: 'background-light', color: '#FAFAFA', on: '#151414' },
      { name: 'background', color: '#EEEEEE', on: '#151414' },
      { name: 'background-dark', color: '#CACACA', on: '#151414' },
    ]);
};
```

## Specialised
```js story
export const Specialised = () => {
    return swatchList([
      { name: 'success', color: '#8BC34A', on: '#151414' },
      { name: 'error', color: '#D84315', on: '#eef2f1' },
      { name: 'info', color: '#FDD835', on: '#151414' },
    ]);
};
```
