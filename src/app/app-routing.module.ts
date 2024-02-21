import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//home imports
// import { HomeComponent } from './routes/home/pages/home/home.component';

//admin imports
import { DashboardComponent } from './routes/admin/dashboard/dashboard.component';

const routes: Routes = [

  //Home Routes
  // { path: '', component: HomeComponent },

  // admin Routes
  { path: 'dashboard', component: DashboardComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
