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
      background-color: var(--color-background);
      color: var(--color-label-text);
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
      background: var(--color-background-alt)
        radial-gradient(circle, transparent 1%, var(--color-background-alt) 1%)
        center/15000%;
    }

    button[data-action-state='idle']:active {
      filter: brightness(80%);
      transition: filter 100ms;
    }

    button > slot {
      display: none;
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
      background-color: inherit;
      color: var(--color-background-alt);
      width: calc(2 * var(--spinner-radius));
      height: calc(2 * var(--spinner-radius));
      border-top: 2px solid var(--color-accent);
      animation: 2s rotate linear infinite;
      border-radius: 100%;
    }

    slot[part='success'] > span {
      --radius: calc(4 * var(--unit));
      display: block;
      background-color: inherit;
      color: var(--color-accent);
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

  render() {
    return html`
      <button
        part="button"
        data-action-state="${this.state}"
        ?disabled="${this.state !== STATE.idle}"
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
