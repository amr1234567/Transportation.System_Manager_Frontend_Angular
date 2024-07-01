import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppModuleModule } from '../app-module/app-module.module';
import { ManagerModule } from '../app-module/manager-module/manager.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppModuleModule, ManagerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Transportation_Manager_Ui';
}
