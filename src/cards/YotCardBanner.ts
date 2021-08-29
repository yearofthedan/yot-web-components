import { LitElement, html, css, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';

export class YotCardBanner extends LitElement {
  static styles = css`
    :host {
      background: black;
      flex: 1;
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
      left: 0;
      display: block;
      background: var(--palette-background-light);
    }
  `;

  @property()
  src?: string;

  @property()
  alt?: string;

  render(): TemplateResult {
    return html`<div
        role="img"
        aria-label=${this.alt}
        style=${`--banner-src:url("${this.src}");`}
      ></div>
      <slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'yot-card-banner': YotCardBanner;
  }
}
