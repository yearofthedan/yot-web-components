import { LitElement, html, css, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';

export class YotCard extends LitElement {
  static styles = css`
    :host {
      position: relative;
      aspect-ratio: 5/4;
      display: flex;
      color: var(--palette-surface-on);
      background: var(--palette-surface);
    }

    article {
      flex: 1;
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
