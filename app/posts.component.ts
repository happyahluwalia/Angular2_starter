import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'posts',
    templateUrl: 'app/views/posts.component.html'
})

export class PostsComponent implements OnInit {
    constructor(private _router: Router) { }

    ngOnInit() { }
}