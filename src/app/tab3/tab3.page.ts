import { Component } from '@angular/core';
import { GeneralService } from '../../services/general.service';
import {MastodonNotif } from '../../mastodon-classes/MastodonNotif';
import { MastodonAccount } from 'src/mastodon-classes/MastodonAccount';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  private instanceURL :string = "https://botsin.space";
  private token :string = "hNAusBxqZEfPFKPYrjJ213Vou9GzZRBfnr1AWQPC9vw";
  private notifs :MastodonNotif[] = [];

  constructor( private general : GeneralService ) {}

  ionViewWillEnter() {
    console.log("ionViewWillEnter()");
    this.loadNotifs();
  }

  ionViewWillLeave() {
    this.notifs = []
  }

  loadNotifs(): void {
    this.general.getNotifs( this.instanceURL, this.token ).subscribe(
      (data : any) => {
        this.notifs = data;
      },
      (error) => {
        console.error("Error");
      }
    )
  }

}


