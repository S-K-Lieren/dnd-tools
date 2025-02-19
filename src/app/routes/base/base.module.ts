import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { BaseRoutingModule } from './base-routing.module';
import { BaseComponent } from './base/base.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [
        BaseComponent
    ],
    imports: [
        AngularSvgIconModule,
        CommonModule,
        BaseRoutingModule,
        SharedModule,
        ReactiveFormsModule,
        TranslateModule.forChild()
    ]
})
export class BaseModule { }
