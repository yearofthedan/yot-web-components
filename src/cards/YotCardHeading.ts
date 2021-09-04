import { LitElement, html, css, TemplateResult } from 'lit';

export class YotCardHeading extends LitElement {
  static styles = css`
    :host {
      padding-inline: var(--spacing-slim);
      display: block;
    }
  `;

  render(): TemplateResult {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'yot-card-heading': YotCardHeading;
  }
}
