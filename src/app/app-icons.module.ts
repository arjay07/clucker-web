import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';

const icons: IconDefinition[] = [
  faChevronRight,
  faChevronLeft
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
