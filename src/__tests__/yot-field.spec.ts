import { html, fixture, expect } from '@open-wc/testing';
import {
  getByLabel,
  getByRole,
  getShadowRoot,
  renderAndGetShadowRoot,
  typeText,
} from './domHelpers.js';

import '../yot-field.js';

describe('yot-field', () => {
  it('can select the input from the label', async () => {
    const root = await renderAndGetShadowRoot(
      '<yot-field id="field-id" label="Your Name"></yot-field>'
    );

    typeText(getByLabel(root, 'Your Name'), 'Hello world!');

    expect(getByLabel(root, 'Your Name').value).to.equal('Hello world!');
  });

  it('supports defining the type of input', async () => {
    const root = await renderAndGetShadowRoot(
      '<yot-field id="field-id" label="No thanks!" type="radio"></yot-field>'
    );

    expect(getByRole(root, 'radio')).not.to.equal(null);
  });

  it('defaults to a text input', async () => {
    const root = await renderAndGetShadowRoot(
      '<yot-field id="field-id" label="No thanks!"></yot-field>'
    );

    expect(getByRole(root, 'textbox')).not.to.equal(null);
  });

  it('displays an error message if one is provided', async () => {
    const root = await renderAndGetShadowRoot(
      '<yot-field id="field-id" error="Dodgy value there!"></yot-field>'
    );

    expect(getByRole(root, 'alert').textContent).to.equal('Dodgy value there!');
  });

  it('hands its values to a form when the form is submitted', async () => {
    let updatedValue = '';

    const submitHandler = (event: Event) => {
      event.preventDefault();

      const inputEl = (event.target as HTMLFormElement).elements.namedItem(
        'help'
      ) as HTMLInputElement;

      updatedValue = inputEl.value;
    };

    const form = await fixture(
      html`
        <form @submit="${submitHandler}">
          <yot-field
            value="initial-value"
            id="field-id"
            label="Your Name"
            name="help"
          ></yot-field>
          <button type="submit">Submit</button>
        </form>
      `
    );

    const field = getShadowRoot(form.querySelector('yot-field')!);

    typeText(getByLabel(field, 'Your Name'), 'Hello world');
    (getByRole(form, 'button') as HTMLButtonElement).click();

    expect(updatedValue).to.equal('Hello world');
  });
});
