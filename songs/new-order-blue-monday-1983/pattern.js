await samples('github:tidalcycles/dirt-samples')
await samples('github:CatoPaus/strudel-projects/main/songs/new-order-blue-monday-1983')

// New Order — "Blue Monday" (1983)
// 131 BPM | D minor | 50-Bar Phase-Locked Arrangement
// Oberheim DMX (odx) + Hardware SE-1/Moog Source Bass + Prophet-5 Stabs
// + Peter Hook 6-String Bass Lead + E-mu Emulator Choir + High Synth Strings

setCpm(131/4)

// === 1. OBERHEIM DMX DRUMS (Verified `odx` EPROM samples) ===
const kickIntro = s("<[[odx:0 ~ ~ ~] [odx:0 ~ ~ ~] [odx:0 odx:0 odx:0 odx:0] [odx:0 odx:0 odx:0 odx:0]] [[odx:0 ~ ~ ~] [odx:0 ~ ~ ~] [odx:0 ~ ~ ~] [odx:0 ~ ~ ~]]>")
const kickBreak = s("[odx:0 ~ ~ odx:0] [~ ~ odx:0 ~] [~ odx:0 ~ ~] [~ ~ ~ ~]")
const kickMain  = s("[odx:0 ~ ~ ~]*4")

const snareMain = s("[~ ~ ~ ~] [odx:1 ~ ~ ~] [~ ~ ~ ~] [odx:1 ~ ~ ~]")
const snareFill = s("<[[odx:1*4] [odx:1 ~ odx:1 ~] [odx:1*4] [odx:1 ~ odx:1 odx:1]] [[odx:1 odx:1 odx:1 ~] [odx:1*4] [odx:1 ~ ~ ~] [~ ~ ~ ~]]>")

const clapMain  = s("[~ ~ ~ ~] [odx:13 ~ ~ ~] [~ ~ ~ ~] [odx:13 ~ ~ ~]")
const clapFill  = s("<[[~ ~ ~ ~] [odx:13 ~ ~ ~] [~ ~ ~ ~] [odx:13 ~ ~ ~]] [[~ ~ ~ ~] [odx:13*4] [odx:13*4] [odx:13*4]]>")

const hatIntro  = s("<[[odx:12 ~ odx:12 odx:12] [odx:12 ~ odx:12 odx:12] [~ ~ odx:12 odx:12] [odx:12 ~ odx:12 odx:12]] [[odx:12 ~ odx:12 odx:12] [odx:12 ~ odx:12 odx:12] [odx:12 ~ odx:12 odx:12] [odx:12 ~ odx:12 odx:12]]>")
const hatMain   = s("<[[~ ~ odx:12 ~] [~ ~ odx:14 ~] [~ ~ odx:12 ~] [~ ~ odx:14 ~]] [[~ ~ odx:12 ~] [~ ~ odx:14 ~] [~ ~ odx:12 ~] [~ ~ odx:14 ~]] [[~ ~ odx:12 ~] [~ ~ odx:14 ~] [~ ~ odx:12 ~] [~ ~ odx:14 ~]] [[~ ~ odx:12 ~] [~ ~ odx:14 ~] [~ ~ odx:12 ~] [~ ~ odx:5 ~]]>")

// Hi -> mid -> low DMX tom cascade with tight decay & controlled velocity
const tomRoll   = s("<[[~ ~ ~ ~] [odx:10*4] [odx:10*4] [odx:6*4]] [[odx:6*4] [odx:8*4] [~ ~ ~ ~] [~ ~ ~ ~]]>")
  .decay(0.22).release(0.05)

// Tighter lo-crash choke on the 2-bar break; full med-crash on the bar-35 drop
const crashBrk  = s("[odx:9 ~ ~ odx:9] [~ ~ odx:9 ~] [~ odx:9 ~ ~] [~ ~ ~ ~]")
  .decay(0.45).release(0.15)
const crashHit  = s("[odx:7 ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]")

$kick: arrange(
  [16, kickIntro],
  [2,  kickBreak],
  [32, kickMain]
).gain(0.62)

$snare: arrange(
  [8,  silence],
  [8,  snareMain],
  [2,  silence],
  [14, snareMain],
  [2,  snareFill],
  [16, snareMain]
).room(0.22).roomsize(0.75).gain(0.56)

$clap: arrange(
  [18, silence],
  [14, clapMain],
  [2,  clapFill],
  [16, clapMain]
).room(0.36).roomsize(0.75).gain(0.38)

$hats: arrange(
  [8,  silence],
  [8,  hatIntro],
  [2,  silence],
  [32, hatMain]
).cut(1).hpf(2400).pan(0.56).gain(0.36)

