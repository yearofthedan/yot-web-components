import {
  LitElement,
  html,
  customElement,
  property,
  css,
  TemplateResult,
} from 'lit-element';
import { ifDefined } from 'lit-html/directives/if-defined';

const inputMode: { [key: string]: string } = {
  text: 'text',
  password: 'text',
  tel: 'tel',
  email: 'email',
  number: 'numeric',
  decimal: 'decimal',
  search: 'search',
  url: 'url',
};

@customElement('yot-textbox')
export class YotTextBox extends LitElement {
  @property()
  value = '';

  @property()
  type = 'text';

  @property()
  multiline = false;

  @property()
  error?: string;

  @property()
  label?: string;

  @property()
  placeholder?: string;

  @property({ attribute: 'field-id' })
  fieldId?: string;

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

    this.hiddenInputRef.name = this.fieldId || '';
    this.hiddenInputRef.value = value ?? '';
  }

  __inputChanged(e: InputEvent): void {
    this.setValueToHiddenInput((e.target as HTMLInputElement).value);
  }

  render(): TemplateResult {
    this.setValueToHiddenInput(this.value);

    return html`
      <label for="${this.fieldId}">${this.label}</label>
      ${this.multiline
        ? html` <textarea
            id="${this.fieldId}"
            name="${this.fieldId}"
            placeholder=${ifDefined(this.placeholder)}
            inputmode=${ifDefined(inputMode[this.type])}
            @input="${this.__inputChanged}"
            aria-describedby=${ifDefined(
              this.error ? `error-${this.id}` : undefined
            )}
          >
${this.value}
            </textarea
          >`
        : html`
            <input
              id="${this.fieldId}"
              name="${this.fieldId}"
              type="${this.type}"
              inputmode=${ifDefined(inputMode[this.type])}
              .value="${this.value}"
              placeholder=${ifDefined(this.placeholder)}
              @input="${this.__inputChanged}"
              aria-describedby=${ifDefined(
                this.error ? `error-${this.id}` : undefined
              )}
            />
          `}
      ${this.error
        ? html`<span role="alert" id="error-${this.id}">${this.error}</span>`
        : ''}
    `;
  }

  static styles = css`
    :host {
      --main-font-size: var(--font-size-s);
      --descriptive-font-size: var(--font-size-xs);

      display: grid;
      grid-auto-flow: row;
      grid-row-gap: var(--stack-density-xs);
      font-family: 'Raleway', sans-serif;
      font-weight: 500;
    }

    :host([size='large']) {
      --main-font-size: var(--font-size-m);
      --descriptive-font-size: var(--font-size-s);
    }

    input {
      padding: var(--inset-density-xs);
      font-size: var(--main-font-size);
      height: var(--field-height);
      width: 12rem;
      border-radius: var(--border-s);
      border: solid var(--border-xs) var(--palette-background);
      background-color: transparent;
      color: var(--palette-background-on);
      box-sizing: border-box;
    }

    textarea {
      padding: var(--inset-density-xs);
      font-size: var(--main-font-size);
      height: var(--field-height);
      width: 12rem;
      border-radius: var(--border-s);
      border: solid var(--border-xs) var(--palette-background);
      background-color: transparent;
      color: var(--palette-background-on);
      box-sizing: border-box;
    }

    label {
      display: block;
    }

    [role='alert'] {
      display: block;
      color: var(--palette-error);
      font-size: var(--descriptive-font-size);
    }
  `;
}
