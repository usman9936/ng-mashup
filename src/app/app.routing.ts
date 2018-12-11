import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MycalenderComponent } from './mycalender/mycalender.component';
import {MyappComponent } from './myapp/myapp.component';
const routes: Routes = [
    {
        path: '',
        component: MyappComponent
        
    },
    
    {
        path: 'calendar',
        component: MycalenderComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
