import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TestDataComponent } from './test-data/test-data.component';
import { TestDataDetailsComponent } from './test-data-details/test-data-details.component';
import { TestDataListComponent } from './test-data-list/test-data-list.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminSnippetsComponent } from './admin-snippets/admin-snippets.component';
import { MySnippetsComponent } from './my-snippets/my-snippets.component';
import { TestDataEditComponent } from './test-data-edit/test-data-edit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './footer/footer.component';

import { ProtectedRouteGuard } from './guards/protected-route.guard';
import { IsAdminGuardGuard } from './guards/is-admin-guard.guard';
import { LoginRouteGuard } from './guards/login-route.guard';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login' , component: LoginComponent, canActivate: [LoginRouteGuard] },
  { path: 'register' , component: RegisterComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'test-data', component: TestDataComponent, canActivate: [ProtectedRouteGuard] },
  { path: 'test-data-list', component: TestDataListComponent, canActivate: [ProtectedRouteGuard]  },
  { path: 'test-data-details/:id', component: TestDataDetailsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'admin-panel', component: AdminPanelComponent, canActivate: [ProtectedRouteGuard, IsAdminGuardGuard] },
  { path: 'admin-snippets', component: AdminSnippetsComponent, canActivate: [ProtectedRouteGuard, IsAdminGuardGuard] },
  { path: 'my-snippets', component: MySnippetsComponent, canActivate: [ProtectedRouteGuard], runGuardsAndResolvers: 'always' },
  { path: 'test-data-edit/:id', component: TestDataEditComponent, canActivate: [ProtectedRouteGuard] },
  { path: 'footer', component: FooterComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})



export class AppRoutingModule { }
