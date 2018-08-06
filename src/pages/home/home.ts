import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Task } from '../../app/task';
import { TASKS } from '../../app/task-list';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

price = 6.99;
quantity = 1;
counter = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
 
  }

  ionViewDidLoad() {

  }
  quantityCalc(val){
    if(val === "plus"){
      this.quantity++;
      this.price = this.price + 6.99;
    }else if(val === "minus"){
      this.quantity--;
      this.price = this.price - 6.99;
    }
  }
  perfomOrder(){
    this.counter = 1;
  }
}
