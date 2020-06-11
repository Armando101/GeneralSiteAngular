import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleHeroComponent } from './article-hero.component';

describe('ArticleHeroComponent', () => {
  let component: ArticleHeroComponent;
  let fixture: ComponentFixture<ArticleHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
