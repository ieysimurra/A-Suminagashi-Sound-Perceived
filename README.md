# It Looks Like Suminagashi

**Marmorização sonora interativa · Interactive sound marbling**
Série *It Looks Like…* — NICS/UNICAMP · Ivan Eiji Simurra · 2026

Uma única base de código, **responsiva**: roda em **computador** (mouse, webcam, teclado) e em **celular** como **PWA instalável**. O `index.html` detecta o dispositivo e ajusta resolução, controles e desempenho automaticamente.

🔗 **Demo:** `https://<usuário>.github.io/it-looks-like-suminagashi/`

---

## 🇧🇷 Português

### Sobre
Reimaginação digital do **suminagashi** (墨流し), a mais antiga técnica de marmorização em água, japonesa, do século XII. Tradicionalmente o artista move a tinta flutuante pelo **sopro e pelas correntes de ar** — e som é onda de pressão no ar. Daí a premissa: dirigir a tinta **por descritores de áudio** não é metáfora, é a continuação digital do gesto original. O fluido é simulado por um **solver de Navier-Stokes estável em WebGL2** (Stam, com *vorticity confinement*), que estica o pigmento em filamentos finos e sedosos.

### Como funciona
O áudio (microfone ou arquivo) é analisado em tempo real e mapeado para o fluido — ver `docs/mapping.md` para a tabela completa. Em resumo: **RMS** dispara/sustenta e alonga o traço; **fluxo espectral** detecta o ataque; a **sustentação** (envelope do RMS) engrossa a tinta; **centroide/dispersão/planura** modelam ângulo, raio e turbulência; **irregularidade/ruído** quebram o contorno; **inarmonicidade** (f0 + desvio dos parciais) distorce os redemoinhos; **croma → cores de Scriabin** define a cor; **MFCC** define a posição.

### Controles
- **Traçar** (mouse/toque) — pinta; segurar engrossa.
- **Rastreio** (webcam) — botão que cicla **Mãos → Rosto → desligado**. *Mãos:* palma aberta = pintar/arrastar, mão fechada = soltar, duas mãos = dois pincéis. *Rosto:* contorno, olhos, boca, sobrancelhas, íris e maçãs viram emissores de tinta pelo movimento. *Desligado por padrão.*
- **Janela da câmera** — arrastável e minimizável; permanece visível na tela limpa (H), mostrando os pontos rastreados sobre o vídeo.
- **Posição** — Radial / Híbrido / Timbre.
- **Sensibilidade** e **Persistência** — sliders.
- **Fundo** — cinco fundos para variar o contraste.
- **Automático** — performa sozinho (galeria/teste).
- **Ocultar barra (⌄)** e **tecla H** — visão limpa para exibição.

### Instalar como app (mobile/desktop, PWA)
Abra a URL (GitHub Pages, **HTTPS**) e use **"Adicionar à Tela de Início"** (iOS/Safari) ou **"Instalar app"** (Chrome). Abre em tela cheia, com ícone, e funciona offline — exceto o rastreio de mãos, que depende da CDN do MediaPipe.

### Executar e publicar
Arquivos estáticos, **sem build step**.
```bash
python3 -m http.server 8080   # microfone/câmera exigem localhost ou HTTPS
```
Publicação: subir **todos os arquivos na raiz** → GitHub Pages (branch `main`, `/root`). O `.nojekyll` garante a entrega como está.

### Tecnologia
WebGL2 (RGBA16F, Navier-Stokes) · Web Audio API (descritores nativos, sem dependências) · MediaPipe Tasks Vision (mãos, via CDN) · Web App Manifest + Service Worker (PWA). Sem framework, sem build.

---

## 🇬🇧 English

### About
A digital reimagining of **suminagashi** (墨流し), the oldest water-marbling technique, Japanese, from the 12th century. Traditionally the artist moves the floating ink with **breath and air currents** — and sound is a pressure wave in air. Hence the premise: driving the ink with **audio descriptors** is not a metaphor but the digital continuation of the original gesture. The ink is simulated by a **stable Navier-Stokes fluid solver in WebGL2** (Stam, with vorticity confinement), stretching pigment into fine, silky filaments.

### How it works
Audio (microphone or file) is analysed in real time and mapped to the fluid — see `docs/mapping.md` for the full table. In short: **RMS** triggers/sustains and lengthens the stroke; **spectral flux** detects attacks; the **sustain** envelope thickens the ink; **centroid/spread/flatness** shape angle, radius and turbulence; **irregularity/noisiness** break the contour; **inharmonicity** (f0 + partial deviation) distorts the eddies; **chroma → Scriabin colours** sets colour; **MFCC** sets position.

### Controls
Trace (mouse/touch, hold to thicken); **Tracking** via webcam — a button cycling **Hands → Face → off**: *Hands* (open palm = paint, closed = release, two hands = two brushes); *Face* (oval contour, eyes, mouth, eyebrows, irises and cheeks emit ink by movement) — *off by default*; the **camera window** is draggable, minimizable and stays visible in clean view, showing the tracked points over the video. Position (Radial/Hybrid/Timbre); Sensitivity & Persistence sliders; Background presets; Auto; hide bar (⌄) and key **H** for a clean exhibition view.

### Install as an app (PWA)
Open the URL (GitHub Pages, **HTTPS**) and use **"Add to Home Screen"** (iOS/Safari) or **"Install app"** (Chrome). Full-screen, own icon, works offline except hand tracking (needs the MediaPipe CDN).

### Run & deploy
Static, **no build step**. Serve locally (`python3 -m http.server`) or deploy on **GitHub Pages** (all files at repo root). Microphone/camera require localhost or HTTPS.

### Tech
WebGL2 · Web Audio API (native descriptors) · MediaPipe Tasks Vision (hands) · Web App Manifest + Service Worker (PWA). No framework, no build.

---

## Documentação · Documentation
- `docs/abstract.md` — resumo acadêmico / paper-ready abstract (PT/EN)
- `docs/mapping.md` — mapeamento descritor→visual + embasamento / descriptor→visual mapping + grounding
- `exhibition/` — card de galeria, textos curto/longo, guia do facilitador

## Referências · References
- J. Stam, *Stable Fluids*, SIGGRAPH 1999.
- S. Lu, X. Jin, et al., *Mathematical Marbling*, IEEE Computer Graphics & Applications, 2012.
- A. Scriabin, *clavier à lumières* (Prometheus, 1910) — altura↔cor.
- MediaPipe Hands / Tasks Vision (Google).
- I. Simurra et al., ArtsIT 2023.

## Licença · License
CC BY-NC-SA 4.0 — ver / see `LICENSE`.

---

*It Looks Like…* é uma série contínua de reinterpretações, em navegador, de obras marcantes da arte sonora e da música experimental. · NICS/UNICAMP.
