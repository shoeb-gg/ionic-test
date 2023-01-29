import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

import { InputFieldComponent } from './input-field.component';

@NgModule({
  declarations: [InputFieldComponent],
  imports: [CommonModule, IonicModule],
  exports: [InputFieldComponent],
})
export class InputFieldModule {}
