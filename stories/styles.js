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
      --palette-primary-light: #C8E6C9;
      --palette-primary-light-on: #151414;
      --palette-primary: #66BB6A;
      --palette-primary-on: #151414;
      --palette-primary-dark: #388E3C;
      --palette-primary-dark-on: #eef2f1;
      --palette-secondary-light: #BCAAA4;
      --palette-secondary-light-on: #151414;
      --palette-secondary: #795548;
      --palette-secondary-on: #eef2f1;
      --palette-secondary-dark: #4E342E;
      --palette-secondary-dark-on: #eef2f1;
      --palette-background-light: #FAFAFA;
      --palette-background-light-on: #151414;
      --palette-background: #EEEEEE;
      --palette-background-on: #151414;
      --palette-background-dark: #CACACA;
      --palette-background-dark-on: #151414;      
      --palette-success: #8BC34A;
      --palette-success-on: #151414;
      --palette-error: #D84315;
      --palette-error-on: #eef2f1;
      --palette-info: #FDD835;
      --palette-info-on: #151414;

      --font-size-body-text: 1rem;
      --font-size-aside-text: 0.8rem;
      --font-size-label-text: 0.75rem;

      --padding-unit: 0.25rem;
      --base-unit: 0.125rem;
    }
`;
export default styles;
