import type { CollectionConfig } from 'payload'

export const Patients: CollectionConfig = {
  slug: 'patients',
  admin: {
    useAsTitle: 'fullName',
    defaultColumns: ['fullName', 'dateOfBirth', 'contactNumber'],
  },
  fields: [
    {
      name: 'fullName',
      type: 'text',
      required: true,
    },
    {
      name: 'dateOfBirth',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
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
    },
    {
      name: 'email',
      type: 'email',
    },
    {
      name: 'address',
      type: 'text',
    },
    {
      name: 'medicalHistory',
      type: 'richText',
    },
  ],
  timestamps: true,
}

