import type { IPageableResponse } from "@/anixart/schemas/response"
import type { IProfile } from "./profile"

export interface IProfileSearchRequest {
  query: string
}

export interface IProfileSearchResponse extends IPageableResponse<IProfile> {}

export interface IReleaseSearchRequest {
  query: string
}

export interface IReleaseSearchResponse extends IPageableResponse<IReleaseSearch> {}

export interface IReleaseSearch {
  translators: string | unknown
  id: number
  broadcast: number
  year: string
  country: string
  duration: number
  description: string
  image: string
  genres: string
  studio: string
  season: number
  note: string | unknown
  author: string
  poster: string
  director: string
  rating: number
  grade: number
  status_id: number
  favorites_count: number
  title_ru: string
  creation_date: number
  last_update_date: number
  title_original: string
  episodes_released: number
  episodes_total: number
  release_date: string | unknown
  aired_on_date: number
  age_rating: number
  profile_list_status: string | unknown
  vote_count: number
  is_adult: boolean
  is_play_disabled: boolean
  is_deleted: boolean
  is_viewed: boolean
  is_favorite: boolean
}