import { screenshotElementsWithTag } from './test-setup/imageHelpers';

describe('yot-textbox', () => {
  [
    'text-field',
    'multiline',
    'phone',
    'email',
    'password-field',
    'number',
    'errors',
  ].forEach(example =>
    describe(example, () => {
      const url = `${global.BASE_URL}?id=yot-textbox--${example}`;

      it('should be accessible', async () => {
        await page.goto(url);

        await expect(page).toPassAxeTests({
          include: 'yot-textbox',
        });
      });

      it('should not visually regress', async () => {
        await page.goto(url);
        await page.waitForSelector('yot-textbox');

        const images = await screenshotElementsWithTag('yot-textbox', 100);

        images.forEach(image => {
          expect(image).toMatchImageSnapshot();
        });
      });
    })
  );
});
