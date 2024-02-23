export interface IRequestOptions {
  path: string
  signal?: AbortSignal
  token?: string
  params?: object
  json?: object
  urlencoded?: object
}

export interface IBaseApiParams {
  request?: Omit<IRequestOptions, "path">
}
