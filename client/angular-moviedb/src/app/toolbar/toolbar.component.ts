import { Component, OnInit, ViewChild } from '@angular/core';
import {AuthDialogComponent} from '../auth-dialog/auth-dialog.component';
import {AngularTokenService} from 'angular-token';

@Component({
  selector: 'lets-react-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.sass']
})
export class ToolbarComponent implements OnInit {
  @ViewChild('authDialog') authDialog: AuthDialogComponent;
  constructor(public tokenAuthService:AngularTokenService) { }

  ngOnInit(): void {
  }

  presentAuthDialog(mode?: 'login'| 'register'){
    this.authDialog.openDialog(mode);
  }

}
