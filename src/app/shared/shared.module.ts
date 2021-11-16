import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabLightComponent } from './components/tab-light/tab-light.component';
import { BtnRouteComponent } from './components/btn-route/btn-route.component';
import { IconsModule } from '../icons/icons.module';
import { TemplatesModule } from '../templates/templates.module';

@NgModule({
  declarations: [TabLightComponent, BtnRouteComponent],
  imports: [CommonModule],
  exports: [TabLightComponent, BtnRouteComponent, IconsModule, TemplatesModule],
})
export class SharedModule {}
