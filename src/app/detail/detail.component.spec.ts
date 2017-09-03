import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailComponent } from './detail.component';
import {By} from '@angular/platform-browser';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render username', async(() => {
    component.user = {id: 0, username: 'Bob'};

    fixture.detectChanges();

    const debugElements = fixture.debugElement.queryAll(By.css('#user-details div'));
    expect(debugElements[1].nativeElement.textContent).toContain('username: Bob');
  }));

  it('should render user\'s details', async(() => {
    component.user = {id: 0, name: 'Foo Bar', username: 'foobar', email: 'foobar@gmail.com', phone: '1234'};

    fixture.detectChanges();

    const debugElements = fixture.debugElement.queryAll(By.css('#user-details div'));
    expect(debugElements[0].nativeElement.textContent).toContain('name: Foo Bar');
    expect(debugElements[1].nativeElement.textContent).toContain('username: foobar');
    expect(debugElements[2].nativeElement.textContent).toContain('email: foobar@gmail.com');
    expect(debugElements[3].nativeElement.textContent).toContain('phone: 1234');

  }));
});
