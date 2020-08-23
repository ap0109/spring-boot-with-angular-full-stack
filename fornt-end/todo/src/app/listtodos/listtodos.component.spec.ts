import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListtodosComponent } from './listtodos.component';

describe('ListtodosComponent', () => {
  let component: ListtodosComponent;
  let fixture: ComponentFixture<ListtodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListtodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListtodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
