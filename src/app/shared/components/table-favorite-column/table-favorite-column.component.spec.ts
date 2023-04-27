import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFavoriteColumnComponent } from './table-favorite-column.component';

describe('TableFavoriteColumnComponent', () => {
  let component: TableFavoriteColumnComponent;
  let fixture: ComponentFixture<TableFavoriteColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableFavoriteColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableFavoriteColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
