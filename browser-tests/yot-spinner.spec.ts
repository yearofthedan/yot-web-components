describe('yot-spinner', () => {
  const url = `${global.BASE_URL}?id=yot-spinner--normal`;

  it('should be accessible', async () => {
    await page.goto(url);

    await expect(page).toPassAxeTests({
      include: 'yot-spinner',
    });
  });

  it('should not visually regress', async () => {
    await page.goto(url);

    const image = await page.screenshot();

    expect(image).toMatchImageSnapshot();
  });
});
