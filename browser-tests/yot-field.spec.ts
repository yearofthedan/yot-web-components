const inputPath = `${global.BASE_URL}?id=yot-field--normal`;

describe(inputPath, () => {
  it('should be accessible', async () => {
    await page.goto(inputPath);
    await page.waitForSelector('input');

    await expect(page).toPassAxeTests({
      include: 'yot-field',
    });
  });

  it('should not visually regress', async () => {
    await page.goto(inputPath);

    const image = await page.screenshot();

    expect(image).toMatchImageSnapshot();
  });
});
