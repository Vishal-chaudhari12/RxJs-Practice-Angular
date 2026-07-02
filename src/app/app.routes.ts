import { Routes } from '@angular/router';
import { RxJsObsevables } from './Components/rx-js-obsevables/rx-js-obsevables';

export const routes: Routes = [

    {path: '', redirectTo: 'RxJs-Practice', pathMatch: 'full'},
    {path : 'RxJs-Practice' , component: RxJsObsevables},
    
];
