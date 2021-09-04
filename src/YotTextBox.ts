import { LitElement, html, css, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { inputModeByInputType } from './inputHelpers.js';

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
      <label part="label" for="${this.fieldId}">${this.label}</label>
      ${this.multiline
        ? html` <textarea
            part="input"
            id="${this.fieldId}"
            name="${this.fieldId}"
            placeholder=${ifDefined(this.placeholder)}
            inputmode=${ifDefined(inputModeByInputType[this.type])}
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
              part="input"
              id="${this.fieldId}"
              name="${this.fieldId}"
              type="${this.type}"
              inputmode=${ifDefined(inputModeByInputType[this.type])}
              .value="${this.value}"
              placeholder=${ifDefined(this.placeholder)}
              @input="${this.__inputChanged}"
              aria-describedby=${ifDefined(
                this.error ? `error-${this.id}` : undefined
              )}
            />
          `}
      ${this.error
        ? html`<span part="error" role="alert" id="error-${this.id}"
            >${this.error}</span
          >`
        : ''}
    `;
  }

  static styles = css`
    :host {
      display: grid;
      grid-auto-flow: row;
      grid-row-gap: var(--spacing-sheer);
      font-family: 'Raleway', sans-serif;
      font-weight: 500;
    }

    :is(input, textarea) {
      outline-color: var(--palette-accent);
      padding: var(--spacing-skinny);
      font-size: var(--font-size-m);
      height: var(--field-height);
      width: 12rem;
      border-radius: var(--spacing-skinny);
      border: solid var(--spacing-sheer) currentColor;
      background-color: transparent;
      color: currentColor;
      box-sizing: border-box;
    }

    :is(input, textarea):focus {
      backdrop-filter: contrast(0.8);
    }

    textarea {
      height: var(--textarea-height);
    }

    label {
      font-size: var(--font-size-s);
      display: block;
    }

    input::placeholder {
      font-size: var(--font-size-xs);
      padding-left: var(--spacing-sheer);
    }

    [role='alert'] {
      display: block;
      color: var(--palette-error);
      font-size: var(--font-size-s);
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'yot-textbox': YotTextBox;
  }
}
