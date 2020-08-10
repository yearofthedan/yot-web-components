import './yot-field.ts';
import { screen } from 'testing-library__dom';
import { fixture, html } from '@open-wc/testing-helpers';
import userEvent from '@testing-library/user-event';

describe('yot-field', () => {
  it('renders an underlying input', async () => {
    await fixture('<yot-field></yot-field>');

    expect(screen.getByRole('textbox')).toBeDefined();
  });

  it('can select the input from the label', async () => {
    await fixture('<yot-field id="field-id" label="Your Name"></yot-field>');

    await userEvent.type(screen.getByLabelText('Your Name'), 'Hello world');
    expect(screen.getByRole('textbox')).toHaveValue('Hello world');
  });

  it('supports defining the type of input', async () => {
    await fixture(
      '<yot-field id="field-id" label="No thanks!" type="radio"></yot-field>'
    );

    expect(screen.getByRole('radio')).toBeDefined();
  });

  it('defaults to a text input', async () => {
    await fixture('<yot-field id="field-id" label="No thanks!"></yot-field>');

    expect(screen.getByRole('textbox')).toBeDefined();
  });

  it('displays an error message if one is provided', async () => {
    await fixture(
      '<yot-field id="field-id" error="Dodgy value there!"></yot-field>'
    );

    expect(screen.getByRole('alert')).toHaveTextContent('Dodgy value there!');
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
          <yot-field
            value="initial-value"
            id="field-id"
            label="Your Name"
          ></yot-field>
        </form>
      `
    );

    await userEvent.clear(screen.getByLabelText('Your Name'));
    await userEvent.type(screen.getByLabelText('Your Name'), 'Hello world');
    await userEvent.click(screen.getByRole('button'));

    expect(valueCallback).toHaveBeenCalledWith('Hello world');
  });
});
