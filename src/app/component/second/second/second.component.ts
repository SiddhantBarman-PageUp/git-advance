import { Component, OnDestroy, OnInit } from '@angular/core';
import { CountService } from '../../../service/count.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent implements OnInit,OnDestroy{
  subscription?: Subscription;

  constructor(public countService:CountService){}
 ngOnInit(){
  this.subscription = this.countService.event.subscribe((data) => {

    console.log("event emited from second component", data)
  })
 }
 ngOnDestroy(): void {
//   if (this.subscription) {
//     this.subscription.unsubscribe();
//   }
 }
}
