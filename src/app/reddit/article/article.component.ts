import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.sass'],
  providers: []
})
export class ArticleComponent implements OnInit {

  @Input() article: Article;
  @Output() voteUp: EventEmitter<any> = new EventEmitter<any>();
  @Output() voteDown: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {

  }

  onVoteUp(): boolean {
    this.voteUp.emit(this.article);
    return false;
  }

  onVoteDown(): boolean {
    this.voteDown.emit(this.article);
    return false;
  }

}
