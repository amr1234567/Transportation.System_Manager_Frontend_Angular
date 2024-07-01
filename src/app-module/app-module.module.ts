import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { RouterLink, TitleStrategy } from "@angular/router";
import { LogInService } from "../Services/Api-Services/LogInService/log-in.service";
import { LocalStorageService } from "../Services/Helper-Services/LocalStorage/local-storage.service";
import { TokenService } from "../Services/Helper-Services/Token-Service/token.service";
import { LogOutService } from "../Services/LogOut/lg-out.service";
import { TokenSetterService } from "../Services/Interceptors/TokenSetter/token-setter.service";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TitleSetterService } from "../Services/Helper-Services/Title-Setter/title-setter.service";
import { ManagerModule } from "./manager-module/manager.module";

@NgModule({
  declarations: [
    LoginComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterLink,
    MatProgressSpinnerModule,
    ManagerModule,
    ReactiveFormsModule
  ],
  providers: [
    LogInService,
    LocalStorageService,
    TokenService,
    LogOutService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenSetterService,
      multi: true
    },
    {
      provide: TitleStrategy,
      useClass: TitleSetterService
    }
  ],
  exports: [
    LoginComponent,
    NotFoundComponent
  ]
})
export class AppModuleModule { }
