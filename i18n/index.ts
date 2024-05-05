export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'ja', 'zh-Hans'],
} as const

export type Locale = typeof i18n['locales'][number]

export const validateLocale = (locale: string): Locale => {
  return i18n.locales.includes(locale as Locale) ? locale as Locale : i18n.defaultLocale;
}