import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { SharedModule } from '../shared/shared/shared.module';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { CharacterPageComponent } from './pages/character-page/character-page.component';
import { EspeciePipe } from './pipes/especie.pipe';

@NgModule({
  declarations: [
    ListPageComponent,
    CharacterCardComponent,
    CharacterPageComponent,
    EspeciePipe,
  ],
  imports: [CommonModule, CharactersRoutingModule, SharedModule],
})
export class CharactersModule {}
