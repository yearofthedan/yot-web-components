import './yot-textbox.ts';
import { screen, within } from '@testing-library/dom';
import { fixture, html } from '@open-wc/testing-helpers';
import userEvent from '@testing-library/user-event';

const getShadowedElement = (selector: string) => {
  const shadowedComponent = document.querySelector(selector);

  return within((shadowedComponent?.shadowRoot as unknown) as HTMLElement);
};

describe('yot-textbox', () => {
  it('renders an underlying input', async () => {
    await fixture('<yot-textbox></yot-textbox>');

    const { getByRole } = getShadowedElement('yot-textbox');

    expect(getByRole('textbox')).toBeDefined();
  });

  it('can select the input from the label', async () => {
    await fixture(
      '<yot-textbox id="field-id" label="Your Name"></yot-textbox>'
    );

    const { getByLabelText, getByRole } = getShadowedElement('yot-textbox');

    await userEvent.type(getByLabelText('Your Name'), 'Hello world');
    expect(getByRole('textbox')).toHaveValue('Hello world');
  });

  it('supports defining the type of input', async () => {
    await fixture(
      '<yot-textbox id="field-id" label="No thanks!" type="radio"></yot-textbox>'
    );

    const { getByRole } = getShadowedElement('yot-textbox');

    expect(getByRole('radio')).toBeDefined();
  });

  it('defaults to a text input', async () => {
    await fixture(
      '<yot-textbox id="field-id" label="No thanks!"></yot-textbox>'
    );

    const { getByRole } = getShadowedElement('yot-textbox');

    expect(getByRole('textbox')).toBeDefined();
  });

  it('displays an error message if one is provided', async () => {
    await fixture(
      '<yot-textbox id="field-id" error="Dodgy value there!"></yot-textbox>'
    );

    const { getByRole } = getShadowedElement('yot-textbox');

    expect(getByRole('alert')).toHaveTextContent('Dodgy value there!');
  });

  it('hands its values to a form when the form is submitted', async () => {
    const valueCallback = jest.fn();

    const submitHandler = (event: Event) => {
      event.preventDefault();
      const inputEl = (event.target as HTMLFormElement)
        .elements[1] as HTMLInputElement;
      valueCallback(inputEl.value);
    };

    await fixture(
      html`
        <form @submit="${submitHandler}">
          <button type="submit">Submit</button>
          <yot-textbox
            value="initial-value"
            id="field-id"
            label="Your Name"
          ></yot-textbox>
        </form>
      `
    );

    const { getByLabelText } = getShadowedElement('yot-textbox');

    await userEvent.clear(getByLabelText('Your Name'));
    await userEvent.type(getByLabelText('Your Name'), 'Hello world');
    await userEvent.click(screen.getByRole('button'));

    expect(valueCallback).toHaveBeenCalledWith('Hello world');
  });
});
