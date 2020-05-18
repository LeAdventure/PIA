import { Component, NgModule } from '@angular/core';
import { GeneralService } from 'src/services/general.service';
import { MastodonAccount } from 'src/mastodon-classes/MastodonAccount';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';
import { CurrentAccountService } from 'src/services/current-account.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  accounts :MastodonAccount[];

  constructor(
    private storage: Storage,
    private general: GeneralService,
    private alertCtrl: AlertController,
  ) { }

  getCurrent() {
    return CurrentAccountService.getCurrent();
  }
  setCurrent(account : MastodonAccount){
    CurrentAccountService.setCurrent(account);
  }

  listAccounts(){
    this.accounts = [];
    this.storage.keys().then(
      (keys)=>{
        for (let i :number = 0; i < keys.length; i++) {
          this.storage.get(keys[i]).then( (val)=>{
            this.general.validateCredentials( val,keys[i] ).subscribe(
              (data:MastodonAccount)=>{
                let a:MastodonAccount = data;
                a.token = keys[i];
                a.instance = val;
                this.accounts.push(a);
              },
              (error)=>{
                console.log("Error at element with id " + keys[i]);
                this.storage.remove(keys[i]);
    })})}});
  }

  onInit(){

  }

  ionViewWillEnter() { 
    this.listAccounts();
  }  

  async clearStorage() {
    const alert = await this.alertCtrl.create({
      header: 'Continue?',
      message: 'If you continue, all the accounts listed below WILL be removed',
      buttons: [{
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'primary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          } 
        }, {
          text: 'Confirm',
          cssClass: 'danger',
          handler: () => {
            console.log('Deleting accounts');
            this.storage.clear();
            this.listAccounts();
          }
        }]
    });
    await alert.present();
  }

  async deleteAccount(token:string) {
    const alert = await this.alertCtrl.create({
      header: 'Continue?',
      message: 'If you continue, this account WILL be removed',
      buttons: [{
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'primary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Confirm',
          cssClass: 'danger',
          handler: () => {
            console.log('Deleting accounts');
            this.storage.remove(token).then(res=>console.log("Succesfully removed account"));
            this.listAccounts();
          }
        }]
    });
    await alert.present();
  }

  storageSize() : number {
    let size :number = NaN;
    this.storage.length().then( (result => {
      size = result;
    }))
    return size;
  }

  
}
