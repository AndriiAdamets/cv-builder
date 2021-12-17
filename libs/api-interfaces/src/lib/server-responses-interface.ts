export interface ErrorServerResponse {
  status: string;
  message: string;
}

export interface SuccessServerResponse<T> {
  status: string;
  data: T;
}

export interface ServerResponse<T> {
  statusCode: number;
  status: 'success' | 'fail' | 'error';
  message?: string;
  data?: {
    [key: string]: T;
  };
}
