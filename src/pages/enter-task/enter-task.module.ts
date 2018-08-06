import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnterTaskPage } from './enter-task';

@NgModule({
  declarations: [
    EnterTaskPage,
  ],
  imports: [
    IonicPageModule.forChild(EnterTaskPage),
  ],
})
export class EnterTaskPageModule {}
