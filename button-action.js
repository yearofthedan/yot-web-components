const template = document.createElement('template');
template.innerHTML = `
    <button part="button" data-action-state="ready">
        <slot name="label">
            My label text
        </slot>
        <slot name="loading">
            <span></span>        
        </slot>
        <slot name="success">
            <span>✔</span>
        </slot>
    </button>

    <style>
    :host {
        --unit: var(--base-unit, calc(1rem / 4));
        width: fit-content;
        display: inline-block;
        position: relative;
    }

    button {
        height: var(--button-height, 2.25rem);
        min-width: 8rem;
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
    
    button[data-action-state='ready']:focus {
      outline: var(--unit) solid;
      outline-offset: var(--unit);
    }
    
    button[data-action-state='ready']:hover {
      background: var(--color-background-alt)
                radial-gradient(circle, transparent 1%, var(--color-background-alt) 1%)
                center/15000%;
    }
    
    button[data-action-state='ready']:active {
      filter: brightness(80%);
      transition: filter 100ms;
    }

    button > slot {
        display: none;
    }

    button[data-action-state='loading'] > slot[name="loading"] {
        display: inline;
    }

    button[data-action-state='ready'] > slot[name="label"] {
        display: inline;
    }

    button[data-action-state='success'] > slot[name="success"] {
        display: inline;
    }
      
    slot[name='loading'] > span {
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

    slot[name='success'] > span {
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
    </style>
`

const ACTION_STATES = ['success', 'loading'];

export class Button extends HTMLElement {
  static get observedAttributes() {
    return ['type', 'action-state'];
  }

  constructor() {
    super();

    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowDOM = shadowRoot;
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (oldVal !== newVal) {
      if ('action-state' === name) {
        this.shadowDOM.querySelector('button').setAttribute('data-action-state', newVal);
        this.shadowDOM.querySelector('button').setAttribute('disabled', `${ACTION_STATES.includes(newVal)}`);
      }
      if ('type' === name) {
        this.shadowDOM.querySelector('button').setAttribute(name, newVal);
      }
    }
  }
}

window.customElements.define('yot-button-action', Button);
