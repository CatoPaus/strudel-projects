await samples('github:CatoPaus/strudel-projects/main/songs/late-night-neon-velvet-96-bpm-d-minor-jazz')

// Late-Night Neon Velvet — 16-Bar Jazz-Fusion / Sophisti-Pop in D Minor (96 BPM)
// Form: A (1-4: Rimshot Pocket) -> A' (5-8: Full Kit + Fill) -> B (9-12: Ride Bridge) -> A'' (13-16: Resolution + Turnaround)
setCpm(96/4)

// 1. Acoustic Birch Kick (Dry Low-End Foundation)
$kick: arrange(
  [4, s("<[[sal_bd:1 ~ ~ ~] [~ ~ ~ sal_bd:5] [~ ~ sal_bd:1 ~] [~ ~ ~ ~]] [[sal_bd:1 ~ ~ ~] [~ ~ ~ sal_bd:1] [~ ~ sal_bd:5 ~] [~ ~ ~ sal_bd:5]]>")],
  [3, s("<[[sal_bd:1 ~ ~ ~] [~ ~ ~ sal_bd:1] [~ ~ sal_bd:1 ~] [~ ~ ~ ~]] [[sal_bd:1 ~ ~ ~] [~ ~ sal_bd:5 ~] [sal_bd:1 ~ ~ ~] [~ ~ ~ sal_bd:5]]>")],
  [1, s("[[sal_bd:1 ~ ~ ~] [~ ~ ~ ~] [~ ~ sal_bd:5 ~] [~ ~ ~ ~]]")],
  [4, s("<[[sal_bd:1 ~ ~ ~] [~ ~ ~ sal_bd:1] [~ ~ sal_bd:1 ~] [~ ~ ~ ~]] [[sal_bd:1 ~ ~ ~] [~ ~ ~ sal_bd:1] [~ sal_bd:5 ~ sal_bd:1] [~ ~ ~ ~]]>")],
  [3, s("<[[sal_bd:1 ~ ~ ~] [~ ~ ~ sal_bd:1] [~ ~ sal_bd:1 ~] [~ ~ ~ ~]] [[sal_bd:1 ~ ~ ~] [~ ~ sal_bd:5 ~] [sal_bd:1 ~ ~ ~] [~ ~ ~ sal_bd:5]]>")],
  [1, s("[[sal_bd:1 ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ sal_bd:5]]")]
)
  .swingBy(0.12, 8)
  .gain(0.72)

