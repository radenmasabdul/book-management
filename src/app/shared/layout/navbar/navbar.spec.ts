import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Navbar } from './navbar';

describe('Navbar', () => {
  let component: Navbar;
  let fixture: ComponentFixture<Navbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navbar],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Navbar);
    component = fixture.componentInstance;

    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the header component', () => {
    const header = fixture.nativeElement.querySelector('app-header');

    expect(header).toBeTruthy();
  });

  it('should render the navbar actions component', () => {
    const navbarActions =
      fixture.nativeElement.querySelector('app-navbar-actions');

    expect(navbarActions).toBeTruthy();
  });

  it('should not display mobile navigation by default', () => {
    const mobileNav =
      fixture.nativeElement.querySelector('app-mobile-nav');

    expect(mobileNav).toBeNull();
  });

  it('should display mobile navigation when the menu is open', () => {
    component.onMenuClick();
    fixture.detectChanges();

    const mobileNav =
      fixture.nativeElement.querySelector('app-mobile-nav');

    expect(mobileNav).toBeTruthy();
  });

  it('should close mobile navigation when closeMobileMenu is called', () => {
    component.onMenuClick();
    fixture.detectChanges();

    component.closeMobileMenu();
    fixture.detectChanges();

    const mobileNav =
      fixture.nativeElement.querySelector('app-mobile-nav');

    expect(mobileNav).toBeNull();
  });
});
