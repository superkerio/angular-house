import { NgModule } from "@angular/core";
import { CommonModule} from "@angular/common";


import { MainComponent } from "./main.component";
import { MainRoutingModule } from "./main-routing.module";
import { AuthGuardService } from "../common/service/auth-guard.service";

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
  ],
  declarations: [
    MainComponent,
  ],
  providers: [
    AuthGuardService,
  ]
})
export class MainModule { }
