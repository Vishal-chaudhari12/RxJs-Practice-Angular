import { Routes } from '@angular/router';
import { RxJsObsevables } from './Components/rx-js-obsevables/rx-js-obsevables';
import { Operators } from './Components/operators/operators';

export const routes: Routes = [

    {path: '', redirectTo: 'RxJs-Operators', pathMatch: 'full'},
    {path : 'RxJs-Practice' , component: RxJsObsevables},
    {path : 'RxJs-Operators' , component: Operators},
    
];
