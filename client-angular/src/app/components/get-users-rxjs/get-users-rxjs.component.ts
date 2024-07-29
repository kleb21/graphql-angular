import { Component, inject, OnInit, Signal } from '@angular/core';
import { GetUsersRxjsService } from './services/get-users-rxjs.service';
import { UserWithPosts } from '../../shared/models/Users.interface';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-get-users-rxjs',
  templateUrl: "./get-users-rxjs.component.html",
  styles: ``
})
export class GetUsersRxjsComponent implements OnInit 
{
  public userWithPosts!: Observable<UserWithPosts>;
  public userId: number = 5;
  public userWithPosts$!: Signal<UserWithPosts | null | undefined>;

  private getUsersRxjsService = inject(GetUsersRxjsService);
  private toastrService: ToastrService = inject(ToastrService);
  
  ngOnInit(): void {
    this.loadUserPosts();
  }

  loadUserPosts(): void {
    this.getUsersRxjsService.getUsersSwitchMap(this.userId);
    this.userWithPosts$ = toSignal(this.getUsersRxjsService.getUsersSwitchMap(this.userId));
  }
}
