import { DemoW6Page } from './app.po';

describe('demo-w6 App', () => {
  let page: DemoW6Page;

  beforeEach(() => {
    page = new DemoW6Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
