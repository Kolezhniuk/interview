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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {StoreModule} from '@ngrx/store';
import {appReducer} from './store/reducers/app.reducer';
import {EffectsModule} from '@ngrx/effects';
import {TextEffect} from './store/effects/text.effect';
import {environment} from '../environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {FontButtonsEffect} from './store/effects/fontButtons.effect';
import {SuggestionEffect} from './store/effects/suggestion.effect';
@NgModule({
  declarations: [
    AppComponent,
    FileComponent,
    ControlPanelComponent,
    HeaderComponent,
    FooterComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([TextEffect, FontButtonsEffect, SuggestionEffect]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    BrowserAnimationsModule
  ],
  providers: [
    TextService,
    FontButtonsEffect,
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
