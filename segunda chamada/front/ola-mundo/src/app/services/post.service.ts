import { Post } from './../models/post.model';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PostService {

    url: string = "http://rest.learncode.academy/api/nosliper/post";
    private posts: Post[] = [];
    
    constructor(private http: Http) { }
    
    private update(post: Post): Observable<any> {
        let headers: Headers = new Headers();
        headers.append("Content-Type", "application/json");
        return this.http.put(this.url + "/" + post.id, JSON.stringify(post), {headers: headers})
            .map((response: Response) => response.text())
            .catch((error: Response) => Observable.throw(error));
    }

    get(id) {
        return this.http.get(this.url + "/" + id)
            .map((response: Response) => {
                return response.json() as Post;
            })
             .catch((error: Response) => Observable.throw(error));
    }

    add(post: Post): Observable<any> {
        return this.http.post(this.url, post)
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error));
    }

    remove(id): Observable<any> {
        return this.http.delete(this.url + "/" + id)
        .map((response: Response) => response.text())
        .catch((error: Response) => Observable.throw(error));
    }

    addLike(post: Post): Observable<any> {
        post.qtdLikes +=1;
        return this.update(post);
    }
    edit(post: Post): Observable<any> {
        return this.update(post);
    }
    getAll(): Observable<any> {
        return this.http.get(this.url)
            .map((response: Response) => {
                this.posts = [];
                for(let post of response.json()) {
                    this.posts.push(post as Post);
                }
                return this.posts;
            })
            .catch((error: Response) => Observable.throw(error));
    }
}
