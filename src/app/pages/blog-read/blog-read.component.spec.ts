import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogReadComponent } from './blog-read.component';

describe('BlogReadComponent', () => {
  let component: BlogReadComponent;
  let fixture: ComponentFixture<BlogReadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogReadComponent]
    });
    fixture = TestBed.createComponent(BlogReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
