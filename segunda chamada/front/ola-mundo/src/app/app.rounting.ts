import { Routes, RouterModule } from '@angular/router';

import { PostInputComponent } from './post-input/post-input.component';
import { PostComponent } from './post/post.component';
import { TimelineComponent } from './timeline/timeline.component';

const APP_ROUTES: Routes = [
    {path: "", redirectTo: "/timeline", pathMatch: "full"},
    {path: "timeline", component: TimelineComponent, pathMatch: "full"},
    {path: "postar", component: PostInputComponent, pathMatch: "full"}
];

export const routing = RouterModule.forRoot(APP_ROUTES);