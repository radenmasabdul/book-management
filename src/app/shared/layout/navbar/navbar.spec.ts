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

  it('should render the navbar actions component', () => {
    const navbarActions = fixture.nativeElement.querySelector('app-navbar-actions');

    expect(navbarActions).toBeTruthy();
  });

  it('should not render the removed mobile navigation component', () => {
    const mobileNav = fixture.nativeElement.querySelector('app-mobile-nav');

    expect(mobileNav).toBeNull();
  });
});
