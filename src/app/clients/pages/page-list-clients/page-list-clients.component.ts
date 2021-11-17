import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss'],
})
export class PageListClientsComponent implements OnInit {
  public title = 'List Clients';
  public collection!: Client[];
  public headers: string[];
  constructor(private clientssService: ClientsService) {
    this.headers = ['Name', 'Total HT', 'Taux Tva', 'Total TTC', 'State'];
    this.clientssService.collection.subscribe((data) => {
      this.collection = data;
    });
  }

  ngOnInit(): void {}
}
