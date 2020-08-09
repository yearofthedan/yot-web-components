import './yot-field.ts';
import { screen } from 'testing-library__dom';
import { fixture } from '@open-wc/testing-helpers';

describe('yot-field', () => {
  beforeEach(async () => {
    await fixture('<yot-field></yot-field>');
  });

  it('renders an underlying input', () => {
    expect(screen.getByRole('textbox')).toBeDefined();
  });
});
