import {
  LitElement,
  html,
  customElement,
  property,
  css,
  TemplateResult,
} from 'lit-element';

@customElement('yot-field')
export class YotField extends LitElement {
  static styles = css`
    :host {
      position: relative;
      min-height: var(--field-height);
      display: inline-block;

      font-size: var(--font-size-s);
      background-color: var(--palette-background-light);
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
      top: 50%;
      transform: translateY(-50%);
      left: var(--inset-density-xs);
    }

    input:not(:focus):placeholder-shown + label {
      font-size: var(--font-size-s);
      cursor: text;
      transition: all ease-out 100ms;
    }

    label {
      color: var(--palette-primary-dark);
      font-size: var(--font-size-xs);
      transition: all ease-in 100ms;
      font-family: inherit;
    }

    input {
      border: none;
      border-bottom: solid 1px var(--palette-primary-dark);
      background-color: var(--palette-background);
      color: var(--palette-background-on);
      font-size: var(--font-size-s);
      padding-top: calc(var(--font-size-xs) + 2 * var(--inset-density-xs));
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
      font-size: var(--font-size-xs);
      padding-left: var(--padding-unit);
    }

    [role='alert'] {
      display: inline-block;
      padding: var(--padding-unit);
      font-size: var(--font-size-xs);
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

  setValueToHiddenInput(value: string | null): void {
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

  __inputChanged(e: InputEvent): void {
    this.setValueToHiddenInput((e.target as HTMLInputElement).value);
  }

  render(): TemplateResult {
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
      ${this.error ? html`<span role="alert">${this.error}</span>` : ''}
    `;
  }
}
