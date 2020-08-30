export const screenshotElementsWithTag = async (
  tagName: string,
  padding = 0
): Promise<Buffer[]> => {
  const elements = await page.evaluate(selector => {
    const queryResult = Array.from(
      document.querySelectorAll(`${selector}:not([data-skip-visual-test])`)
    );
    return queryResult.map(el => {
      const { x, y, width, height } = el.getBoundingClientRect();
      return { left: x, top: y, width, height };
    });
  }, tagName);

  return Promise.all(
    elements.map(el =>
      page.screenshot({
        clip: {
          x: el.left - padding,
          y: el.top - padding,
          width: el.width + padding * 2,
          height: el.height + padding * 2,
        },
        omitBackground: true,
      })
    )
  );
};
