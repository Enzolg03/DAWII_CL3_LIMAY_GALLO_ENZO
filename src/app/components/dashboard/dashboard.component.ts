import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, MaterialModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private router: Router, 
    private route: ActivatedRoute){}
    irHome(){
      this.router.navigate([""],{relativeTo: this.route})
    }
    irCharacter(){
      this.router.navigate(["character"],{relativeTo: this.route})
    }
    irComment(){
      this.router.navigate(["comment"],{relativeTo: this.route})
    }
}