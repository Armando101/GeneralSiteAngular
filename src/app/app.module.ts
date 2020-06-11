import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/components/header/header.component';
import { ArticleHeroComponent } from './home/components/article-hero/article-hero.component';
import { ArticleComponent } from './home/components/article/article.component';
import { ArticlesComponent } from './home/components/articles/articles.component';
import { ArticleFooterComponent } from './home/components/article-footer/article-footer.component';
import { FooterComponent } from './home/components/footer/footer.component';
import { HomeComponent } from './home/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArticleHeroComponent,
    ArticleComponent,
    ArticlesComponent,
    ArticleFooterComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
