import type { IResponse } from "@/anixart/schemas/response"

export interface IToggles {
  minVersionCode: number
  lastVersionCode: number
  whatsNew: string
  downloadLink: string
  minGPVersionCode: number
  lastGPVersionCode: number
  gpWhatsNew: string
  gpDownloadLink: string
  overrideGPVersion: boolean
  inAppUpdates: boolean
  inAppUpdatesImmediate: boolean
  inAppUpdatesFlexibleDelay: number
  impMessageEnabled: boolean
  impMessageText: string
  impMessageBackgroundColor: string
  impMessageTextColor: string
  impMessageLink: string
  adBannerBlockId: string
  adBannerDelay: number
  adInterstitialDelay: number
  kodikVideoLinksUrl: string
  kodikIframeAd: string
  sibnetRandUserAgent: boolean
  sibnetUserAgent: string
  torlookUrl: string
  apiUrl: string
  apiAltUrl: string
  apiAltAvailable: boolean
  sponsorshipPromotion: boolean
  sponsorshipText: string
  sponsorshipAvailable: boolean
  pageNoConnectionUrl: string
  min_blog_create_rating_score: number
}

export interface ITogglesRequest {
  version_code: number
  is_beta?: boolean
  is_api_alt?: boolean
}

export interface ITogglesResponse extends IResponse, IToggles {}
