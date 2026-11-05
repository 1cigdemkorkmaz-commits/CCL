# Creative Comms Lab — Website

CCL web sitesi, Cloudflare Workers (statik asset) üzerinde çalışır.

- `public/index.html` — site (Claude Design "CCL Website v6" dışa aktarımı)
- `wrangler.jsonc` — Cloudflare Workers ayarları
- `src/index.js` — tek alan adı kuralı: http→https ve www→creativecommslab.com (301); diğer adreslere noindex
- `public/_headers` — güvenlik ve önbellek başlıkları

Yayın: `main` dalına push → Cloudflare GitHub'dan otomatik yayınlar.

## Komutlar

```sh
npm install
npm run dev     # http://localhost:8787
npm run deploy  # Cloudflare'e yayınla
```
