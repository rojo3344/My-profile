import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { ContactComponent } from './contact.component';
import { BlogComponent } from './blog/blog.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes';
import { ProfileComponent } from './profile/profile.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MySkillsComponent,
    ContactComponent,
    BlogComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
