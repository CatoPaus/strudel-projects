await samples('github:tidalcycles/dirt-samples')
await samples('github:CatoPaus/strudel-projects/main/songs/new-order-blue-monday-instrumental')

// New Order — Blue Monday (1983) Instrumental Arrangement
// 130 BPM | D Natural Minor | 34-Bar Phase-Locked Arrangement
setCpm(130/4)

// ── 1. OBERHEIM DMX DRUMS (Orbit 1: Tight 80s Studio Hall) ───────────────────
const kickIntro2 = s("<[[odx:0 ~ ~ ~] [odx:0 ~ ~ ~] [odx:0 odx:0 odx:0 odx:0] [odx:0 odx:0 odx:0 odx:0]] [[odx:0 ~ ~ ~] [odx:0 ~ ~ ~] [odx:0 ~ ~ ~] [odx:0 ~ ~ ~]]>")
  .gain("<[[0.84 ~ ~ ~] [0.82 ~ ~ ~] [0.74 0.70 0.76 0.78] [0.80 0.76 0.82 0.86]] [[0.84 ~ ~ ~] [0.82 ~ ~ ~] [0.84 ~ ~ ~] [0.82 ~ ~ ~]]>")

const kickBreak = s("[odx:0 ~ ~ odx:0] [~ ~ odx:0 ~] [~ odx:0 ~ ~] [~ ~ ~ ~]")
  .gain(0.84)

const kickMain = s("odx:0*4").gain(0.84)

$kick: arrange(
  [16, kickIntro2],
  [2,  kickBreak],
  [16, kickMain]
)

const snareBack = stack(
  s("~ odx:1 ~ odx:1").gain(0.60),
  s("~ odx:13 ~ odx:13").gain(0.32)
).orbit(1).room(0.28).roomsize(0.60)

const snareTurn = stack(
  s("[~ ~ ~ ~] [odx:1 ~ ~ ~] [~ ~ ~ ~] [odx:1 ~ odx:1 odx:1]").gain(0.60),
  s("[~ ~ ~ ~] [odx:13 ~ ~ ~] [~ ~ ~ ~] [odx:13 ~ ~ ~]").gain(0.34)
).orbit(1).room(0.30).roomsize(0.60)

$snare: arrange(
  [8,  silence],
  [8,  snareBack],
  [2,  silence],
  [15, snareBack],
  [1,  snareTurn]
)

const hats16 = s("<[[odx:12 ~ odx:12 odx:12] [odx:12 ~ odx:12 odx:12] [~ ~ odx:12 odx:12] [odx:12 ~ odx:12 odx:12]] [[odx:12 ~ odx:12 odx:12] [odx:12 ~ odx:12 odx:12] [odx:12 ~ odx:12 odx:12] [odx:12 ~ odx:12 odx:12]]>")
  .cut(1)
  .hpf(2400).ftype("24db")
  .gain(0.42).pan(0.56)
  .orbit(1).room(0.14).roomsize(0.60)

const hatsOff = s("[~ odx:12]*4")
  .cut(1)
  .hpf(2400).ftype("24db")
  .gain(0.46).pan(0.56)
  .orbit(1).room(0.16).roomsize(0.60)

$hats: arrange(
  [8,  silence],
  [8,  hats16],
  [2,  silence],
  [16, hatsOff]
)

const breakCrash = s("[odx:9 ~ ~ odx:9] [~ ~ odx:9 ~] [~ odx:9 ~ ~] [~ ~ ~ ~]")
  .gain(0.48).pan(0.44)
  .orbit(1).room(0.32).roomsize(0.60)

const dropCrash = s("odx:9 ~ ~ ~")
  .gain(0.50).pan(0.44)
  .orbit(1).room(0.34).roomsize(0.60)

const tomFill = s("[~ ~ ~ ~] [odx:10 odx:10 odx:10 odx:10] [odx:10 odx:10 odx:10 odx:10] [odx:10 odx:10 odx:10 odx:10]")
  .gain("[~ [0.40 0.44 0.46 0.48] [0.46 0.50 0.52 0.54] [0.52 0.54 0.56 0.58]]")
  .pan(0.40)
  .orbit(1).room(0.28).roomsize(0.60)

