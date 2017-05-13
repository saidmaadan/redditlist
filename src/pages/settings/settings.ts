import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Settings page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class Settings {

  perPage: number;
  sort: string;
  subreddit: string;

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
    this.perPage = this.navParams.get('perPage');
    this.sort = this.navParams.get('sort');
    this.subreddit = this.navParams.get('subreddit');

  }

  save(): void{
    let settings = {
      perPage: this.perPage,
      sort: this.sort,
      subreddit: this.subreddit

    };
    this.viewCtrl.dismiss(settings);
  }
  
  close():void{
    this.viewCtrl.dismiss();
  }

}
