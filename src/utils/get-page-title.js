import defaultSettings from '@/settings'

const title = defaultSettings.title || '安全星盟'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
