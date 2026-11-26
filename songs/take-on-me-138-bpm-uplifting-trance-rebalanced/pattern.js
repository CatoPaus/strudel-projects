await samples('github:tidalcycles/dirt-samples')
await samples('https://strudel.b-cdn.net/uzu-drumkit.json', 'https://strudel.b-cdn.net/uzu-drumkit/')
await samples('github:CatoPaus/strudel-projects/main/songs/take-on-me-138-bpm-uplifting-trance-rebalanced')

// a-ha — Take On Me (138 BPM Uplifting Trance Remix · Studio MRT2 Edition)
// Key: A Major / B Dorian (Bm7 | E | A | D^7 -> C#m7 & Bm7 | E | Bm7 | E)
// 32-Bar Club Arrangement:
//   Bars 1–8:   Driving Intro & Filtered Pluck Tease
//   Bars 9–16:  Euphoric Breakdown (Solina Strings + Choir + MRT2 Sub Swell) & MRT2 Synth Riser Build-Up
//   Bars 17–32: Full Peak-Time Trance Drop (Supersaw Anthem + Rolling Bass + MRT2 Digital Arp)

const bpm = 138;
setCpm(bpm / 4);
const d8 = (60 / bpm) * 0.75; // Tempo-locked dotted-8th trance delay (~0.326s)

// === ICONIC "TAKE ON ME" SYNTH RIFF (MIDI-verified 8th-note syncopations) ===
const riffA = note(`<
  [[f#4 f#4] [d4 b3] [~ b3] [~ e4]]
  [[~ e4] [~ e4] [g#4 g#4] [a4 b4]]
  [[a4 a4] [a4 e4] [~ d4] [~ f#4]]
  [[~ f#4] [~ f#4] [e4 e4] [f#4 e4]]
>`);

const riffB = note(`<
  [[f#4 f#4] [d4 b3] [~ b3] [~ e4]]
  [[~ e4] [~ e4] [g#4 g#4] [a4 b4]]
  [[a4 a4] [a4 f#4] [~ d4] [~ f#4]]
  [[~ f#4] [~ f#4] [e4 e4] [e4 e4]]
>`);

// === ROLLING 16TH-NOTE TRANCE BASSLINES (rest on every kick beat) ===
const rollBassA = note(`<
  [[~ b1 b1 b2] [~ b1 b1 b2] [~ b1 b1 b2] [~ b1 b2 f#2]]
  [[~ e1 e1 e2] [~ e1 e1 e2] [~ e1 e1 e2] [~ e1 e2 g#2]]
  [[~ a1 a1 a2] [~ a1 a1 a2] [~ a1 a1 a2] [~ a1 a2 e2]]
  [[~ d2 d2 d3] [~ d2 d2 a2] [~ c#2 c#2 c#3] [~ c#2 c#2 g#2]]
>`);

const rollBassB = note(`<
  [[~ b1 b1 b2] [~ b1 b1 b2] [~ b1 b1 b2] [~ b1 b2 f#2]]
  [[~ e1 e1 e2] [~ e1 e1 e2] [~ e1 e1 e2] [~ e1 e2 g#2]]
  [[~ b1 b1 b2] [~ b1 b1 b2] [~ b1 b1 b2] [~ b1 b2 f#2]]
  [[~ e1 e1 e2] [~ e1 e1 e2] [~ e1 e1 e2] [~ e1 e2 b1]]
>`);

const bassBreakBar = note("[[~ d2 d2 d3] [~ d2 d2 a2] [~ c#2 c#2 c#3] [~ ~ ~ ~]]");
// Tuned to mrt2_riser_sine native range (C2-C4, C3 fundamental = 65.5 Hz)
const subSwellA = note("<b2 e3 a2 [d3 c#3]>");

// === LUSH TRANCE HARMONY VOICINGS & 16TH SHIMMER ARPS ===
const padVoicingA = note("<[b3,d4,f#4,a4] [b3,e4,g#4,b4] [a3,c#4,e4,a4] [[a3,d4,f#4,a4] [g#3,c#4,e4,g#4]]>");
const padVoicingB = note("<[b3,d4,f#4,a4] [b3,e4,g#4,b4] [b3,d4,f#4,a4] [b3,e4,g#4,b4]>");

