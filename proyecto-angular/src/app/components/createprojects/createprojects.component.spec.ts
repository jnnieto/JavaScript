import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateprojectsComponent } from './createprojects.component';

describe('CreateprojectsComponent', () => {
  let component: CreateprojectsComponent;
  let fixture: ComponentFixture<CreateprojectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateprojectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
