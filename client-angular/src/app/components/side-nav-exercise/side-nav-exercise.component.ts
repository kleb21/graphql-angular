import { Component, inject, Inject, OnInit, Signal } from '@angular/core';
import { SideNavExerciseService } from './services/side-nav-exercise.service';

@Component({
  selector: 'app-side-nav-exercise',
  templateUrl: './side-nav-exercise.component.html',
  styleUrl: './side-nav-exercise.component.scss'
})
export class SideNavExerciseComponent implements OnInit {
  navbarVisible!: Signal<boolean>;

  public sideNavService = inject(SideNavExerciseService);

 
  ngOnInit(): void {
    this.navbarVisible = this.sideNavService.toggleValue;
  }

  toggleNavbar(): void {
    this.sideNavService.toggleNavbar();
    this.navbarVisible = this.sideNavService.toggleValue;
  }

}
