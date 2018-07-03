import { routing } from './app.rounting';
import { PostService } from './services/post.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { NavbarComponent } from './nav/nav.component';
import { TimelineComponent } from './timeline/timeline.component';
import { PostComponent } from './post/post.component';
import { PostInputComponent } from './post-input/post-input.component';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';


@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    NavbarComponent,
    TimelineComponent,
    PostComponent,
    PostInputComponent,
    LoadingScreenComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    FormsModule
  ],
  providers: [PostService, PostComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }