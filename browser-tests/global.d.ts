declare namespace NodeJS {
  interface Global {
    BASE_URL: string;
  }
}

declare namespace jest {
  interface Matchers<R> {
    toPassAxeTests(config: object): R;
  }
}
