import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

const initialTime: number = 0.1 * 60;
let interval: any; //NodeJS.Timeout;

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {
  // Time in seconds
  time: number = initialTime;
  isActive: boolean = false;
  hasFinished: boolean = false;

  minutes: number = Math.floor(this.time / 60);
  seconds: number = this.time % 60;

  paddedMinutes: string[] = String(this.minutes).padStart(2, '0').split('');
  paddedSeconds: string[] = String(this.seconds).padStart(2, '0').split('');

  constructor() { }

  ngOnInit(): void {
  }

  startCountdown(): void {
    this.isActive = true;
    this.waitInterval();
  }

  resetCountdown(): void {
    clearInterval(interval);
    this.isActive = false;
    this.time = initialTime;
    this.updateCounters();
  }

  waitInterval(): void {
    interval = setInterval(() => {
      if (this.isActive && this.time > 0) {
        this.time--;
        this.updateCounters();
      }
      else if (this.isActive && this.time === 0) {
        this.hasFinished = true;
        this.isActive = false;
      }
    }, 1000);
  }

  updateCounters(): void {
    this.minutes = Math.floor(this.time / 60);
    this.seconds = this.time % 60;
    this.paddedMinutes = String(this.minutes).padStart(2, '0').split('');
    this.paddedSeconds = String(this.seconds).padStart(2, '0').split('');
  }

}
