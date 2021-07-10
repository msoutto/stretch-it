import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-bar',
  templateUrl: './experience-bar.component.html',
  styleUrls: ['./experience-bar.component.scss']
})
export class ExperienceBarComponent implements OnInit {

  progress: Number = 50;

  constructor() { }

  ngOnInit(): void {
  }

}
