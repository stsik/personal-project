import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { NewPageComponent } from './new-page/new-page.component';
import { GiorgiComponent } from './giorgi/giorgi.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent,
    NewPageComponent,
    GiorgiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
