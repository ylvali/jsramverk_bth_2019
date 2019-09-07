import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ReportComponent } from './reports/report.component';
import { Report2Component } from './report2/report2.component';
import { AboutComponent } from './about/about.component';
import { FormComponent } from './form/form.component';

const appRoutes: Routes = [
  { path: 'reports/week/1', component: ReportComponent },
  { path: 'reports/week/2', component: Report2Component },
  { path: '', component: AboutComponent },
  { path: 'form', component: FormComponent }
  ]

@NgModule({
  declarations: [
    AppComponent,
    ReportComponent,
    Report2Component,
    AboutComponent,
    FormComponent
    ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
    { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
