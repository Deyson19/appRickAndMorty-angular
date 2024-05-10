import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodesLayoutComponent } from '../episodes/layout/episodes-layout/episodes-layout.component';
import { LocationsLayoutComponent } from './layout/locations-layout/locations-layout.component';

const routes: Routes = [{ path: '', component: LocationsLayoutComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationsRoutingModule {}
