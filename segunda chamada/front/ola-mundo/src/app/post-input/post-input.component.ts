import { PostService } from './../services/post.service';
import { Post } from './../models/post.model';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
    selector: 'app-post-input',
    templateUrl: './post-input.component.html',
    styleUrls: ['./post-input.component.css']
})
export class PostInputComponent implements OnInit {
    
    @Input() post: Post = undefined;
    @Input() texto: string;
    @Input() nomePessoa: string;

    constructor() {
    }

    onNewPost(event): void {
        this.post = new Post(undefined, this.nomePessoa, this.texto, 0)
        event.preventDefault();
    }
    ngOnInit() {
    }

}
