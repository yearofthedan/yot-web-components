import { LitElement, html, css, TemplateResult } from 'lit';

export class YotCardCollection extends LitElement {
  static styles = css`
    :host {
      display: block;
      height: 100%;
      overflow: auto;
      padding: var(--spacing-slim);
    }

    section {
      display: flex;
      gap: var(--spacing-slim);
    }

    :host::-webkit-scrollbar {
      width: var(--spacing-slim);
      height: var(--spacing-slim);
    }

    :host::-webkit-scrollbar-track {
      background-color: inherit;
    }

    :host::-webkit-scrollbar-thumb {
      border-radius: var(--spacing-slim);
      color: var(--palette-background);
      border: solid var(--spacing-sheer) currentColor;
      background-color: var(--palette-background-on);
      box-shadow: inset currentColor -2px -2px 0px 0px;
    }

    section[data-direction='horizontal'] {
      width: max-content;
      height: inherit;
      flex-direction: row;
    }

    section[data-direction='vertical'] {
      height: max-content;
      width: inherit;
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
