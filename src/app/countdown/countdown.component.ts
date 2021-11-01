import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

const initialTime: number = 0.1 * 60;

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {
  // Time in seconds
  time: number = initialTime;
  active: boolean = false;
  interval: any;

  minutes: number = Math.floor(this.time / 60);
  seconds: number = this.time % 60;

  paddedMinutes: string[] = String(this.minutes).padStart(2, '0').split('');
  paddedSeconds: string[] = String(this.seconds).padStart(2, '0').split('');

  constructor() { }

  ngOnInit(): void {
  }

  startCountdown(): void {
    this.active = true;
    this.interval = setInterval(() => {
      if (this.time > 0) {
        this.time--;
      }
      else {
        this.time = initialTime;
        this.active = false;
        clearInterval(this.interval);
      }

      this.updateCounters();
    }, 1000);
  }

  updateCounters(): void {
    this.minutes = Math.floor(this.time / 60);
    this.seconds = this.time % 60;
    this.paddedMinutes = String(this.minutes).padStart(2, '0').split('');
    this.paddedSeconds = String(this.seconds).padStart(2, '0').split('');
  }

}
