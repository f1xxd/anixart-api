import type { IResponse, IPageableResponse } from "./response"
import type { IRelease } from "./release"

export interface IHistoryResponse extends IPageableResponse<IRelease> {}

export interface IHistoryAddResponse extends IResponse {}

export interface IHistoryDeleteResponse extends IResponse {}
