import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { MobileNav } from './mobile-nav';

describe('MobileNav', () => {
  let component: MobileNav;
  let fixture: ComponentFixture<MobileNav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileNav],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(MobileNav);
    component = fixture.componentInstance;

    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render all navigation links', () => {
    const links: NodeListOf<HTMLAnchorElement> = fixture.nativeElement.querySelectorAll('a');
    
    expect(links.length).toBe(3);
    expect(links[0].textContent?.trim()).toBe('Dashboard');
    expect(links[1].textContent?.trim()).toBe('Books');
    expect(links[2].textContent?.trim()).toBe('Users');
  });

  it('should have the correct route for each navigation link', () => {
    const links: NodeListOf<HTMLAnchorElement> = fixture.nativeElement.querySelectorAll('a');

    expect(links[0].getAttribute('routerLink')).toBe('/dashboard');
    expect(links[1].getAttribute('routerLink')).toBe('/books');
    expect(links[2].getAttribute('routerLink')).toBe('/users');
  });

  it('should emit navigate when a navigation link is clicked', () => {
    const navigateSpy = vi.spyOn(component.navigate, 'emit');
    const links: NodeListOf<HTMLAnchorElement> = fixture.nativeElement.querySelectorAll('a');
    links[0].click();
    
    expect(navigateSpy).toHaveBeenCalledTimes(1);
  });
});
