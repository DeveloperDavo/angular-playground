import {browser, by, element, ElementArrayFinder} from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getAllTrElements(): ElementArrayFinder {
    return element.all(by.css('app-main tr'));
  }

  getAllTdElementsInIthTr(index: number) {
    return this.getAllTrElements().get(index).all(by.css('td'));
  }

  getTextOfColumnInRow(rowIndex: number, columnIndex: number) {
    return this.getAllTdElementsInIthTr(rowIndex).get(columnIndex).getText();
  }


}
