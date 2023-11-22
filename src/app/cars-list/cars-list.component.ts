import { Component } from '@angular/core';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrl: './cars-list.component.css'
})
export class CarsListComponent {
    carUpdate = new Date();

    cars: any = [
      {
        name: "pagani huayra",
        pays: "italie",
        coverImage:"./assets/img/cars/pagani.jpg",
        power: 765,
        perf: 3.2
      },
      {
        name: "koenigsegg agera rs",
        pays: "suède",
        coverImage:"./assets/img/cars/koenigsegg.jpg",
        power: 1383,
        perf: 2.6
  
      },
      {
        name: "zenvo tsr s",
        pays: "danemark",
        coverImage:"./assets/img/cars/zenvo.jpg",
        power: 1200,
        perf: 2.8
      },
      {
        name: "bugatti chiron",
        pays: "france",
        coverImage:"./assets/img/cars/bugatti.jpg",
        power: 1500,
        perf: 2.4
      },
      {
        name: "mercedes amg one",
        pays: "allemagne",
        coverImage:"./assets/img/cars/mercedes.jpg",
        power: 1000,
        perf: 2.2
      },
      {
        name: "ferrari sf90",
        pays: "italie",
        coverImage:"./assets/img/cars/ferrari.jpg",
        power: 1000,
        perf: 2.5
      }
    ];
  }