// Voiced cleanly within mrt2_digital's studio multisample sweet spot (C3-C5)
const arpA = note(`<
  [[b3 d4 f#4 d4] [b3 d4 f#4 a4] [b3 d4 f#4 d4] [a3 d4 f#4 d4]]
  [[e4 g#4 b4 g#4] [e4 g#4 b4 e4] [g#4 b4 e5 b4] [g#4 b4 e4 g#4]]
  [[a3 c#4 e4 c#4] [a3 c#4 e4 a4] [a3 c#4 e4 c#4] [e4 a4 c#5 e4]]
  [[d4 f#4 a4 f#4] [d4 f#4 a4 d4] [c#4 e4 g#4 e4] [c#4 e4 g#4 c#4]]
>`);

const arpB = note(`<
  [[b3 d4 f#4 d4] [b3 d4 f#4 a4] [b3 d4 f#4 d4] [a3 d4 f#4 d4]]
  [[e4 g#4 b4 g#4] [e4 g#4 b4 e4] [g#4 b4 e5 b4] [g#4 b4 e4 g#4]]
  [[b3 d4 f#4 d4] [b3 d4 f#4 a4] [b3 d4 f#4 d4] [f#4 d4 b3 d4]]
  [[e4 g#4 b4 g#4] [e4 g#4 b4 e4] [g#4 b4 e5 b4] [b4 g#4 e4 b3]]
>`);

// === COMPOSITE MULTI-LAYER PATCHES (Mix-Rebalanced) ===
// Hero Lead: un-ducked on orbit(4) with focused center core + wide supersaw + FM attack
const tranceLead = register('tranceLead', (pat) => pat.layer(
  // Laser-focused center sawtooth body so the riff slices through the pads
  x => x.s("sawtooth").pan(0.5)
    .hpf(200).ftype("24db").lpf(4800).lpenv(1.8).lpd(0.12).lpq(2)
    .attack(0.003).decay(0.24).sustain(0.58).release(0.16).clip(0.92)
    .delay(0.28).delaytime(d8).delayfeedback(0.36)
    .room(0.34).roomsize(0.82).orbit(4).gain(0.28),
  // Wide 6-voice euphoric supersaw anthem body
  x => x.s("supersaw").unison(6).detune(0.26).spread(0.85)
    .hpf(220).ftype("24db").lpf(6800).lpenv(2.2).lpd(0.14).lpq(2.2)
    .attack(0.004).decay(0.24).sustain(0.55).release(0.18).clip(0.92)
    .delay(0.32).delaytime(d8).delayfeedback(0.40)
    .room(0.40).roomsize(0.82).orbit(4).gain(0.42),
  // Octave-up gleaming trance shimmer
  x => x.s("supersaw").add(note(12)).unison(4).detune(0.32).spread(0.95)
    .hpf(560).ftype("24db").lpf(8800)
    .attack(0.008).decay(0.20).sustain(0.38).release(0.16).clip(0.88)
    .delay(0.34).delaytime(d8).delayfeedback(0.40)
    .room(0.46).roomsize(0.82).orbit(4).gain(0.24),
  // DX7-inspired snappy FM pluck transient for crisp riff articulation
  x => x.s("triangle").fm(3.0).fmh(1).fmattack(0.001).fmdecay(0.08).fmsustain(0.12)
    .hpf(340).attack(0.002).decay(0.16).sustain(0.15).release(0.08).clip(0.85)
    .delay(0.26).delaytime(d8).delayfeedback(0.34)
    .room(0.32).roomsize(0.82).orbit(4).gain(0.30)
));

const trancePluck = register('trancePluck', (pat) => pat.layer(
  x => x.s("supersaw").unison(5).detune(0.22).spread(0.78)
    .hpf(200).ftype("24db").lpenv(2.8).lpd(0.13).lpq(2.8)
    .attack(0.003).decay(0.20).sustain(0.18).release(0.14).clip(0.86)
    .delay(0.34).delaytime(d8).delayfeedback(0.42)
    .room(0.46).roomsize(0.82).orbit(4).gain(0.42),
  x => x.s("triangle").fm(2.6).fmh(1).fmattack(0.001).fmdecay(0.07).fmsustain(0.04)
    .hpf(340).attack(0.002).decay(0.15).sustain(0.08).release(0.08).clip(0.82)
    .delay(0.30).delaytime(d8).delayfeedback(0.38)
    .room(0.38).roomsize(0.82).orbit(4).gain(0.28)
));

