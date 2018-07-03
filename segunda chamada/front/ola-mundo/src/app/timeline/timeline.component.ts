import { PostService } from './../services/post.service';
import { Post } from './../models/post.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-timeline',
	templateUrl: './timeline.component.html',
	styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
	public static POSTS: Post[] = [];
	posts: Post[] = [];

	constructor(private service: PostService) {
	}

	ngOnInit() {
	}

	private getIndex(id): number {
		return this.posts.findIndex((v) => v.id === id);
	}

	private getById(id): Post {
		let post: Post;
		this.service.get(id)
			.subscribe((data) =>{
				post = data as Post;
			}
			, (error) => console.log("Could not get post"));
		return post;
	}

	private update(id): void {
		this.service.get(id)
			.subscribe((data) => {
				this.posts[this.getIndex(id)] = data as Post;
			}
			, (error) => console.log("Could not update inner post"));
	}

	add(post: Post): void {
        this.service.add(post)
            .subscribe((data) => console.log("added: " + data)
			, (error) => console.log(error));
		this.getAll();
    }

    remove(id): void {
        this.service.remove(id)
            .subscribe((data) => console.log("removed: " + data)
			, (error) => console.log(error));
			this.posts.splice(this.getIndex(id), 1);
    }

    addLike(post: Post): void {
        this.service.addLike(post)
            .subscribe((data) => console.log("like post: " + data)
			, (error) => console.log("Could not add like to post"));
	}
	
	edit(post: Post) {
		this.service.edit(post)
			.subscribe((data) => console.log("Edited: " + data)
			, (error) => console.log("Could not edit"));
	}

    getAll(): void {
        this.service.getAll()
            .subscribe((data) => {
				this.posts = data as Post[];
			}
			, (error) => console.log("Could not get posts"));
    }
}