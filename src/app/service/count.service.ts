import { EventEmitter, Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountService {

  constructor() { }
  // event:EventEmitter<number>=new EventEmitter<number>()
  event:AsyncSubject<number>=new AsyncSubject<number>()
  count:number=0;
  increaseCount(){
    this.count++;
    this.event.next(this.count);
    while(5){
      console.log(5)
    }
  }
  complete(){
    this.event.complete()
  }
}
