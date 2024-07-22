import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormNewUserComponent } from './components/form-new-user/form-new-user.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { GetUsersRxjsComponent } from './components/get-users-rxjs/get-users-rxjs.component';

const routes: Routes = [
  { path: "", component: UsersListComponent },
  { path: "user-details", component: FormNewUserComponent },
  { path: "users-rxjs", component: GetUsersRxjsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
