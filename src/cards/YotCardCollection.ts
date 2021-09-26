import { LitElement, html, css, TemplateResult } from 'lit';
import { state } from 'lit/decorators.js';

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

    :host(:hover)::-webkit-scrollbar-thumb {
      background-color: rgb(180 180 180 / 50%);
      display: initial;
    }

    :host(:hover)::-webkit-scrollbar-track {
      display: initial;
    }

    :host::-webkit-scrollbar {
      width: var(--spacing-slim);
      height: var(--spacing-slim);
    }

    :host::-webkit-scrollbar-track {
      display: none;
      background-color: inherit;
    }

    :host::-webkit-scrollbar-thumb {
      display: none;
      border-radius: var(--spacing-sheer);
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

  @state()
  protected _direction = 'horizontal';

  private resetDirection() {
    const parentBounds = this.parentElement!.getBoundingClientRect();
    this._direction =
      parentBounds.height > parentBounds.width ? 'vertical' : 'horizontal';
  }

  connectedCallback() {
    super.connectedCallback();
    this.resetDirection();
    window.addEventListener('resize', () => {
      this.resetDirection();
    });
  }

  render(): TemplateResult {
    return html`
      <section data-direction=${this._direction}>
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
