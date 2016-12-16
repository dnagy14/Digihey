import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RedditComponent } from './reddit.component';
import { ArticleComponent } from './article/article.component';
import { Custom} from '../custom.pipe';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [RedditComponent, ArticleComponent, Custom]
})
export class RedditModule { }
