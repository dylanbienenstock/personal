import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IcosahedronComponent } from './icosahedron/icosahedron.component';
import { TitleComponent } from './title/title.component';
import { DownChevronComponent } from './down-chevron/down-chevron.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { ProjectsSectionComponent } from './projects-section/projects-section.component';
import { ProjectsSectionScreenshotComponent } from './projects-section-screenshot/projects-section-screenshot.component';
import { ScrollService } from './scroll.service';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
import { FooterComponent } from './footer/footer.component';
import { FooterNoteComponent } from './footer-note/footer-note.component';
import { FormsModule } from '@angular/forms';
import { SocialComponent } from './social/social.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IcosahedronComponent,
    TitleComponent,
    DownChevronComponent,
    HomePageComponent,
    AboutSectionComponent,
    SkillsSectionComponent,
    ProjectsSectionComponent,
    ProjectsSectionScreenshotComponent,
    FooterComponent,
    FooterNoteComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
	  Title,
	  ScrollToService,
	  ScrollService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
