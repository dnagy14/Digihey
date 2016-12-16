import { Component, OnInit } from '@angular/core';
import { Article } from './article/article.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reddit',
  templateUrl: './reddit.component.html',
  styleUrls: ['./reddit.component.sass']
})
export class RedditComponent implements OnInit {

  article: Article;
  articles = [];
  title;
  link;
  articleForm;

  constructor() {
  }

  ngOnInit() {

    this.articleForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]),
      link: new FormControl('', [Validators.required,
        Validators.pattern('^(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$')])
    });

    this.articles = [
      new Article ('Angular 1', 'https://angular-ui.github.io/bootstrap/', 1),
      new Article ('Angular 2', 'https://angular-ui.github.io/bootstrap/', 2),
      new Article ('Angular 3', 'https://angular-ui.github.io/bootstrap/', 3),
    ];

    this.articleForm.valueChanges.subscribe(value => {
      console.log(value);

    });

  }

  onVoteUp(article) {
    article.voteUp();
  }

  onVoteDown(article) {
    article.voteDown();
  }

  onSubmit(newArticle) {
    this.articles.push(new Article (newArticle.title, newArticle.link));
    console.log(this.articles);
    this.articleForm.reset();
  }

  sortArticles() {
    return this.articles.sort(function(a, b) { return b.votes - a.votes; });
  }


}
