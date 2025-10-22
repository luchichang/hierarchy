import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquiryNestedTreeComponent } from './enquiry-nested-tree.component';

describe('EnquiryNestedTreeComponent', () => {
  let component: EnquiryNestedTreeComponent;
  let fixture: ComponentFixture<EnquiryNestedTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnquiryNestedTreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnquiryNestedTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
