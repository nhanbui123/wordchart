import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AmChartWordcloudComponent} from './am-chart-wordcloud/am-chart-wordcloud.component';
import {RouterModule, Routes} from '@angular/router';
import { LineChartComponent } from './line-chart/line-chart.component';


const appRoute: Routes = [

  {path: '', component: AmChartWordcloudComponent, data: {breadcrumb: null}}
];

@NgModule({
  declarations: [
    AppComponent,
    AmChartWordcloudComponent,
    LineChartComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(appRoute, {}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
