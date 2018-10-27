import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';
import { environment } from 'environments/environment';

import { CustomEmailValidatorDirective } from './directives/custom-email-validator.directive';
import { EqualStringsDirective } from './directives/equal-strings.directive';

import { FilterAndSortPipe } from './pipes/filter-and-sort.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { SortByDatePipe } from './pipes/sort-by-date.pipe';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminSnippetsComponent } from './admin-snippets/admin-snippets.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MySnippetsComponent } from './my-snippets/my-snippets.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { TestDataDetailsComponent } from './test-data-details/test-data-details.component';
import { TestDataEditComponent } from './test-data-edit/test-data-edit.component';
import { TestDataListComponent } from './test-data-list/test-data-list.component';
import { TestDataComponent } from './test-data/test-data.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomEmailValidatorDirective,
    EqualStringsDirective,
    FilterAndSortPipe,
    FilterPipe,
    SortByDatePipe,
    AdminPanelComponent,
    AdminSnippetsComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    MySnippetsComponent,
    NavigationComponent,
    NotFoundComponent,
    RegisterComponent,
    TestDataDetailsComponent,
    TestDataEditComponent,
    TestDataListComponent,
    TestDataComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgxPaginationModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
