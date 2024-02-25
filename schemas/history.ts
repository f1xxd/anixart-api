import type { IResponse, IPageableResponse } from "@/anixart/schemas/response"
import type { IRelease } from "@/anixart/schemas/release"

export interface IHistoryResponse extends IPageableResponse<IRelease> {}

export interface IHistoryAddResponse extends IResponse {}

export interface IHistoryDeleteResponse extends IResponse {}