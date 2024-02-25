import type { IPageableResponse } from "@/anixart/schemas/response"
import type { IRelease, IReleaseComment } from "@/anixart/schemas/release"

export interface IInterestingResponse extends IPageableResponse<IInteresting> {}

export interface IInteresting {
  "@id": number
  id: number
  title: string
  description: string
  image: string
  type: number
  action: string
  is_hidden: boolean
}

export interface ICommentsResponse extends IPageableResponse<IReleaseComment> {}

export interface IDiscussingResponse extends IPageableResponse<IRelease> {}

export interface IWatchingResponse extends IPageableResponse<IRelease> {}

export interface IRecommendationsRequest {
  previous_page: number | string
}

export interface IRecommendationsResponse extends IPageableResponse<IRelease> {}
