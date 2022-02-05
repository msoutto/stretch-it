import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-challenge-box',
  templateUrl: './challenge-box.component.html',
  styleUrls: ['./challenge-box.component.scss']
})
export class ChallengeBoxComponent implements OnInit {

  hasActiveChallenge = true;

  constructor() { }

  ngOnInit(): void {
  }

}
