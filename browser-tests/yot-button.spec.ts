interface ExtendedMatchers extends jest.JestMatchers<Promise<void>> {
  toPassAxeTests: (config?: object) => void;
}

const buttonPath = `${global.BASE_URL}?id=yot-button--normal`;

describe(buttonPath, () => {
  it('should be accessible', async () => {
    await page.goto(buttonPath);

    await (expect(page) as ExtendedMatchers).toPassAxeTests({
      include: 'yot-button',
    });
  });
});
