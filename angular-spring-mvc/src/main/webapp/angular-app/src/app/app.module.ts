import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ClickComponent } from './components/click/click.component';
import { UserProfileEditorComponent } from './components/user-profile-editor/user-profile-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickComponent,
    UserProfileEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