// 2. Acoustic Birch Snare, Cross-Stick, Ghost Taps & Tom Fills (Orbit 1: Tight Studio Room)
$snare: arrange(
  [4, stack(
    s("<[[~ ~ ~ ~] [sal_rim:0 ~ ~ ~] [~ ~ ~ ~] [sal_rim:0 ~ ~ ~]] [[~ ~ ~ ~] [sal_rim:0 ~ ~ ~] [~ ~ ~ ~] [sal_rim:2 ~ ~ ~]]>").gain(0.56),
    s("<[[~ ~ ~ ~] [~ ~ sal_sd:4 ~] [~ sal_sd:4 ~ ~] [~ ~ ~ sal_sd:4]] [[~ ~ ~ ~] [~ ~ sal_sd:4 ~] [~ sal_sd:4 ~ ~] [~ ~ sal_sd:4 ~]]>").gain(0.24)
  )],
  [3, stack(
    s("<[[~ ~ ~ ~] [sal_sd:1 ~ ~ ~] [~ ~ ~ ~] [sal_sd:1 ~ ~ ~]] [[~ ~ ~ ~] [sal_sd:1 ~ ~ ~] [~ ~ ~ ~] [sal_sd:1 ~ ~ ~]]>").gain(0.62),
    s("<[[~ sal_sd:4 ~ ~] [~ ~ sal_sd:3 ~] [~ sal_sd:4 ~ ~] [~ ~ ~ sal_sd:3]] [[~ sal_sd:4 ~ ~] [~ ~ ~ sal_sd:3] [~ sal_sd:4 ~ ~] [~ ~ sal_sd:4 ~]]>").gain(0.28)
  )],
  // Bar 8 turnaround fill into Bridge
  [1, stack(
    s("[[~ ~ ~ ~] [sal_sd:1 ~ ~ ~] [~ ~ sal_ht:1 ~] [sal_ht:2 ~ sal_lt:0 ~]]").gain(0.62),
    s("[[~ sal_sd:4 ~ ~] [~ sal_sd:3 ~ sal_sd:3] [sal_sd:3 ~ ~ ~] [~ ~ ~ ~]]").gain(0.32)
  )],
  [4, stack(
    s("<[[~ ~ ~ ~] [sal_sd:1 ~ ~ ~] [~ ~ ~ ~] [sal_sd:1 ~ ~ ~]] [[~ ~ ~ ~] [sal_sd:1 ~ ~ ~] [~ ~ ~ ~] [sal_sd:1 ~ sal_sd:3 ~]]>").gain(0.62),
    s("<[[~ sal_sd:4 ~ ~] [~ ~ sal_sd:4 ~] [~ sal_sd:3 ~ ~] [~ ~ ~ sal_sd:4]] [[~ sal_sd:4 ~ ~] [~ ~ sal_sd:4 ~] [~ sal_sd:4 ~ ~] [~ ~ ~ ~]]>").gain(0.27)
  )],
  [3, stack(
    s("<[[~ ~ ~ ~] [sal_sd:1 ~ ~ ~] [~ ~ ~ ~] [sal_sd:1 ~ ~ ~]] [[~ ~ ~ ~] [sal_sd:1 ~ ~ ~] [~ ~ ~ ~] [sal_sd:1 ~ ~ ~]]>").gain(0.62),
    s("<[[~ sal_sd:4 ~ ~] [~ ~ sal_sd:3 ~] [~ sal_sd:4 ~ ~] [~ ~ ~ sal_sd:3]] [[~ sal_sd:4 ~ ~] [~ ~ ~ sal_sd:3] [~ sal_sd:4 ~ ~] [~ ~ sal_sd:4 ~]]>").gain(0.28)
  )],
  // Bar 16 midnight turnaround fill looping cleanly to Bar 1
  [1, stack(
    s("[[~ ~ ~ ~] [sal_sd:1 ~ ~ sal_sd:1] [sal_ht:1 ~ sal_ht:2 ~] [sal_lt:0 ~ sal_lt:0 ~]]").gain(0.60),
    s("[[~ sal_sd:4 ~ ~] [~ sal_sd:3 ~ ~] [~ ~ ~ sal_sd:3] [~ ~ ~ ~]]").gain(0.30)
  )]
)
  .swingBy(0.12, 8)
  .orbit(1).room(0.18).roomsize(0.55)

// 3. Crisp Acoustic Hi-Hats (Orbit 1, choked on cut 1)
$hats: arrange(
  [4, s("<[[sal_hh:2 ~ sal_hh:2 sal_hh:2] [sal_hh:2 ~ sal_hh:2 ~] [sal_hh:2 ~ sal_oh:0 ~] [sal_hh:2 ~ sal_hh:2 sal_hh:2]] [[sal_hh:2 ~ sal_hh:2 ~] [sal_hh:2 ~ sal_hh:2 sal_hh:2] [sal_hh:2 ~ sal_hh:2 ~] [sal_hh:2 ~ sal_oh:0 ~]]>")],
  [3, s("<[[sal_hh:2 ~ sal_hh:2 sal_hh:2] [sal_hh:2 ~ sal_hh:2 ~] [sal_hh:2 ~ sal_oh:0 ~] [sal_hh:2 ~ sal_hh:2 sal_hh:2]] [[sal_hh:2 ~ sal_hh:2 sal_hh:2] [sal_hh:2 ~ sal_hh:5 ~] [sal_hh:2 ~ sal_hh:2 ~] [sal_hh:2 ~ sal_oh:0 ~]]>")],
  [1, s("[[sal_hh:2 ~ sal_hh:2 ~] [sal_hh:2 ~ sal_oh:0 ~] [~ ~ ~ ~] [~ ~ ~ ~]]")],
  [4, silence],
  [3, s("<[[sal_hh:2 ~ sal_hh:2 sal_hh:2] [sal_hh:2 ~ sal_hh:2 ~] [sal_hh:2 ~ sal_oh:0 ~] [sal_hh:2 ~ sal_hh:2 sal_hh:2]] [[sal_hh:2 ~ sal_hh:2 sal_hh:2] [sal_hh:2 ~ sal_hh:5 ~] [sal_hh:2 ~ sal_hh:2 ~] [sal_hh:2 ~ sal_oh:0 ~]]>")],
  [1, s("[[sal_hh:2 ~ sal_hh:2 ~] [sal_hh:2 ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]]")]
)
  .swingBy(0.12, 8)
  .cut(1)
  .pan(0.38)
  .gain("<[0.42 0.28 0.36 0.26] [0.40 0.28 0.38 0.28]>*4")
  .orbit(1).room(0.14).roomsize(0.55)

