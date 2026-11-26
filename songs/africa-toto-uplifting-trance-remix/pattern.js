await samples('github:tidalcycles/dirt-samples')
await samples('https://strudel.b-cdn.net/uzu-drumkit.json', 'https://strudel.b-cdn.net/uzu-drumkit/')
await samples('github:CatoPaus/strudel-projects/main/songs/africa-toto-uplifting-trance-remix')

// Africa (Toto) — Uplifting Trance Remix (138 BPM | C#m / B / F#m)
// 32-Bar Phase-Locked Arrangement:
//   Bars  1-8 : Intro Groove — Iconic Synth Brass Vamp + 5-against-16 Kalimba/Marimba + Congas
//   Bars  9-16: Euphoric Breakdown & Build-Up — Velvety Verse Pads + Sparkling Arp + Snare Build
//   Bars 17-24: Trance Chorus Drop — F#m | D | A | E Anthemic Supersaws + Chorus Strings + Rolling Bass
//   Bars 25-32: Peak-Time Climax — Full-Filter Africa Vamp + Call-and-Response Arps + Afro-Trance Percussion

setCpm(138 / 4)

// --- 1. TRANCE 4-ON-THE-FLOOR KICK (100% Dry, Club Punch) ---
$kick: arrange(
  [8,  s("bd:1*4")],
  [4,  silence],
  [2,  s("bd:1*4").lpf(420)],
  [1,  s("bd:1*4").lpf(750)],
  [1,  s("[bd:1*4] [bd:1*4] [bd:1*4] ~").lpf(1100)],
  [8,  s("bd:1*4")],
  [7,  s("bd:1*4")],
  [1,  s("bd:1 bd:1 bd:1 ~")]
).cut(2).gain(0.76)

// --- 2. TRANCE CLAP, SNARE BUILD & DROP CRASH (Orbit 1: Tight Drum Room) ---
$clap: arrange(
  [8,  s("~ [cp:0, 808:3] ~ [cp:0, 808:3]").gain(0.54)],
  [4,  silence],
  [2,  s("~ cp:0 ~ cp:0").gain(0.38)],
  [1,  s("cp:0*8").gain(sine.range(0.30, 0.56))],
  [1,  s("[cp:0*4] [cp:0*4] [cp:0*4] [~ ~ cp:0 ~]").gain(0.60)],
  [8,  s("~ [cp:0, 808:3] ~ [cp:0, 808:3]").gain(0.58)],
  [7,  s("~ [cp:0, 808:3] ~ [cp:0, 808:3]").gain(0.58)],
  [1,  s("~ [cp:0, 808:3] ~ [cp:0 cp:0 cp:0 cp:0]").gain(0.60)]
).hpf(240).orbit(1).room(0.20).roomsize(0.55)

$crash: arrange(
  [8,  s("<sal_cr:0 ~ ~ ~ ~ ~ ~ ~>")],
  [8,  silence],
  [8,  s("<sal_cr:0 ~ ~ ~ ~ ~ ~ ~>")],
  [8,  s("<sal_cr:0 ~ ~ ~ ~ ~ ~ ~>")]
).hpf(500).gain(0.42).orbit(1).room(0.35).roomsize(0.55)

// --- 3. OFFBEAT TRANCE HI-HATS (Choked Group 1) ---
$hats: arrange(
  [8,  stack(
    s("[~ oh:0]*4").decay(0.20).gain(0.38),
    s("[hh:3 hh:1 hh:3 hh:1]*4").gain("0.26 0.18 0.34 0.20")
  )],
  [4,  s("[hh:1 ~ hh:1 ~]*4").gain(0.18)],
  [4,  s("[~ hh:3]*4").gain(0.30)],
  [8,  stack(
    s("[~ oh:0]*4").decay(0.22).gain(0.42),
    s("[hh:3 hh:1 hh:3 hh:1]*4").gain("0.28 0.20 0.36 0.22")
  )],
  [8,  stack(
    s("[~ oh:0]*4").decay(0.22).gain(0.42),
    s("[hh:3 hh:1 hh:3 hh:1]*4").gain("0.28 0.20 0.36 0.22")
  )]
).cut(1).hpf(3200).pan(0.55)

