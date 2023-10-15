import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import {MatCardModule} from '@angular/material/card';
import { ChipsLabelsModule } from '../chips-labels/chips-labels.module';


@NgModule({
  declarations: [
    PostComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    ChipsLabelsModule
  ],
  exports: [PostComponent]
})
export class PostModule { }
