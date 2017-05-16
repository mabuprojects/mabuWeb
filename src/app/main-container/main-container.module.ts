import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MainContainerComponent} from "./main-container.component";
import {MaterializeModule} from "angular2-materialize";
import {MainContainerRoutingModule} from "./main-container-routing.module";
import { MainPageComponent } from './main-page-component/main-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PriceComponent } from './pages/price/price.component';
import {TranslateModule} from "@ngx-translate/core";
import { OnePageComponent } from './one-page/one-page.component';
import {Angulartics2Module} from "angulartics2";
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  imports: [
    TranslateModule.forChild(),
    CommonModule,
    MaterializeModule,
    MainContainerRoutingModule,
    Angulartics2Module.forChild()
  ],
  declarations: [
    MainContainerComponent,
    MainPageComponent,
    NavBarComponent,
    PriceComponent,
    OnePageComponent,
    AboutUsComponent,
    ContactComponent,

  ],
  providers: [],
})
export class MainContainerModule {
}
