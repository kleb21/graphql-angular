import { Component, inject, OnInit } from '@angular/core';
import { GetUsersRxjsService } from './services/get-users-rxjs.service';
import { UserWithPosts } from '../../shared/models/Users.interface';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-get-users-rxjs',
  templateUrl: "./get-users-rxjs.component.html",
  styles: ``
})
export class GetUsersRxjsComponent implements OnInit 
{
  public userWithPosts!: Observable<UserWithPosts>;
  public userId!: number;

  private getUsersRxjs = inject(GetUsersRxjsService);
  private toastrService: ToastrService = inject(ToastrService);
 
  ngOnInit(): void {
    this.loadUserPosts();
  }

  loadUserPosts(): Observable<UserWithPosts> {
    this.userWithPosts = this.getUsersRxjs.getUsersSwitchMap(this.userId);
    return this.userWithPosts
  }
}
