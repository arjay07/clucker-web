import { NgModule } from '@angular/core';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {
  faAngleDown,
  faBell,
  faChevronLeft,
  faChevronRight, faCircle, faCircleNotch, faComment, faCommenting,
  faCompass, faEdit, faEgg, faEggFried, faEllipsisVertical,
  faHome, faMinus, faPaperPlaneTop,
  faPlus, faSave, faSearch, faShare, faShareNodes,
  faSpinner, faTimes, faUser, faUserCheck, faUserCircle, faUserMinus, faUserPlus, faX
} from '@fortawesome/pro-solid-svg-icons';
import {faSpinnerThird, faUsers} from '@fortawesome/pro-duotone-svg-icons';

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
  faMinus,
  faCircle,
  faTimes,
  faX,
  faCircleNotch,
  faSpinnerThird,
  faPaperPlaneTop,
  faChevronLeft,
  faEllipsisVertical,
  faEdit,
  faAngleDown,
  faSave,
  faUserPlus,
  faUserCheck,
  faUserMinus,
  faUser,
  faUsers,
  faEggFried
];

@NgModule({
  declarations: [],
  imports: [
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
