import { LitElement, html, css, TemplateResult } from 'lit';

export class YotCardCollection extends LitElement {
  static styles = css`
    :host {
      display: block;
      height: 100%;
      overflow: auto;
      padding: var(--spacing-slim);
    }

    section[data-direction='horizontal'] {
      width: max-content;
      height: inherit;
      display: flex;
      gap: var(--spacing-slim);
    }

    section[data-direction='vertical'] {
      height: max-content;
      width: inherit;
      display: flex;
      gap: var(--spacing-slim);
      flex-direction: column;
    }
  `;

  render(): TemplateResult {
    const parentDims = this.parentElement!.getBoundingClientRect();
    return html`
      <section
        data-direction=${parentDims.height > parentDims.width
          ? 'vertical'
          : 'horizontal'}
      >
        <slot></slot>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'yot-card-collection': YotCardCollection;
  }
}
