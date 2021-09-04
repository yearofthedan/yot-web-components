import { html } from '@open-wc/testing';

export const singleWithOn = (name, nameOn, text) => {
  return html`
  <style>
    li {
      display: inline-block;
      border: 1px solid;
    }

    .single-swatch {
      height: 60px;
    }

    .description {
      padding: var(--inset-density-s) var(--inset-density-m);
    }
  </style>
  <li>
    <div
        style="
            color: var(${nameOn});
            background-color: var(${name});
            width: 100%;
            padding: var(--inset-density-s) var(--inset-density-m);
           "
      >
        <div>${text}</div>
      </div>
    </div>
  </li>
  `;
}

export const single = (name) => {
  return html`
    <style>
      li {
        display: inline-block;
        border: 1px solid;
      }

      .single-swatch {
        height: 600px;
      }

      .description {
        padding: var(--inset-density-s) var(--inset-density-m);
      }
    </style>
    <li>
      <div class="single-swatch"
        style="
            background-color: var(${name});
            width: 100%;
           "
      >
      </div>
      <pre class="description">
${name}
${getComputedStyle(document.documentElement).getPropertyValue(name)}</pre>
    </li>
    `;
}

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
