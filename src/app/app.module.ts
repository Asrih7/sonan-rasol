import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'; // Updated import
import { AppComponent } from './app.component';
import { D1Component } from './d1/d1.component';
import { DataComponent } from './data/data.component';

@NgModule({
  declarations: [
    AppComponent,
    D1Component,
    DataComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()), // Updated provider
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}