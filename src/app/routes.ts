import {Routes} from '@angular/router';
import {BlogComponent} from './blog/blog.component';
import {AppComponent} from './app.component';
import {ContactComponent} from './contact.component';
import {ProfileComponent} from './profile/profile.component';

export const appRoutes: Routes = [
    {path:'profile',component: ProfileComponent},
    {path:'blog', component: BlogComponent},
  {path:'contact',component:ContactComponent},
  {path:'', pathMatch:'full', redirectTo: 'profile'},
]
