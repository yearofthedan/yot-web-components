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
    color: var(--palette-primary-light-on);
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
    padding: var(--inset-density-xs) var(--inset-density-m);
    font-size: var(--font-size-xs);
    height: var(--button-height-s);
    min-width: 4rem;
  }

  button[size='regular'] {
    padding: var(--inset-density-s) var(--inset-density-m);
    font-size: var(--font-size-s);
    height: var(--button-height);
    min-width: 8rem;
  }

  button[size='large'] {
    padding: var(--inset-density-m) var(--inset-density-l);
    font-size: var(--font-size-m);
    height: var(--button-height-l);
    min-width: 8rem;
  }
`;

export class YotButton extends LitElement {
  static styles = css`
    :host {
      width: fit-content;
      display: inline-block;
      position: relative;
    }

    ${buttonSpacing}

    button {
      cursor: pointer;
      background-color: var(--palette-primary);
      color: var(--palette-primary-on);
      display: flex;
      justify-content: center;
      align-items: center;
      transition: background 200ms;
    }

    button[data-action-state='loading'] > slot[part='loading'] {
      display: flex;
    }

    button[disabled] {
      background-color: var(--palette-primary-light);
    }

    button[data-action-state='idle']:hover {
      background: var(--palette-primary-light)
        radial-gradient(circle, transparent 1%, var(--palette-primary-light) 1%)
        center/15000%;
    }

    button[data-action-state='idle']:active {
      filter: brightness(80%);
      transition: filter 100ms;
    }

    slot {
      display: none;
    }

    button[data-action-state='idle'] > slot[part='label'] {
      display: inline;
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
