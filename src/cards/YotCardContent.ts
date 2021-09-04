import { LitElement, html, css, TemplateResult } from 'lit';

export class YotCardContent extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding-inline: var(--spacing-slim);
      padding-block: var(--spacing-skinny);
    }
  `;

  render(): TemplateResult {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'yot-card-content': YotCardContent;
  }
}
