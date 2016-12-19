import { Component, OnInit } from '@angular/core';
import { Article } from './article/article.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-reddit',
  templateUrl: './reddit.component.html',
  styleUrls: ['./reddit.component.sass'],
  providers: [AlertService]
})
export class RedditComponent implements OnInit {

  article: Article;
  articles = [];
  title;
  link;
  articleForm;

  constructor( private _alertService: AlertService ) {
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

    // this.articleForm.valueChanges.subscribe(value => {
    //   console.log(value);
    // });

  }

  onVoteUp(article) {
    article.voteUp();
    this._alertService.newAlert('success', 'voteup');
  }

  onVoteDown(article) {
    article.voteDown();
    this._alertService.newAlert('warning', 'votedown');
  }

  onSubmit(newArticle) {
    this.articles.push(new Article (newArticle.title, newArticle.link));
    this._alertService.newAlert('info', 'newarticle');
    this.articleForm.reset();
  }

  sortArticles() {
    return this.articles.sort(function(a, b) { return b.votes - a.votes; });
  }


}
