import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {KycComponent } from './kyc.component';
import { KycRoutingModule } from './kyc-routing.module';
import { FormsModule} from '@angular/forms';
@NgModule({
  declarations: [KycComponent],
  imports: [
    CommonModule,
    KycRoutingModule,
    FormsModule
  ]
})
export class KycModule { }
