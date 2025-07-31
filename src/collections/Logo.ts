import type { CollectionConfig } from 'payload'

export const Logo: CollectionConfig = {
  slug: 'logo',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: true,
}
