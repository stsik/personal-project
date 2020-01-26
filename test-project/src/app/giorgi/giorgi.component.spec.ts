import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiorgiComponent } from './giorgi.component';

describe('GiorgiComponent', () => {
  let component: GiorgiComponent;
  let fixture: ComponentFixture<GiorgiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiorgiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiorgiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