// Final tom roll shifted to bars 41-42 so it builds into $melody at bar 43 instead of masking it
$toms: arrange(
  [22, silence],
  [2,  tomRoll],
  [2,  silence],
  [2,  tomRoll],
  [6,  silence],
  [2,  tomRoll],
  [4,  silence],
  [2,  tomRoll],
  [8,  silence]
).pan(0.62).room(0.24).roomsize(0.75).gain("[.34 .40 .38 .44]")

$crash: arrange(
  [16, silence],
  [2,  crashBrk],
  [16, silence],
  [1,  crashHit],
  [15, silence]
).room(0.35).roomsize(0.75).gain(0.40)

// === 2. MOOG SOURCE OCTAVE SYNTH BASS (Split-Band SE-1 Punch + Dry Ladder Sub) ===
const bassIntro  = note("<[[f2 ~ f2 f2] [f2 ~ f2 f2] [c2 ~ c2 c2] [c2 ~ c2 c2]] [[d2 ~ d2 d2]*4] [[g2 ~ g2 g2] [g2 ~ g2 g2] [c2 ~ c2 c2] [c2 ~ c2 c2]] [[d2 ~ d2 d2]*4]>")
const bassOctave = note("<[[f1 f2] [f1 f2] [c1 c2] [c1 c2]] [[d1 d2] [d1 d2] [d1 d2] [d1 d2]] [[g1 g2] [g1 g2] [c1 c2] [c1 c2]] [[d1 d2] [d1 d2] [d1 d2] [d1 d2]]>")

$bass: arrange(
  [8,  silence],
  [8,  bassIntro],
  [2,  silence],
  [32, bassOctave]
).layer(
  // High-passed Studio Electronics SE-1 punch/mid bark (boosted to anchor the groove)
  x => x.s("se1_11").hpf(95).ftype("24db").lpf(2100).lpenv(2.2).lpd(0.11)
    .decay(0.16).sustain(0.10).release(0.04).clip(0.88).cut(3).gain(0.54),
  // Dual-osc centered Moog ladder sub anchor (lowpass-only, dry)
  x => x.s("sawtooth").unison(2).spread(0).ftype("ladder")
    .lpf(500).lpq(3.2).lpenv(2.8).lpd(0.085)
    .attack(0.002).decay(0.16).sustain(0.06).release(0.03).clip(0.84).cut(4).gain(0.42)
)

// === 3. POWERTRAN / PROPHET-5 INTRO SEQUENCER DUET (Bars 5–16) ===
const introSeqA = note("<[[f5 f5 f5 ~] [~ ~ g5 g5] [c5 ~ ~ ~] [d5 d5 d5 ~]] [[~ ~ d5 d5] [d5 ~ ~ ~] [d5 d5 d5 ~] [~ ~ d5 d5]] [[f5 ~ ~ ~] [f5 g5 g5 ~] [~ ~ c5 c5] [c5 ~ ~ ~]] [[d5 d5 d5 ~] [~ ~ d5 d5] [d5 ~ ~ ~] [d5 d5 ~ ~]]>")
const introSeqB = note("<[[~ f5] [f5 ~] [c5 c5] [~ d5]] [[d5 ~] [d5 d5] [~ d5] [d5 ~]] [[f5 f5] [~ g5] [c5 ~] [d5 d5]] [[~ d5] [d5 ~] [d5 d5] [~ d5]]>")

$intro_seq: arrange(
  [4,  silence],
  [12, introSeqA],
  [34, silence]
).s("sawtooth").hpf(260).ftype("24db").lpf(2800).lpq(2.8).lpenv(2.4).lpd(0.07)
  .attack(0.003).decay(0.11).sustain(0.05).release(0.05).clip(0.72)
  .pan(0.36).room(0.28).roomsize(0.75).gain(0.28)

$intro_ctr: arrange(
  [4,  silence],
  [12, introSeqB],
  [34, silence]
).s("pulse").pw(0.35).hpf(320).ftype("24db").lpf(2300).lpq(2.2).lpenv(2.0).lpd(0.07)
  .attack(0.004).decay(0.10).sustain(0.05).release(0.05).clip(0.68)
  .pan(0.64).room(0.28).roomsize(0.75).gain(0.24)

// === 4. PROPHET-5 BRASSY CHORD STABS (F/C | Dm | G/C | Dm) ===
const prophetStabs = note("<[[f3,a3,c4] ~ [e3,g3,c4] ~] [[d3,f3,a3] ~ ~ [d3,f3,a3]] [[g3,b3,d4] ~ [e3,g3,c4] ~] [[d3,f3,a3] ~ ~ ~]>")

