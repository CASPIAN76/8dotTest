import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  cityes1 = [
    "Aberdeen", "Belfast", "Brighton and sussex", "Cambridge and East anglia", "Cardiff", "Birmingham"
  ];
  cityes2 = [
    "Edinburge", "Glasgow", "Hull", "Leeds", "Leicester", "London"
  ]
  cityes3 = [
    "Manchester", "Merseyside", "North East", "Northanmton", "Milton Keynes", "Nottingham"
  ]
  cityes4 = [
    "Oxford", "Sheffeild", "South Coast", "South West", "Stoke", 
  ]


  content1=[ "Get Help", "Buy gift card", "Add your restaurent" , "Sign up to deliver" , "Create a business account" , "Promotions"]
  content2=[ "Restaurent near me", "View all cities", "View all countries" , "Pckup near me" , "About us" ]

}
