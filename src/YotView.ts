import { LitElement, html, css, TemplateResult } from 'lit';

export class YotView extends LitElement {
  static styles = css`
    :host {
      overflow-y: scroll;
      display: inline-flex;
      flex-direction: column;
      position: relative;
      width: fit-content;
      height: fit-content;
    }
  `;

  render(): TemplateResult {
    return html` <slot></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'yot-view': YotView;
  }
}
