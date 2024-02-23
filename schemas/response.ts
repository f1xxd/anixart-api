export enum ResponseCode {
  SUCCESS = 0,
  FAILED = 1,
  BANNED = 402,
  PERMANENT = 403,
}

export interface IResponse {
  code: ResponseCode
}

export interface IPageableResponse<T> extends IResponse {
  content: T[]
  total_count: number
  total_page_count: number
  current_page: number
}
