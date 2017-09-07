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
    const firstNameInTable = page.getAllTdElementsInIthTr(1).get(0).getText();
    expect(firstNameInTable).toEqual('Leanne Graham');
  }

});
