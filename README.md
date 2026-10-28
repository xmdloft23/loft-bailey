<div align="center">

# LOFT BAILEY

**The Ultimate Enhanced Baileys v7 for Node.js (>=20)**

Built for raw performance, absolute stability, and next-level rich messaging.

<br />

[![NPM Version](https://img.shields.io/npm/v/@loftxmd/loft-bailey?style=for-the-badge&color=blue)](https://www.npmjs.com/package/@loftxmd/loft-bailey)
[![Node Version](https://img.shields.io/badge/Node.js-%3E%3D20-green?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-ISC-purple?style=for-the-badge)]()

</div>

---

## Why LOFT BAILEY?

Stop juggling multiple dependencies. LOFT BAILEY consolidates everything you need into one lethal package.

- **AIRich Built-in:** No more external `lib/airich.js`. Buttons, carousels, embedded screens, and rich responses are exported directly from the core.
- **Channel Media Fixed:** Zero bugs when uploading media to newsletters and channels.
- **Interactive & Albums:** Full support for all advanced WhatsApp message types.
- **Branded Banner:** A sleek console signature the moment your socket connects.

---

## Installation

```bash
npm install @loftxmd/loft-bailey
```

Drop-in Replacement:
Replace your existing Baileys dependency without changing a single require path:

```json
"dependencies": {
  "@whiskeysockets/baileys": "npm:@loftxmd/loft-bailey@1.0.0"
}
```

---

The AIRich Engine

Zero setup. Zero friction. Just import and deploy.

```javascript
const makeWASocket = require('@loftxmd/loft-bailey');
const { AIRich, richSupported } = require('@loftxmd/loft-bailey');

const sock = makeWASocket({ /* your config */ });

if (richSupported()) {
    const rich = new AIRich(sock)
        .addText('System Online. Welcome to LOFT BAILEY.');
        
    await rich.send(jid);
}
```

Lethal Methods

Everything you need to dominate the UI:

· addText, addImage, addPost, addProduct, addSuggest
· addFooterAction
· Button, ButtonV2, Carousel
· Toolkit.resize, Toolkit.fetchBuffer, Toolkit.stringifyEscaped
· Embedded HTML screens

---

Quick Start

```javascript
const { default: makeWASocket, useMultiFileAuthState } = require('@loftxmd/loft-bailey');

async function startBot() {
    const { state, saveCreds } = await useMultiFileAuthState('auth_info');
    const sock = makeWASocket({ auth: state, printQRInTerminal: true });

    sock.ev.on('creds.update', saveCreds);
    
    sock.ev.on('messages.upsert', async ({ messages }) => {
        const m = messages[0];
        if (!m.message) return;
        
        // Auto-reply logic here
        await sock.sendMessage(m.key.remoteJid, { text: 'LOFT BAILEY Active.' });
    });
}

startBot();
```

---

Disclaimer

Not affiliated with WhatsApp. Use responsibly. Do not use for spam or bulk messaging. The maintainers are not liable for account bans or misuse.

<br />
<div align="center">
  <b>Built for the elite. Powered by LOFT XMD.</b>
</div>
```