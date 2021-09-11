import { LitElement, html, css, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';

export class YotCardBanner extends LitElement {
  static styles = css`
    :host {
      flex: 1;
      position: relative;
      backdrop-filter: brightness(0.7);
    }

    div {
      background-image: var(--banner-src);
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      width: 100%;
      height: 100%;
    }

    slot {
      position: absolute;
      top: 0;
      right: 0;
      display: block;
      justify-content: center;
      align-items: center;
    }

    yot-header {
      position: absolute;
      bottom: 0;
      left: var(--spacing-slim);
      display: block;
      justify-content: center;
      align-items: center;
    }
  `;

  @property()
  src?: string;

  @property()
  alt?: string;

  @property()
  heading?: string;

  render(): TemplateResult {
    return html`<div
        role="img"
        aria-label=${this.alt}
        style=${`--banner-src:url("${this.src}");`}
      ></div>
      ${this.heading &&
      html`<yot-header level="4">${this.heading}</yot-header>`}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'yot-card-banner': YotCardBanner;
  }
}
