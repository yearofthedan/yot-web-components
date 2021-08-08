import { LitElement, html, css, TemplateResult } from 'lit';

export class YotScrollView extends LitElement {
  static styles = css`
    :host {
      overflow-y: scroll;
      display: inline-block;
      position: relative;
      height: 100%;
      width: 100%;
      flex: 1;
    }
  `;

  render(): TemplateResult {
    return html` <slot></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'yot-scrollview': YotScrollView;
  }
}
