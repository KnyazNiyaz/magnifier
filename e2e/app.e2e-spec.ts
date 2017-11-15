import { MagnifierPage } from './app.po';

describe('magnifier App', () => {
  let page: MagnifierPage;

  beforeEach(() => {
    page = new MagnifierPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
