import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperadminComponent } from './superadmin.component';
import { FormsModule } from '@angular/forms';
import { SuperadminRoutingModule } from './superadmin-routing.module';

@NgModule({
  declarations: [SuperadminComponent],
  imports: [
    CommonModule,
    SuperadminRoutingModule,
    FormsModule
  ]
})
export class SuperadminModule { }
