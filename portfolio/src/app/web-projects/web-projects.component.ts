import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-web-projects',
  standalone: true,
  imports: [ RouterLink ],
  templateUrl: './web-projects.component.html',
  styleUrl: './web-projects.component.css'
})
export class WebProjectsComponent implements OnInit {
  
  ngOnInit(): void {
    window.scrollTo(0, 0); // Scrolls the viewport to the top-left corner
  }
}