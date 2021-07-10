import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { UserRegisterComponent } from "./user-register/user-register.component";
import { AppRoutingModule } from "./app-routing.module";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSliderModule } from "@angular/material/slider";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSliderModule,
    MatSlideToggleModule,
    BrowserAnimationsModule
  ],
  declarations: [AppComponent, UserRegisterComponent, UserDetailsComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
