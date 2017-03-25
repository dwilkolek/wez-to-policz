import { WezToPoliczPage } from './app.po';

describe('wez-to-policz App', () => {
  let page: WezToPoliczPage;

  beforeEach(() => {
    page = new WezToPoliczPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
