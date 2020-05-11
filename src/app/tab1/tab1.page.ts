import { Component } from '@angular/core';
import { GeneralService } from 'src/services/general.service';
import {MastodonAccount} from 'src/mastodon-classes/MastodonAccount'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  private instanceURL :string = "https://botsin.space";
  private token :string = "hNAusBxqZEfPFKPYrjJ213Vou9GzZRBfnr1AWQPC9vw";
  private account :MastodonAccount = null;

  constructor(private general: GeneralService) { }

  ionViewWillEnter() {
    this.general.validateCredentials(this.instanceURL, this.token).subscribe(
      (data : any) => {
        this.account = data;
      }, 
      (error) => {
        alert("Something went wrong");
      }
    );
  }  

}
