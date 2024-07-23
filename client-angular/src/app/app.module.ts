import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { APOLLO_OPTIONS } from "apollo-angular";
import { InMemoryCache } from "@apollo/client/core";
import { GraphQLModule } from "./graphql.module";
import { HttpLink } from "apollo-angular/http";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormNewUserComponent } from "./components/form-new-user/form-new-user.component";
import { UsersListComponent } from "./components/users-list/users-list.component";
import { UserListService } from "./components/users-list/services/users-list.serivce";
import { UserActionsService } from "./components/form-new-user/services/user-actions.service";
import { GetUsersRxjsService } from "./components/get-users-rxjs/services/get-users-rxjs.service";
import { GetUsersRxjsComponent } from "./components/get-users-rxjs/get-users-rxjs.component";
import { SideNavExerciseService } from "./components/side-nav-exercise/services/side-nav-exercise.service";
import { SideNavExerciseComponent } from "./components/side-nav-exercise/side-nav-exercise.component";

@NgModule({
  declarations: [AppComponent, FormNewUserComponent, UsersListComponent, GetUsersRxjsComponent, SideNavExerciseComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory(httpLink: HttpLink) {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: "http://localhost:4000/graphql",
          }),
        };
      },
      deps: [HttpLink],
    },
    UserListService,
    UserActionsService,
    GetUsersRxjsService,
    SideNavExerciseService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
