import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './table/table.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  {
    path:'form',
    component:FormComponent
  },
  {
    path:'form/:id',
    component:FormComponent
  },
  {
    path:'table',
    component:TableComponent
  },
  {
    path:'**',
    pathMatch:'full',
    redirectTo:'/table'
  },
]
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
