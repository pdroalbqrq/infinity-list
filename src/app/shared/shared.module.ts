import { ButtonDirective } from './components/button/button.directive';
import { InputDirective } from './components/input/input.directive';
import { ComponentsModule } from './components/components.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [InputDirective, ButtonDirective],
  imports: [CommonModule, ComponentsModule],
  exports: [ComponentsModule, InputDirective, ButtonDirective]
})
export class SharedModule {}
