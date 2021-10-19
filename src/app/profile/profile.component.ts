import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  levelColor: string = '#4CD62B';

  constructor() { }

  ngOnInit(): void {
  }

}
