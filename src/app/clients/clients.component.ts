import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit {
  clientList = [
    { clientId: 10, firstName: 'Raj', lastName: 'Kumar' },
    { clientId: 11, firstName: 'Coco', lastName: 'Late' },
    { clientId: 12, firstName: 'Cacho', lastName: 'Tirao' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
