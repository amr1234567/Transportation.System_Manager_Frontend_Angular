import { Injectable } from '@angular/core';
import { LocalStorageService } from '../LocalStorage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  tokenName = "token";
  ExpireDate = "ExpireDate";
  constructor(public LocalstorgeService: LocalStorageService) { }

  addToken(token: string, ExpireDate: Date): void {
    this.LocalstorgeService.setItem(this.tokenName, token);
    this.LocalstorgeService.setItem(this.ExpireDate, ExpireDate.toString());
  }

  private IsTokenActive = (): boolean => {
    const expires = this.LocalstorgeService.getItem(this.ExpireDate);
    return !!((expires && Date.parse(expires) > Date.now()));
  };

  hasToken(): boolean {
    return this.LocalstorgeService.getItem(this.tokenName) && this.IsTokenActive() ? true : false;
  }

  removeToken(): void {
    this.LocalstorgeService.removeItem(this.tokenName)
    this.LocalstorgeService.removeItem(this.ExpireDate)
  }

  getToken(): string | null {
    const expireDate = this.IsTokenActive();
    return expireDate ? this.LocalstorgeService.getItem(this.tokenName) : null;
  }
}
