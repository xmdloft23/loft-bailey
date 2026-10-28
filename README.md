# LOFT BAILEY

Enhanced Baileys v7 for Node.js (`>=20`), with:

- Fixes for newsletter/channel media uploads
- Interactive messages, albums, and extra message types
- **AIRich built in** — the rich-response (embedded screens, posts, products, buttons, carousels) toolkit
  is now part of the library itself, exported from the main entry point
- A branded console banner, printed once per process when `makeWASocket()` first runs

## Install

Drop this folder in as your `@whiskeysockets/baileys` (or require it under its own name, `loft-bailey`) —
however your project already references the library is how you keep using it; nothing about `require`/`import`
paths changes except that `AIRich` now comes from the same package.

## AIRich

Before, a bot kept its own copy of `lib/airich.js` and required the WhatsApp library separately to reach
`generateWAMessageFromContent` and friends. Now it's one import:

```js
import makeWASocket, { AIRich, Toolkit, richSupported } from 'loft-bailey';
// or: const { AIRich, Toolkit, richSupported } = require('loft-bailey');

const sock = makeWASocket({ /* ...your config... */ });

if (richSupported()) {
    const rich = new AIRich(sock).addText('Hello from LOFT BAILEY');
    await rich.send(jid);
}
```

Everything AIRich could do before — `addText`, `addImage`, `addPost`, `addProduct`, `addSuggest`,
`addFooterAction`, `Button`, `ButtonV2`, `Carousel`, `Toolkit.resize/fetchBuffer/stringifyEscaped`, embedded
HTML screens, and so on — works exactly as before. The code is unchanged; only how it's packaged is new.

