import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodesLayoutComponent } from './layout/episodes-layout/episodes-layout.component';

const routes: Routes = [{ path: '', component: EpisodesLayoutComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EpisodesRoutingModule {}
