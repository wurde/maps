import { Component, Input, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements AfterViewInit {
  @Input() map;
  hasGeolocation = false;

  constructor() {
    this.hasGeolocation = navigator.geolocation ? true : false;
  }

  locate_me() {
    this.map.locate({ setView: true, maxZoom: 15 });
  }
}
