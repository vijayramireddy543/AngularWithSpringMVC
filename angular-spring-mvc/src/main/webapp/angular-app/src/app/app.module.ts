import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule  } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClickComponent } from './components/click/click.component';
import { UserProfileEditorComponent } from './components/user-profile-editor/user-profile-editor.component';
import { UserService } from './shared/services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    ClickComponent,
    UserProfileEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
