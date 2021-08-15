import { LitElement, html, css, TemplateResult } from 'lit';

export class YotCard extends LitElement {
  static styles = css`
    :host {
      position: relative;
      max-height: 400px;
      min-height: fit-content;
      width: 400px;
      display: inline-block;
      background-color: var(--palette-background);
      border: var(--spacing-slight) solid var(--palette-primary);
    }

    ::slotted([slot='content']) {
      padding-inline: var(--spacing-slender);
      padding-block: var(--spacing-slight);
    }

    ::slotted([slot='actions']) {
      padding-inline: var(--spacing-slender);
      padding-block: var(--spacing-slender);
    }

    ::slotted([slot='header']) {
      padding-inline: var(--spacing-slender);
      padding-block: var(--spacing-slight);
      display: block;
    }

    div[name='image'] {
      overflow: hidden;
      max-height: 200px;
      background-color: grey;
    }

    section {
      height: 100%;
      display: grid;
      grid-auto-rows: max-content max-content max-content max-content;
    }
  `;

  render(): TemplateResult {
    return html`
      <article>
        <header>
          <slot name="header" part="header"> </slot>
        </header>
        <div name="image">
          <slot name="image" part="image"></slot>
        </div>
        <slot name="content" part="content"> </slot>
        <footer>
          <slot name="actions" part="actions"> </slot>
        </footer>
      </article>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'yot-card': YotCard;
  }
}
