import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiPost } from 'src/environments/environment';
import { Tag } from '../models/tag';
import { Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable({ providedIn: 'root' })
export class PostService {
    constructor(private _http: HttpClient) {} 
    GetTagsList() { return this._http.get<Tag[]>(apiPost.tags);}
    CreatePost(post: Post) {return this._http.post<Post>(apiPost.createPost, post); }
    GetPostList() { return this._http.get<Post[]>(apiPost.posts);}
}