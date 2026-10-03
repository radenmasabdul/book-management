export interface ApiResponse<T> {
  status: number;
  message: string;
  data: T;
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
  timestamp: string;
}