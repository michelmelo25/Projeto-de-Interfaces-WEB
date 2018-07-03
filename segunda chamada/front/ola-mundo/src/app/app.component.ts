import { PostInputComponent } from './post-input/post-input.component';
import { PostService } from './services/post.service';
import { Component } from '@angular/core';
import { Post } from './models/post.model';
import { TimelineComponent } from './timeline/timeline.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    private posts: Post[] = [];

    constructor(private service: PostService){
    }

    catchPost(component: PostInputComponent) {
        if (component instanceof PostInputComponent) {        
            this.service.add(component.post)
            .subscribe((data) => {
                if (data && data.nomePessoa && data.texto) {
                    this.posts.unshift(data as Post);
                }
            }
            , (error) => console.log(error));
        }
    }

    putPost(component: TimelineComponent) {
        if (component instanceof TimelineComponent) {
            component.posts = this.posts;
        }
    }
}