// Boosted rolling trance bass for solid club weight & mid-bass punch
const tranceBass = register('tranceBass', (pat) => pat.layer(
  // Dry mono sub anchor
  x => x.s("sine").lpf(210).pan(0.5)
    .attack(0.003).decay(0.14).sustain(0.45).release(0.04).clip(0.84)
    .orbit(2).gain(0.50),
  // Punchy SE-1 hardware analog mid-bass body
  x => x.s("se1_22").hpf(110).ftype("24db").lpf(1850).lpenv(2.4).lpd(0.09).lpq(2.8)
    .attack(0.002).decay(0.13).sustain(0.24).release(0.05).clip(0.84)
    .orbit(2).gain(0.46),
  // Crisp sawtooth upper bite
  x => x.s("sawtooth").unison(2).spread(0.22).hpf(240).ftype("24db").lpf(2500).lpenv(2.8).lpd(0.08).lpq(2.8)
    .attack(0.002).decay(0.11).sustain(0.14).release(0.04).clip(0.82)
    .orbit(2).gain(0.28)
));

// Tucked, warm trance pads (carved mids so $lead sits cleanly on top)
const trancePadIntro = register('trancePadIntro', (pat) => pat.layer(
  x => x.s("supersaw").unison(5).detune(0.30).spread(0.90)
    .hpf(260).ftype("24db")
    .attack(0.20).decay(0.4).sustain(0.85).release(0.45).clip(0.96)
    .room(0.58).roomsize(0.85).orbit(3).gain(0.08),
  x => x.s("mrt2_solina_strings").hpf(300).ftype("24db")
    .release(0.45).clip(0.96)
    .room(0.62).roomsize(0.85).orbit(3).gain(0.08)
));

const trancePadBreak = register('trancePadBreak', (pat) => pat.layer(
  x => x.s("supersaw").unison(6).detune(0.32).spread(0.92)
    .hpf(240).ftype("24db")
    .attack(0.18).decay(0.4).sustain(0.85).release(0.45).clip(0.96)
    .room(0.60).roomsize(0.85).orbit(3).gain(0.14),
  x => x.s("mrt2_solina_strings").hpf(280).ftype("24db")
    .release(0.45).clip(0.96)
    .room(0.64).roomsize(0.85).orbit(3).gain(0.15)
));

const trancePadDrop = register('trancePadDrop', (pat) => pat.layer(
  x => x.s("supersaw").unison(6).detune(0.32).spread(0.92)
    .hpf(280).ftype("24db").lpf(2100)
    .attack(0.18).decay(0.4).sustain(0.82).release(0.45).clip(0.96)
    .room(0.58).roomsize(0.85).orbit(3).gain(0.10),
  x => x.s("mrt2_solina_strings").hpf(300).ftype("24db").lpf(2600)
    .release(0.45).clip(0.96)
    .room(0.62).roomsize(0.85).orbit(3).gain(0.11)
));

// === 1. PUNCHY 4-ON-THE-FLOOR TRANCE KICK + SIDECHAIN DUCKING (Orbits 2 & 3 only) ===
const fullKick = s("[bd:0]*4").lpf(4200).gain(0.72);
const preDropKick = s("[bd:0 bd:0 bd:0 ~]").lpf(4200).gain(0.72);
const buildKick = s("[bd:0]*4").lpf(750).gain(0.50);

// Duck bass (orbit 2) and pads/choir (orbit 3); leave hero $lead (orbit 4) 100% un-choked!
$kick: arrange(
  [7, fullKick],
  [1, preDropKick],
  [4, silence],
  [3, buildKick],
  [1, silence],
  [15, fullKick],
  [1, preDropKick]
).orbit(1).duckorbit("2:3").duckattack(0.15).duckdepth(0.72);

