import { NgModule } from '@angular/core';
import {
  PreloadAllModules,
  Router,
  RouterModule,
  Routes,
} from '@angular/router';
import { PageForgotComponent } from './login/pages/page-forgot/page-forgot.component';
import { PageResetComponent } from './login/pages/page-reset/page-reset.component';
import { PageSignInComponent } from './login/pages/page-sign-in/page-sign-in.component';
import { PageSignUpComponent } from './login/pages/page-sign-up/page-sign-up.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: PageSignInComponent },
  { path: 'sign-up', component: PageSignUpComponent },
  { path: 'reset', component: PageResetComponent },
  { path: 'forgot', component: PageForgotComponent },
  {
    path: 'orders',
    loadChildren: () =>
      import('./orders/orders.module').then((m) => m.OrdersModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(private router: Router) {
    console.log(this.router.config);
  }
}
