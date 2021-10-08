import { LitElement, html, css, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import './yot-spinner.js';

type BUTTON_STATES = 'idle' | 'success' | 'loading';
type BUTTON_SIZES = 'small' | 'regular' | 'large';

const successIndicator = css`
  button[data-action-state='success'] > slot[part='success'] {
    display: inline;
  }

  slot[part='success'] > span {
    display: block;
    border-radius: 100%;
  }
`;

const buttonSpacing = css`
  button {
    box-sizing: border-box;
    border: none;
    border-radius: 0.25rem;
    font-family: var(--font-family-body);
    font-weight: var(--font-weight-500);
  }

  button[size='small'] {
    padding: var(--spacing-slim);
    font-size: var(--font-size-xs);
    max-height: var(--button-height-s);
  }

  button[size='regular'] {
    padding: var(--spacing-straight);
    font-size: var(--font-size-s);
    max-height: var(--button-height);
  }

  button[size='large'] {
    padding: var(--spacing-straight);
    font-size: var(--font-size-l);
    max-height: var(--button-height-l);
  }
`;

export class YotButton extends LitElement {
  static styles = css`
    :host {
      min-width: fit-content;
      width: 100%;
      flex: 1;
      display: inline-flex;
      position: relative;
    }

    ${buttonSpacing}

    button {
      cursor: pointer;
      background-color: transparent;
      color: inherit;
      display: flex;
      justify-content: center;
      width: inherit;
      align-items: center;
      transition: backdrop-filter 200ms ease 0s;
      border: solid var(--spacing-sheer) var(--palette-accent);
      border-radius: var(--spacing-sheer);
    }

    slot[part='label'] {
      display: inline-flex;
      gap: var(--spacing-skinny);
      width: 100%;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    button[data-action-state='loading'] > slot[part='loading'] {
      display: flex;
      backdrop-filter: contrast(0.6);
    }

    button[disabled] {
      backdrop-filter: contrast(0.6);
      border: var(--spacing-sheer) solid inherit;
    }

    button[data-action-state='idle']:hover {
      backdrop-filter: contrast(0.8);
    }

    button[data-action-state='idle']:active {
      filter: brightness(80%);
      transition: filter 100ms;
    }

    :is(button[data-action-state='loading'], button[data-action-state='success'])
      > slot[part='label'] {
      display: none;
    }

    slot {
      display: none;
    }

    button[data-action-state='idle'] > slot[part='label'] {
      display: inline-flex;
    }

    ${successIndicator}
  `;

  @property()
  state: BUTTON_STATES = 'idle';

  @property()
  type = 'normal';

  @property()
  size: BUTTON_SIZES = 'regular';

  @property()
  variant = 'primary';

  __click(event: Event): void {
    if (this.type === 'submit') {
      const form = this.closest('form');
      event.preventDefault();
      const fakeSubmit = document.createElement('button');
      fakeSubmit.type = 'submit';
      fakeSubmit.style.display = 'none';
      form?.appendChild(fakeSubmit);
      fakeSubmit.click();
      fakeSubmit.remove();
    }
  }

  render(): TemplateResult {
    return html`
      <button
        part="button"
        size="${this.size}"
        data-action-state="${this.state}"
        ?disabled="${this.state !== 'idle'}"
        type="${this.type}"
        @click="${this.__click}"
      >
        <slot name="loading" part="loading">
          <yot-spinner></yot-spinner>
        </slot>
        <slot name="success" part="success">
          <span>✔</span>
        </slot>
        <slot part="label"> </slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'yot-button': YotButton;
  }
}