// 4. Ride Cymbal (Bridge) & Soft Studio Crashes (Orbit 1, unchoked)
$ride_cym: arrange(
  [4, silence],
  [4, s("<[sal_cr:5 ~ ~ ~] [~] [~] [~]>").gain(0.34)],
  [4, stack(
    s("<[sal_cr:5 ~ ~ ~] [~] [~] [~]>").gain(0.34),
    s("<[[sal_rd:0 ~ sal_rd:0 ~] [sal_rd:0 ~ sal_rd:0 sal_rd:0] [sal_rd:0 ~ sal_rd:0 ~] [sal_rd:0 ~ sal_rd:0 ~]] [[sal_rd:0 ~ sal_rd:0 ~] [sal_rd:0 ~ sal_rd:0 ~] [sal_rd:0 ~ sal_rd:0 sal_rd:0] [sal_rd:0 ~ sal_rd:0 ~]]>")
      .gain("<[0.44 0.30 0.38 0.30] [0.42 0.30 0.36 0.32]>*4")
  )],
  [4, s("<[sal_cr:5 ~ ~ ~] [~] [~] [~]>").gain(0.32)]
)
  .swingBy(0.12, 8)
  .pan(0.64)
  .orbit(1).room(0.22).roomsize(0.55)

// 5. Foot Pedal Hi-Hat Chick (Dry, Bridge beats 2 & 4)
$pedal: arrange(
  [8, silence],
  [4, s("[~ sal_pedal:0 ~ sal_pedal:0]")],
  [4, silence]
)
  .cut(1)
  .pan(0.38)
  .gain(0.26)

// 6. Subtle Studio Tambourine Sparkle (Bridge & Outro, Orbit 1)
$perc: arrange(
  [8, silence],
  [4, s("[[~ ~ vsco_tamb:2 ~] [vsco_tamb:1 ~ ~ ~] [~ ~ vsco_tamb:2 ~] [vsco_tamb:1 ~ ~ ~]]")],
  [3, s("[[~ ~ ~ ~] [vsco_tamb:1 ~ ~ ~] [~ ~ ~ ~] [vsco_tamb:1 ~ ~ vsco_tamb:2]]")],
  [1, silence]
)
  .swingBy(0.12, 8)
  .hpf(1200)
  .pan(0.72)
  .gain(0.24)
  .orbit(1).room(0.20).roomsize(0.55)

