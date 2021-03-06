describe('yot-field', () => {
  const url = `${global.BASE_URL}?id=yot-field--normal`;

  it('should be accessible', async () => {
    await page.goto(url);
    await page.waitForSelector('input');

    await expect(page).toPassAxeTests({
      include: 'yot-field',
    });
  });

  it('should not visually regress', async () => {
    await page.goto(url);

    const image = await page.screenshot();

    expect(image).toMatchImageSnapshot();
  });
});