// === 2. CRISP LAYERED TRANCE CLAP (2 & 4) ===
const mainClap = stack(
  s("[~ cp:0 ~ cp:0]").gain(0.46),
  s("[~ dr2:1 ~ dr2:1]").hpf(950).pan(0.56).gain(0.28)
).room(0.26).roomsize(0.55).orbit(1);

$clap: arrange(
  [4, silence],
  [3, mainClap],
  [1, silence],
  [8, silence],
  [15, mainClap],
  [1, silence]
);

// === 3. DRIVING OFFBEAT OPEN HAT, 16TH CLOSED HATS & PEAK RIDE ===
const introHats = stack(
  s("[~ oh:3]*4").cut(1).hpf(2800).gain(0.30),
  s("[hh:3 hh:2 hh:3 hh:2]*4").cut(1).hpf(4200).gain("0.13 0.20 0.15 0.22")
).room(0.14).roomsize(0.55).orbit(1);

const dropHats = stack(
  s("[~ oh:3]*4").cut(1).hpf(2800).gain(0.34),
  s("[hh:3 hh:2 hh:3 hh:2]*4").cut(1).hpf(4200).gain("0.14 0.22 0.16 0.24"),
  s("[~ ~ tb:0 ~]*4").hpf(5000).pan(0.62).gain(0.18)
).room(0.16).roomsize(0.55).orbit(1);

const climaxHats = stack(
  dropHats,
  s("[~ rd:0]*4").hpf(3800).pan(0.38).gain(0.24).room(0.22).roomsize(0.55).orbit(1)
);

$hats: arrange(
  [7, introHats],
  [1, silence],
  [8, silence],
  [8, dropHats],
  [8, climaxHats]
);

// === 4. ACCELERATING TRANCE SNARE BUILDS & TURNAROUND FILLS ===
const bar8Fill = s("[~ ~ [sd:0 sd:0 sd:0 sd:0] [sd:0*4]]")
  .hpf(300).gain("0 0 0.35 0.55").room(0.30).roomsize(0.55).orbit(1);

const buildSnareRoll = s(`<
  [sd:0 ~ sd:0 ~]
  [sd:0 sd:0 sd:0 sd:0]
  [sd:0*8]
  [[sd:0*4] [sd:0*4] [sd:0*4] [cp:0 ~ ~ ~]]
>`).hpf(340).lpf("<1600 2400 3800 6500>").gain("<0.30 0.38 0.48 0.56>")
  .room(0.36).roomsize(0.55).orbit(1);

$fills: arrange(
  [7, silence],
  [1, bar8Fill],
  [4, silence],
  [4, buildSnareRoll],
  [15, silence],
  [1, bar8Fill]
);

// === 5. SECTION IMPACT CRASHES & STUDIO MRT2 ANALOG SYNTH RISER ===
const softCrash = s("[cr:0 ~ ~ ~]").hpf(2600).gain(0.34).room(0.45).roomsize(0.55).orbit(1);
const bigCrash = stack(
  s("[cr:0 ~ ~ ~]").hpf(2400).pan(0.36).gain(0.36),
  s("[cr:1 ~ ~ ~]").hpf(3000).pan(0.64).gain(0.30)
).room(0.50).roomsize(0.55).orbit(1);

$crash: arrange(
  [1, softCrash],
  [7, silence],
  [1, softCrash],
  [7, silence],
  [1, bigCrash],
  [7, silence],
  [1, bigCrash],
  [7, silence]
);

// Baked 48 kHz studio mrt2_crash_white (C2-C4) ascending synth sweep
const synthRiser = note(`<
  [b2 b2 c#3 c#3]
  [d3 d3 e3 e3]
  [f#3 f#3 g#3 g#3]
  [a3 a3 b3 b3]
>`).s("mrt2_crash_white")
  .hpf("<280 520 900 1500>").ftype("24db").lpf("<1200 2400 4400 7200>")
  .release(0.28).clip(0.92)
  .gain("<0.14 0.19 0.25 0.30>")
  .delay(0.30).delaytime(d8).delayfeedback(0.35)
  .room(0.60).roomsize(0.82).orbit(4);

