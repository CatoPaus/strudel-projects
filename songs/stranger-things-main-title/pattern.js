await samples('github:tidalcycles/dirt-samples')
await samples('github:CatoPaus/strudel-projects/main/songs/stranger-things-main-title')

// Stranger Things — Main Title Theme (24-Bar Studio Analog Arc)
// 84 BPM | Key: E minor (Cmaj7 <-> Cmaj7/E pedal-point tension)
setCpm(84 / 4)

// --- 1. Sequential Prophet-6 / Two-Voice 16th-Note Arpeggio ---
const arpC = note("[c3 e3 g3 b3 c4 b3 g3 e3]*2")
const arpE = note("[b2 e3 g3 b3 c4 b3 g3 e3]*2")

const prophetArp = (pat, cutoffPat, gainAmt) =>
  pat.layer(
    // Dual-detuned analog sawtooth body (left-warm)
    x => x.s("sawtooth")
      .add(note("0, 0.08"))
      .hpf(110).ftype("24db")
      .lpf(cutoffPat).lpenv(1.75).lpa(0.003).lpd(0.24).lps(0.14).lpq(3.6)
      .attack(0.003).decay(0.28).sustain(0.16).release(0.22)
      .clip(0.74).pan(0.42)
      .delay(0.28).delaytime(0.357).delayfeedback(0.34)
      .room(0.46).roomsize(0.85)
      .gain(gainAmt),
    // Analog pulse reinforcement (right-warm, dotted-8th tape echo)
    x => x.s("pulse").pw(0.36).pwrate(0.32)
      .add(note("-0.07"))
      .hpf(145).ftype("24db")
      .lpf(cutoffPat).lpenv(1.4).lpa(0.004).lpd(0.20).lps(0.10).lpq(2.6)
      .attack(0.004).decay(0.24).sustain(0.12).release(0.18)
      .clip(0.68).pan(0.58)
      .delay(0.24).delaytime(0.536).delayfeedback(0.30)
      .room(0.44).roomsize(0.85)
      .gain(gainAmt * 0.68)
  )

$arp: arrange(
  [4, prophetArp(arpC, saw.range(180, 640).slow(4), 0.25)],
  [4, prophetArp(arpC, saw.range(640, 1220).slow(4), 0.27)],
  [4, prophetArp(arpE, saw.range(1220, 1580).slow(4), 0.28)],
  [4, prophetArp(arpC, saw.range(1480, 1880).slow(4), 0.29)],
  [4, prophetArp(
    note("<[c3 e3 g3 b3 c4 b3 g3 e3]*2 [c3 e3 g3 b3 c4 b3 g3 e3]*2 [b2 e3 g3 b3 c4 b3 g3 e3]*2 [b2 e3 g3 b3 c4 b3 g3 e3]*2>"),
    saw.range(1820, 2220).slow(4), 0.30
  )],
  [4, prophetArp(
    note("<[c3 e3 g3 b3 c4 b3 g3 e3]*2 [b2 e3 g3 b3 c4 b3 g3 e3]*2 [b2 e3 g3 b3 c4 b3 g3 e3]*2 [b2 e3 g3 b3 c4 b3 g3 e3]*2>"),
    "<[1450 1150 900 720] [580 460 370 300] [250 210 185 170] [170 520 340 160]>", 0.25
  )]
)

// --- 2. Octave-Up OB-Xa Shimmer Counter-Arp (Enters Bar 9) ---
const arpHiE = note("[b3 e4 g4 b4 c5 b4 g4 e4]*2")
const arpHiC = note("[c4 e4 g4 b4 c5 b4 g4 e4]*2")
const arpHiPeak = note("<[c4 e4 g4 b4 c5 b4 g4 e4]*2 [c4 e4 g4 b4 c5 b4 g4 e4]*2 [b3 e4 g4 b4 c5 b4 g4 e4]*2 [b3 e4 g4 b4 c5 b4 g4 e4]*2>")

const shimmerArp = (pat, cutoffPat, gainAmt) =>
  pat.s("sawtooth")
    .add(note("0, 0.09"))
    .hpf(340).ftype("24db")
    .lpf(cutoffPat).lpenv(1.6).lpa(0.006).lpd(0.20).lps(0.10).lpq(3.2)
    .attack(0.006).decay(0.22).sustain(0.12).release(0.22)
    .clip(0.62)
    .pan(sine.range(0.32, 0.68).slow(4))
    .delay(0.34).delaytime(0.536).delayfeedback(0.40)
    .room(0.62).roomsize(0.85)
    .gain(gainAmt)

$arpHi: arrange(
  [8, silence],
  [4, shimmerArp(arpHiE, saw.range(1150, 1750).slow(4), 0.13)],
  [4, shimmerArp(arpHiC, saw.range(1550, 2150).slow(4), 0.15)],
  [4, shimmerArp(arpHiPeak, saw.range(2050, 2550).slow(4), 0.17)],
  [4, silence]
)

