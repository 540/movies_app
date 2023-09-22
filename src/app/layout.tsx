import { FC, ReactNode } from 'react'
import '@/ui/styles/itcss.scss'
import styles from './layout.module.scss'
import { registerModules } from '@/core/Shared/_di/registerModules'
import { roboto } from '@/ui/styles/settings/fonts'

registerModules()

interface Props {
  children: ReactNode
}

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="en" className={roboto.className}>
      <body className={styles.layout}>
        <main className={styles.content}>{children}</main>
      </body>
    </html>
  )
}

export default RootLayout
