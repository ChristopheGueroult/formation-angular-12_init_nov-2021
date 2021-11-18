import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-route',
  templateUrl: './btn-route.component.html',
  styleUrls: ['./btn-route.component.scss'],
})
export class BtnRouteComponent implements OnInit {
  @Input() route!: string;
  @Input() label!: string;
  constructor() {}

  ngOnInit(): void {
    console.log(this.label);
    console.log(this.route);
  }
}
