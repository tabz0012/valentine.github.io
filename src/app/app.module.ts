import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RuleComponent } from './rule/rule.component';

import { ShopHorseComponent } from './shop-horse/shop-horse.component';
import { ShopGoldComponent } from './shop-gold/shop-gold.component';
import { ShopSubscribeComponent } from './shop-subscribe/shop-subscribe.component';

import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTooltipModule} from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { TwtchComponent } from './twtch/twtch.component';
import { PicComponent } from './pic/pic.component';
import { NewsComponent } from './news/news.component';
import { TwitchComponent } from './twitch/twitch.component';
import { ShopMainComponent } from './shop-main/shop-main.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    RuleComponent,
    ShopHorseComponent,
    ShopGoldComponent,
    ShopSubscribeComponent,
    TwtchComponent,
    PicComponent,
    NewsComponent,
    TwitchComponent,
    ShopMainComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatSelectModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatTooltipModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
