import { ErrorResponse, PaginatedResponse, SuccessResponse } from '../interfaces/responses.interface';

// Hàm helper tạo response thành công
export function successResponse<T>(data: T, message?: string): SuccessResponse<T> {
  return {
    success: true,
    data,
    message,
  };
}

// Hàm helper tạo response lỗi
export function errorResponse(error: string, code?: number): ErrorResponse {
  return {
    success: false,
    error,
    code,
  };
}

// Hàm helper tạo response cho dữ liệu phân trang
export function paginatedResponse<T>(data: T[], total: number, page: number, limit: number): PaginatedResponse<T> {
  return {
    success: true,
    data,
    meta: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    },
  };
}
