import { Component, OnInit } from '@angular/core';
import serviceService from '../../api/service.service';
import Service from '../../models/service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {
  services: Array<Service>;

  constructor(private serviceService: serviceService) {}

  ngOnInit() {
    this.serviceService.getAll().subscribe(data => {
      this.services = data;
    });
  }
}