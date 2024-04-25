import { Component } from '@angular/core';
import { CountService } from '../../../service/count.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {
  subscription?: Subscription;

  constructor(public countService:CountService){}
 ngOnInit(){
  this.subscription = this.countService.event.subscribe((data) => {

    console.log("event emited from first component", data)
  })
 }
 ngOnDestroy(): void {
  if (this.subscription) {
    this.subscription.unsubscribe();
  }
 }
}
