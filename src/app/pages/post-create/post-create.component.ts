import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PostService } from 'src/app/services/post.service';
import { Tag } from 'src/app/models/tag';
import { isArray } from 'util';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Post } from 'src/app/models/post';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  error = '';
  postForm: FormGroup;
  tags : Tag[];
  tagsChecked : Tag[];
  post : Post;
  constructor(private route: Router, config: NgbModalConfig, private modalService: NgbModal, private postService: PostService, private formBuilder: FormBuilder) {}
  ngOnInit() { this.createPostObject();}

  createPostObject() {  this.post = Create(Post, []);}
  openTags(content) { console.log(this.post); this.downloadTags();  { this.modalService.open(content,{windowClass: 'modal-holder', centered:false, size: 'sm' });  }}
  downloadTags() { this.postService.GetTagsList().subscribe(data => {this.tags = data; this.disableCheckedTags()}) }
  addTag(tag, i) { this.post.Tags.push(tag); this.tagsChecked = this.post.Tags; this.tagsChecked.find(x => x.title == tag.title).checked = true; }
  disableCheckedTags() { 
    if (this.tagsChecked != null)
    {
      for (var i = 0, length = this.tagsChecked.length; i < length; i++) 
      {
        var chunk = this.tagsChecked[i];
        this.tags.find(x => x.title == chunk.title).checked = true;
  
       } 
    }
  }
  savePost()
  {
    this.postService.CreatePost(this.post).subscribe(data => { this.route.navigate(['posts']);});}
}

function Create(ctorFunc, ctorArgs) {
  ctorArgs.unshift(null);
  return new (Function.prototype.bind.apply(ctorFunc, ctorArgs ));
}
