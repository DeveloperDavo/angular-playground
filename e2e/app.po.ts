import {browser, by, element, ElementArrayFinder} from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getTextOfColumnInRow(columnIndex: number, rowIndex: number) {
    return this.getAllTdElementsInIthTr(rowIndex).get(columnIndex).getText();
  }

  getRow(index: number) {
    return this.getAllTrElements().get(index);
  }

  private getAllTdElementsInIthTr(index: number) {
    return this.getRow(index).all(by.css('td'));
  }

  private getAllTrElements(): ElementArrayFinder {
    return element.all(by.css('app-main tr'));
  }


  getNameOfUserDetails() {
    return element(by.css('#user-details-name')).getText();
  }
}
