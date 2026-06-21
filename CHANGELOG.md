# Changelog — It Looks Like Suminagashi

Formato baseado em *Keep a Changelog*. Versões marcam saltos de arquitetura/feature.

## v2.8 — rosto + janela de câmera
- **Rastreio facial** como alternativa às mãos (MediaPipe FaceLandmarker): contorno (oval), olhos, sobrancelhas, boca, íris e maçãs do rosto viram emissores de tinta dirigidos pelo movimento de cada ponto.
- Botão de rastreio agora cicla **Off → Mãos → Rosto**; a câmera é compartilhada e os modelos carregam sob demanda.
- **Janela da câmera** redesenhada: cabeçalho com título, **arrastável** pela barra superior e **minimizável** (–/▢), com **overlay** que desenha os pontos rastreados sobre o vídeo espelhado.
- A janela da câmera **permanece visível na tela limpa** (tecla H), podendo ser minimizada ou não.
- Subamostragem dos pontos faciais e teto de splats por quadro no mobile (desempenho).
- **Responsividade mobile** revista: barra inferior rolável a partir da esquerda (nenhum controle fica inacessível), sliders que não disputam com a rolagem ao toque, câmera reposicionada para fora da barra (canto superior), tratamento dedicado para **paisagem** em telas baixas e reposicionamento automático ao girar o aparelho.

## v2.7 — mobile / PWA
- Versão instalável (Web App Manifest + Service Worker, abre offline exceto rastreio de mãos).
- Performance escalonada automaticamente no celular (tinta 512², 16 iterações de pressão, DPR ≤ 1.5, janela de f0 reduzida).
- Layout responsivo (barra rolável na horizontal, safe-areas iOS, painel oculto por padrão em telas pequenas).
- Mãos desligadas por padrão no mobile, ligáveis no toque.
- Barra de controle ocultável (⌄) e visão limpa total pela tecla **H**.

## v2.6 — gesto das mãos
- Rastreio de mãos via MediaPipe Tasks Vision: palma aberta = pintar/arrastar; mão fechada = soltar; duas mãos = dois pincéis (preview de câmera espelhado).

## v2.5 — traços contínuos
- Pincel "viajante": o traço caminha pela tela enquanto o som sustenta (fim das "ilhas"); histerese de ataque para traços longos.
- Slider de **Sensibilidade** (limiares de energia/ataque); RMS passa a controlar comprimento/velocidade do traço.
- Modos de posição **Radial / Híbrido / Timbre**; correção do viés de canto (MFCC normalizado por z-score).
- Slider de **Persistência** (transparência da tinta).

## v2.3 — fase 2: sinestesia e timbre
- Inarmonicidade "de verdade" (estimativa de f0 por autocorrelação + desvio dos parciais medidos).
- **Croma (12 classes) → cores de Scriabin** (clavier à lumières).
- **MFCC → posição** da injeção. Medidor de croma (nota dominante colorida).

## v2.2 — interface
- Interface sem japonês, bilíngue PT/EN com alternância.
- Painel de descritores flutuante (arrastável) e ocultável.
- Cinco fundos para variar o contraste.
- Descritores nativos adicionais: Irregularidade, Ruído (ZCR), Inarmonicidade (aprox.).

## v2.0 — advecção de textura (WebGL)
- Reescrita para Navier-Stokes estável em WebGL2 com vorticity confinement (filamentos sedosos).
- Pigmentos com as tonalidades da referência; modo por timbre + 4 pigmentos tradicionais.
- Modelo de pincel de áudio: fluxo = ataque, sustentação = espessura.

## v1.0 — fluxo contínuo (Canvas 2D)
- Advecção da geometria por campo curl-noise (movimento contínuo) mantendo cores não-misturadas.

## v0 — marbling matemático (Canvas 2D)
- Operador de gota (Lu et al., 2012): anéis que se deslocam sem misturar.
- Descritores nativos base: RMS, Centroide, Dispersão, Planura.
