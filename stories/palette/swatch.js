import { html } from 'lit-element';

export const swatch = (name, color, colorOn) => {
  const backgroundColorCssVar = `--palette-${name}`;
  const foregroundColorCssVar = `--palette-${name}-on`;

  return html`
    <style>
      li {
        margin-right: 4px;
        display: grid;
        grid-template-columns: 1fr 200px;
      }
    </style>
    <li>
      <div
        style="
            color: var(${foregroundColorCssVar});
            background-color: var(${backgroundColorCssVar});
            width: 100%;
            padding: var(--inset-density-s) var(--inset-density-m);
           "
      >
        <div style="font-family: monospace;">${color} (bg)</div>
        <div style="font-family: monospace;">${colorOn} (fg)</div>
      </div>
      <pre>
${backgroundColorCssVar}
${foregroundColorCssVar}</pre
      >
      <div>${name}</div>
    </li>
  `;
};
