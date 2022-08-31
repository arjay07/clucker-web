import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {
  faBell,
  faChevronLeft,
  faChevronRight, faComment, faCommenting,
  faCompass, faEgg,
  faHome, faMinus,
  faPlus, faSearch, faShare, faShareNodes,
  faSpinner, faUserCircle
} from '@fortawesome/free-solid-svg-icons';

const icons: IconDefinition[] = [
  faChevronRight,
  faChevronLeft,
  faSpinner,
  faPlus,
  faHome,
  faCompass,
  faBell,
  faSearch,
  faUserCircle,
  faComment,
  faCommenting,
  faShare,
  faShareNodes,
  faEgg,
  faMinus
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    FontAwesomeModule
  ]
})
export class AppIconsModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(...icons);
  }
}
