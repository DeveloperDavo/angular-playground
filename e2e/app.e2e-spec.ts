import {AppPage} from './app.po';
import {browser} from 'protractor';

describe('e2e', () => {
  const page = new AppPage();

  it('user journey', () => {
    page.navigateToRoot();

    expectUrlToBeMain();

    shouldDisplayWelcomeToApp();

    shouldDisplayUsers();
  });


  function expectUrlToBeMain() {
    expect(browser.getCurrentUrl()).toBe('http://localhost:49152/main');
  }

  function shouldDisplayWelcomeToApp() {
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  }

  function shouldDisplayUsers() {
    expect(page.getTextOfColumnInRow(0, 1)).toEqual('Leanne Graham');
    expect(page.getTextOfColumnInRow(1, 3)).toEqual('Samantha');
    expect(page.getTextOfColumnInRow(2, 6)).toEqual('Karley_Dach@jasper.info');
    expect(page.getTextOfColumnInRow(3, 9)).toEqual('(775)976-6794 x41206');
  }

});
