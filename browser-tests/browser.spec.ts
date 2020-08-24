import JestMatchers = jest.JestMatchers;

interface ExtendedMatchers extends JestMatchers<Promise<void>> {
  toPassAxeTests: () => void;
}

describe('yot-button', () => {
  beforeAll(async () => {
    await page.goto(
      'http://localhost:4444/storybook-static?path=/story/yot-button--normal'
    );
  });

  it('be accessible', async () => {
    await (expect(page) as ExtendedMatchers).toPassAxeTests();

    await expect(page).toMatch('google');
  });
});
