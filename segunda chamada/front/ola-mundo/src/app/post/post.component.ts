import { PostService } from './../services/post.service';
import { Post } from './../models/post.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {
    
    isEditing: boolean;
    isDeleting: boolean;
    @Input() post: Post;
    @Output() clickLike: EventEmitter<Post> = new EventEmitter<Post>();
    @Output() clickDelete: EventEmitter<number> = new EventEmitter<number>();
    @Output() clickEdit: EventEmitter<Post> = new EventEmitter<Post>();
    
    constructor(private service: PostService) {
    }

    ngOnInit() {
    }

    onClickLike(event): void {
        this.clickLike.emit(this.post);
    }

    onClickDelete(event): void {
        this.clickDelete.emit(this.post.id);
    }

    onClickEdit(event) {
        this.clickEdit.emit(this.post);
        this.isEditing = false;
    }
}
