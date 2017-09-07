import {AppPage} from './app.po';

describe('e2e', () => {
  const page = new AppPage();

  it('user journey', () => {
    page.navigateTo();

    shouldDisplayWelcomeToApp();

    shouldDisplayUsers();

  });

  function shouldDisplayWelcomeToApp() {
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  }

  function shouldDisplayUsers() {
    const allTrElements = page.getAllTrElements();
    expect(allTrElements.count()).toEqual(11);
    expect(page.getAllTdElementsInIth(allTrElements, 1).count()).toEqual(4);
  }

});
