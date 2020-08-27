const buttonPath = `${global.BASE_URL}?id=yot-button--normal`;

describe(buttonPath, () => {
  it('should be accessible', async () => {
    await page.goto(buttonPath);

    await expect(page).toPassAxeTests({
      include: 'yot-button',
    });
  });

  it('should not visually regress', async () => {
    await page.goto(buttonPath);

    const image = await page.screenshot();

    expect(image).toMatchImageSnapshot();
  });
});
