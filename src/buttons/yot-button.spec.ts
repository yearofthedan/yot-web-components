import './yot-button.ts';
import { within } from '@testing-library/dom';
import { fixture, html } from '@open-wc/testing-helpers';
import userEvent from '@testing-library/user-event';

const getShadowedElement = (selector: string) => {
  const shadowedComponent = document.querySelector(selector);

  return within((shadowedComponent?.shadowRoot as unknown) as HTMLElement);
};

describe('yot-button', () => {
  it('submits a form when type is submit', async () => {
    const submitMock = jest.fn().mockImplementation((event: Event) => {
      event.preventDefault();
    });

    await fixture(
      html`<form @submit="${submitMock}">
        <yot-button type="submit"></yot-button>
      </form>`
    );

    const { getByRole } = getShadowedElement('yot-button');
    userEvent.click(getByRole('button'));

    expect(submitMock).toHaveBeenCalled();
  });

  it('does not submit a form when type is not submit', async () => {
    const submitMock = jest.fn().mockReturnValue(false);
    await fixture(
      html`<form @submit="${submitMock}"><yot-button></yot-button></form>`
    );

    const { getByRole } = getShadowedElement('yot-button');
    userEvent.click(getByRole('button'));

    expect(submitMock).not.toHaveBeenCalled();
  });
});
