import {browser, by, element, ElementArrayFinder} from 'protractor';

export class AppPage {
  navigateToRoot() {
    return browser.get('/');
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
    return element.all(by.css('#main-table tr'));
  }
}
