import { LitElement, html, css, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';

export class YotSpinner extends LitElement {
  @property()
  size = 'medium';

  static styles = css`
    :host {
      display: inherit;
    }

    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    svg {
      animation: rotate 2s linear infinite;
    }

    svg[data-size='small'] {
      width: var(--icon-size-s);
      height: var(--icon-size-s);
    }

    svg[data-size='medium'] {
      width: var(--icon-size);
      height: var(--icon-size);
    }

    svg[data-size='large'] {
      width: var(--icon-size-l);
      height: var(--icon-size-l);
    }

    circle {
      stroke: currentColor;
      stroke-dasharray: 80;
    }
  `;

  render(): TemplateResult {
    return html`
      <svg data-size="${this.size}" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="16" fill="none" stroke-width="4"></circle>
      </svg>
    `;
  }
}
