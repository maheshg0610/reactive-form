import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { UserRegisterComponent } from "./user-register/user-register.component";

const routes: Routes = [
  { path: "user-details", component: UserDetailsComponent },
  { path: "user-register", component: UserRegisterComponent },
  { path: "**", redirectTo: "user-details" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
