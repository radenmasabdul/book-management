import { HttpClient } from "@angular/common/http";
import { computed, inject, Injectable, signal } from "@angular/core";
import { Observable, tap } from "rxjs";
import { environment } from '../../../../environments/environment';
import { ApiResponse } from "../../../core/models/api-response.model";
import { Auth } from "../models/auth.model";
import { CurrentUser } from "../models/current-user.model";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.apiUrl}/auth`;
  private readonly currentUserState = signal<CurrentUser | null>(null);

  readonly currentUser = this.currentUserState.asReadonly();

  readonly isAuthenticated = computed(() => this.currentUser() !== null);

  login(payload: Auth): Observable<ApiResponse<null>> {
    return this.http.post<ApiResponse<null>>(`${this.apiUrl}/login`, payload, {
      withCredentials: true,
    });
  }

  getCurrentUser(): Observable<ApiResponse<CurrentUser>> {
    return this.http
      .get<ApiResponse<CurrentUser>>(`${this.apiUrl}/me`, { withCredentials: true })
      .pipe(
        tap({
          next: (response) => {
            this.currentUserState.set(response.data ?? null);
          },
          error: () => {
            this.currentUserState.set(null);
          },
        }),
      );
  }

  logout(): Observable<ApiResponse<null>> {
    return this.http.post<ApiResponse<null>>(
      `${this.apiUrl}/logout`,
      {},
      {
        withCredentials: true,
      },
    );
  }
}