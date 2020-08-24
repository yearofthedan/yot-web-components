interface ExtendedMatchers extends jest.JestMatchers<Promise<void>> {
  toPassAxeTests: (config?: object) => void;
}

const path = `${global.BASE_URL}?id=yot-button--normal`;

describe(path, () => {
  beforeAll(async () => {
    await page.goto(`${global.BASE_URL}?id=yot-button--normal`);
  });

  it('be accessible', async () => {
    await expect(page).toMatch('continue');

    await (expect(page) as ExtendedMatchers).toPassAxeTests({
      include: 'yot-button',
    });
  });
});
