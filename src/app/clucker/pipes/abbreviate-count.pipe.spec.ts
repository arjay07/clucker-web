import { AbbreviateCountPipe } from './abbreviate-count.pipe';

describe('AbbreviateCountPipe', () => {
  it('create an instance', () => {
    const pipe = new AbbreviateCountPipe();
    expect(pipe).toBeTruthy();
  });
});
