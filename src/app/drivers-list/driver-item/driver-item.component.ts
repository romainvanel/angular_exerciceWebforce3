import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-driver-item',
  templateUrl: './driver-item.component.html',
  styleUrl: './driver-item.component.css'
})
export class DriverItemComponent {
  @Input() driver: any;

  onLike() {
    this.driver.likeIts++
  }

  onDislike() {
    this.driver.likeIts--
  }

}
