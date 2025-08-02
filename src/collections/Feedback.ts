import type { CollectionConfig } from 'payload'

export const Feedback: CollectionConfig = {
  slug: 'feedback',
  upload: true,
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'client name',
      type: 'text',
      required: true,
    },
    {
      name: 'client position',
      type: 'text',
      required: true,
    },
    {
      name: 'client feedback',
      type: 'text',
      required: true,
    },
  ],
}
