import { fixture } from '@open-wc/testing';

export function typeText(input: HTMLInputElement, value: string) {
  input.select();
  if (input.type === 'number') {
    // eslint-disable-next-line no-param-reassign
    input.value = value;
  } else {
    input.setRangeText(value);
  }

  const inputEvent = new Event('input', {
    bubbles: true,
    cancelable: true,
  });
  input.dispatchEvent(inputEvent);
}

export function getShadowRoot(el: Element) {
  const shadowEl = el.shadowRoot;

  if (!shadowEl) {
    throw new Error('Element does not have a shadow dom');
  }

  return shadowEl;
}

export function getByDisplayValue(
  container: ShadowRoot | Document | Element,
  displayValue: string
): Element {
  const selector = 'input,textarea' as 'input';

  const rawElements = Array.from(
    container.querySelectorAll<'input' | 'textarea'>(selector)
  );

  const elements = rawElements.filter(el => el.value === displayValue);

  if (elements.length === 0) {
    throw new Error('no elements with display value found');
  }

  return elements[0];
}

export function getByRole(
  rootDom: ShadowRoot | Document | Element,
  roleName: string
): Element {
  const roleSelectors: { [key: string]: string } = {
    textbox: 'input[type="text"]',
    radio: 'input[type="radio"]',
    alert: '[role="alert"]',
    button: 'button,[role="button"]',
    form: 'form,[role="form"]',
  };

  const selector = roleSelectors[roleName];

  if (!selector) {
    throw new Error('unknown role provided');
  }

  const elements = Array.from(rootDom.querySelectorAll(selector));

  if (elements.length === 0) {
    throw new Error('no element matching role found');
  }

  return elements[0];
}

export function getByLabel(
  rootDom: ShadowRoot | Document,
  labelText: string
): HTMLInputElement {
  const label = Array.from(rootDom.querySelectorAll('label')).filter(
    el => el.textContent === labelText
  );

  if (label.length === 0) {
    throw new Error('no matching label found');
  }

  label[0].click();

  const focussed = rootDom.activeElement;

  if (focussed?.tagName === 'INPUT') {
    return focussed as HTMLInputElement;
  }

  throw new Error('no input for label found');
}

export const renderAndGetShadowRoot = async (template: any, parent?: Element) =>
  getShadowRoot(await fixture(template, { renderBefore: parent } as any));
