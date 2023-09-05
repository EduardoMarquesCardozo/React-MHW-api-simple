export interface APIResponse<T> {
  status: number;
  data: T;
  statusText: string;
}
