import { LitElement, html, css, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';

export class YotCard extends LitElement {
  static styles = css`
    :host {
      position: relative;
      max-height: 400px;
      aspect-ratio: 5/4;
      display: inline-block;
      background-color: var(--palette-background-light);
    }

    slot[name='content'] {
      flex: 1;
    }

    section {
      height: 100%;
      display: grid;
      grid-auto-rows: max-content 1fr max-content;
    }
  `;

  @property()
  image =
    'https://cdn.duetds.com/api/assets/illustrations/placeholder-dark.svg';

  render(): TemplateResult {
    return html`
      <section>
        <header>
          <slot name="header" part="header"> </slot>
        </header>
        <slot name="content" part="content"> </slot>
        <footer>
          <slot name="actions" part="actions"> </slot>
        </footer>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'yot-card': YotCard;
  }
}
