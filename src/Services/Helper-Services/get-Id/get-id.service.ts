import { Injectable } from '@angular/core';
import { jwtDecode } from "jwt-decode";
import { TokenService } from '../Token-Service/token.service';
@Injectable({
  providedIn: 'root'
})
export class GetIdService {
  decodedToken?: { [key: string]: string };
  constructor(private tokenService: TokenService) { }
  decodeToken() {
    if (this.tokenService.hasToken()) {
      this.decodedToken = jwtDecode(this.tokenService.getToken() ?? "");
    }
  }
}

