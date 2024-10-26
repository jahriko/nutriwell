import React from 'react'
import './globals.css'
import { AuthProvider } from '../_providers/Auth'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
					{children}
        </AuthProvider>
      </body>
    </html>
  )
}