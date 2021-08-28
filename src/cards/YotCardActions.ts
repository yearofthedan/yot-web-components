import { LitElement, html, css, TemplateResult } from 'lit';

export class YotCardActions extends LitElement {
  static styles = css`
    :host {
      padding-inline: var(--spacing-slender);
      padding-block: var(--spacing-slight);
    }
  `;

  render(): TemplateResult {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'yot-card-actions': YotCardActions;
  }
}
