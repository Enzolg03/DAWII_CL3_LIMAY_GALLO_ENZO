import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from '../comment.service';
import { Comment } from '../comment';
import { MaterialModule } from '../../../../angular-material/material/material.module';

@Component({
  selector: 'app-comment-list',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './comment-list.component.html',
  styleUrl: './comment-list.component.css'
})
export class CommentListComponent implements OnInit{
  displayedColumns: string[] = ['postId', 'id', 'name', 'email','body'];
  comments: Comment[] = [];

  constructor(private commentService : CommentService){}
  
  ngOnInit(): void {
    this.commentService.getAllComments().subscribe((data) => {
      this.comments = this.filterCommentsByDomain(data, 'garfield.biz');
    });
  }
  private filterCommentsByDomain(comments: Comment[], domain: string): Comment[] {
    return comments.filter(comment => comment.email.endsWith(`@${domain}`));
  }
}
