import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabLightComponent } from './components/tab-light/tab-light.component';
import { BtnRouteComponent } from './components/btn-route/btn-route.component';
import { IconsModule } from '../icons/icons.module';
import { TemplatesModule } from '../templates/templates.module';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    TabLightComponent,
    BtnRouteComponent,
    TotalPipe,
    StateDirective,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    TabLightComponent,
    BtnRouteComponent,
    IconsModule,
    TemplatesModule,
    TotalPipe,
    StateDirective,
  ],
})
export class SharedModule {}
