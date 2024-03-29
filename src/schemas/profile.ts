import type { IResponse, IPageableResponse } from "./response"

export interface IProfileSocialResponse extends IResponse {
  vk_page: string
  tg_page: string
  inst_page: string
  tt_page: string
  discord_page: string
}

export interface IProfileNicknamesResponse
  extends IPageableResponse<IProfileNicknames> {}

export interface IProfileResponse extends IProfile {}

export interface IProfileToken {
  id: string
  token: string
}

export interface IForeignProfile {
  id: number
  login: string
  avatar: string
  ban_expires: number
  ban_reason: unknown
  privilege_level: number
  badge_id: number | unknown
  badge_name: string | unknown
  badge_type: string | unknown
  badge_url: string | unknown
  is_banned: boolean
  is_sponsor: boolean
  is_verified: boolean
}

export interface IProfileNicknames {
  "@id": number
  id: number
  newLogin: string
  timestamp: number
}

export interface IProfile {
  id: number
  login: string
  avatar: string
  status: string
  sponsorshipExpires: number
  history: unknown[]
  votes: unknown[]
  last_activity_time: number
  register_date: number
  vk_page: string
  tg_page: string
  inst_page: string
  tt_page: string
  discord_page: string
  ban_expires: number
  ban_reason: unknown
  ban_note: unknown
  privilege_level: number
  watching_count: number
  plan_count: number
  completed_count: number
  hold_on_count: number
  dropped_count: number
  favorite_count: number
  comment_count: number
  collection_count: number
  video_count: number
  friend_count: number
  watched_episode_count: number
  watched_time: number
  is_private: boolean
  is_sponsor: boolean
  is_banned: boolean
  is_perm_banned: boolean
  is_bookmarks_transferred: boolean
  is_sponsor_transferred: boolean
  is_vk_bound: boolean
  is_google_bound: boolean
  is_release_type_notifications_enabled: boolean
  is_episode_notifications_enabled: boolean
  is_first_episode_notification_enabled: boolean
  is_related_release_notifications_enabled: boolean
  is_report_process_notifications_enabled: boolean
  is_comment_notifications_enabled: boolean
  is_my_collection_comment_notifications_enabled: boolean
  is_verified: boolean
  watch_dynamics: unknown[]
  friend_status: unknown
  rating_score: number
  is_blocked: boolean
  is_me_blocked: boolean
  is_stats_hidden: boolean
  is_counts_hidden: boolean
  is_social_hidden: boolean
  is_friend_requests_disallowed: boolean
  is_online: boolean
  roles: unknown[]
}
