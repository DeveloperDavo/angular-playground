import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SampleComponent} from './sample.component';
import {DragulaModule, DragulaService} from 'ng2-dragula';
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('SampleComponent', () => {
  let component: SampleComponent;
  let fixture: ComponentFixture<SampleComponent>;
  let dragulaService: DragulaService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DragulaModule],
      declarations: [SampleComponent],
      providers: [DragulaService],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleComponent);
    component = fixture.componentInstance;

    dragulaService = fixture.debugElement.injector.get(DragulaService);

    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should fire dropModel event', () => {
    dragulaService.dropModel.emit([]);
    expect(component.wasDropped).toBe(true);
  });

  it('should get custom attribute value', () => {
    const tempValue = document.getElementById('temp').dataset.tempvalue;
    expect(tempValue).toBe('bar');
  });
});
