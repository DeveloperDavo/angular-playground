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

  getAllTdElementsInIth(elements: ElementArrayFinder, index) {
    return elements.get(index).all(by.css('td'));
  }

}
