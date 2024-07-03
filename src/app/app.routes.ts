import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CharacterListComponent } from './components/dashboard/characters/character-list/character-list.component';
import { CommentListComponent } from './components/dashboard/comments/comment-list/comment-list.component';

export const routes: Routes = [
    { path: "", component: DashboardComponent,
        children: [
            { path: "character", component: CharacterListComponent},
            { path: "comment", component: CommentListComponent}
        ]
    },
];
