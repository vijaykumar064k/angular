import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthorizerComponent } from './authorizer/authorizer.component';
// import { CertificateComponent } from './certificate/certificate.component';
// import { KycComponent } from './kyc/kyc.component';
// import { SettingsComponent } from './settings/settings.component';

@NgModule({
    imports: [
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        LayoutRoutingModule
    ],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent, FooterComponent, AuthorizerComponent],
    providers: []
})
export class LayoutModule { }
