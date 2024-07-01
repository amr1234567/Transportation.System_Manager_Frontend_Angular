import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRouteSnapshot, RouterStateSnapshot, TitleStrategy } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TitleSetterService implements TitleStrategy {

  constructor(private readonly title: Title) { }
  updateTitle(snapshot: RouterStateSnapshot): void {
    const title = this.buildTitle(snapshot);
    if (title !== undefined) {
      this.title.setTitle(`My Application | ${title}`);
    }
  }
  buildTitle(snapshot: RouterStateSnapshot): string | undefined {
    throw new Error('Method not implemented.');
  }
  getResolvedTitleForRoute(snapshot: ActivatedRouteSnapshot) {
    return this.title.getTitle();
  }
}
