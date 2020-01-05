import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './pages/posts/posts.component';
import { PostComponent } from './pages/post/post.component';
import { AuthorInfoComponent } from './pages/author-info/author-info.component';
import { AuthenticateComponent } from './pages/account/authenticate/authenticate.component';
import { PostCreateComponent } from './pages/post-create/post-create.component';
import { AuthGuard } from './_helpers/auth.guard';


const routes: Routes = [
  {
    path: 'posts',
    component: PostsComponent,
    canActivate: [AuthGuard]
},

{
  path: 'post/:id',
  component: PostComponent,
  canActivate: [AuthGuard]
},

{
  path: 'create-post',
  component: PostCreateComponent,
  canActivate: [AuthGuard]
},

{
  path: 'author',
  component: AuthorInfoComponent,
  canActivate: [AuthGuard]
},

{
  path: 'authenticate',
  component: AuthenticateComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
