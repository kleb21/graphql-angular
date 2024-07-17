import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormNewUserComponent } from './components/form-new-user/form-new-user.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { EditUserNameComponent } from './components/edit-user-name/edit-user-name.component';

const routes: Routes = [
  { path: "", component: UsersListComponent },
  { path: "add-user", component: FormNewUserComponent },
  { path: "edit-user/:id", component: EditUserNameComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