// --- 4. AFRICA STUDIO PERCUSSION (VSCO2 Congas & Claves, 32-Bar Phase-Locked) ---
$afro_perc: arrange(
  [8,  stack(
    s("<[[vsco_conga:0 ~ ~ vsco_conga:2] [vsco_conga:1 ~ ~ ~] [vsco_conga:0 vsco_conga:2 ~ vsco_conga:0] [vsco_conga:1 ~ ~ ~]] [[vsco_conga:0 ~ ~ vsco_conga:2] [vsco_conga:1 ~ ~ ~] [vsco_conga:0 vsco_conga:2 ~ vsco_conga:0] [vsco_conga:2 ~ vsco_conga:0 ~]]>").gain(0.40).pan(0.32),
    s("[vsco_claves:1 ~ ~ ~]*4").gain(0.20).pan(0.68)
  )],
  [8,  silence],
  [8,  s("<[[vsco_conga:0 ~ ~ vsco_conga:2] [vsco_conga:1 ~ ~ ~] [vsco_conga:0 vsco_conga:2 ~ vsco_conga:0] [vsco_conga:1 ~ ~ ~]] [[vsco_conga:0 ~ ~ vsco_conga:2] [vsco_conga:1 ~ ~ ~] [vsco_conga:0 vsco_conga:2 ~ vsco_conga:0] [vsco_conga:2 ~ vsco_conga:0 ~]]>").gain(0.36).pan(0.32)],
  [8,  stack(
    s("<[[vsco_conga:0 ~ ~ vsco_conga:2] [vsco_conga:1 ~ ~ ~] [vsco_conga:0 vsco_conga:2 ~ vsco_conga:0] [vsco_conga:1 ~ ~ ~]] [[vsco_conga:0 ~ ~ vsco_conga:2] [vsco_conga:1 ~ ~ ~] [vsco_conga:0 vsco_conga:2 ~ vsco_conga:0] [vsco_conga:2 ~ vsco_conga:0 ~]]>").gain(0.42).pan(0.32),
    s("[vsco_claves:1 ~ ~ ~]*4").gain(0.22).pan(0.68)
  )]
).hpf(180).orbit(1).room(0.22).roomsize(0.55)

// --- 5. ROLLING 16TH-NOTE TRANCE BASS (Dry Sub + SE-1 Hardware + Saw Drive) ---
const bassVamp = note("<[[~ a1 a2 a1] [~ a1 a2 a1] [~ a1 g#1 g#2] [~ c#2 c#3 c#2]] [[~ c#2 c#3 c#2] [~ c#2 c#3 c#2] [~ c#2 c#3 c#2] [~ c#2 b1 c#2]]>")
const bassBuild = note("<[[~ a1 a2 a1]*4] [[~ e1 e2 e1]*4] [[~ g#1 g#2 g#1]*4] [[~ c#2 c#3 c#2] [~ c#2 c#3 c#2] [~ e1 e2 e1] [~ e1 ~ ~]]>")
const bassChorus = note("<[[~ f#1 f#2 f#1]*4] [[~ d1 d2 d1]*4] [[~ a1 a2 a1]*4] [[~ e1 e2 e1]*4] [[~ f#1 f#2 f#1]*4] [[~ d1 d2 d1]*4] [[~ a1 a2 a1]*4] [[~ c#2 c#3 c#2] [~ c#2 c#3 c#2] [~ e1 e2 e1] [~ e1 f#1 g#1]]>")

$bass: arrange(
  [8,  bassVamp.lpf(1450)],
  [4,  silence],
  [4,  bassBuild.lpf(sine.range(450, 1850).slow(4))],
  [8,  bassChorus.lpf(1600)],
  [8,  bassVamp.lpf(1700)]
).layer(
  // Dry Mono Sub Anchor (deep floor weight, no room)
  x => x.s("sine").lpf(170).decay(0.16).sustain(0.58).release(0.05).clip(0.92).pan(0.5).gain(0.62),
  // Hardware SE-1 Snappy Rolling Analog Punch
  x => x.s("se1_18").hpf(100).ftype("24db").lpenv(2.8).lpd(0.11).lpq(3).release(0.07).clip(0.85).pan(0.5).gain(0.50),
  // Driving Centered Dual-Saw Trance Acid/Rolling Edge
  x => x.s("sawtooth").unison(2).spread(0).hpf(110).ftype("24db").lpenv(3.4).lpd(0.09).lpq(3.5).attack(0.002).decay(0.13).sustain(0.24).release(0.05).clip(0.88).pan(0.5).gain(0.44)
)

