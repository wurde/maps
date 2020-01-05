import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {
  @Input() map;
  hasGeolocation = false;

  constructor() {
    this.hasGeolocation = navigator.geolocation ? true : false;
  }

  ngOnInit() {};

  locate_me() {
    this.map.locate({ setView: true, maxZoom: 15 });
  }
}
