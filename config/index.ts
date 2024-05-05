import type { AppInfo } from '@/types/app'
export const APP_ID = `${process.env.NEXT_PUBLIC_APP_ID}`
export const API_KEY = `${process.env.NEXT_PUBLIC_APP_KEY}`
export const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`
export const APP_INFO: AppInfo = {
  title: 'Koi-Tre AI',
  description: 'Koi-Tre AIは、恋愛のコミュニケーションを実践的に鍛えられるチャットサービスです。\n考えてアウトプットして改善していく。\n日々自身を成長させるための一手としてぜひ習慣的にお使いください⭐\nまず前提となる情報や希望の情報を入力し、始めてみましょう！',
  copyright: '',
  privacy_policy: '',
  default_language: 'ja',
}

export const isShowPrompt = false
export const promptTemplate = 'I want you to act as a javascript console.'

export const API_PREFIX = '/api'

export const LOCALE_COOKIE_NAME = 'locale'

export const DEFAULT_VALUE_MAX_LEN = 48
