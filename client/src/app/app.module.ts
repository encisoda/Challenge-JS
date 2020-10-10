import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { OperationFormComponent } from './components/operation-form/operation-form.component';
import { OperationListComponent } from './components/operation-list/operation-list.component';

import { OperationsService } from './services/operations.service';
import { OperationEditComponent } from './components/operation-edit/operation-edit.component';
import { OperationListInitComponent } from './components/operation-list-init/operation-list-init.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    OperationFormComponent,
    OperationListComponent,
    OperationEditComponent,
    OperationListInitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    OperationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
