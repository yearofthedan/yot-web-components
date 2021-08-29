import { LitElement, html, css, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';

export class YotCardBanner extends LitElement {
  static styles = css`
    :host {
      background: var(--palette-background-dark);
      flex: 1;
      position: relative;
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
      background: var(--palette-background-light);
      justify-content: center;
      align-items: center;
    }

    yot-header {
      position: absolute;
      bottom: 0;
      left: 0px;
      display: block;
      background: var(--palette-background-light);
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
