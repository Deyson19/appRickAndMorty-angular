import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersLayoutComponent } from './layout/characters-layout/characters-layout.component';

const routes: Routes = [
  {
    path: '',
    component: CharactersLayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharactersRoutingModule {}
