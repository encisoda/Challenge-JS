import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperationListComponent } from './components/operation-list/operation-list.component';
import { OperationFormComponent } from './components/operation-form/operation-form.component';
import { OperationListInitComponent } from './components/operation-list-init/operation-list-init.component';

const routes: Routes = [
  {
    path: '',
    component: OperationListInitComponent
  },
  {
    path: 'operations',
    component: OperationListComponent
  },
  {
    path: 'operations/add',
    component: OperationFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
