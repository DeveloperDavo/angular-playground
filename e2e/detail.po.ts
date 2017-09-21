import {by, element} from 'protractor/built';

export class DetailPage {

  getUsername() {
    return element(by.css('#input-username')).getAttribute('value');
  }
}
