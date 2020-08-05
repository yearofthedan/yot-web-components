const template = document.createElement('template');
template.innerHTML = `
    <input placeholder=" " part="input" />
    <label part="label">
        <slot>
            My label text
        </slot>
    </label>

  <style>
    :host {
        position: relative;
    }

    label {
        position: absolute;
        left: 0;
        top: 0;
    }

    :host(:not(:focus-within)) > input:placeholder-shown + label {
        position: absolute;
        left: var(--padding-unit);
        top: calc(var(--font-size-aside-text) + 2 * var(--padding-unit));
    }

    :host { 
        display: block;
        font-size: var(--font-size-body-text);
        background-color: var(--color-background);
    }

    input:not(:focus):placeholder-shown + label {
        font-size: var(--font-size-body-text);
        cursor: text;
        transition: all ease-out 100ms; 
    }

    label {
        color: var(--color-label-text);
        font-size: var(--font-size-label-text);
        transition: all ease-in 100ms; 
        font-family: inherit;
    }

    input {
        border: none;
        border-bottom: solid 1px var(--color-accent);
        background-color: var(--color-background);
        color: var(--color-body-text);
        font-size: var(--font-size-body-text);
        padding-top: calc(var(--font-size-aside-text) + 2 * var(--padding-unit));
        padding-bottom: var(--padding-unit);
    }

    input:focus {
        outline: none;
        border-bottom: solid 2px var(--color-body-text);
    }

    input:not(:focus):placeholder-shown {
        background-color: var(--color-background-alt);
    }

    input::placeholder {
        opacity: 0;
        transition: all ease-in 100ms; 
    }

    input:focus::placeholder {
        opacity: 1;
        transition: all ease-out 100ms;
        font-style: italic; 
        font-size: var(--font-size-aside-text);
        padding-left: var(--padding-unit);
    }

    aside {
        display: inline-block;
        padding: var(--padding-unit);
        font-size: var(--font-size-aside-text);
        color: var(--color-error-text);
    }
</style>
`

const INPUT_ATTRS = ['value', 'type', 'placeholder', 'id'];

export class YotField extends HTMLElement {
  static get observedAttributes() {
    return [...INPUT_ATTRS, 'error'];
  }

  constructor() {
    super();

    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.appendChild(template.content.cloneNode(true));

    const input = shadowRoot.querySelector('input');
    this.getAttributeNames()
      .forEach(attribute => input.setAttribute(attribute, this.getAttribute(attribute)));

    this.shadowDOM = shadowRoot;
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (oldVal !== newVal) {
      if (INPUT_ATTRS.includes(name)) {
        this.shadowDOM.querySelector('input').setAttribute(name, newVal);
      }

      if (name === 'id') {
        this.shadowDOM.querySelector('label').setAttribute('for', newVal);
      }

      if (name === 'error') {
        if (newVal === null) {
          this.shadowDOM.removeChild(this.shadowDOM.querySelector('aside'));
        } else {
          const errorEl = document.createElement('aside');
          errorEl.innerHTML = newVal;
          errorEl.setAttribute('aria-role', 'alert');
          this.shadowDOM.appendChild(errorEl);
        }
      }
    }
  }
}

window.customElements.define('yot-field', YotField);
