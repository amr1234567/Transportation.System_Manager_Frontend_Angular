import { Injectable } from '@angular/core';
import { TokenService } from '../Helper-Services/Token-Service/token.service';

@Injectable({
  providedIn: 'root'
})
export class LogOutService {

  constructor(private tokenService: TokenService) { }

  Execute(): void {
    this.tokenService.removeToken();
  }
}
