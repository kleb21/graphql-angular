import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideNavExerciseService {
  private readonly toggleSideNav = signal(false);

  public toggleValue = this.toggleSideNav.asReadonly();

  toggleNavbar(): void {
    this.toggleSideNav.set(!this.toggleSideNav());
  }

}