const tomFillEnd = s("[~ ~ ~ ~] [~ ~ odx:10 odx:10] [odx:10 odx:10 odx:10 ~] [odx:10 odx:10 odx:10 odx:10]")
  .gain(0.52).pan(0.40)
  .orbit(1).room(0.30).roomsize(0.60)

$perc: arrange(
  [16, silence],
  [2,  breakCrash],
  [1,  dropCrash],
  [2,  silence],
  [1,  tomFill],
  [3,  silence],
  [1,  tomFill],
  [1,  dropCrash],
  [6,  silence],
  [1,  tomFillEnd]
)

// ── 2. SEQUENCED PROPHET-5 INTERLOCKING INTRO SYNTH ──────────────────────────
const seqSaw = note(`<
  [[f4 f4 f4 ~] [~ ~ g4 g4] [c4 ~ ~ ~] [d4 d4 d4 ~]]
  [[~ ~ d4 d4] [d4 ~ ~ ~] [d4 d4 d4 ~] [~ ~ d4 d4]]
  [[f4 ~ ~ ~] [f4 g4 g4 ~] [~ ~ c4 c4] [c4 ~ ~ ~]]
  [[d4 d4 d4 ~] [~ ~ d4 d4] [d4 ~ ~ ~] [d4 d4 ~ ~]]
>`)
  .s("sawtooth")
  .hpf(220).ftype("24db")
  .lpf(1100).lpenv(3.2).lpd(0.08).lpq(3.4)
  .decay(0.12).sustain(0.04).release(0.05).clip(0.68)
  .pan(0.38).gain(0.26)
  .orbit(1).room(0.16).roomsize(0.60)

const seqSqr = note(`<
  [[~ f4] [f4 ~] [c4 c4] [~ d4]]
  [[d4 ~] [d4 d4] [~ d4] [d4 ~]]
  [[f4 f4] [~ g4] [c4 ~] [d4 d4]]
  [[~ d4] [d4 ~] [d4 d4] [~ d4]]
>`)
  .s("pulse").pw(0.32)
  .hpf(260).ftype("24db")
  .lpf(1450).lpenv(2.6).lpd(0.09).lpq(2.8)
  .decay(0.10).sustain(0.05).release(0.05).clip(0.65)
  .pan(0.62).gain(0.22)
  .orbit(1).room(0.16).roomsize(0.60)

$seq_synth: arrange(
  [4,  silence],
  [12, stack(seqSaw, seqSqr)],
  [18, silence]
)

// ── 3. MOOG SOURCE SEQUENCED SYNTH BASS (SE-1 Hardware + Dual Analog Saw) ────
const moogPatch = (pat) => pat.layer(
  x => x.s("se1_21")
    .lpf(1350).lpenv(2.4).lpd(0.13).ftype("ladder").lpq(3.0)
    .release(0.06).clip(0.82).gain(0.46),
  x => x.s("sawtooth").unison(2).spread(0)
    .lpf(620).lpenv(3.2).lpd(0.11).ftype("ladder").lpq(3.6)
    .decay(0.15).sustain(0.08).release(0.05).clip(0.76).gain(0.28)
)

const bassGallop = moogPatch(note(`<
  [[f2 ~ f2 f2] [f2 ~ f2 f2] [c2 ~ c2 c2] [c2 ~ c2 c2]]
  [[d2 ~ d2 d2] [d2 ~ d2 d2] [d2 ~ d2 d2] [d2 ~ d2 d2]]
  [[g2 ~ g2 g2] [g2 ~ g2 g2] [c2 ~ c2 c2] [c2 ~ c2 c2]]
  [[d2 ~ d2 d2] [d2 ~ d2 d2] [d2 ~ d2 d2] [d2 ~ d2 d2]]
>`))

const bassOctave = moogPatch(note(`<
  [[f1 f2] [f1 f2] [c1 c2] [c1 c2]]
  [[d1 d2] [d1 d2] [d1 d2] [d1 d2]]
  [[g1 g2] [g1 g2] [c1 c2] [c1 c2]]
  [[d1 d2] [d1 d2] [d1 d2] [d1 d2]]
>`))

