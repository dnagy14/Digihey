import { DIGIHEYPROJECTSPage } from './app.po';

describe('digihey-projects App', function() {
  let page: DIGIHEYPROJECTSPage;

  beforeEach(() => {
    page = new DIGIHEYPROJECTSPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
