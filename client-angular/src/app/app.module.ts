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

@NgModule({
  declarations: [AppComponent, FormNewUserComponent, UsersListComponent],
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
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
