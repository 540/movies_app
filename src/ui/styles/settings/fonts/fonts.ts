import { Roboto } from 'next/font/google'

export const FONT_TYPES = [
  's-300',
  's-500',
  's-700',
  'm-300',
  'm-500',
  'm-700',
  'l-300',
  'l-700',
  'xl-300',
  'xl-700',
  '2xl-700',
  '3xl-700',
  '4xl-500',
] as const

export const roboto = Roboto({
  weight: ['300', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export type FontType = (typeof FONT_TYPES)[number]
