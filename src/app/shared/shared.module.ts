import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IconsModule } from '../icons/icons.module';
import { TemplatesModule } from '../templates/templates.module';
import { BtnRouteComponent } from './components/btn-route/btn-route.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { TabLightComponent } from './components/tab-light/tab-light.component';
import { StateDirective } from './directives/state.directive';
import { TotalPipe } from './pipes/total.pipe';

@NgModule({
  declarations: [
    TabLightComponent,
    BtnRouteComponent,
    TotalPipe,
    StateDirective,
    DialogComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    IconsModule,
    TemplatesModule,
    ReactiveFormsModule,
    TabLightComponent,
    BtnRouteComponent,
    DialogComponent,
    TotalPipe,
    StateDirective,
  ],
})
export class SharedModule {}
