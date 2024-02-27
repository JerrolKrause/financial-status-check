import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeModule } from './home.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Life Insurance, Financial Planning & Annuities for First Responders',
  },
];

export const routing: ModuleWithProviders<HomeModule> = RouterModule.forChild(routes);