// --- 3. Roland SH-2 / SE-1 Monolithic Analog Sub-Bass (Enters Bar 5) ---
const analogBass = (pat, cutoffAmt) =>
  pat.layer(
    // Layer 1: 100% dry mono sub anchor (-1 oct)
    x => x.s("sine").add(note(-12))
      .lpf(140)
      .attack(0.045).decay(0.6).sustain(0.92).release(0.38)
      .clip(0.98).pan(0.5)
      .gain(0.34),
    // Layer 2: Real hardware SE-1 warm analog attack weight on chord changes
    x => x.s("se1_08")
      .hpf(85).ftype("24db")
      .lpf(cutoffAmt)
      .attack(0.03).release(0.35).clip(0.95).pan(0.5)
      .room(0.12).roomsize(0.85)
      .gain(0.20),
    // Layer 3: Continuous SH-2 detuned saw+pulse sustain growl (holds full 4-bar drones)
    x => x.s("sawtooth, pulse:0:0.45")
      .add(note("0, 0.10"))
      .hpf(90).ftype("24db")
      .lpf(cutoffAmt).lpenv(1.4).lpa(1.4).lpd(2.2).lps(0.72).lpq(2.2)
      .attack(0.045).decay(0.8).sustain(0.88).release(0.42)
      .clip(0.98).pan(0.5)
      .room(0.16).roomsize(0.85)
      .gain(0.24)
  )

$bass: arrange(
  [4, silence],
  [4, analogBass(note("c2").slow(4), 250)],
  [4, analogBass(note("e2").slow(4), 340)],
  [4, analogBass(note("c2@3 [c2 d2]").slow(4), 400)],
  [4, analogBass(note("[c2@3 d2] e2").slow(4), 480)],
  [4, analogBass(note("c2 e2@2 ~").slow(4), 240)]
)

// --- 4. Dark OB-Xa / Jupiter-8 Atmospheric Pad Bed (Multi-Bar Holds) ---
const darkPad = (pat, cutoffAmt, gainAmt) =>
  pat.layer(
    x => x.s("sawtooth")
      .add(note("0, 0.11"))
      .hpf(180).ftype("24db")
      .lpf(cutoffAmt).lpq(2.0)
      .attack(1.4).decay(1.0).sustain(0.86).release(1.6)
      .clip(0.98).pan(0.36)
      .room(0.76).roomsize(0.85)
      .gain(gainAmt),
    x => x.s("gm_synth_strings_1:6")
      .hpf(220).ftype("24db")
      .lpf(cutoffAmt)
      .attack(1.1).decay(0.8).sustain(0.82).release(1.4)
      .clip(0.98).pan(0.64)
      .room(0.78).roomsize(0.85)
      .gain(gainAmt * 0.85)
  )

$pad: arrange(
  [4, silence],
  [4, darkPad(note("[c3,g3,b3]").slow(4), 680, 0.13)],
  [4, darkPad(note("[e3,b3,g4]").slow(4), 920, 0.15)],
  [4, darkPad(note("[c3,g3,b3] [c3,g3,e4]").slow(4), 1120, 0.16)],
  [4, darkPad(note("[c3,g3,b3] [e3,b3,g4]").slow(4), 1380, 0.18)],
  [4, darkPad(note("[c3,g3,b3] [e3,b3]@2 ~").slow(4), 560, 0.12)]
)

// --- 5. Resonant OB-Xa Analog Brass Swells (Bars 9-20, Pure Cmaj7/Em) ---
const obBrass = (pat, cutoffAmt, gainAmt) =>
  pat.layer(
    x => x.s("sawtooth")
      .add(note("0, 0.09"))
      .hpf(240).ftype("24db")
      .lpf(cutoffAmt).lpenv(2.2).lpa(0.85).lpd(0.90).lps(0.55).lpq(3.0)
      .attack(0.75).decay(0.7).sustain(0.74).release(1.1)
      .clip(0.96).pan(0.44)
      .room(0.68).roomsize(0.85)
      .gain(gainAmt),
    x => x.s("gm_synth_brass_1:2")
      .hpf(260).ftype("24db")
      .lpf(cutoffAmt).lpq(2.2)
      .attack(0.65).decay(0.6).sustain(0.72).release(0.95)
      .clip(0.96).pan(0.56)
      .room(0.68).roomsize(0.85)
      .gain(gainAmt * 0.82)
  )

$brass: arrange(
  [8, silence],
  [4, obBrass(note("<[e4,b4] ~ [g4,b4] ~>"), 1150, 0.14)],
  [4, obBrass(note("<[e4,c5] ~ [g4,b4] [g4,d5]>"), 1420, 0.16)],
  [4, obBrass(note("<[e4,b4] [g4,d5] [g4,e5] [b4,e5]>"), 1780, 0.18)],
  [4, silence]
)

// --- 6. Deep Heartbeat Sub Pulse (Tight Dry Lub-Dub + Dark Room Halo) ---
const hbPattern = "[x ~ ~ x ~ ~ ~ ~] [x ~ ~ x ~ ~ ~ ~]"
const hbVel = "[0.94 ~ ~ 0.56 ~ ~ ~ ~] [0.86 ~ ~ 0.50 ~ ~ ~ ~]"

const heartbeat = (level) => stack(
  // Tight dry 808 sub thump (cut(2) prevents lub bleeding into dub)
  s("808bd:12").struct(hbPattern)
    .lpf(115).cut(2).release(0.16)
    .velocity(hbVel).gain(level),
  // High-passed cinematic room bloom (keeps sub-bass crystal clear)
  s("bassdm:8").struct(hbPattern)
    .hpf(95).lpf(210).release(0.24)
    .room(0.46).roomsize(0.85)
    .velocity(hbVel).gain(level * 0.30)
)

$heartbeat: arrange(
  [4, heartbeat(0.60)],
  [16, heartbeat(0.78)],
  [2, heartbeat(0.46)],
  [2, silence]
)
