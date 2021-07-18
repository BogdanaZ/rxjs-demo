import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CombineLatestComponent } from './components/combine-latest/combine-latest.component';
import { MemoryLeakedComponent } from './components/memory-leaked/memory-leaked.component';
import { MergeMapComponent } from './components/merge-map/merge-map.component';
import { MergeUsersComponent } from './components/merge-users/merge-users.component';

const routes: Routes = [
  { path: '', redirectTo: '/merge', pathMatch: 'full' },
  { path: 'merge', component: MergeUsersComponent },
  { path: 'combine-latest', component: CombineLatestComponent },
  { path: 'memory-leaked', component: MemoryLeakedComponent },
  { path: 'merge-map', component: MergeMapComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
