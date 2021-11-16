import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss'],
})
export class UiComponent implements OnInit {
  /**
   * property to open or close nav
   */
  public open: boolean;
  constructor() {
    this.open = true;
  }

  ngOnInit(): void {}
  /**
   * methode to toggle open property
   */
  public toggle() {
    this.open = !this.open;
  }
}
