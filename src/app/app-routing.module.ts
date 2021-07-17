import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MergeUsersComponent } from './components/merge-users/merge-users.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MergeUsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
