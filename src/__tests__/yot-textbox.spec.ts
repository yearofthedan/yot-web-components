import { fixture, html, expect } from '@open-wc/testing';
import {
  getByDisplayValue,
  getByLabel,
  getByRole,
  getShadowRoot,
  renderAndGetShadowRoot,
  typeText,
} from './domHelpers.js';
import '../yot-textbox.js';

describe('yot-textbox', () => {
  it('can select the input from the label', async () => {
    const root = await renderAndGetShadowRoot(
      '<yot-textbox field-id="field-id" label="Your Name"></yot-textbox>'
    );

    await typeText(getByLabel(root, 'Your Name'), 'Hello world!');

    expect(getByLabel(root, 'Your Name').value).to.equal('Hello world!');
  });

  it('defaults to a text input', async () => {
    const root = await renderAndGetShadowRoot(
      '<yot-textbox field-id="field-id" label="No thanks!"></yot-textbox>'
    );

    expect(getByRole(root, 'textbox')).not.to.equal(null);
  });

  it('supports number inputs', async () => {
    const root = await renderAndGetShadowRoot(
      '<yot-textbox field-id="field-id" type="number" label="Age" vale="123"></yot-textbox>'
    );

    await typeText(getByLabel(root, 'Age'), 'not a number');
    expect(getByDisplayValue(root, '')).not.to.equal(null);

    await typeText(getByLabel(root, 'Age'), '1');
    expect(getByDisplayValue(root, '1')).not.to.equal(null);
  });

  it('displays an error message if one is provided', async () => {
    const root = await renderAndGetShadowRoot(
      '<yot-textbox field-id="field-id" error="Dodgy value there!"></yot-textbox>'
    );

    expect(getByRole(root, 'alert').textContent).to.equal('Dodgy value there!');
  });

  it('hands its values to a form when the form is submitted', async () => {
    let updatedValue = '';

    const submitHandler = (event: Event) => {
      event.preventDefault();
      const inputEl = (event.target as HTMLFormElement).elements.namedItem(
        'field-id'
      ) as HTMLInputElement;

      updatedValue = inputEl.value;
    };

    const form = await fixture(
      html`
        <form @submit="${submitHandler}">
          <yot-textbox
            value="initial-value"
            field-id="field-id"
            label="Your Name"
            name="help"
          ></yot-textbox>
          <button type="submit">Submit</button>
        </form>
      `
    );

    const field = getShadowRoot(form.querySelector('yot-textbox')!);

    await typeText(getByLabel(field, 'Your Name'), 'Hello world');
    (getByRole(form, 'button') as HTMLButtonElement).click();

    expect(updatedValue).to.equal('Hello world');
  });
});
