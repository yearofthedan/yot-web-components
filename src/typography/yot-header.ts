import {
  css,
  customElement,
  html,
  LitElement,
  property,
  TemplateResult,
} from 'lit-element';

@customElement('yot-header')
export class YotHeader extends LitElement {
  @property()
  level = '1';

  @property({ attribute: 'visual-level' })
  visualLevel?: string;

  render(): TemplateResult {
    const dataVisualLevel = this.visualLevel ?? this.level;

    switch (this.level) {
      case '1':
        return html`<h1>
          <slot data-visual-level="${dataVisualLevel}"></slot>
        </h1>`;
      case '2':
        return html`<h2>
          <slot data-visual-level="${dataVisualLevel}"></slot>
        </h2>`;
      case '3':
        return html`<h3>
          <slot data-visual-level="${dataVisualLevel}"></slot>
        </h3>`;
      case '4':
        return html`<h4>
          <slot data-visual-level="${dataVisualLevel}"></slot>
        </h4>`;
      case '5':
        return html`<h5>
          <slot data-visual-level="${dataVisualLevel}"></slot>
        </h5>`;
      case '6':
        return html`<h6>
          <slot data-visual-level="${dataVisualLevel}"></slot>
        </h6>`;
      default:
        return html`<h1>
          <slot data-visual-level="${dataVisualLevel}"></slot>
        </h1>`;
    }
  }

  static styles = css`
    * {
      margin: 0;
      padding: 0;
    }

    slot[data-visual-level='1'] {
      font-family: 'Montserrat', sans-serif;
      font-weight: 300;
      line-height: var(--font-size-xl);
      font-size: var(--font-size-xl);
    }

    slot[data-visual-level='2'] {
      font-family: 'Montserrat', sans-serif;
      font-weight: 500;
      font-size: var(--font-size-l);
    }

    slot[data-visual-level='3'] {
      font-family: 'Montserrat', sans-serif;
      font-weight: 300;
      font-size: var(--font-size-l);
    }

    slot[data-visual-level='4'] {
      font-family: 'Montserrat', sans-serif;
      font-weight: 700;
      font-size: var(--font-size-m);
    }

    slot[data-visual-level='5'] {
      font-family: 'Montserrat', sans-serif;
      font-weight: 500;
      font-size: var(--font-size-m);
    }

    slot[data-visual-level='6'] {
      font-family: 'Montserrat', sans-serif;
      font-weight: 700;
      font-size: var(--font-size-s);
    }
  `;
}
