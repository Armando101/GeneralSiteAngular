import { Injectable } from '@angular/core';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

	public articles: Article[];

  constructor() {
  	this.articles = [
  		new Article('El 29 de octubre del 2012', 'Ernesto G Bustamante', '3 comentarios', 'Las bondades de HTML5', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At expedita voluptatem aut consequuntur modi minima necessitatibus cumque est veritatis vitae maiores neque maxime, sit quaerat, iste iusto deleniti odio dolor!'),
  		new Article('El 29 de octubre del 2012', 'Ernesto G Bustamante', '3 comentarios', 'HTML5 en dispositivos móviles', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At expedita voluptatem aut consequuntur modi minima necessitatibus cumque est veritatis vitae maiores neque maxime, sit quaerat, iste iusto deleniti odio dolor!'),
  		new Article('El 29 de octubre del 2012', 'Ernesto G Bustamante', '3 comentarios', 'Internet Explorer es una basura', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At expedita voluptatem aut consequuntur modi minima necessitatibus cumque est veritatis vitae maiores neque maxime, sit quaerat, iste iusto deleniti odio dolor!'),
  		new Article('El 29 de octubre del 2012', 'Ernesto G Bustamante', '3 comentarios', 'Diseño web en plantillas retina', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At expedita voluptatem aut consequuntur modi minima necessitatibus cumque est veritatis vitae maiores neque maxime, sit quaerat, iste iusto deleniti odio dolor!')
  	];
  }


  getArticles() {
  	return this.articles;
  }
}
