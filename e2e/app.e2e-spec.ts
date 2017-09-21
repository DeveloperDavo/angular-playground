import {MainPage} from './main.po';
import {browser} from 'protractor';
import {DetailPage} from './detail.po';

describe('e2e', () => {
  const page = new MainPage();
  const detailPage = new DetailPage();

  it('user journey', () => {
    page.navigateToRoot();

    expectUrlToBeMain();

    shouldDisplayUsers();

    shouldNavigateToDetailUrlUponRowClick();

    shouldDisplayDetailView();
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

  function shouldNavigateToDetailUrlUponRowClick() {
    page.getRow(1).click();

    expect(browser.getCurrentUrl()).toMatch(new RegExp(/http:\/\/localhost:49152\/detail\/\d+/));
  }

  function shouldDisplayDetailView() {
    expect(detailPage.getUsername()).toBeTruthy();
  }
});
