import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// root component
import { AppComponent } from './app.component';

// layout component
import { LayoutComponent } from './layout/layout.component';

// feature modules
import { RedditModule } from './reddit/reddit.module';
import { LoginModule } from './login/login.module';
import { PageNotFoundModule } from './pagenotfound/pagenotfound.module';
import { ToDoListModule } from './todolist/todolist.module';
import { AlertComponent } from './alert/alert.component';

// services
import { AlertService } from './alert.service';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    PageNotFoundModule,
    ToDoListModule,
    RedditModule,
    NgbModule.forRoot(),
  ],
  providers: [AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
