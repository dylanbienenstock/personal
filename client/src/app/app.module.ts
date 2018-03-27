import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IcosahedronComponent } from './icosahedron/icosahedron.component';
import { TitleComponent } from './title/title.component';
import { DownChevronComponent } from './down-chevron/down-chevron.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutSectionComponent } from './about-section/about-section.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IcosahedronComponent,
    TitleComponent,
    DownChevronComponent,
    HomePageComponent,
    AboutSectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
