import { LitElement, html, customElement, property, css } from 'lit-element';

@customElement('yot-field')
export class YotField extends LitElement {
  static styles = css`
    :host {
      position: relative;
      display: inline-block;
    }

    label {
      position: absolute;
      left: 0;
      top: 0;
    }

    input[type='radio'] + label {
      position: relative;
    }

    input[type='checkbox'] + label {
      position: relative;
    }

    :host(:not(:focus-within)) > input:placeholder-shown + label {
      position: absolute;
      left: var(--padding-unit);
      top: calc(var(--font-size-aside-text) + 2 * var(--padding-unit));
    }

    :host {
      display: block;
      font-size: var(--font-size-body-text);
      background-color: var(--palette-background-light);
    }

    input:not(:focus):placeholder-shown + label {
      font-size: var(--font-size-body-text);
      cursor: text;
      transition: all ease-out 100ms;
    }

    label {
      color: var(--palette-primary-dark);
      font-size: var(--font-size-label-text);
      transition: all ease-in 100ms;
      font-family: inherit;
    }

    input {
      border: none;
      border-bottom: solid 1px var(--palette-primary-dark);
      background-color: var(--palette-background);
      color: var(--palette-background-on);
      font-size: var(--font-size-body-text);
      padding-top: calc(var(--font-size-aside-text) + 2 * var(--padding-unit));
      padding-bottom: var(--padding-unit);
    }

    input:focus {
      outline: none;
      border-bottom: solid 2px var(--palette-primary-dark);
    }

    input:not(:focus):placeholder-shown {
      background-color: var(--palette-background);
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
      color: var(--palette-error);
    }
  `;

  @property()
  value = '';

  @property()
  type = 'text';

  @property()
  name = '';

  @property()
  error?: string;

  @property()
  label?: string;

  @property()
  placeholder = ' ';

  @property()
  id = '';

  hiddenInputRef: HTMLInputElement | null = null;

  setValueToHiddenInput(value: string | null) {
    if (!this.ownerDocument) {
      return;
    }

    if (this.hiddenInputRef === null) {
      const hiddenInput = this.ownerDocument.createElement('input');
      hiddenInput.type = 'hidden';
      this.appendChild(hiddenInput);
      this.hiddenInputRef = hiddenInput;
    }

    this.hiddenInputRef.name = this.name;
    this.hiddenInputRef.value = value ?? '';
  }

  __inputChanged(e: InputEvent) {
    this.setValueToHiddenInput((e.target as HTMLInputElement).value);
  }

  render() {
    this.setValueToHiddenInput(this.value);
    return html`
      <input
        id="input-${this.id}"
        name="${this.name}"
        type="${this.type}"
        .value="${this.value}"
        placeholder="${this.placeholder}"
        @input="${this.__inputChanged}"
        part="input"
      />
      ${this.label
        ? html`<label for="input-${this.id}">${this.label}</label>`
        : ''}
      ${this.error ? html`<aside role="alert">${this.error}</aside>` : ''}
    `;
  }
}
