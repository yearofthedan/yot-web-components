import { expect, fixture, html } from '@open-wc/testing';
import { getByRole, getShadowRoot } from './domHelpers.js';
import '../yot-button.js';

describe('yot-button', () => {
  it('submits a form when type is submit', async () => {
    let wasCalled = false;

    const submitHandler = (event: Event) => {
      event.preventDefault();
      wasCalled = true;
    };

    const form = await fixture(
      html`<form @submit="${submitHandler}">
        <yot-button type="submit"></yot-button>
      </form>`
    );

    const yotButton = getShadowRoot(form.querySelector('yot-button')!);

    (getByRole(yotButton, 'button') as HTMLButtonElement).click();

    expect(wasCalled).to.equal(true);
  });

  it('does not submit a form when type is not submit', async () => {
    let wasCalled = false;

    const submitHandler = (event: Event) => {
      event.preventDefault();
      wasCalled = true;
    };

    const form = await fixture(
      html`<form @submit="${submitHandler}">
        <yot-button></yot-button>
      </form>`
    );

    const yotButton = getShadowRoot(form.querySelector('yot-button')!);

    (getByRole(yotButton, 'button') as HTMLButtonElement).click();

    expect(wasCalled).to.equal(false);
  });
});
