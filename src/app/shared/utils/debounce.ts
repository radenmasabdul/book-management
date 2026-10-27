import { debounceTime, distinctUntilChanged, Observable } from "rxjs";

export function useDebounce<T>(source$: Observable<T>, delay = 500): Observable<T> {
  return source$.pipe(debounceTime(delay), distinctUntilChanged());
}