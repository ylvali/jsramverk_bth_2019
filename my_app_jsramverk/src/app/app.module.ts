import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ReportComponent } from './reports/report.component';
import { AboutComponent } from './about/about.component';


const appRoutes: Routes = [
  { path: 'reports/week/1', component: ReportComponent },
  { path: '', component: AboutComponent },
  ]

@NgModule({
  declarations: [
    AppComponent,
    ReportComponent,
    AboutComponent
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
