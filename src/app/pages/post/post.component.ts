import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private route: ActivatedRoute) {}

  ngOnInit() { this.parseParams(); }
  parseParams() { this.route.paramMap.subscribe((params:any) => {this.id = params.params.id;});}    

 

  id: number;
}