// 7. Singing Fretless Electric Bass (MRT2 Studio 48kHz, Dry, E1-E3)
$bass: note(`<
  [d2@3 ~ ~ ~ a1 c2 ~ d2 ~ f2 a2 ~ g2 ~]
  [g1@3 ~ ~ ~ b1 d2 ~ g2 ~ f2 e2 ~ d2 ~]
  [bb1@3 ~ ~ ~ d2 f2 ~ a2 ~ g2 f2 ~ d2 ~]
  [a1@3 ~ ~ ~ e2 g2 ~ a2 ~ g2 e2 ~ c#2 ~]
  [d2@3 ~ ~ ~ f2 a2 ~ c3 ~ a2 g2 ~ f2 ~]
  [g1@3 ~ ~ ~ b1 d2 ~ f2 ~ e2 d2 ~ b1 ~]
  [bb1@3 ~ ~ ~ d2 f2 ~ a2 ~ g2 f2 ~ e2 ~]
  [e2@3 ~ ~ ~ g2 bb2 a1@3 ~ ~ ~ c#2 e2]
  [g1@3 ~ ~ ~ d2 f2 ~ a2 ~ g2 f2 ~ d2 ~]
  [c2@3 ~ ~ ~ g2 bb2 ~ c3 ~ bb2 g2 ~ e2 ~]
  [f1@3 ~ ~ ~ c2 e2 ~ a2 ~ g2 f2 ~ c2 ~]
  [e2@3 ~ ~ ~ bb2 g2 a1@3 ~ ~ ~ g2 e2]
  [d2@3 ~ ~ ~ a1 c2 ~ f2 ~ e2 d2 ~ c2 ~]
  [g1@3 ~ ~ ~ b1 d2 ~ g2 ~ f2 e2 ~ d2 ~]
  [bb1@3 ~ ~ ~ f2 a2 ~ c3 ~ bb2 a2 ~ f2 ~]
  [a1@3 ~ ~ ~ d2 g2 a1@3 ~ e2 ~ c#2 ~]
>`)
  .s("mrt2_fretless_bass")
  .swingBy(0.12, 8)
  .cut(3)
  .lpf(1450)
  .release(0.18)
  .clip(0.96)
  .gain(0.76)

// 8. Warm Vintage Suitcase Electric Piano (MRT2 Studio, Suitcase Stereo Autopan, Orbit 2)
$rhodes: note(`<
  [[d3,f3,a3,c4,e4]@3 ~ ~ ~ [d3,f3,a3,c4,e4]@2 ~ ~ [d3,f3,a3,c4,e4]@2 ~ ~ ~ ~]
  [[f3,a3,b3,e4]@3 ~ ~ ~ [f3,a3,b3,e4]@2 ~ ~ [f3,a3,b3,e4]@3 ~ ~ ~]
  [[d3,f3,a3,c4]@3 ~ ~ ~ [d3,f3,a3,c4]@2 ~ ~ [d3,f3,a3,c4]@2 ~ ~ ~ ~]
  [[d3,g3,c4]@3 ~ ~ ~ [c#3,g3,bb3]@3 ~ ~ ~ [c#3,g3,bb3]@2 ~ ~]
  [[d3,f3,a3,c4,e4]@3 ~ ~ ~ [d3,f3,a3,c4,e4]@2 ~ ~ [d3,f3,a3,c4,e4]@2 ~ ~ ~ ~]
  [[f3,a3,b3,e4]@3 ~ ~ ~ [f3,a3,b3,e4]@2 ~ ~ [f3,a3,b3,e4]@3 ~ ~ ~]
  [[d3,f3,a3,c4]@3 ~ ~ ~ [d3,f3,a3,c4]@2 ~ ~ [d3,f3,a3,c4]@2 ~ ~ ~ ~]
  [[e3,g3,bb3,d4]@3 ~ ~ ~ [e3,g3,bb3,d4] ~ [e3,g3,bb3,c#4]@3 ~ ~ ~ ~ ~]
  [[f3,a3,bb3,d4]@3 ~ ~ ~ [f3,a3,bb3,d4]@2 ~ ~ [f3,a3,bb3,d4]@2 ~ ~ ~ ~]
  [[e3,a3,bb3,d4]@3 ~ ~ ~ [e3,a3,bb3,d4]@2 ~ ~ [e3,a3,bb3,d4]@3 ~ ~ ~]
  [[e3,g3,a3,c4]@3 ~ ~ ~ [e3,g3,a3,c4]@2 ~ ~ [e3,g3,a3,c4]@2 ~ ~ ~ ~]
  [[e3,g3,bb3,d4]@3 ~ ~ ~ [e3,g3,bb3,d4] ~ [e3,g3,bb3,c#4]@3 ~ ~ ~ ~ ~]
  [[d3,f3,a3,c4,e4]@3 ~ ~ ~ [d3,f3,a3,c4,e4]@2 ~ ~ [d3,f3,a3,c4,e4]@2 ~ ~ ~ ~]
  [[f3,a3,b3,e4]@3 ~ ~ ~ [f3,a3,b3,e4]@2 ~ ~ [f3,a3,b3,e4]@3 ~ ~ ~]
  [[d3,f3,a3,c4]@3 ~ ~ ~ [d3,f3,a3,c4]@2 ~ ~ [d3,f3,a3,c4]@2 ~ ~ ~ ~]
  [[d3,g3,c4]@3 ~ ~ ~ [d3,g3,c4] ~ [e3,g3,bb3,c#4]@3 ~ ~ ~ ~ ~]
>`)
  .s("mrt2_rhodes_ep")
  .swingBy(0.12, 8)
  .hpf(160)
  .lpf(3200)
  .release(0.26)
  .clip(0.95)
  .pan(sine.range(0.34, 0.66).slow(2))
  .gain(0.46)
  .orbit(2).room(0.28).roomsize(0.84)

