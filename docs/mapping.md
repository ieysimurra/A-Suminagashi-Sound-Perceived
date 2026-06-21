# Mapeamento descritor → visual · Descriptor → visual mapping

**It Looks Like Suminagashi** · Ivan Eiji Simurra · NICS/UNICAMP · 2026

---

## 🇧🇷 Embasamento

**Sopro → som → tinta.** No suminagashi tradicional, a tinta nanquim flutua sobre a água e é conduzida pelo **sopro do artesão e pelas correntes de ar** da sala. Como o som é fisicamente uma **onda de pressão no ar**, dirigir a tinta por áudio não é uma analogia ilustrativa: é a mesma força física — o ar em movimento — agora medida e remapeada. Esse é o eixo conceitual da peça.

**Advecção, não mistura.** O fluido usa um solver de **Navier-Stokes estável** (Stam, 1999) com *vorticity confinement* para gerar filamentos finos. Diferente da marmorização puramente geométrica (Lu et al., 2012), que produz anéis nítidos porém estáticos entre eventos, a advecção de textura dá **movimento contínuo e sedoso** — ao custo de exigir cuidado para as cores não "embarrarem" (a média de RGB na advecção tende a acinzentar). A renderização preserva a separação dos pigmentos.

**Cor por harmonia (Scriabin).** A classe de altura dominante (croma) seleciona uma cor do **clavier à lumières** de Scriabin, sistema sinestésico em que cada nota corresponde a uma cor. É uma escolha histórica e culturalmente situada, não perceptualmente "correta" — e isso é assumido na obra.

**Inarmonicidade medida.** Em vez de um proxy espectral, estima-se **f0 por autocorrelação** e calcula-se o **desvio dos parciais** em relação à série harmônica ideal. Sons mais inarmônicos (metais, ruído, multifônicos) distorcem mais os redemoinhos.

## 🇬🇧 Grounding

**Breath → sound → ink.** In traditional suminagashi the sumi ink floats on water and is steered by the **maker's breath and the room's air currents**. Since sound is physically a **pressure wave in air**, driving the ink with audio is not an illustrative analogy but the same physical force — moving air — now measured and remapped. This is the conceptual spine of the piece.

**Advection, not mixing.** The fluid uses a **stable Navier-Stokes** solver (Stam, 1999) with vorticity confinement for thin filaments. Unlike purely geometric marbling (Lu et al., 2012), which yields crisp but static rings between events, texture advection gives **continuous, silky motion** — at the cost of careful handling so colours don't "mud" (RGB averaging in advection tends toward grey). Rendering preserves pigment separation.

**Colour by harmony (Scriabin).** The dominant pitch class (chroma) selects a colour from Scriabin's **clavier à lumières**, a synaesthetic system pairing each note with a colour. It is a historically and culturally situated choice, not a perceptually "correct" one — and the work owns that.

**Measured inharmonicity.** Rather than a spectral proxy, **f0 is estimated by autocorrelation** and **partial deviation** from the ideal harmonic series is computed. More inharmonic sounds (metals, noise, multiphonics) distort the eddies more.

---

## Tabela de mapeamento · Mapping table

| Descritor / Descriptor | Origem / Source | Parâmetro visual / Visual parameter |
|---|---|---|
| **RMS** (energia / energy) | domínio do tempo / time-domain | dispara e sustenta o traço; comprimento e velocidade / triggers & sustains the stroke; length & speed |
| **Fluxo espectral / Spectral flux** | diferença de magnitude / magnitude difference | detecção de ataque → novo traço / attack detection → new stroke |
| **Sustentação / Sustain** | envelope do RMS (derivado) / RMS envelope (derived) | espessura da tinta / ink thickness |
| **Centroide / Centroid** | espectro / spectrum | ajuste fino do ângulo, brilho / angle fine-tune, brightness |
| **Dispersão / Spread** | espectro / spectrum | raio e quantidade / radius & amount |
| **Planura / Flatness** | espectro / spectrum | turbulência (vorticity) / turbulence |
| **Irregularidade / Irregularity** | Jensen | quebra do contorno, rotação / contour break, spin |
| **Ruído / Noisiness (ZCR)** | cruzamentos por zero / zero-crossings | dispersão/espalhamento / scatter |
| **Inarmonicidade / Inharmonicity** | f0 (autocorrelação) + desvio dos parciais / f0 (autocorrelation) + partial deviation | distorção dos redemoinhos / eddy distortion |
| **Croma / Chroma** (12 classes) | espectro dobrado em oitavas / octave-folded spectrum | **cor de Scriabin** / **Scriabin colour** |
| **MFCC** (c1, c2) | cepstrum (normalizado z-score / z-score normalized) | posição da injeção / injection position |

### Modos de posição · Position modes
- **Radial** — croma → ângulo, RMS → raio / chroma → angle, RMS → radius
- **Timbre** — MFCC normalizado / normalized MFCC
- **Híbrido / Hybrid** — croma → ângulo + MFCC → raio / chroma → angle + MFCC → radius

### Paletas · Palettes
- **Por harmonia / By harmony** — 12 cores de Scriabin / 12 Scriabin colours
- **Tradicional / Traditional** — 墨 sumi, 藍 ai, 朱 shu, 松葉 matsuba

### Parâmetros calibráveis · Tunable parameters
`Sensibilidade/Sensitivity` (limiares de energia e ataque / energy & attack thresholds) · `Persistência/Persistence` (dissipação da tinta / dye dissipation) · constantes internas: `FLUX_THRESH`, `SUSTAIN_CAP`, `VORT`, velocidade do traço / stroke speed.

---

## Referências · References
- J. Stam. *Stable Fluids*. SIGGRAPH 1999.
- S. Lu, A. Jaffer, X. Jin, H. Zhao, X. Mao. *Mathematical Marbling*. IEEE Computer Graphics and Applications, 2012.
- A. Scriabin. *Prometheus: The Poem of Fire* (clavier à lumières), 1910.
- K. Jensen. Timbre models of musical sounds (irregularidade / irregularity).
- Google MediaPipe — Hands / Tasks Vision.
- I. E. Simurra et al. ArtsIT, 2023.
