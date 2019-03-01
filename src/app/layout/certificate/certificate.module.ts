import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CertificateComponent} from './certificate.component'
import { CertificateRoutingModule } from './certificate-routing.module';
import {FormsModule } from '@angular/forms'

@NgModule({
  declarations: [CertificateComponent],
  imports: [
    CommonModule,
    CertificateRoutingModule,
    FormsModule
  ]
})
export class CertificateModule { }
