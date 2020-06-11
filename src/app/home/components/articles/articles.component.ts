import { Component, OnInit } from '@angular/core';

import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

	public articles: Article[];

  constructor(
  	private _articleService: ArticleService
  ) { }

  ngOnInit(): void {
  	this.articles = this._articleService.getArticles();
  }

}