// 9. Clean Hollowbody Jazz Electric Guitar Comping (MRT2 Studio, Panned Right, Orbit 2)
$guitar: note(`<
  [~ ~ ~ [f3,a3,c4] ~ ~ ~ ~ ~ ~ [a3,c4,e4] ~ ~ [f3,a3,c4] ~ ~]
  [~ ~ ~ [f3,b3,e4] ~ ~ ~ ~ ~ [f3,a3,b3] ~ ~ ~ ~ [a3,b3,e4] ~]
  [~ ~ ~ [d3,a3,c4] ~ ~ ~ ~ ~ ~ [f3,a3,c4] ~ ~ [d3,a3,c4] ~ ~]
  [~ ~ ~ [g3,c4] ~ ~ ~ ~ ~ ~ [g3,bb3,c#4] ~ ~ ~ ~ ~]
  [~ ~ [f3,a3,c4] ~ ~ ~ [a3,c4,e4] ~ ~ ~ ~ [f3,a3,c4] ~ [a3,c4,e4] ~ ~]
  [~ ~ [f3,b3,e4] ~ ~ ~ ~ ~ ~ [f3,a3,b3] ~ [f3,b3,e4] ~ ~ ~ ~]
  [~ ~ [d3,a3,c4] ~ ~ ~ [f3,a3,c4] ~ ~ ~ ~ [d3,a3,c4] ~ ~ ~ ~]
  [~ ~ [g3,bb3,d4] ~ ~ ~ ~ ~ ~ ~ [g3,bb3,c#4] ~ ~ ~ ~ ~]
  [~ ~ ~ [f3,bb3,d4] ~ ~ [a3,bb3,d4] ~ ~ ~ ~ [f3,bb3,d4] ~ ~ ~ ~]
  [~ ~ ~ [e3,a3,d4] ~ ~ ~ ~ ~ [e3,bb3,d4] ~ ~ ~ [e3,a3,d4] ~ ~]
  [~ ~ ~ [e3,a3,c4] ~ ~ [g3,a3,c4] ~ ~ ~ ~ [e3,a3,c4] ~ ~ ~ ~]
  [~ ~ [g3,bb3,d4] ~ ~ ~ ~ ~ ~ ~ [g3,bb3,c#4] ~ ~ [g3,bb3,c#4] ~ ~]
  [~ ~ ~ [f3,a3,c4] ~ ~ [a3,c4,e4] ~ ~ ~ ~ [f3,a3,c4] ~ ~ ~ ~]
  [~ ~ ~ [f3,b3,e4] ~ ~ ~ ~ ~ [f3,a3,b3] ~ ~ ~ [a3,b3,e4] ~ ~]
  [~ ~ ~ [d3,a3,c4] ~ ~ [f3,a3,c4] ~ ~ ~ ~ [d3,a3,c4] ~ ~ ~ ~]
  [~ ~ [g3,c4] ~ ~ ~ ~ ~ ~ ~ [g3,bb3,c#4] ~ ~ ~ ~ ~]
>`)
  .s("mrt2_clean_guitar")
  .swingBy(0.12, 8)
  .hpf(240)
  .lpf(3600)
  .release(0.18)
  .clip(0.92)
  .pan(0.68)
  .gain(0.42)
  .orbit(2).room(0.26).roomsize(0.84)