// --- 6. ICONIC AFRICA SYNTH BRASS VAMP + ANTHEMIC CHORUS SUPERSAWS (Composite) ---
const brassVamp = note("<[[e3,a3,c#4]@3 [e3,a3,c#4] ~ [e3,a3,c#4] ~ [e3,a3,c#4] [e3,a3,c#4]@2 [e3,g#3,b3]@2 [g#3,c#4,e4]@4] [[g#3,c#4,e4]@14 ~ ~]>")
const chorusChords = note("<[[f#3,a3,c#4,f#4]@3 ~ [f#3,a3,c#4,f#4]@2 ~ [f#3,a3,c#4,f#4]@2 [f#3,a3,c#4,f#4]@3 ~ [f#3,a3,c#4,f#4]@2 [f#3,a3,c#4,f#4]@2] [[d3,f#3,a3,d4]@3 ~ [d3,f#3,a3,d4]@2 ~ [d3,f#3,a3,d4]@2 [d3,f#3,a3,d4]@3 ~ [d3,f#3,a3,d4]@2 [d3,f#3,a3,d4]@2] [[e3,a3,c#4,e4]@3 ~ [e3,a3,c#4,e4]@2 ~ [e3,a3,c#4,e4]@2 [e3,a3,c#4,e4]@3 ~ [e3,a3,c#4,e4]@2 [e3,a3,c#4,e4]@2] [[e3,g#3,b3,e4]@3 ~ [e3,g#3,b3,e4]@2 ~ [e3,g#3,b3,e4]@2 [e3,g#3,b3,e4]@3 ~ [e3,g#3,b3,e4]@2 [e3,g#3,b3,e4]@2] [[f#3,a3,c#4,f#4]@3 ~ [f#3,a3,c#4,f#4]@2 ~ [f#3,a3,c#4,f#4]@2 [f#3,a3,c#4,f#4]@3 ~ [f#3,a3,c#4,f#4]@2 [f#3,a3,c#4,f#4]@2] [[d3,f#3,a3,d4]@3 ~ [d3,f#3,a3,d4]@2 ~ [d3,f#3,a3,d4]@2 [d3,f#3,a3,d4]@3 ~ [d3,f#3,a3,d4]@2 [d3,f#3,a3,d4]@2] [[e3,a3,c#4,e4]@3 ~ [e3,a3,c#4,e4]@2 ~ [e3,a3,c#4,e4]@2 [e3,a3,c#4,e4]@3 ~ [e3,a3,c#4,e4]@2 [e3,a3,c#4,e4]@2] [[g#3,c#4,e4]@6 ~ ~ [g#3,b3,e4]@6 ~ ~]>")

$trance_brass: arrange(
  [8,  brassVamp.lpf(sine.range(1600, 3600).slow(8))],
  [8,  silence],
  [8,  chorusChords.lpf(3800)],
  [8,  brassVamp.lpf(4000)]
).layer(
  // Wide Detuned Trance Supersaw Body (carved above 260 Hz for clean bass headroom)
  x => x.s("supersaw").unison(5).detune(0.28).hpf(260).ftype("24db").lpenv(2.2).lpa(0.01).lpd(0.20).lpq(2.5).attack(0.008).decay(0.24).sustain(0.74).release(0.20).gain(0.27),
  // DX7 CS-80 Brass FM Core (grounded from CS80 BRS B)
  x => x.s("triangle").fm(2.05).fmh(1).fmattack(0.03).fmdecay(0.12).fmsustain(0.82).hpf(300).attack(0.010).decay(0.20).sustain(0.78).release(0.18).gain(0.23),
  // Octave-Up Analog Brass Shimmer (MRT2 Studio Polysynth Brass)
  x => x.add(note(12)).s("mrt2_analog_brass").hpf(580).release(0.24).clip(0.95).gain(0.15)
).delay(0.18).delaytime(0.326).delayfeedback(0.25).orbit(2).room(0.40).roomsize(0.85)

// --- 7. ICONIC 5-AGAINST-16 KALIMBA / MARIMBA OSTINATO (Warm Woody Balance) ---
const kalimbaRiff = note("<[[~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ f#5 e5]] [[c#5,f#5] [b4,e5] c#5 [b4,f#5] [c#5,e5] [c#5,f#5] [b4,e5] c#5 [b4,f#5] [c#5,e5] [c#5,f#5] [b4,e5] c#5 [b4,f#5] [c#5,e5]@2]>")

$kalimba: arrange(
  [8,  kalimbaRiff],
  [8,  silence],
  [8,  silence],
  [8,  kalimbaRiff]
).layer(
  // Studio Acoustic Concert Marimba (warmed with LPF, controlled headroom)
  x => x.s("vsco_marimba").hpf(340).lpf(4200).release(0.14).pan(0.38).gain(0.30),
  // DX7 Woody FM Marimba/Kalimba Pluck (tamed modulation index for warm woody click)
  x => x.s("sine").fm(3.2).fmh(1).fmattack(0.001).fmdecay(0.24).fmsustain(0).attack(0.002).decay(0.24).sustain(0).release(0.14).hpf(420).lpf(4500).pan(0.62).gain(0.18)
).delay(0.18).delaytime(0.326).delayfeedback(0.20).orbit(2).room(0.30).roomsize(0.85)

