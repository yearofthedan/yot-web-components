import {
  LitElement,
  html,
  customElement,
  css,
  TemplateResult,
} from 'lit-element';

@customElement('yot-scrollview')
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
