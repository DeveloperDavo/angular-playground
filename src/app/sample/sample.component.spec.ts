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

  it('should get project id from custom attribute', () => {
    const projectId = document.getElementById('projectId-5').dataset.projectid;
    expect(projectId).toBe('5');
  });

  it('should get project id from dropped element', () => {
    dragulaService.dropModel.emit(['bag', document.getElementById('projectId-5')]);
    fixture.detectChanges();
    expect(component.droppedProjectId).toBe(5);
  });

});
