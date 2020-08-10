import './yot-button.ts';
import { screen } from 'testing-library__dom';
import { fixture, html } from '@open-wc/testing-helpers';
import userEvent from '@testing-library/user-event';

describe('yot-button', () => {
  it('submits a form when type is submit', async () => {
    const submitMock = jest.fn().mockReturnValue(false);
    await fixture(
      html`<form @submit="${submitMock}">
        <yot-button type="submit"></yot-button>
      </form>`
    );

    userEvent.click(screen.getByRole('button'));

    expect(submitMock).toHaveBeenCalled();
  });

  it('does not submit a form when type is not submit', async () => {
    const submitMock = jest.fn().mockReturnValue(false);
    await fixture(
      html`<form @submit="${submitMock}"><yot-button></yot-button></form>`
    );

    userEvent.click(screen.getByRole('button'));

    expect(submitMock).not.toHaveBeenCalled();
  });
});
