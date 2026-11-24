# DOCUMENTAÇÃO - ᴘᴛ

Esse documento referência outros markdonws da documentação do site corporativo fictício da **Pearson Hardman**, a firma de advocacia deManhattan da série *Suits*. É um projeto de fã e de portfólio, sem fins comerciais.

## Intranet (login, clientes e contratos)

Área interna em `/dashboard`, protegida por login. Tudo é mockado: não há banco de dados, cadastro nem envio de e-mail.

| Onde | O quê |
| --- | --- |
| `src/_data/users.ts` | Usuários (sócios, associado, assistente) com senha em texto puro, de propósito |
| `src/_data/clients.ts` | Clientes; `partnerId` aponta para o sócio responsável |
| `src/_data/contracts.ts` | Contratos; `clientId` aponta para o cliente |
| `src/_lib/session.ts` | Sessão em cookie `httpOnly` assinado com HMAC (8 horas) |
| `src/_lib/data.ts` | Camada de acesso a dados: toda função confere a sessão antes de responder |
| `src/_lib/actions.ts` | Server Actions de `login` e `logout` |
| `src/proxy.ts` | Redirecionamento otimista de `/dashboard` para `/login` sem cookie |

Rotas: `/login`, `/forgot-password`, `/dashboard`, `/dashboard/clients`, `/dashboard/clients/[id]` e `/dashboard/contracts`.
As credenciais de demonstração aparecem na própria tela de login. Para usar outro segredo de sessão, defina `SESSION_SECRET` no `.env.local`.

Com `cacheComponents` ligado, nada lê o cookie fora de um `<Suspense>`: o layout e os títulos vão no shell estático, e os dados do usuário chegam por streaming.

by caiothedev<br />
#docs