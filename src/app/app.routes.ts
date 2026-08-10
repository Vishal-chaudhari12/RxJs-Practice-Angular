import { Routes } from '@angular/router';
import { RxJsObsevables } from './Components/rx-js-obsevables/rx-js-obsevables';
import { Operators } from './Components/operators/operators';
import { SubBehShareReplay } from './Components/sub-beh-share-replay/sub-beh-share-replay';
import { CombineOps } from './Components/combine-ops/combine-ops';
import { RxjsReactiveForm } from './Components/rxjs-reactive-form/rxjs-reactive-form';

export const routes: Routes = [

    {path: '', redirectTo: 'RxJs-Operators', pathMatch: 'full'},
    {path : 'RxJs-Practice' , component: RxJsObsevables},
    {path : 'RxJs-Operators' , component: Operators},
    {path: 'Sub-Beh-ShareReplay', component:SubBehShareReplay},
    {path:'CombineOps', component:CombineOps},
    {path:'rxjs-reactive-forms', component:RxjsReactiveForm},
    
];
