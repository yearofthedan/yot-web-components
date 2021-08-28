import { LitElement, html, css, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';

export class YotCardBanner extends LitElement {
  static styles = css`
    :host {
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      background: black;
    }

    img {
      width: 100%;
      object-fit: scale-down;
      object-position: center;
    }

    slot {
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      background: white;
    }
  `;

  @property()
  src?: string;

  @property()
  alt?: string;

  render(): TemplateResult {
    return html`<img alt=${this.alt} src=${this.src} /><slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'yot-card-banner': YotCardBanner;
  }
}