$stabs: arrange(
  [18, silence],
  [32, prophetStabs]
).layer(
  x => x.s("gm_synth_brass_1:1").hpf(240).ftype("24db").lpf(2400)
    .attack(0.012).decay(0.24).sustain(0.25).release(0.14).clip(0.85)
    .pan(0.38).room(0.32).roomsize(0.75).gain(0.24),
  x => x.s("sawtooth").add(note("0, .09")).hpf(260).ftype("24db")
    .lpf(1900).lpq(2.4).lpenv(2.0).lpd(0.18)
    .attack(0.008).decay(0.22).sustain(0.22).release(0.14).clip(0.82)
    .pan(0.62).room(0.32).roomsize(0.75).gain(0.16)
)

// === 5. PETER HOOK SHERGOLD 6-STRING CHORUSED BASS LEAD (Bars 27–50) ===
// Brooding high-neck post-punk line locked over F/C | Dm | G/C | Dm
const hookLead = note("<[[a3 a3] [a3 f3] [g3@2 e3@2]] [f3@2 e3@2 d3@4] [[g3 g3] [g3 d3] [e3@2 g3@2]] [f3@2 e3@2 d3@4]>")

$hook_bass: arrange(
  [26, silence],
  [24, hookLead]
).s("gm_electric_bass_pick:1").hpf(120).ftype("24db").lpf(2900)
  .release(0.16).clip(0.94).vib(0.7).vibmod(0.05)
  .juxBy(0.65, x => x.add(note(0.09)))
  .room(0.28).roomsize(0.75).gain(0.48)

// === 6. E-MU EMULATOR I CHOIR PAD ("Uranium" Tape-Sampled Aura) ===
const emulatorChoir = note("<[[f3,a3,c4]@2 [e3,g3,c4]@2] [d3,f3,a3,d4] [[g3,b3,d4]@2 [e3,g3,c4]@2] [d3,f3,a3,d4]>")

$choir: arrange(
  [26, silence],
  [24, emulatorChoir]
).layer(
  x => x.s("gm_synth_choir:3").hpf(300).ftype("24db").lpf(2600)
    .attack(0.14).release(0.38).room(0.55).roomsize(0.75).gain(0.24),
  x => x.s("gm_pad_choir:4").hpf(300).ftype("24db").lpf(2200)
    .attack(0.18).release(0.42).room(0.55).roomsize(0.75).gain(0.20)
)

// === 7. HIGH SYNTH STRINGS COUNTER-MELODY (Bars 35–50) ===
// Chord-locked soaring contour (F/C -> Dm -> G/C -> Dm) boosted to cut cleanly in the mix
const highStrings = note("<[c5@8 g4@4 c5@4] [a4@12 c5@4] [d5@4 b4@4 c5@6 e5@2] [d5@10 a4@4 c5@2]>")

$strings: arrange(
  [34, silence],
  [16, highStrings]
).layer(
  x => x.s("gm_synth_strings_1:3").hpf(340).ftype("24db").lpf(3600)
    .attack(0.02).release(0.28).pan(0.44).room(0.48).roomsize(0.75).gain(0.36),
  x => x.s("sawtooth").add(note("0, .08")).hpf(380).ftype("24db").lpf(3200)
    .attack(0.04).decay(0.25).sustain(0.65).release(0.26)
    .pan(0.54).room(0.48).roomsize(0.75).gain(0.22)
)

// === 8. "HOW DOES IT FEEL..." LEAD HOOK (Bars 43–50) ===
// Layered Prophet-5 analog saw + snappy GM brass so the lead hook sits front-and-center
const vocalHook = note("<[[a4 c5] [d5 ~] [c5 a4] [~ ~]] [[g4 ~] [a4 g4] f4@2] [[~ g4] [b4 g4] [c5 ~] [~ a4]] [[f4 g4] [a4 ~] d4@2]>")

$melody: arrange(
  [42, silence],
  [8,  vocalHook]
).layer(
  x => x.s("sawtooth").add(note("0, .06")).hpf(260).ftype("24db")
    .lpf(2900).lpq(2.2).lpenv(1.6).lpd(0.14)
    .attack(0.012).decay(0.28).sustain(0.60).release(0.18)
    .vib(2.4).vibmod(0.03).pan(0.48).room(0.36).roomsize(0.75).gain(0.34),
  x => x.s("gm_synth_brass_1:1").hpf(260).ftype("24db").lpf(3200)
    .attack(0.015).decay(0.30).sustain(0.55).release(0.18)
    .vib(2.4).vibmod(0.03).pan(0.54).room(0.36).roomsize(0.75).gain(0.38)
)
