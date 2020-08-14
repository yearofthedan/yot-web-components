import { LitElement, html, customElement, property, css } from 'lit-element';

enum STATE {
  idle = 'idle',
  success = 'success',
  loading = 'loading',
}

const rotateKeyframe = css`
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const buttonTypeface = css`
  button {
    font-family: var(--font-family-body);
    font-size: var(--font-size-small);
    font-weight: var(--font-weight-500);
    line-height: 1.5;
  }

  button[yot-size='small'] {
    font-size: var(--font-size-small);
  }

  button[yot-size='large'] {
    font-size: var(--font-size-large);
  }
`;

const loadingSpinner = css`
  button[data-action-state='loading'] > slot[part='loading'] {
    display: inline;
  }

  slot[part='loading'] > span {
    --spinner-radius: calc(0.25 * var(--field-height));
    display: block;
    color: var(--palette-primary-light-on);
    width: calc(2 * var(--spinner-radius));
    height: calc(2 * var(--spinner-radius));
    border-top: 2px solid var(--palette-primary-light-on);
    animation: 2s rotate linear infinite;
    border-radius: 100%;
  }
`;

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
    padding: var(--inset-density-m) var(--inset-density-l);
    border: none;
    border-radius: 0.25rem;
  }

  button[yot-size~='small'] {
    font-size: var(--font-size-small);
  }

  button[yot-size~='medium'] {
    font-size: var(--font-size-small);
  }

  button[yot-size~='large'] {
    font-size: var(--font-size-large);
  }

  button:focus {
    outline: var(--border-m) solid;
    outline-offset: var(--inset-density-s);
  }
`;

@customElement('yot-button')
export class YotButton extends LitElement {
  static styles = css`
    :host {
      min-width: 8rem;
      width: fit-content;
      display: inline-block;
      position: relative;
    }
    
    ${buttonTypeface}
    ${buttonSpacing}

    button {
      height: var(--field-height);
      width: 100%;
      cursor: pointer;
      background-color: var(--palette-primary);
      color: var(--palette-primary-on);
      display: flex;
      justify-content: center;
      align-items: center;
      transition: background 200ms;
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

    ${loadingSpinner}
    ${successIndicator}
    ${rotateKeyframe}
  `;

  @property()
  state: STATE = STATE.idle;

  @property()
  type = 'normal';

  @property()
  variant = 'primary';

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
