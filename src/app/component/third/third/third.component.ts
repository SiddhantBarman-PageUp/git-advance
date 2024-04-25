import { Component } from '@angular/core';
import { CountService } from '../../../service/count.service';

@Component({
  selector: 'app-third',
  standalone: true,
  imports: [],
  templateUrl: './third.component.html',
  styleUrl: './third.component.css'
})
export class ThirdComponent {
constructor(private countService:CountService){
}
increaseCount(){
  this.countService.increaseCount();
}
destroy(){
  this.countService.complete()
}
}
