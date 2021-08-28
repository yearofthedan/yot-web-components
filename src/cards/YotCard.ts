import { LitElement, html, css, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';

export class YotCard extends LitElement {
  static styles = css`
    :host {
      position: relative;
      overflow: hidden;
      width: 300px;
      display: block;
      border: var(--spacing-slight) solid var(--palette-primary);
    }

    ::slotted([slot='actions']) {
      padding-inline: var(--spacing-slender);
      padding-block: var(--spacing-slender);
    }

    article {
      height: 100%;
      display: flex;
      flex-direction: column;
    }
  `;

  @property()
  img?: string;

  @property()
  alt?: string;

  render(): TemplateResult {
    return html`
      <article>
        <slot></slot>
      </article>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'yot-card': YotCard;
  }
}
