const styles = `
    * {
      box-sizing: border-box;
      font-family: 'Raleway', sans-serif;
    }

    form {
      display: grid;
      grid-row-gap: calc(2 * var(--padding-unit));
    }

    body {
      --palette-crowshead: #2a160b;
      --palette-marigold: #c19230;
      --palette-cloudy: #f8fafc;
      --palette-overcast: #ecf4f9;
      --palette-fountain-blue: #62a9c1;
      --palette-wedgewood: #497897;

      --color-headline: var(--palette-fountain-blue);
      --color-background: var(--palette-cloudy);
      --color-background-alt: var(--palette-overcast);
      --color-label-text: var(--palette-marigold);
      --color-body-text: var(--palette-wedgewood);
      --color-accent:  var(--palette-crowshead);
      --color-accent-alt:  var(--palette-marigold);
      --color-error-text: var(--color-accent-alt);

      --font-size-body-text: 1rem;
      --font-size-aside-text: 0.8rem;
      --font-size-label-text: 0.75rem;

      --padding-unit: 0.25rem;
      --base-unit: 0.125rem;
    }
`;
export default styles;
