// Kiểu cơ bản cho response thành công
export interface SuccessResponse<T> {
  success: true;
  data: T;
  message?: string;
}

// Kiểu cho response lỗi (có thể mở rộng)
export interface ErrorResponse<T = string> {
  success: false;
  error: T;
  code?: number;
}

// Kiểu cho response phân trang
export interface PaginatedResponse<T> {
  success: true;
  data: T[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

// Union type cho tất cả kiểu phản hồi
export type APIResponse<T> = SuccessResponse<T> | ErrorResponse | PaginatedResponse<T>;
