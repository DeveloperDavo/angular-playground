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
    expect(page.getTextOfColumnInRow(1, 0)).toEqual('Leanne Graham');
    expect(page.getTextOfColumnInRow(3, 1)).toEqual('Samantha');
    expect(page.getTextOfColumnInRow(6, 2)).toEqual('Karley_Dach@jasper.info');
    expect(page.getTextOfColumnInRow(9, 3)).toEqual('(775)976-6794 x41206');
  }

});
