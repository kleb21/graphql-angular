import { Component, inject, OnInit } from '@angular/core';
import { GetUsersRxjsService } from './services/get-users-rxjs.service';
import { UserWithPosts } from '../../shared/Users.interface';

@Component({
  selector: 'app-get-users-rxjs',
  templateUrl: "./get-users-rxjs.component.html",
  styles: ``
})
export class GetUsersRxjsComponent implements OnInit 
{
  public dataWithSwitchMap!: UserWithPosts[] | unknown;
  private getUsersRxjs = inject(GetUsersRxjsService);
  
  ngOnInit(): void {
    this.getUsersRxjs.getUsersSwitchMap().subscribe((data: UserWithPosts[] | unknown) => {
      this.dataWithSwitchMap = data ;
    })
  }
}
