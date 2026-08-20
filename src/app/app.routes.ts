import { Routes } from '@angular/router';
import { RxJsObsevables } from './Components/rx-js-obsevables/rx-js-obsevables';
import { Operators } from './Components/operators/operators';
import { SubBehShareReplay } from './Components/sub-beh-share-replay/sub-beh-share-replay';
import { CombineOps } from './Components/combine-ops/combine-ops';
import { RxjsReactiveForm } from './Components/rxjs-reactive-form/rxjs-reactive-form';
import { Unsubscribe } from './Components/unsubscribe/unsubscribe';
import { EmpLayout } from './Components/emp-layout/emp-layout';
import { EmpList } from './Components/emp-list/emp-list';
import { EmpDetails } from './Components/emp-details/emp-details';

export const routes: Routes = [

    {path: '', redirectTo: 'RxJs-Operators', pathMatch: 'full'},
    {path : 'RxJs-Practice' , component: RxJsObsevables},
    {path : 'RxJs-Operators' , component: Operators},
    {path: 'Sub-Beh-ShareReplay', component:SubBehShareReplay},
    {path:'CombineOps', component:CombineOps},
    {path:'rxjs-reactive-forms', component:RxjsReactiveForm},
    {path:'unsubscribe', component:Unsubscribe},
    {
        path:'employee',
        component:EmpLayout,
        children:[
            {
                path:'',
                component:EmpList,
                outlet:'listOutlet'

            },
             {
                path:'details',
                component:EmpDetails,
                outlet:'detailsOutlet'
            },
            {
                path:'details/:id',
                component:EmpDetails,
                outlet:'detailsOutlet'
            }
        ]
    }
    
];
