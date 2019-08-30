import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { FunctionsService } from './functions.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateComponent } from './create/create.component';



@NgModule({
  declarations: [
    AppComponent,
    RepositoriesComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FunctionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
