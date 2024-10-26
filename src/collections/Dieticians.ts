import type { CollectionConfig } from 'payload'

export const Dieticians: CollectionConfig = {
  slug: 'dieticians',
  admin: {
    useAsTitle: 'fullName',
    defaultColumns: ['fullName', 'email', 'contactNumber'],
  },
  fields: [
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      unique: true,
    },
    {
      name: 'fullName',
      type: 'text',
      required: true,
    },
    {
      name: 'contactNumber',
      type: 'text',
      validate: (value) => {
        const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/
        if (!phoneRegex.test(value)) {
          return 'Please enter a valid phone number'
        }
        return true
      },
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'specialization',
      type: 'text',
      required: true,
    },
    {
      name: 'licenseNumber',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'bio',
      type: 'textarea',
    },
  ],
  timestamps: true,
}

