import type { CollectionConfig } from 'payload'

export const ProgressTracking: CollectionConfig = {
  slug: 'progress-tracking',
  admin: {
    useAsTitle: 'patient',
    defaultColumns: ['patient', 'progressDate', 'status'],
  },
  fields: [
    {
      name: 'patient',
      type: 'relationship',
      relationTo: 'patients',
      required: true,
    },
    {
      name: 'dietician',
      type: 'relationship',
      relationTo: 'dieticians',
      required: true,
    },
    {
      name: 'progressDate',
      type: 'date',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'On Track', value: 'on_track' },
        { label: 'Needs Improvement', value: 'needs_improvement' },
        { label: 'Completed', value: 'completed' },
      ],
      defaultValue: 'on_track',
      required: true,
    },
    {
      name: 'notes',
      type: 'richText',
    },
    {
      name: 'attachment',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Upload any supporting documents or images.',
      },
    },
  ],
  timestamps: true,
}

