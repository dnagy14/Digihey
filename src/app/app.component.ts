import { Component, OnInit } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  article: Article;
  articles = [];

  constructor() {
  }

  ngOnInit() {
    this.articles = [
      new Article ('Angular 1', 'https://angular-ui.github.io/bootstrap/', 1),
      new Article ('Angular 2', 'https://angular-ui.github.io/bootstrap/', 2),
      new Article ('Angular 3', 'https://angular-ui.github.io/bootstrap/', 3),
    ];
    this.articles.sort(function(a, b) {return b.votes - a.votes; });
  }

  onVoteUp(evt) {
    // this.article.voteUp();
    console.log(evt);
  }

  onVoteDown() {
    //
  }

  onSubmit(newArticle) {
    newArticle = new Article (newArticle.title, newArticle.link);
    this.articles.push(newArticle);
  }

}
