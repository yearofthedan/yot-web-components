import { html } from '@open-wc/demoing-storybook';

export const listComponent = entries => {
  return html`
    <style>
      dl * {
        margin: 0;
      }
      dl {
        display: grid;
        grid-template-columns: max-content 1fr;
        grid-gap: 1rem;
      }
      dd {
        background-color: lightgrey;
        padding: 1rem;
      }
    </style>

    <dl>
      ${entries.map(entry => {
        return html`
          <dt>
            ${entry.label}
          </dt>
          <dd>
            ${entry.content}
          </dd>
        `;
      })}
    </dl>
  `;
};
