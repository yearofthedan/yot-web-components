import './yot-button.ts';
import { screen } from 'testing-library__dom';
import { fixture } from '@open-wc/testing-helpers';

describe('yot-button', () => {
  beforeEach(async () => {
    await fixture('<yot-button></yot-button>');
  });

  it('renders an underlying button', () => {
    expect(screen.getByRole('button')).toBeDefined();
  });
});
