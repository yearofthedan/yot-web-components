import { LitElement, html, css, TemplateResult } from 'lit';

export class YotCardCollection extends LitElement {
  static styles = css`
    :host {
      display: flex;
      height: inherit;
      width: inherit;
      overflow: auto;
      background-color: var(--palette-background);
      border: var(--spacing-slight) solid var(--palette-primary);
    }

    section[data-direction='horizontal'] {
      width: max-content;
    }

    section[data-direction='vertical'] {
      height: max-content;
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
