import { CollectionConfig } from 'payload'

export const Stats: CollectionConfig = {
  slug: 'stats',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'completedProjects',
      type: 'text',
      required: true,
    },
  ],
}
