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

  private getAllTdElementsInIthTr(index: number) {
    return this.getAllTrElements().get(index).all(by.css('td'));
  }

  private getAllTrElements(): ElementArrayFinder {
    return element.all(by.css('app-main tr'));
  }


}
