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

    /* 
        if there is no value in the field 
        i.e. if the placeholder is shown (we use a whitespace as default and opacity 0 for the placeholder text)
    */
    input:not(:focus):placeholder-shown + label {
        left: var(--padding-unit);
        top: calc(100% - var(--padding-unit));
        transform: translateY(-100%);
    }

    :host {
        display: block;
        font-size: var(--font-size-body-text);
        background-color: var(--color-background);
        padding-top: calc(var(--font-size-body-text));
    }

    input:not(:focus):placeholder-shown + label {
        font-size: var(--font-size-body-text);
        cursor: text;
        transition: all ease-out 100ms; 
    }

    input:not(:focus):placeholder-shown {
        background-color: var(--color-background-alt);
    }


    label {
        color: var(--color-label-text);
        font-size: var(--font-size-label-text);
        transition: all ease-in 100ms; 
    }

    input {
        border: none;
        border-bottom: solid 1px var(--color-accent);
        background-color: var(--color-background);
        color: var(--color-body-text);
        font-size: var(--font-size-body-text);
        padding: var(--padding-unit);
    }

    input:focus {
        outline: none;
        border-bottom: solid 2px var(--color-body-text);
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

export class Field extends HTMLElement {
    static get observedAttributes() {
        return [ 'value', 'error', 'type', 'placeholder', 'id' ];
    }

    constructor() {
        super();

        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowDOM = shadowRoot;
    }

    attributeChangedCallback(name, oldVal, newVal) {
        if (oldVal !== newVal) {
            if (['type', 'value', 'placeholder', 'id'].includes(name)) {
                this.shadowDOM.querySelector('input').setAttribute(name, newVal);
            }

            if (['id'].includes(name)) {
                this.shadowDOM.querySelector('label').setAttribute('for', newVal);
            }

            if (['error'].includes(name)) {
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

window.customElements.define('yot-field', Field);