// 10. Lush Vintage Analog String Machine Pad (MRT2 Studio Solina, Full-Bar Voice-Led Swells, Orbit 2)
$strings: note(`<
  [d3,a3,f4]
  [d3,b3,e4]
  [d3,a3,c4]
  [e3,g3,c#4]
  [f3,c4,e4]
  [f3,b3,e4]
  [f3,a3,d4]
  [e3,g3,bb3]
  [g3,bb3,f4]
  [g3,bb3,e4]
  [a3,c4,e4]
  [e3,g3,bb3]
  [f3,a3,e4]
  [f3,b3,e4]
  [f3,a3,c4]
  [e3,g3,a3]
>`)
  .s("mrt2_solina_strings")
  .hpf(260)
  .lpf(2800)
  .phaser(0.25).phaserdepth(0.35).phasercenter(1100).phasersweep(900)
  .release(0.85)
  .clip(0.98)
  .pan(0.44)
  .gain("<0.22!4 0.30!4 0.36!4 0.32!4>")
  .orbit(2).room(0.46).roomsize(0.84)

// 11. Expressive Breathy Tenor Saxophone Melody (MRT2 Studio, C3-G4, Dotted-8th Tape Echo, Orbit 2)
$sax: note(`<
  [~ ~ ~ ~ ~ a3 c4 d4 e4@4 ~ d4 c4 a3]
  [b3@4 ~ a3 b3 d4 e4@3 ~ ~ ~ ~ ~]
  [~ ~ d4 c4 a3@4 ~ g3 a3 c4 d4@4]
  [c4@2 ~ a3 g3@4 ~ ~ ~ ~ ~ ~ ~ ~]
  [~ ~ ~ a3 c4 d4 f4 e4@5 ~ d4 c4 a3]
  [b3@2 d4 e4 g4@3 f4 e4@4 ~ ~ ~ ~]
  [~ ~ f4 e4 d4@3 c4 a3@4 ~ g3 a3 c4]
  [d4@4 ~ c4 bb3 a3@5 ~ ~ ~ ~]
  [~ ~ d4 f4 g4@4 ~ f4 d4 c4 bb3@4]
  [~ ~ a3 c4 d4@3 e4 g4@4 ~ e4 d4 c4]
  [a3@4 ~ c4 d4 e4 f4@4 ~ e4 d4 c4]
  [d4@3 bb3 g3@3 ~ e4@4 ~ ~ ~ ~]
  [~ ~ a3 c4 d4 e4 f4@2 e4@4 ~ d4 c4 a3]
  [b3@3 d4 e4@4 ~ d4 b3 a3 g3@4]
  [~ ~ a3 c4 d4@4 ~ c4 a3 g3 f3@4]
  [g3@2 a3@2 e4@4 ~ ~ ~ ~ ~ ~ ~ ~]
>`)
  .s("mrt2_tenor_sax")
  .swingBy(0.12, 8)
  .hpf(220)
  .lpf(4200)
  .release(0.38)
  .clip(0.96)
  .pan(0.52)
  .delay(0.20).delaytime(0.46875).delayfeedback(0.22)
  .gain(0.66)
  .orbit(2).room(0.42).roomsize(0.84)
