import { PasswordGeneratorPage } from './app.po';

describe('password-generator App', () => {
  let page: PasswordGeneratorPage;

  beforeEach(() => {
    page = new PasswordGeneratorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
