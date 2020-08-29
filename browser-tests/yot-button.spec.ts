describe('yot-button', () => {
  ['normal', 'sizes'].forEach(example =>
    describe('normal', () => {
      const url = `${global.BASE_URL}?id=yot-button--${example}`;

      it('should be accessible', async () => {
        await page.goto(url);

        await expect(page).toPassAxeTests({
          include: 'yot-button',
        });
      });

      it('should not visually regress', async () => {
        const COMPENSATION_FOR_ANIMATION = 30;
        await page.goto(url);

        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
          failureThreshold: COMPENSATION_FOR_ANIMATION,
        });
      });
    })
  );
});
