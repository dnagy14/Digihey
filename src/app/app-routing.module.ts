import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { RedditComponent } from './reddit/reddit.component';
import { ToDoListComponent } from './todolist/todolist.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';

export const appRoutes: Routes = [

  { path: '', component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'reddit' },
      { path: 'reddit', component: RedditComponent},
      { path: 'todolist', component: ToDoListComponent},
  ]},
  { path: 'login', component: LoginComponent},
  { path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
