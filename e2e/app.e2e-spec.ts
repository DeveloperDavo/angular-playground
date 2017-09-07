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
    expect(page.getAllTrElements().count()).toEqual(11);
    expect(page.getAllTdElementsInIthTr(1).count()).toEqual(4);
    expect(page.getTextOfColumnInRow(1, 0)).toEqual('Leanne Graham');
  }

});
