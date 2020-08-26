interface ExtendedMatchers extends jest.JestMatchers<Promise<void>> {
  toPassAxeTests: (config?: object) => void;
}

const inputPath = `${global.BASE_URL}?id=yot-field--normal`;

describe(inputPath, () => {
  it('should be accessible', async () => {
    await page.goto(inputPath);
    await page.waitForSelector('input');

    await (expect(page) as ExtendedMatchers).toPassAxeTests({
      include: 'yot-field',
    });
  });
});
