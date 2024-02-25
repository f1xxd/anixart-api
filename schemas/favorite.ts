import type { IResponse, IPageableResponse } from "@/anixart/schemas/response"
import type { IRelease } from "@/anixart/schemas/release"

export interface IFavoritesResponse extends IPageableResponse<IRelease> {}

export interface IFavoriteAddResponse extends IResponse {}

export interface IFavoriteDeleteResponse extends IResponse {}