import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicationComponent } from './publication.component';
import {MatCardModule} from '@angular/material/card';
import { ChipsLabelsModule } from '../chips-labels/chips-labels.module';


@NgModule({
  declarations: [
    PublicationComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    ChipsLabelsModule
  ],
  exports: [PublicationComponent]
})
export class PublicationModule { }
