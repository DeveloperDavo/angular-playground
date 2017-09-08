import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {DetailComponent} from './detail.component';
import {By} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DetailComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should edit user\'s name', fakeAsync(() => {
    component.user = {id: 0, name: 'Bob', username: 'Bobby'};

    fixture.detectChanges();
    tick();
    fixture.detectChanges();

    const debugElement = fixture.debugElement.query(By.css('#input-name'));
    debugElement.nativeElement.value = 'Tom';
    const event = new Event('input');
    debugElement.nativeElement.dispatchEvent(event);

    expect(component.user.name).toBe('Tom');
  }));

  it('should render username', async(() => {
    component.user = {id: 0, username: 'Bob'};

    fixture.detectChanges();

    const debugElements = fixture.debugElement.queryAll(By.css('#user-details div'));
    expect(debugElements[1].nativeElement.textContent).toContain('username: Bob');
  }));

  it('should render user\'s details', fakeAsync(() => {
    component.user = {id: 0, name: 'Foo Bar', username: 'foobar', email: 'foobar@gmail.com', phone: '1234'};

    fixture.detectChanges();
    tick();
    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('#input-name')).nativeElement.value).toBe('Foo Bar');
    const debugElements = fixture.debugElement.queryAll(By.css('#user-details div'));
    expect(debugElements[1].nativeElement.textContent).toContain('username: foobar');
    expect(debugElements[2].nativeElement.textContent).toContain('email: foobar@gmail.com');
    expect(debugElements[3].nativeElement.textContent).toContain('phone: 1234');

  }));
});
