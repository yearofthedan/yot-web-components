import { screenshotElementsWithTag } from './test-setup/imageHelpers';

describe('yot-button', () => {
  ['normal', 'sizes'].forEach(example =>
    describe(example, () => {
      const url = `${global.BASE_URL}?id=yot-button--${example}`;
      it('should be accessible', async () => {
        await page.goto(url);

        await expect(page).toPassAxeTests({
          include: 'yot-button',
        });
      });

      it('should not visually regress', async () => {
        await page.goto(url);
        await page.waitForSelector('yot-button');

        const images = await screenshotElementsWithTag('yot-button');

        images.forEach(image => {
          expect(image).toMatchImageSnapshot();
        });
      });
    })
  );
});
