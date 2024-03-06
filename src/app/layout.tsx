'use client'

import { ReactNode } from 'react'
import '@/ui/styles/itcss.scss'
import styles from './layout.module.scss'
import { roboto } from '@/ui/styles/settings/fonts'
import { registerModules } from '@/_di/container'

interface Props {
  children: ReactNode
}

registerModules()

const RootLayout = ({ children }: Props) => (
  <html lang="en" className={roboto.className}>
    <body className={styles.layout}>
      <main className={styles.content}>{children}</main>
    </body>
  </html>
)

export default RootLayout
