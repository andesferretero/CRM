import Link from 'next/link'

const modules = [
  ['Clientes','clientes'],['Productos','productos'],['Oportunidades','oportunidades'],['Cotizaciones','cotizaciones'],
  ['Órdenes de compra','ordenes-compra'],['Facturación','facturacion'],['Cobranza','cobranza'],['IVA','iva'],
  ['Reportes','reportes'],['Marketing','marketing'],['Configuración','configuracion']
]

export default function Home() {
  return <main className="shell"><header className="topbar"><div className="brand">ANDES <span>FERRETERO</span></div><div>CRM privado</div></header><section className="content"><div className="hero"><p className="muted">Andes Ferretero e Insumos SpA</p><h1>Centro de gestión comercial</h1><p className="muted">La nueva base del CRM está lista para conectar Supabase y reemplazar las APIs internas del artefacto.</p><Link className="button" href="/login">Iniciar sesión</Link></div><div className="grid">{modules.map(([name,slug])=><Link className="card" href={`/modulos/${slug}`} key={slug}><h3>{name}</h3><p className="muted">Módulo CRM</p></Link>)}</div></section></main>
}
