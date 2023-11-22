import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrl: './car-item.component.css'
})
export class CarItemComponent {
  @Input() car: any;

  bookingMessage: string = "Réserver maintenant";
  isBooked: boolean = false;

  onBooking(){
    this.bookingMessage = "Cette voiture est réservée";
    this.isBooked = true;
  }
}
