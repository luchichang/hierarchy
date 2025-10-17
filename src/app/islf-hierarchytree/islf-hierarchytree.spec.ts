import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IslfHierarchytree } from './islf-hierarchytree';

describe('IslfHierarchytree', () => {
  let component: IslfHierarchytree;
  let fixture: ComponentFixture<IslfHierarchytree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IslfHierarchytree]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IslfHierarchytree);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
