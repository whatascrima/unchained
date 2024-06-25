import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherProductsComponent } from './other-products.component';

describe('OtherProductsComponent', () => {
  let component: OtherProductsComponent;
  let fixture: ComponentFixture<OtherProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtherProductsComponent]
    });
    fixture = TestBed.createComponent(OtherProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
