import { Routes } from '@angular/router';
import { FirstComponent } from './component/first/first/first.component';
import { SecondComponent } from './component/second/second/second.component';
export const routes: Routes = [
    {
        path:"first",
        component:FirstComponent
    },
    {
        path:"second",
        component:SecondComponent
    }
];
