import { Injectable } from '@angular/core';
import { MastodonAccount } from 'src/mastodon-classes/MastodonAccount';

@Injectable({
  providedIn: 'root'
})
export class CurrentAccountService {
  static currentAccount : MastodonAccount = null;
  constructor() { }

  public static getCurrent() {
    return this.currentAccount;
  }

  public static setCurrent(account:MastodonAccount) {
    this.currentAccount = account;
  }

}
