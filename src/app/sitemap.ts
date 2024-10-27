import { MetadataRoute } from 'next'

import { CONSTANTS } from '@/app/utils/constants'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: CONSTANTS.SITE_URL,
      lastModified: new Date(),
    },
  ]
}
