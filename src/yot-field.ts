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
  error: string | null = null;

  @property()
  placeholder = ' ';

  @property()
  id = '';

  render() {
    return html`
      <input
        type="${this.type}"
        placeholder="${this.placeholder}"
        part="input"
        .value="${this.value}"
        id="${this.id}"
      />
      <label for="${this.id}">
        <slot></slot>
      </label>
      ${this.error ? html`<aside aria-role="alert">${this.error}</aside>` : ''}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'yot-field': YotField;
  }
}
