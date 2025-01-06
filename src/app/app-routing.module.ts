import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { D1Component } from './d1/d1.component'; // Import the D1Component
import { DataComponent } from './data/data.component'; // Import the DataComponent

const routes: Routes = [
  { path: '', component: DataComponent }, // Load DataComponent at the root path
  { path: 'data', component: DataComponent }, // Load DataComponent at /data
  { path: 'd1', component: D1Component }, // Load D1Component at /d1
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}