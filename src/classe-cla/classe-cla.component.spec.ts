import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasseCLAComponent } from './classe-cla.component';

describe('ClasseCLAComponent', () => {
  let component: ClasseCLAComponent;
  let fixture: ComponentFixture<ClasseCLAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClasseCLAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClasseCLAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
