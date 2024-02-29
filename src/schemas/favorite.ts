import type { IResponse, IPageableResponse } from "./response"
import type { IRelease } from "./release"

export interface IFavoritesResponse extends IPageableResponse<IRelease> {}

export interface IFavoriteAddResponse extends IResponse {}

export interface IFavoriteDeleteResponse extends IResponse {}
