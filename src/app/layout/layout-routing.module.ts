import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'wallet', loadChildren: './wallet/wallet.module#WalletModule' },
            { path: 'superadmin',loadChildren:'./superadmin/superadmin.module#SuperadminModule'},
            { path: 'certificate',loadChildren:'./certificate/certificate.module#CertificateModule'},
            { path: 'kyc',loadChildren:'./kyc/kyc.module#KycModule'},
            { path: 'settings',loadChildren:'./settings/settings.module#SettingsModule'}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
