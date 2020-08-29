import { LitElement, html, customElement, css, property } from 'lit-element';

@customElement('yot-spinner')
export class YotButton extends LitElement {
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
      width: var(--icon-size-small);
      height: var(--icon-size-small);
    }

    svg[data-size='medium'] {
      width: var(--icon-size-medium);
      height: var(--icon-size-medium);
    }

    svg[data-size='large'] {
      width: var(--icon-size-large);
      height: var(--icon-size-large);
    }

    circle {
      stroke: currentColor;
      stroke-dasharray: 80;
    }
  `;

  render() {
    return html`
      <svg data-size="${this.size}" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="16" fill="none" stroke-width="4"></circle>
      </svg>
    `;
  }
}