$riser: arrange(
  [12, silence],
  [4, synthRiser],
  [16, silence]
);

// === 6. ROLLING UPLIFTING TRANCE BASSLINE & MRT2 BREAKDOWN SUB SWELL ===
const introBassA = rollBassA.tranceBass().lpf(1100);
const buildBassB = rollBassB.tranceBass().lpf("<700 1150 1800>");
// Baked 48 kHz studio mrt2_riser_sine (238ms warm sub swell)
const subPadBass = subSwellA.s("mrt2_riser_sine")
  .lpf(260).release(0.35).clip(0.95)
  .orbit(2).gain(0.42);

$bass: arrange(
  [4, introBassA],
  [3, introBassA],
  [1, bassBreakBar.tranceBass().lpf(1200)],
  [4, subPadBass],
  [3, buildBassB],
  [1, silence],
  [4, rollBassA.tranceBass()],
  [4, rollBassA.tranceBass()],
  [4, rollBassB.tranceBass()],
  [4, rollBassA.tranceBass()]
);

// === 7. ICONIC "TAKE ON ME" TRANCE SUPERSAW LEAD & FILTERED PLUCK ===
$lead: arrange(
  [4, riffA.trancePluck().lpf(sine.range(1100, 2100).slow(4))],
  [4, riffA.trancePluck().lpf(sine.range(1600, 2900).slow(4))],
  [4, riffA.trancePluck().lpf("<1200 1700 2400 3200>")],
  [4, riffB.trancePluck().lpf("<3600 4600 5800 7400>")],
  [4, riffA.tranceLead()],
  [4, riffA.tranceLead()],
  [4, riffB.tranceLead()],
  [4, riffA.tranceLead()]
);

// === 8. LUSH SIDECHAINED TRANCE PADS (Active from Bar 1 so orbit(3) ducking initializes cleanly) ===
$pad: arrange(
  [4, padVoicingA.trancePadIntro().lpf(750)],
  [4, padVoicingA.trancePadIntro().lpf(1300)],
  [4, padVoicingA.trancePadBreak().lpf("<1600 2100 2600 3200>")],
  [4, padVoicingB.trancePadBreak().lpf("<3200 3800 4400 5000>")],
  [4, padVoicingA.trancePadDrop()],
  [4, padVoicingA.trancePadDrop()],
  [4, padVoicingB.trancePadDrop()],
  [4, padVoicingA.trancePadDrop()]
);

// === 9. ETHEREAL HALO CHOIR (Softened attack & tucked behind $lead) ===
const choirBreak = (pat) => pat.s("mrt2_emulator_choir")
  .attack(0.28).hpf(380).ftype("24db").lpf(2400)
  .release(0.55).clip(0.95)
  .room(0.72).roomsize(0.85).orbit(3).gain(0.14);

const choirDrop = (pat) => pat.s("mrt2_emulator_choir")
  .attack(0.28).hpf(420).ftype("24db").lpf(2200)
  .release(0.55).clip(0.95)
  .room(0.74).roomsize(0.85).orbit(3).gain(0.09);

$choir: arrange(
  [8, silence],
  [4, choirBreak(padVoicingA)],
  [4, choirBreak(padVoicingB)],
  [8, silence],
  [4, choirDrop(padVoicingB)],
  [4, choirDrop(padVoicingA)]
);

// === 10. DELICATE 16TH-NOTE GLASSY MRT2 DIGITAL SPARKLE ARP ===
const shimmerArp = (pat) => pat.s("mrt2_digital")
  .hpf(680).ftype("24db").lpf(3800)
  .release(0.08).clip(0.68)
  .pan(sine.range(0.18, 0.82).slow(4))
  .delay(0.30).delaytime(d8).delayfeedback(0.34)
  .room(0.42).roomsize(0.82).orbit(4).gain(0.10);

$arp: arrange(
  [4, shimmerArp(arpA)],
  [4, shimmerArp(arpA)],
  [4, shimmerArp(arpA)],
  [4, shimmerArp(arpB)],
  [4, shimmerArp(arpA)],
  [4, shimmerArp(arpA)],
  [4, shimmerArp(arpB)],
  [4, shimmerArp(arpA)]
);
