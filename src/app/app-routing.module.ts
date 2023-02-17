import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RuleComponent } from './rule/rule.component';

import { ShopHorseComponent } from './shop-horse/shop-horse.component';
import { ShopGoldComponent } from './shop-gold/shop-gold.component';
import { ShopSubscribeComponent } from './shop-subscribe/shop-subscribe.component';
import { TwtchComponent } from './twtch/twtch.component';
import { PicComponent } from './pic/pic.component';
import { NewsComponent } from './news/news.component';
import { TwitchComponent } from './twitch/twitch.component';
import { ShopMainComponent } from './shop-main/shop-main.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "home"},
  {path: "home", component: HomeComponent},
  {path: "rule", component: RuleComponent},
  {path: "twitch", component: TwitchComponent},
  {path: "news", component: NewsComponent},
  {path: "pic", component: PicComponent},
  {path: "shop", component: ShopMainComponent},
  {path: "shop2", component: ShopHorseComponent},
  {path: "shop3", component: ShopGoldComponent},
  {path: "shop4", component: ShopSubscribeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
