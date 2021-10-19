import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-bar',
  templateUrl: './experience-bar.component.html',
  styleUrls: ['./experience-bar.component.scss']
})
export class ExperienceBarComponent implements OnInit {
  minExp: number = 0;
  maxExp: number = 600;
  curExp: number = 600;
  progress: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.progress = this.getProgress();
  }

  getProgress(): number {
    let progress: number = 0;
    
    if (this.curExp > 0)
      progress = (this.curExp / this.maxExp) * 100;

    return progress;
  }

}
