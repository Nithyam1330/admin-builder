import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';

import { FeeStructureRoutingModule } from './fee-structure-routing.module';
import {FeeStructureComponent} from './fee-structure.component';
import {MaterialModule} from '../../../commonModule/material/material.module';
import { ChartsModule } from 'ng2-charts';
@NgModule({
  imports: [
    CommonModule,
    FeeStructureRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    ChartsModule
  ],
  declarations: [FeeStructureComponent]
})
export class FeeStructureModule {}
