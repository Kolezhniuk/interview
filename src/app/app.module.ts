import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FileComponent } from './file/file.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { TextService } from './text-service/text.service';
import { FooterComponent } from './footer/footer.component';
import { EventBusService } from './services/event-bus.service';
import { TextPreprocessingService } from './services/text-preprocesing.service';

import { DataMuseAPIService } from './services/data-muse-api.service';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './modal/modal.component';
@NgModule({
  declarations: [
    AppComponent,
    FileComponent,
    ControlPanelComponent,
    HeaderComponent,
    FooterComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    TextService,
    EventBusService,
    TextPreprocessingService,
    DataMuseAPIService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