// --- 8. EUPHORIC TRANCE ARPEGGIATOR (Sparkling Breakdown + Call-and-Response Climax) ---
const arpBreakdown = note("<[b4 d#5 f#5 b5]*4 [a#4 c#5 f#5 a#5]*4 [g#4 b4 d#5 g#5]*4 [f#4 a#4 c#5 f#5]*4 [a4 c#5 e5 a5]*4 [e4 g#4 b4 e5]*4 [g#4 b4 d#5 g#5]*4 [[c#5 e5 g#5 c#6]*2 [b4 e5 g#5 b5] [b4 e5 ~ ~]]>")
const arpChorus = note("<[f#4 a4 c#5 f#5]*4 [d4 f#4 a4 d5]*4 [e4 a4 c#5 e5]*4 [e4 g#4 b4 e5]*4 [f#4 a4 c#5 f#5]*4 [d4 f#4 a4 d5]*4 [e4 a4 c#5 e5]*4 [[g#4 c#5 e5 g#5]*2 [g#4 b4 e5 b5]*2]>")
// Climax Arp answers on Bar 1 (A -> E/G#) and clears Bar 2 so the 5-against-16 Kalimba shines unobstructed!
const arpClimax = note("<[[a4 c#5 e5 a5] [a4 c#5 e5 a5] [a4 c#5 g#4 b4] [g#4 c#5 e5 ~]] [~]>")

$trance_arp: arrange(
  [8,  silence],
  [8,  arpBreakdown.lpf(sine.range(1200, 4600).slow(8))],
  [8,  arpChorus.lpf(3800)],
  [8,  arpClimax.lpf(3800)]
).s("wt_digital_curses:0").wt(sine.range(0.15, 0.78).slow(4)).hpf(380).ftype("24db").lpenv(3.4).lpd(0.12).lpq(3.2).attack(0.004).decay(0.16).sustain(0.14).release(0.10).pan(sine.range(0.28, 0.72).slow(3)).delay(0.32).delaytime(0.326).delayfeedback(0.36).gain(0.46).orbit(2).room(0.42).roomsize(0.85)

// --- 9. VELVETY BREAKDOWN PADS & CHORUS INSTRUMENTAL STRINGS (MRT2 Studio) ---
const versePads = note("<[b2,f#3,b3,d#4] [a#2,f#3,a#3,c#4] [g#2,d#3,g#3,b3] [f#2,c#3,f#3,a#3] [a2,e3,a3,c#4] [e2,b2,e3,g#3] [g#2,d#3,g#3,b3] [[c#3,g#3,c#4,e4]@8 [b2,e3,g#3,b3]@6 ~ ~]>")
const chorusStrings = note("<[[c#4,c#5]@12 [a3,a4]@4] [[d4,d5]@12 [f#4,f#5]@4] [[e4,e5]@8 [c#4,c#5]@8] [[b3,b4]@6 [c#4,c#5]@2 [b3,b4]@4 [g#3,g#4]@4] [[c#4,c#5]@8 [f#4,f#5]@8] [[d4,d5]@12 [a3,a4]@4] [[e4,e5]@12 [c#4,c#5]@4] [[g#4,g#5]@8 [e4,e5]@4 [b3,b4]@4]>")

$pads_strings: arrange(
  [8,  silence],
  [8,  versePads.layer(
    x => x.s("mrt2_solina_strings").hpf(240).ftype("24db").lpf(sine.range(900, 2200).slow(8)).attack(0.22).release(0.65).clip(1.0).gain(0.13),
    x => x.s("mrt2_emulator_choir").hpf(280).ftype("24db").lpf(sine.range(1000, 2400).slow(8)).attack(0.22).release(0.65).clip(1.0).gain(0.14),
    x => x.s("supersaw").unison(4).detune(0.26).hpf(240).ftype("24db").lpf(sine.range(700, 2100).slow(8)).attack(0.28).decay(0.30).sustain(0.80).release(0.55).clip(1.0).gain(0.11)
  )],
  [8,  chorusStrings.layer(
    x => x.s("supersaw").unison(4).detune(0.22).hpf(440).ftype("24db").lpf(2800).attack(0.08).decay(0.20).sustain(0.82).release(0.28).gain(0.17),
    x => x.s("mrt2_emulator_choir").hpf(400).ftype("24db").lpf(2800).release(0.32).clip(0.95).gain(0.18)
  )],
  [8,  silence]
).orbit(2).room(0.58).roomsize(0.85)

// --- 10. TRANCE WHITE-NOISE BUILD RISER (Bars 13-16 into Chorus Drop) ---
$riser: arrange(
  [12, silence],
  [4,  s("[white@15 ~]/4").clip(0.95).hpf(600).ftype("24db").lpf(saw.range(500, 7500).slow(4)).lpq(4).gain(saw.range(0.02, 0.22).slow(4))],
  [16, silence]
).orbit(2).room(0.50).roomsize(0.85)
