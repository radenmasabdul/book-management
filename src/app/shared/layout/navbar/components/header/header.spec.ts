import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Header } from './header';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;

    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the brand name', () => {
    const element: HTMLElement = fixture.nativeElement;

    expect(element.textContent).toContain('Book Management');
    expect(element.textContent).toContain('Library administration');
  });

  it('should render the mobile menu button', () => {
    const button: HTMLButtonElement =
      fixture.nativeElement.querySelector('button[aria-label="Toggle navigation menu"]');

    expect(button).toBeTruthy();
    expect(button.getAttribute('aria-expanded')).toBe('false');
  });

  it('should emit menuClick when the menu button is clicked', () => {
    const menuClickSpy = vi.spyOn(component.menuClick, 'emit');

    const button: HTMLButtonElement =
      fixture.nativeElement.querySelector('button[aria-label="Toggle navigation menu"]');

    button.click();

    expect(menuClickSpy).toHaveBeenCalledTimes(1);
  });

  it('should emit brandClick when the brand link is clicked', () => {
    const brandClickSpy = vi.spyOn(component.brandClick, 'emit');

    const brandLink: HTMLAnchorElement =
      fixture.nativeElement.querySelector('a[routerLink="/dashboard"]');

    brandLink.click();

    expect(brandClickSpy).toHaveBeenCalledTimes(1);
  });

  it('should show the close icon when the mobile menu is open', () => {
    fixture.componentRef.setInput('isMobileMenuOpen', true);
    fixture.detectChanges();

    const button: HTMLButtonElement =
      fixture.nativeElement.querySelector('button[aria-label="Toggle navigation menu"]');

    expect(button.getAttribute('aria-expanded')).toBe('true');
    expect(button.querySelector('ng-icon[name="lucideX"]')).toBeTruthy();
  });

  it('should show the menu icon when the mobile menu is closed', () => {
    fixture.componentRef.setInput('isMobileMenuOpen', false);
    fixture.detectChanges();

    const button: HTMLButtonElement =
      fixture.nativeElement.querySelector('button[aria-label="Toggle navigation menu"]');

    expect(button.getAttribute('aria-expanded')).toBe('false');
    expect(button.querySelector('ng-icon[name="lucideMenu"]')).toBeTruthy();
  });
});
