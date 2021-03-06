import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconNavComponent } from './components/icon-nav/icon-nav.component';
import { IconCloseComponent } from './components/icon-close/icon-close.component';
import { IconDeleteComponent } from './components/icon-delete/icon-delete.component';
import { IconEditComponent } from './components/icon-edit/icon-edit.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    IconNavComponent,
    IconCloseComponent,
    IconDeleteComponent,
    IconEditComponent,
  ],
  imports: [CommonModule, FontAwesomeModule],
  exports: [
    IconNavComponent,
    IconCloseComponent,
    IconDeleteComponent,
    IconEditComponent,
  ],
})
export class IconsModule {}
