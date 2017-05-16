import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {MainContainerComponent} from "./main-container.component";
import {MainPageComponent} from "./main-page-component/main-page.component";
import {PriceComponent} from "./pages/price/price.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {AboutUsComponent} from "./pages/about-us/about-us.component";

const mainContainerRoutes = [
  {
    path: '',
    component: MainContainerComponent,
    children: [
      {path: '', component: MainPageComponent},
      {path: 'price', component: PriceComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'us', component: AboutUsComponent}
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(mainContainerRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class MainContainerRoutingModule {
}
