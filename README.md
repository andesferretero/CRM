# Andes Ferretero CRM

CRM privado para Andes Ferretero e Insumos SpA.

## Arquitectura objetivo

- Next.js + TypeScript para la aplicación web.
- Supabase PostgreSQL para datos, Supabase Auth para el acceso y Storage para archivos futuros.
- Componentes de interfaz reutilizables y módulos separados por dominio.
- Migraciones SQL versionadas en `supabase/migrations`.
- Variables sensibles únicamente en `.env.local` y en los secretos de Vercel.

## Módulos de la primera versión

Dashboard, clientes, productos, oportunidades, cotizaciones, órdenes de compra, facturación, cobranza, IVA, reportes, marketing, usuarios y configuración.

El prototipo original se conserva temporalmente en `legacy/index.html` como referencia funcional.

## Puesta en marcha

1. Instalar Node.js LTS y Git.
2. Crear el proyecto Supabase y completar `.env.local` a partir de `.env.example`.
3. Ejecutar las migraciones SQL.
4. Crear el usuario administrador desde Supabase Auth.
5. Ejecutar `npm install` y `npm run dev`.
6. Crear el repositorio GitHub y conectar el proyecto con Vercel.

Nunca subir `.env.local` ni contraseñas al repositorio.
