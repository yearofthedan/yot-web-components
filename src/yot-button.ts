import { LitElement, html, customElement, property, css } from 'lit-element';

enum STATE {
  idle = 'idle',
  success = 'success',
  loading = 'loading',
}

@customElement('yot-button')
export class YotButton extends LitElement {
  static styles = css`
    :host {
      --unit: var(--base-unit, calc(1rem / 4));
      height: 2.25rem;
      min-width: 8rem;
      width: fit-content;
      display: inline-block;
      position: relative;
    }

    button {
      height: 100%;
      width: 100%;
      border-radius: calc(0.25rem);
      font-size: var(--font-size-body-text);
      background-color: var(--palette-primary);
      color: var(--palette-primary-on);
      outline: none;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: background 200ms;
    }

    button[data-action-state='idle']:focus {
      outline: var(--unit) solid;
      outline-offset: var(--unit);
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

    button > slot {
      display: none;
    }

    button[disabled] {
      background-color: var(--palette-primary-light);
    }

    button[data-action-state='loading'] > slot[part='loading'] {
      display: inline;
    }

    button[data-action-state='idle'] > slot[part='label'] {
      display: inline;
    }

    button[data-action-state='success'] > slot[part='success'] {
      display: inline;
    }

    slot[part='loading'] > span {
      --spinner-radius: calc(4 * var(--unit));
      display: block;
      color: var(--palette-primary-light-on);
      width: calc(2 * var(--spinner-radius));
      height: calc(2 * var(--spinner-radius));
      border-top: 2px solid var(--palette-primary-light-on);
      animation: 2s rotate linear infinite;
      border-radius: 100%;
    }

    slot[part='success'] > span {
      --radius: calc(4 * var(--unit));
      display: block;
      color: var(--palette-primary-light-on);
      width: calc(2 * var(--radius));
      height: calc(2 * var(--radius));
      border-radius: 100%;
    }

    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `;

  @property()
  state: STATE = STATE.idle;

  @property()
  type = 'normal';

  __click(event: Event) {
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

  render() {
    return html`
      <button
        part="button"
        data-action-state="${this.state}"
        ?disabled="${this.state !== STATE.idle}"
        type="${this.type}"
        @click="${this.__click}"
      >
        <slot name="loading" part="loading">
          <span></span>
        </slot>
        <slot name="success" part="success">
          <span>✔</span>
        </slot>
        <slot part="label">
          My label text
        </slot>
      </button>
    `;
  }
}
