import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, Http} from '@angular/http';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app.routing";
import {MainContainerModule} from "./main-container/main-container.module";
import {TranslateModule, TranslateLoader} from "@ngx-translate/core";
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {Angulartics2Module, Angulartics2GoogleAnalytics} from "angulartics2";

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    }),
    MainContainerModule,
    AppRoutingModule,
    Angulartics2Module.forRoot([ Angulartics2GoogleAnalytics ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
