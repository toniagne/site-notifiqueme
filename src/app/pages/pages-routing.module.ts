import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Index3Component } from './index3/index3.component';

const routes: Routes = [
    {
        path: '',
        component: Index3Component
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
