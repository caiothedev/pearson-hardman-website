# DOCUMENTATION - ᴇɴ

This document references other Markdown files within the documentation for the fictional corporate website of **Pearson Hardman**, the Manhattan law firm from the series *Suits*. This is a fan project intended for a portfolio and is not for commercial use.

## Intranet (login, clients and contracts)

Internal area at `/dashboard`, behind a login. Everything is mocked: no database, no sign-up, no e-mail.

| Where | What |
| --- | --- |
| `src/_data/users.ts` | Users (partners, an associate, an assistant) with plain-text passwords, on purpose |
| `src/_data/clients.ts` | Clients; `partnerId` points to the responsible partner |
| `src/_data/contracts.ts` | Contracts; `clientId` points to the client |
| `src/_lib/session.ts` | Session in an `httpOnly` cookie signed with HMAC (8 hours) |
| `src/_lib/data.ts` | Data access layer: every function checks the session before answering |
| `src/_lib/actions.ts` | `login` and `logout` Server Actions |
| `src/proxy.ts` | Optimistic redirect from `/dashboard` to `/login` when there is no cookie |

Routes: `/login`, `/forgot-password`, `/dashboard`, `/dashboard/clients`, `/dashboard/clients/[id]` and `/dashboard/contracts`.
Demo credentials are listed on the login screen. To use a different session secret, set `SESSION_SECRET` in `.env.local`.

With `cacheComponents` on, nothing reads the cookie outside a `<Suspense>` boundary: the layout and headings ship in the static shell, and user data streams in.

by caiothedev<br />
#docs