import { LitElement, html, css, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { inputModeByInputType } from './inputHelpers.js';

export class YotField extends LitElement {
  static styles = css`
    :host {
      position: relative;
      min-height: var(--field-height);
      display: inline-block;
      font-size: var(--font-size-s);
    }

    label {
      position: absolute;
      left: 0;
      top: 0;
    }

    ::-webkit-calendar-picker-indicator {
      filter: invert(80%);
    }

    @media (prefers-color-scheme: light) {
      ::-webkit-calendar-picker-indicator {
        filter: invert(0%);
      }
    }

    :is(input[type='radio'], input[type='checkbox']) + label {
      position: relative;
    }

    :host(:not(:focus-within)) > input:placeholder-shown + label {
      top: 50%;
      transform: translateY(-50%);
      left: var(--inset-density-xs);
      color: currentColor;
    }

    input:not(:focus):placeholder-shown + label {
      font-size: var(--font-size-s);
      cursor: text;
      transition: all ease-out 100ms;
      color: currentColor;
    }

    label {
      font-size: var(--font-size-xs);
      transition: all ease-in 100ms;
      font-family: inherit;
      color: currentColor;
    }

    input {
      border: none;
      border-bottom: solid 1px currentColor;
      background-color: transparent;
      border-radius: 0;
      color: currentColor;
      font-size: var(--font-size-s);
      padding-top: calc(var(--font-size-xs) + 2 * var(--spacing-skinny));
    }

    input:focus {
      outline: none;
      backdrop-filter: contrast(0.8);
      border-bottom: solid 2px var(--palette-accent);
    }

    input:not(:focus):placeholder-shown {
      color: currentColor;
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
      padding-left: var(--spacing-skinny);
    }

    [role='alert'] {
      display: inline-block;
      color: var(--palette-error);
      font-size: var(--font-size-xs);
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
      const closestForm = this.shadowRoot?.host.closest('form');

      if (!closestForm) {
        return;
      }

      const hiddenInput = this.ownerDocument.createElement('input');
      hiddenInput.type = 'hidden';
      hiddenInput.name = this.name;

      closestForm.appendChild(hiddenInput);
      this.hiddenInputRef = hiddenInput;
    }

    this.hiddenInputRef!.value = value ?? '';
  }

  __inputChanged(e: InputEvent): void {
    this.setValueToHiddenInput((e.target as HTMLInputElement).value);
  }

  render(): TemplateResult {
    this.setValueToHiddenInput(this.value);
    return html`
      <input
        id="input-${this.id}"
        part="input"
        name="${this.name}"
        inputmode=${ifDefined(inputModeByInputType[this.type])}
        type="${this.type}"
        .value="${this.value}"
        placeholder="${this.placeholder}"
        @input="${this.__inputChanged}"
        aria-describedby=${ifDefined(
          this.error ? `error-${this.id}` : undefined
        )}
      />
      ${this.label
        ? html`<label part="label" for="input-${this.id}">${this.label}</label>`
        : ''}
      ${this.error
        ? html`<span part="error" role="alert" id="error-${this.id}"
            >${this.error}</span
          >`
        : ''}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'yot-field': YotField;
  }
}