$moog_bass: arrange(
  [8,  silence],
  [8,  bassGallop],
  [2,  silence],
  [16, bassOctave]
)

// ── 4. PETER HOOK 6-STRING CHORUS BASS COUNTER-MELODY (Orbit 2) ──────────────
const hookLine = note(`<
  [[d3 d3] [d3 d3] [d3 d3] [d3 d3]]
  [d3@2 c3@2 d3@4]
  [[f3 f3] [f3 f3] [f3 f3] [f3 f3]]
  [f3@2 g3@2 d3@4]
>`).layer(
  x => x.s("gm_electric_bass_pick:0")
    .hpf(160).ftype("24db").lpf(3200)
    .release(0.14).clip(0.92).pan(0.42).gain(0.36)
    .orbit(2).room(0.28).roomsize(0.86),
  x => x.add(note(0.07)).s("gm_electric_bass_pick:0")
    .hpf(200).ftype("24db").lpf(2900)
    .release(0.14).clip(0.92).pan(0.58).gain(0.26)
    .orbit(2).room(0.32).roomsize(0.86)
)

$hook_bass: arrange(
  [18, silence],
  [16, hookLine]
)

// ── 5. E-MU EMULATOR I "URANIUM" CHOIR PAD (Orbit 2) ─────────────────────────
const choirPad = note(`<
  [[f3,a3,c4] [e3,g3,c4]]
  [d3,f3,a3]
  [[d3,g3,b3] [e3,g3,c4]]
  [d3,f3,a3]
>`).layer(
  x => x.s("gm_choir_aahs:5")
    .hpf(260).ftype("24db").lpf(2500)
    .attack(0.22).release(0.60).clip(0.98).pan(0.44).gain(0.24)
    .orbit(2).room(0.54).roomsize(0.86),
  x => x.s("gm_synth_choir:3")
    .hpf(300).ftype("24db").lpf(2800)
    .attack(0.18).release(0.55).clip(0.98).pan(0.56).gain(0.18)
    .orbit(2).room(0.54).roomsize(0.86)
)

$choir: arrange(
  [22, silence],
  [12, choirPad]
)

// ── 6. SOARING 80s SYNTH STRINGS MELODY (Orbit 2) ────────────────────────────
const soaringStrings = note(`<
  [c5@4 b4@3 a4@9]
  [a4@11 c5@5]
  [c5@3 b4@4 a4@7 e5@2]
  [e5@10 a4@4 c5@2]
  [c5@3 b4@5 a4@8]
  [a4@14 c5@2]
  [c5@4 b4@4 a4@5 e5@3]
  [e5@13 ~ c5 b4]
>`).layer(
  x => x.s("gm_synth_strings_1:4")
    .hpf(320).ftype("24db").lpf(3600)
    .attack(0.16).release(0.45).clip(0.98).pan(0.36).gain(0.28)
    .orbit(2).room(0.46).roomsize(0.86),
  x => x.add(note(0.06)).s("sawtooth")
    .hpf(380).ftype("24db").lpf(2400)
    .attack(0.22).sustain(0.75).release(0.45).clip(0.96).pan(0.64).gain(0.11)
    .orbit(2).room(0.48).roomsize(0.86)
)

$strings: arrange(
  [26, silence],
  [8,  soaringStrings]
)

// ── 7. HIGH PPG / PROPHET REPEATING COUNTER-MOTIF (Orbit 2) ──────────────────
const highMotif = note(`<
  [a5@2 e5@6]
  [f5@6 a5@2]
  [a5@2 e5@6]
  [d5@6 a5@2]
>`)
  .s("triangle").fm(1.6).fmh(2).fmdecay(0.20).fmsustain(0.25)
  .hpf(420).ftype("24db").lpf(3000)
  .attack(0.03).decay(0.26).sustain(0.35).release(0.22).clip(0.92)
  .pan(0.66).gain(0.20)
  .orbit(2).room(0.42).roomsize(0.86)

$high_motif: arrange(
  [26, silence],
  [8,  highMotif]
)
