import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Tag } from 'src/app/models/tag';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private postService: PostService) { }
  tags : Tag[];
  posts : Post[];

  ngOnInit() {
    this.downloadPosts();

  }

   downloadPosts() { this.postService.GetPostList().subscribe(data => {this.posts = data; console.log(this.posts)})}

}
