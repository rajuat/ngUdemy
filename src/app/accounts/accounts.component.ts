import { Component, OnInit } from '@angular/core';
import { AccountsService } from "app/accounts/accounts.service";

@Component({
  selector: 'app-root',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
  // providers: [AccountsService]
})
export class AccountsComponent {

  accounts: { name: string, status: string }[] = [];

  constructor(private accountsService: AccountsService) {
    this.accounts = accountsService.accounts;
  }

  // onAccountAdded(newAccount: { name: string, status: string }) {
  //   //this.accounts.push(newAccount);
  //   this.accountsService.addAccount(name, status);
  // }

  // onStatusChanged(updateInfo: { id: number, newStatus: string }) {
  //   //this.accounts[updateInfo.id].status = updateInfo.newStatus;
  //   this.accountsService.updateStatus(updateInfo.id, updateInfo.newStatus);
  // }

}
