import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UserComponent } from './user/user.component';
import { Route, RouterModule } from '@angular/router';

const appRoute: Route[] = [
  {path: 'home', component: HomepageComponent},
  {path: 'user', component: UserComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
