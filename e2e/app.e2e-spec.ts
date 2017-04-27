import { NgudemyPage } from './app.po';

describe('ngudemy App', () => {
  let page: NgudemyPage;

  beforeEach(() => {
    page = new NgudemyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
