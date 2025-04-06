import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NgStyle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aravindkumar-portfolio';

  theme: string = "bi bi-lightbulb-fill";
  themeLight: boolean = true;
  navStyle: string = "nav-light";
  navButtonStyle: string = "nav-button-light";
  navItemStyle: string = "nav-item-light";
  bodyStyle: string = "body-light";
  nameStyle: string = "name-light";
  jobTitle: string = "job-title-light";
  aboutStyle: string = "about-light";
  aboutDesc: string = "about-desc-light";
  expHead: string = "exp-head-light";
  expTitle: string = "exp-title-light";
  expDesc: string = "exp-desc-light";
  cardHeadStyle: string = "card-head-light";
  cardBodyStyle: string = "card-body-light";
  cardFooterStyle: string = "card-footer-light";

  toggleTheme() {
    //light theme
    if (this.themeLight == true) {
      this.theme = "bi bi-lightbulb";
      this.navStyle = "nav-dark";
      this.navButtonStyle = "nav-button-dark";
      this.navItemStyle = "nav-item-dark";
      this.bodyStyle = "body-dark";
      this.nameStyle = "name-dark";
      this.jobTitle = "job-title-dark";
      this.aboutStyle = "about-dark";
      this.aboutDesc = "about-desc-dark";
      this.expHead = "exp-head-dark";
      this.expTitle = "exp-title-dark";
      this.expDesc = "exp-desc-dark";
      this.cardHeadStyle = "card-head-dark";
      this.cardBodyStyle = "card-body-dark";
      this.cardFooterStyle = "card-footer-dark";
      this.themeLight = false;
    } else { //dark theme
      this.theme = "bi bi-lightbulb-fill";
      this.navStyle = "nav-light";
      this.navButtonStyle = "nav-button-light";
      this.navItemStyle = "nav-item-light";
      this.bodyStyle = "body-light";
      this.nameStyle = "name-light";
      this.jobTitle = "job-title-light";
      this.aboutStyle = "about-light";
      this.aboutDesc = "about-desc-light";
      this.expHead = "exp-head-light";
      this.expTitle = "exp-title-light";
      this.expDesc = "exp-desc-light";
      this.cardHeadStyle = "card-head-light";
      this.cardBodyStyle = "card-body-light";
      this.cardFooterStyle = "card-footer-light";
      this.themeLight = true;
    }
  }
}
