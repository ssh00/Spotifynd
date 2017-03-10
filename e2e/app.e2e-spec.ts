import { SpotifindPage } from './app.po';

describe('spotifind App', () => {
  let page: SpotifindPage;

  beforeEach(() => {
    page = new SpotifindPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
