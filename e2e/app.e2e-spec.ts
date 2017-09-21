import {AppPage} from './app.po';
import {browser} from 'protractor';

describe('e2e', () => {
  const page = new AppPage();

  it('user journey', () => {
    page.navigateToRoot();

    expectUrlToBeMain();

    shouldDisplayUsers();

    shouldNavigateToDetailUponRowClick();
  });


  function expectUrlToBeMain() {
    expect(browser.getCurrentUrl()).toBe('http://localhost:49152/main');
  }

  function shouldDisplayUsers() {
    expect(page.getTextOfColumnInRow(0, 1)).toBeTruthy();
    expect(page.getTextOfColumnInRow(1, 3)).toBeTruthy();
    expect(page.getTextOfColumnInRow(2, 6)).toBeTruthy();
    expect(page.getTextOfColumnInRow(3, 9)).toBeTruthy();
  }

  function shouldNavigateToDetailUponRowClick() {
    page.getRow(0).click();

    expect(browser.getCurrentUrl()).toBe('http://localhost:49152/detail');
  }
});
