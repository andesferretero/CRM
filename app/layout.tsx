import './globals.css'
import './extra.css'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Andes Ferretero CRM', description: 'CRM de Andes Ferretero e Insumos SpA' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="es"><body>{children}</body></html>
}
