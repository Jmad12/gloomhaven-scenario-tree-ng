import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }   from '@angular/forms';

import { ExportTreeComponent } from './export-tree/export-tree.component';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { TreeComponent } from './tree/tree.component';
import { AssetService } from './asset.service';
import { ScenarioInfoComponent, ScenarioInfoDialog } from './scenario-info/scenario-info.component';
import { TreeLogicService } from './tree-logic.service';


@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    ScenarioInfoComponent,
    ScenarioInfoDialog,
    ExportTreeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  entryComponents: [
    ScenarioInfoDialog
  ],
  providers: [ AssetService, TreeLogicService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
