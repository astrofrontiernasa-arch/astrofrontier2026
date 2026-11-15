/* =========================================================
   ASTROFRONTIER: more Chapter 2 scenes (Opportunity)
   Kept in its own file because index.html is close to the
   16 MB page limit. Loaded by index.html after the story add-on.
   Same script format as the scenes inside index.html:
     {op:'...'} Opportunity  {s:'...'} Shasha  {m:'...'} Miaw Miaw
     {fx:'scene', src:'video.mp4'} swap the background video
     {fx:'data', set:'name'} pop up a NASA data card (it becomes a bubble after reading)
   ========================================================= */
(function addCh2b() {
  if (!window.AFExtend) return setTimeout(addCh2b, 60);
  css2();
  AFExtend(2, [
 {badge:'Chapter 2 · Scene 7', title:'🫐 Opportunity’s first discoveries', art:'blank', video:'ch2s7-bounce.mp4', track:'ch2-music7.mp3', pop:true,
  cast:[{src:'shasha-amazed.webp', who:'shasha', hidden:true, x:19, y:101, h:62, xm:20, ym:96, hm:30},
        {src:'miaw-curious.webp', who:'miaw', hidden:true, x:45, y:98, h:22, xm:46, ym:95, hm:12},
        {src:'opp-happy.webp', who:'opp', hidden:true, x:77, y:93, h:32, xm:74, ym:71, hm:12}],
  quiet:true, captions:true,
  desc:"Setting: Meridiani Planum, among the rocks and mineral deposits.",
  post:[{fx:'wait', ms:1800},                                                    /* the airbag ball bouncing across Mars */
        {op:"I arrived on January 24, 2004, at a place where scientists had found clues of an ancient wet environment."},   /* 10A */
        {fx:'data', set:'bounce'},                                                /* Do you know… 26 bounces + the airbags */
        {fx:'scene', src:'ch2s7-rock.mp4', ms:1300},                              /* 10B: examining rocks and soil */
        {op:"I studied the rocks around me, searching for clues about Mars' watery past."},
        {fx:'scene', src:'ch2s7-water.mp4', ms:1300},                             /* Mars long ago, with water */
        {op:"I found evidence that liquid water had once changed these rocks long ago!"},
        {fx:'scene', src:'ch2s7-berries.mp4', ms:1100, pose:{shasha:{x:19, y:101, h:62, xm:20, ym:96, hm:30}, miaw:{x:45, y:98, h:22, xm:46, ym:95, hm:12}}},   /* the blueberries! */
        {fx:'floaty', on:true, ms:0},
        {fx:'jump', on:'shasha', ms:400},                                         /* 10D: Shasha, excited */
        {s:"So you found clues about ancient water too, just like Spirit!"},
        {fx:'tilt', on:'miaw', ms:500},
        {fx:'data', set:'blueberries'},                                           /* NASA flash cards + how blueberries form */
        {fx:'jump', on:'opp', ms:900, pose:{opp:{x:77, y:93, h:32, xm:74, ym:71, hm:12}}},   /* Opportunity smiling proudly */
        {op:"That's right! Although we explored different places, we helped scientists discover more about Mars together."},
        {fx:'face', on:'miaw', src:'miaw-happy.webp', ms:0},
        {fx:'jump', on:'opp', ms:300},
        {op:"There's much more to discover! Come along, and I'll show you my next adventure!"}]},

 /* pop:true = when a rover talks while it is not on screen, it floats into the corner with its speech bubble */
 {badge:'Chapter 2 · Scene 8', title:'🌅 Years of adventure', art:'blank', video:'ch2s8-sunset.mp4', track:'ch2-music8.mp3', pop:true,
  cast:[{src:'opp-happy.webp', who:'opp', hidden:true, x:86, y:97, h:30, xm:80, ym:90, hm:13},
        {src:'shasha-amazed.webp', who:'shasha', hidden:true, x:21, y:101, h:62, xm:20, ym:96, hm:30},
        {src:'miaw-curious.webp', who:'miaw', hidden:true, x:45, y:98, h:21, xm:47, ym:95, hm:11}],
  quiet:true, captions:true,
  desc:"Setting: A montage of Opportunity travelling across Mars.",
  post:[{fx:'wait', ms:1600},                                                    /* Opportunity driving into the sunset, seen from behind */
        {n:"Opportunity was designed for a short mission, but it explored Mars for many years."},
        {fx:'scene', src:'ch2s8-drive.mp4', ms:1300},                             /* 12A: across a crater under the stars */
        {op:"I travelled across vast plains, explored craters and searched for clues about ancient Mars!"},
        {fx:'scene', src:'ch2s8-crater.mp4', ms:1300},                            /* 12C: Endurance Crater */
        {op:"I even explored a huge crater called Endurance, discovering more clues about Mars's watery past!"},
        {fx:'data', set:'endurance'},                                             /* the crater picture + flash cards */
        {fx:'data', set:'gypsum'},                                                /* the gypsum vein that proves water flowed */
        {fx:'game', game:'veins'},                                                /* make the water leave gypsum veins */
        {fx:'face', on:'shasha', src:'shasha-amazed.webp', ms:300, pose:{shasha:{x:21, y:101, h:62, xm:20, ym:96, hm:30}, miaw:{x:45, y:98, h:21, xm:47, ym:95, hm:11}}},   /* 12D */
        {fx:'floaty', on:true, ms:0},
        {s:"Wow! Exploring such a huge crater must have been challenging!"},
        {fx:'tilt', on:'miaw', ms:600}]},

 {badge:'Chapter 2 · Scene 9', title:'🌬️ A helpful Martian wind', art:'blank', video:'ch2s9-dusty.mp4', track:'ch2-music8.mp3', pop:true,
  cast:[{src:'opp-happy.webp', who:'opp', hidden:true, x:86, y:97, h:30, xm:80, ym:90, hm:13},
        {src:'shasha-amazed.webp', who:'shasha', hidden:true, x:19, y:101, h:62, xm:20, ym:96, hm:30},
        {src:'miaw-happy.webp', who:'miaw', hidden:true, x:42, y:98, h:22, xm:47, ym:95, hm:12}],
  quiet:true, captions:true,
  desc:"Setting: Opportunity soaking up the sunshine on the Martian plains.",
  post:[{fx:'wait', ms:1500},                                                    /* sunbathing, but the panels are dusty */
        {n:"Opportunity relied on sunlight for power, but dust sometimes covered its solar panels, reducing the energy it could collect."},
        {fx:'scene', src:'ch2s9-wind.mp4', ms:1600},                              /* 12F: a gentle wind blows the dust away */
        {op:"Sometimes, Martian winds came to my rescue by sweeping dust off my panels!"},
        {fx:'game', game:'panels'},                                               /* be the wind: clean the panels */
        {op:"In March 2014, I captured a self-portrait showing my cleaner solar panels!"},
        {fx:'data', set:'selfies'},                                               /* before and after */
        {fx:'jump', on:'shasha', ms:500, pose:{shasha:{x:19, y:101, h:62, xm:20, ym:96, hm:30}, miaw:{x:42, y:98, h:22, xm:47, ym:95, hm:12}}},
        {fx:'floaty', on:true, ms:0},
        {s:"How wonderful! Even the wind helped you continue your adventure!"},
        {fx:'jump', on:'miaw', ms:600}]},

 {badge:'Chapter 2 · Scene 10', title:'🌪️ The great dust storm', art:'blank', video:'ch2s10-plain.mp4', track:'ch2-music10.mp3', pop:true,
  cast:[{src:'shasha-look.webp', who:'shasha', x:20, y:98, h:48, xm:22, ym:95, hm:28},
        {src:'miaw-stand.webp', who:'miaw', x:35, y:98, h:20, xm:46, ym:95, hm:12},
        {src:'opp-happy.webp', who:'opp', x:72, y:92, h:34, xm:74, ym:76, hm:14}],
  quiet:true, captions:true,
  desc:"Setting: Martian landscape, with Opportunity's wheel tracks stretching into the distance.",
  post:[{fx:'floaty', on:true, ms:1200},                                         /* floating together on the empty plain */
        {fx:'jump', on:'opp', ms:600},
        {fx:'scene', src:'ch2s10-mars.mp4', ms:600, pose:{shasha:{off:true}, miaw:{off:true}, opp:{off:true}}},   /* the whole of Mars */
        {fx:'js', run: it => routeOn(true), ms:2600},                             /* a gold line draws Opportunity's 45.16 km drive */
        {op:"I travelled an incredible 45.16 kilometres across Mars!"},
        {fx:'js', run: it => routeOn(false), ms:0},
        {fx:'scene', src:'ch2s10-plain.mp4', ms:1000, pose:{shasha:{x:20, y:98, h:48, xm:22, ym:95, hm:28}, miaw:{x:35, y:98, h:20, xm:46, ym:95, hm:12}, opp:{x:72, y:92, h:34, xm:74, ym:76, hm:14}}},
        {fx:'data', set:'route'},                                                 /* NASA route map, then a bubble by Miaw Miaw */
        {fx:'face', on:'shasha', src:'shasha-amazed.webp', ms:300, pose:{shasha:{x:20, y:101, h:64, xm:20, ym:96, hm:32}}},   /* 13C */
        {s:"Wow! That's farther than Spirit!"},
        {fx:'scene', src:'ch2s10-storm.mp4', ms:1300, pose:{shasha:{off:true}, miaw:{off:true}, opp:{off:true}}},   /* a dust storm, Opportunity far away */
        {n:"Eventually, a huge dust storm covered Mars, blocking sunlight from Opportunity's solar panels."},
        {fx:'scene', src:'ch2s10-oppstorm.mp4', ms:1300},                         /* 14B: under the dusty sky */
        {fx:'face', on:'opp', src:'opp-curious.webp', ms:0},
        {fx:'js', run: it => dusty(true), ms:0},
        {op:"I needed sunlight to recharge, but the dust storm made it difficult."},
        {fx:'face', on:'shasha', src:'shasha-look.webp', ms:400, pose:{shasha:{x:20, y:98, h:48, xm:22, ym:95, hm:28}, miaw:{x:35, y:98, h:20, xm:46, ym:95, hm:12}}},   /* 14C: worried */
        {fx:'tilt', on:'shasha', ms:500},
        {s:"Oh no! What happened next?"},
        {op:"I sent my last signal to Earth on June 10, 2018."},                 /* 14D: tired but brave */
        {fx:'data', set:'lastimage'}]},

 {badge:'Chapter 2 · Scene 11', title:'💛 Goodbye, Opportunity', art:'blank', video:'ch2s11-sunset.mp4', track:'ch2-music10.mp3',
  cast:[{src:'shasha-look.webp', who:'shasha', x:22, y:98, h:50, xm:22, ym:95, hm:28},
        {src:'miaw-stand.webp', who:'miaw', x:37, y:98, h:20, xm:46, ym:95, hm:12},
        {src:'opp-happy.webp', who:'opp', x:72, y:92, h:36, xm:74, ym:76, hm:14}],
  quiet:true, captions:true,
  desc:"Setting: Sunset on the Martian plains.",
  post:[{fx:'floaty', on:true, ms:1500},
        {s:"So... your journey ended?"},
        {fx:'jump', on:'opp', ms:500},                                            /* 14G: smiling gently */
        {op:"Yes, but my discoveries will continue helping scientists understand Mars."},
        {fx:'face', on:'shasha', src:'shasha-amazed.webp', ms:300, pose:{shasha:{x:22, y:100, h:60, xm:21, ym:96, hm:31}}},   /* 14H: smiling warmly */
        {s:"You will always be remembered!"},
        {fx:'face', on:'miaw', src:'miaw-happy.webp', ms:0},
        {fx:'jump', on:'miaw', ms:500},
        {m:"Meow!"},
        {fx:'game', game:'explore'},                                              /* explore Mars one last time */
        {fx:'finish'}]}

  ], {
  bounce: {title: 'Do you know…?', img: 'ch2-airbag.jpg',
    cap: 'Landing airbags like these, inflated here for a test on Earth, wrapped around Opportunity’s lander like a giant bouncy ball.',
    text: 'OPPORTUNITY BOUNCED 26 times during its landing, then rolled to a stop inside a small crater full of ancient secrets! It landed on 24 January 2004 (US time), which was already 25 January in Universal Time.'},
  blueberries: {title: 'Mars “blueberries”', img: 'ch2-blueberries.jpg',
    cap: 'Hematite “blueberries” near Fram Crater, photographed by Opportunity in April 2004. Credit: NASA/JPL-Caltech/Cornell/USGS',
    stepsTitle: '🔍 How do the blueberries form? Tap the cards in order!',
    steps: [
      ['Water seeps in', 'Salty water soaked into the rock, carrying iron.', '💧'],
      ['Hematite forms', 'The iron turned into a mineral called hematite.', '🧲'],
      ['Little balls grow', 'The hematite grew into tiny round balls.', '🫐'],
      ['Wind uncovers them', 'Wind blew the soft rock away, leaving the “blueberries” on top.', '🌬️']]},
  endurance: {title: 'Endurance Crater', img: 'ch2-endurance.jpg',
    cap: 'Looking into a crater from its rim, with sand ripples across the floor: a panorama from Opportunity’s panoramic camera. Credit: NASA/JPL-Caltech/Cornell',
    cards: [
      ['Stadium-sized', 'About 130 m wide: bigger than a football field!'],
      ['Six months inside', 'Opportunity explored inside it for about six months in 2004.'],
      ['Pages of history', 'Its rock layers are like pages of a book about Mars’ watery past.']]},
  gypsum: {title: 'Slam-dunk signs of flowing water', img: 'ch2-homestake.jpg',
    cap: 'This color view of a mineral vein called “Homestake” comes from the panoramic camera (Pancam) on NASA’s Mars Exploration Rover Opportunity. Credits: NASA/JPL-Caltech/Cornell/ASU.',
    text: 'Score! Near the rim of Endeavour Crater (a different, much bigger crater than Endurance), Opportunity found bright veins of a mineral called gypsum. They formed when water flowed through cracks in the rocks and left calcium behind: a slam-dunk sign that Mars was once friendlier to life than it is today!'},
  selfies: {title: 'My cleaner solar panels!', img: 'ch2-selfies.jpg',
    cap: 'Opportunity’s self-portraits: dusty in January 2014 (left) and much cleaner in late March 2014 (right). Credit: NASA/JPL-Caltech/Cornell Univ./Arizona State Univ.',
    text: 'In March 2014, Martian winds blew much of the dust off Opportunity’s solar panels. With cleaner panels, the rover could collect more sunlight and had more electricity for its work.'},
  route: {title: 'Opportunity’s route', img: 'ch2-route.jpg',
    cap: 'The gold line on this image shows Opportunity’s route from the landing site inside Eagle Crater, in upper left, to its location after the Sol 3968 drive. The mission has been investigating on the western rim of Endeavour Crater since August 2011.',
    list: ['Opportunity drove 45.16 km (28.06 miles) in all.', 'It started in little Eagle Crater, then visited Endurance and Victoria craters.', 'It spent its last years exploring the rim of Endeavour Crater.']},
  lastimage: {title: 'Opportunity’s last picture', img: 'ch2-lastimage.png', cap: '', alt: 'One of the last pictures Opportunity took, a dark sky during the dust storm'}

  }, {
  /* ---------- game: water through the cracks makes gypsum veins ---------- */
  veins: {title: 'Water in the rock cracks', total: 3, teaser: 'Help the water flow through the cracks and leave gypsum veins behind!',
    intro: 'Long ago, water flowed through cracks deep under the ground on Mars. Drag the water drop 💧 along each dark crack in the rock. Wherever the water flows, it leaves calcium behind and a bright gypsum vein appears!',
    build(body) {
      const K = window.AFKit; css();
      body.classList.add('af-xg');
      body.innerHTML = '<p class="af-mc">💧 Drag the water along the dark cracks · <b>0 of 3</b> veins made</p><div class="af-vn"><canvas width="800" height="500" aria-label="A rock with three cracks"></canvas></div><p class="af-hint" aria-live="polite">Start at a glowing blue drop and follow the crack.</p>';
      const cv = body.querySelector('canvas'), x = cv.getContext('2d'), mc = body.querySelector('.af-mc b'), hn = body.querySelector('.af-hint');
      const CR = [[[40, 110], [170, 140], [300, 105], [450, 150], [600, 120], [760, 160]],
                  [[60, 290], [190, 250], [330, 300], [470, 255], [610, 310], [750, 270]],
                  [[130, 460], [260, 400], [390, 430], [520, 375], [650, 410], [770, 380]]];
      const P = CR.map(c => { const pts = []; for (let i = 0; i < c.length - 1; i++) { const [a, b] = [c[i], c[i + 1]], n = Math.ceil(Math.hypot(b[0] - a[0], b[1] - a[1]) / 6); for (let k = 0; k < n; k++) pts.push({x: a[0] + (b[0] - a[0]) * k / n + Math.sin((i * 7 + k) * .9) * 4, y: a[1] + (b[1] - a[1]) * k / n + Math.cos((i * 5 + k) * .7) * 4, t: 0}); } return {pts, done: false}; });
      /* the rock: layers and speckles, drawn once */
      const rock = document.createElement('canvas'); rock.width = 800; rock.height = 500; const r = rock.getContext('2d');
      const gr = r.createLinearGradient(0, 0, 0, 500); gr.addColorStop(0, '#b4693f'); gr.addColorStop(1, '#7c3d22'); r.fillStyle = gr; r.fillRect(0, 0, 800, 500);
      for (let i = 0; i < 9; i++) { r.fillStyle = `rgba(${i % 2 ? '255,220,180' : '60,25,10'},.07)`; r.fillRect(0, i * 56 + 10, 800, 26); }
      for (let i = 0; i < 2600; i++) { r.fillStyle = `rgba(${Math.random() < .5 ? '40,15,5' : '255,230,200'},${Math.random() * .25})`; r.fillRect(Math.random() * 800, Math.random() * 500, 2, 2); }
      let down = false, pos = null, made = 0, raf = 0;
      const at = e => { const b = cv.getBoundingClientRect(); return {x: (e.clientX - b.left) * 800 / b.width, y: (e.clientY - b.top) * 500 / b.height}; };
      const wet = p => { const now = performance.now(); P.forEach((c, ci) => { if (c.done) return; c.pts.forEach(q => { if (!q.t && Math.hypot(q.x - p.x, q.y - p.y) < 28) q.t = now; });
          if (c.pts.filter(q => q.t).length / c.pts.length > .9) { c.done = true; c.pts.forEach(q => { if (!q.t) q.t = now; }); made++; K.setScore(made); K.afTone(true); mc.textContent = made + ' of 3';
            if (made < 3) K.hint(hn, ['A gypsum vein! Now find another crack.', 'Two veins! One more crack to go.'][made - 1]);
            else { K.hint(hn, 'All three veins are shining!'); setTimeout(() => K.finish('Brilliant! You made three bright gypsum veins, just like “Homestake”. On Mars, water once flowed through cracks under the ground and left calcium behind as the white mineral gypsum: a slam-dunk sign of flowing water!'), 900); } } }); };
      cv.addEventListener('pointerdown', e => { down = true; cv.setPointerCapture(e.pointerId); pos = at(e); wet(pos); });
      cv.addEventListener('pointermove', e => { pos = at(e); if (down) wet(pos); });
      const up = () => { down = false; }; cv.addEventListener('pointerup', up); cv.addEventListener('pointercancel', up); cv.addEventListener('pointerleave', () => { pos = null; up(); });
      const draw = now => { raf = requestAnimationFrame(draw); x.drawImage(rock, 0, 0);
        P.forEach(c => { const p = c.pts; x.lineCap = 'round'; x.lineJoin = 'round';
          x.strokeStyle = '#2a1408'; x.lineWidth = 7; x.beginPath(); p.forEach((q, i) => i ? x.lineTo(q.x, q.y) : x.moveTo(q.x, q.y)); x.stroke();
          for (let i = 1; i < p.length; i++) { const a = p[i - 1], b = p[i]; if (!a.t || !b.t) continue; const k = Math.min(1, (now - Math.max(a.t, b.t)) / 1400);
            x.strokeStyle = `rgb(${88 + 167 * k},${183 + 60 * k},${255 - 41 * k})`; x.lineWidth = 9 + 3 * k; x.shadowColor = k > .5 ? 'rgba(255,245,220,.8)' : 'rgba(90,180,255,.8)'; x.shadowBlur = 10;
            x.beginPath(); x.moveTo(a.x, a.y); x.lineTo(b.x, b.y); x.stroke(); x.shadowBlur = 0; }
          if (!c.done && !p[0].t) { const s = 1 + Math.sin(now / 250) * .2; x.font = `${30 * s}px sans-serif`; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText('💧', p[0].x, p[0].y - 4); } });
        if (pos) { x.font = '34px sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText('💧', pos.x, pos.y - 18); } };
      raf = requestAnimationFrame(draw);
      return () => { cancelAnimationFrame(raf); body.classList.remove('af-xg'); };
    }},
  /* ---------- game: be the wind and clean the solar panels ---------- */
  panels: {title: 'Clean the solar panels', total: 5, teaser: 'Opportunity’s solar panels are dusty! Can you be the Martian wind?',
    intro: 'Dust is covering Opportunity’s solar panels, so it gets less power from the Sun. Be the Martian wind: swipe across the panels to blow the dust away and fill up the power meter!',
    build(body) {
      const K = window.AFKit; css();
      body.classList.add('af-xg');
      body.innerHTML = '<p class="af-mc">🌬️ Swipe to blow the dust away! ⚡ Power: <b>20%</b></p><div class="af-xpw"><div class="af-xpnl"><img src="ch2-selfie-clean.jpg" alt="Opportunity’s solar panels, seen from above"><canvas width="612" height="488"></canvas><span class="af-xwind" aria-hidden="true">🌬️</span></div><div class="af-xmeter" aria-hidden="true"><i></i><span>⚡</span></div></div><p class="af-hint" aria-live="polite">Use your finger or mouse like a gust of wind.</p>';
      const cv = body.querySelector('canvas'), x = cv.getContext('2d'), mc = body.querySelector('.af-mc b'), hn = body.querySelector('.af-hint'), bar = body.querySelector('.af-xmeter i'), wind = body.querySelector('.af-xwind');
      x.fillStyle = 'rgba(184,104,58,.86)'; x.fillRect(0, 0, 612, 488);
      for (let i = 0; i < 5000; i++) { x.fillStyle = `rgba(${Math.random() < .5 ? '120,60,30' : '230,160,110'},${Math.random() * .5})`; x.beginPath(); x.arc(Math.random() * 612, Math.random() * 488, Math.random() * 3 + .5, 0, 7); x.fill(); }
      x.globalCompositeOperation = 'destination-out';
      let last = null, power = 20, done = false, bars = 1, tm = 0;
      const at = e => { const b = cv.getBoundingClientRect(); return {x: (e.clientX - b.left) * 612 / b.width, y: (e.clientY - b.top) * 488 / b.height, cx: e.clientX - b.left, cy: e.clientY - b.top}; };
      const puff = (px, py) => { const g = x.createRadialGradient(px, py, 0, px, py, 46); g.addColorStop(0, 'rgba(0,0,0,.9)'); g.addColorStop(1, 'rgba(0,0,0,0)'); x.fillStyle = g; x.beginPath(); x.arc(px, py, 46, 0, 7); x.fill(); };
      const blow = p => { if (done) return; if (last) { const d = Math.hypot(p.x - last.x, p.y - last.y), n = Math.ceil(d / 12); for (let i = 1; i <= n; i++) puff(last.x + (p.x - last.x) * i / n, last.y + (p.y - last.y) * i / n); } else puff(p.x, p.y); last = p;
        wind.style.left = p.cx + 'px'; wind.style.top = p.cy + 'px'; wind.classList.add('on'); clearTimeout(tm); tm = setTimeout(measure, 120); };
      const measure = () => { const d = x.getImageData(0, 0, 612, 488).data; let left = 0, n = 0; for (let i = 3; i < d.length; i += 64) { n++; if (d[i] > 60) left++; }
        const clean = 1 - left / n; power = Math.min(100, Math.round(20 + 80 * clean / .85)); mc.textContent = power + '%'; bar.style.height = power + '%';
        const b = Math.min(5, Math.floor(power / 20)); if (b > bars) { bars = b; K.setScore(b); K.afTone(true); if (b < 5) K.hint(hn, ['', 'More sunlight is reaching the panels!', 'Keep blowing, the power is rising!', 'Nearly clean, just a little more!'][b - 1] || 'Keep going!'); }
        if (power >= 100 && !done) { done = true; K.setScore(5); x.clearRect(0, 0, 612, 488); K.hint(hn, 'Power restored! ⚡'); setTimeout(() => K.finish('Power restored! ⚡ Just like the real Martian winds, you blew the dust off Opportunity’s solar panels. In March 2014, gusts of wind cleaned its panels and gave the rover more energy to keep exploring.'), 900); } };
      cv.addEventListener('pointerdown', e => { cv.setPointerCapture(e.pointerId); last = null; blow(at(e)); });
      cv.addEventListener('pointermove', e => { if (e.buttons || e.pointerType === 'touch') blow(at(e)); });
      const up = () => { last = null; wind.classList.remove('on'); }; cv.addEventListener('pointerup', up); cv.addEventListener('pointercancel', up); cv.addEventListener('pointerleave', up);
      bar.style.height = '20%'; K.setScore(1);
      return () => { clearTimeout(tm); body.classList.remove('af-xg'); };
    }},
  /* ---------- game: explore Mars like a maze game, dodging dust storms ---------- */
  explore: {title: 'Opportunity’s last adventure', total: 5, teaser: 'Drive Opportunity through a maze of rocks, collect discoveries and dodge the dust storms!',
    intro: 'Drive Opportunity around the maze of rocks and collect every rock sample. Find the 5 big discoveries! Watch out for the dust storms 🌪️ and keep your battery 🔋 charged. Grab a sun ☀️ to recharge and blow the storms away!',
    build(body) { return exploreGame(body); }}

  });

  /* ---------- Scene 10: a gold line drawn on Mars (drawn much bigger than real so it can be seen) ---------- */
  function routeOn(on) {
    const old = document.getElementById('af-route'); if (old) old.remove(); if (!on) return;
    const bg = document.getElementById('story-video-bg') || document.getElementById('story-engine'); const sc = (window.AFState && AFState().scene);
    const d = document.createElement('div'); d.id = 'af-route';
    d.innerHTML = `<svg viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><filter id="afrg"><feGaussianBlur stdDeviation="5"/></filter></defs>
      <path class="r" d="M905 430 C925 445 915 470 940 478 S970 500 985 512 S1010 545 1035 548" filter="url(#afrg)" stroke="#ffd84d" stroke-width="16" fill="none" opacity=".6"/>
      <path class="r" d="M905 430 C925 445 915 470 940 478 S970 500 985 512 S1010 545 1035 548" stroke="#ffd84d" stroke-width="7" fill="none" stroke-linecap="round"/>
      <circle cx="905" cy="430" r="10" fill="#fff"/><circle class="e" cx="1035" cy="548" r="12" fill="#ffd84d" stroke="#fff" stroke-width="4"/>
      <path class="e" d="M895 432 L520 455" stroke="#fff" stroke-width="3" stroke-dasharray="8 8"/></svg>
      <div class="lab"><b>45.16 km</b><span>Opportunity’s whole drive</span><i>(drawn much bigger than real, so you can see it!)</i></div>`;
    bg.appendChild(d); css2();
    const iv = setInterval(() => { if (!document.body.contains(d)) return clearInterval(iv); if (window.AFState && AFState().scene !== sc) { d.remove(); clearInterval(iv); } }, 500);
  }
  /* Opportunity looking tired and dusty */
  function dusty(on) { const im = document.querySelector('.af-castfig[data-who="opp"] .af-castimg'); if (im) im.style.filter = on ? 'sepia(.55) saturate(.8) brightness(.85) drop-shadow(0 10px 14px rgba(40,20,70,.35))' : ''; }
  function css2() {
    if (document.getElementById('af-ch2b-css2')) return;
    const st = document.createElement('style'); st.id = 'af-ch2b-css2';
    st.textContent = `#af-route{position:absolute;inset:0;z-index:3;pointer-events:none}#af-route svg{position:absolute;inset:0;width:100%;height:100%}
#af-route .r{stroke-dasharray:240;stroke-dashoffset:240;animation:afRoute 1.6s ease-in-out .2s forwards}#af-route .e{opacity:0;animation:afRouteE .5s ease 1.7s forwards}
#af-route .lab{position:absolute;left:5%;top:36%;background:rgba(255,250,235,.95);color:#3b2160;border:3px solid #ffd84d;border-radius:18px;padding:10px 16px;text-align:center;box-shadow:0 8px 24px rgba(0,0,0,.4);opacity:0;animation:afRouteE .6s ease 1.8s forwards;max-width:300px}
#af-route .lab b{display:block;font-size:clamp(1.6rem,4vw,2.6rem);color:#c27a00}#af-route .lab span{display:block;font-weight:800}#af-route .lab i{display:block;font-size:.75rem;opacity:.75;margin-top:2px}
@media (max-aspect-ratio:1/1){#af-route .lab{left:50%;top:12%;transform:translateX(-50%)}#af-route .e[d^=M895]{display:none}}
@keyframes afRoute{to{stroke-dashoffset:0}}
.af-dphoto img[src="ch2-lastimage.png"]{max-height:min(52vh,420px)!important;width:auto;image-rendering:pixelated;border-radius:6px}@keyframes afRouteE{to{opacity:1}}
.af-ex-hud{display:flex;flex-wrap:wrap;gap:8px 18px;justify-content:center;align-items:center;color:#fff;font-weight:800;font-size:clamp(.95rem,2vw,1.15rem)}
.af-ex-bat{display:inline-block;width:90px;height:16px;border:2px solid #fff;border-radius:6px;vertical-align:middle;overflow:hidden;background:rgba(0,0,0,.3)}.af-ex-bat i{display:block;height:100%;background:linear-gradient(90deg,#ffb020,#7dff9b);transition:width .2s}
.af-ex-wrap{position:relative;width:min(100%,calc((100vh - 300px)*1.364),980px);aspect-ratio:720/528;touch-action:none}
.af-ex-wrap canvas{display:block;width:100%;height:100%;border-radius:16px;box-shadow:0 10px 30px rgba(0,0,0,.45);touch-action:none}
.af-ex-toast{position:absolute;left:50%;top:10px;transform:translateX(-50%);background:#fffaf2;color:#3b2160;border:3px solid #ffd84d;border-radius:14px;padding:8px 14px;font-weight:700;font-size:.95rem;max-width:90%;text-align:center;opacity:0;transition:opacity .3s;pointer-events:none}.af-ex-toast.on{opacity:1}
.af-ex-over{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;justify-content:center;gap:10px;background:rgba(30,10,30,.7);border-radius:16px;color:#fff;text-align:center;padding:16px}.af-ex-over.on{display:flex}
.af-ex-pad{display:grid;grid-template-columns:repeat(3,clamp(52px,8vh,72px));grid-auto-rows:clamp(46px,7vh,64px);gap:8px}
.af-ex-pad .af-btn{font-size:1.6rem;min-width:0;width:100%;height:100%;padding:0}
.af-ex-pad [data-d=up]{grid-area:1/2}.af-ex-pad [data-d=left]{grid-area:2/1}.af-ex-pad [data-d=down]{grid-area:2/2}.af-ex-pad [data-d=right]{grid-area:2/3}
@media (min-aspect-ratio:5/4){.af-g-body.af-ex{grid-template-columns:auto auto;grid-template-areas:"hud hud" "map pad";column-gap:22px}.af-ex .af-ex-hud{grid-area:hud}.af-ex .af-ex-wrap{grid-area:map;width:min(calc(min(100vw,1400px) - 330px),calc((100vh - 220px)*1.364))}.af-ex .af-ex-side{grid-area:pad;display:flex;flex-direction:column;gap:14px;align-items:center;max-width:220px}}
.af-ex-side{display:flex;flex-direction:column;align-items:center;gap:10px}.af-ex-side .af-hint{font-size:1rem}`;
    document.head.appendChild(st);
  }

  /* ---------- the maze game ---------- */
  function exploreGame(body) {
    const K = window.AFKit; css(); css2();
    const MAP = ['###############', '#S.....#.....S#', '#.##.#.#.#.##.#', '#.#..#...#..#.#', '#...###.###...#', '#.#....D....#.#', '#...###.###...#', '#.#..#...#..#.#', '#.##.#.#.#.##.#', '#S.....P.....S#', '###############'];
    const C = 15, R = 11, T = 48, W = C * T, H = R * T;
    const FINDS = [[3, 1, '🫐', 'Blueberries! Little balls of hematite that formed in water long ago (Eagle Crater, 2004).'],
      [11, 1, '🧱', 'Layered rocks! The layers of Burns Cliff in Endurance Crater recorded Mars’ watery past (2004).'],
      [1, 5, '🪨', 'Heat Shield Rock! An iron meteorite, the first meteorite ever found on another planet (2005).'],
      [13, 5, '💎', '“Homestake”! A bright gypsum vein left by water flowing through cracks (2011).'],
      [7, 3, '🏔️', 'Clay minerals at “Esperance”! Signs of water that was gentler and friendlier to life (2013).']];
    body.classList.add('af-xg', 'af-ex');
    body.innerHTML = `<div class="af-ex-hud"><span>🔋 <span class="af-ex-bat"><i style="width:100%"></i></span></span><span class="af-ex-lives">❤️❤️❤️</span><span>🔍 <b class="af-ex-f">0</b>/5 discoveries</span><span>🪨 <b class="af-ex-d"></b> samples left</span></div>
      <div class="af-ex-wrap"><canvas width="${W}" height="${H}" aria-label="A maze of rocks on Mars"></canvas><div class="af-ex-toast"></div><div class="af-ex-over"><h3 style="margin:0;font-family:var(--font-head)">The dust storm won this time!</h3><p style="margin:0">Opportunity needs sunshine. Try again?</p><button type="button" class="af-btn">Try again ↻</button></div></div>
      <div class="af-ex-side"><div class="af-ex-pad">${['up', 'left', 'down', 'right'].map(d => `<button type="button" class="af-btn" data-d="${d}" aria-label="${d}">${{up: '⬆', left: '⬅', down: '⬇', right: '➡'}[d]}</button>`).join('')}</div><p class="af-hint" aria-live="polite">Arrow keys, swipe, or the buttons!</p></div>`;
    const cv = body.querySelector('canvas'), x = cv.getContext('2d'), toastEl = body.querySelector('.af-ex-toast'), over = body.querySelector('.af-ex-over'), hn = body.querySelector('.af-hint');
    const batEl = body.querySelector('.af-ex-bat i'), livesEl = body.querySelector('.af-ex-lives'), fEl = body.querySelector('.af-ex-f'), dEl = body.querySelector('.af-ex-d');
    const roverImg = new Image(); roverImg.src = 'opp-happy.webp';
    const DIRS = {up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0]}, OPP = {up: 'down', down: 'up', left: 'right', right: 'left'};
    const wall = (cx, cy) => cy < 0 || cy >= R || cx < 0 || cx >= C || MAP[cy][cx] === '#';
    /* rocks drawn once */
    const rocks = document.createElement('canvas'); rocks.width = W; rocks.height = H; const rk = rocks.getContext('2d');
    const gr = rk.createLinearGradient(0, 0, 0, H); gr.addColorStop(0, '#d98a5a'); gr.addColorStop(1, '#b4653c'); rk.fillStyle = gr; rk.fillRect(0, 0, W, H);
    for (let i = 0; i < 900; i++) { rk.fillStyle = `rgba(${Math.random() < .5 ? '90,40,20' : '255,220,190'},${Math.random() * .18})`; rk.fillRect(Math.random() * W, Math.random() * H, 3, 3); }
    for (let cy = 0; cy < R; cy++) for (let cx = 0; cx < C; cx++) if (MAP[cy][cx] === '#') {
      const px = cx * T + T / 2, py = cy * T + T / 2, g = rk.createRadialGradient(px - 8, py - 10, 4, px, py, T * .62);
      g.addColorStop(0, '#a8644a'); g.addColorStop(1, '#5a2c1c'); rk.fillStyle = g; rk.beginPath(); rk.ellipse(px, py + 2, T * .55, T * .5, (cx * 7 + cy) % 3 * .3, 0, 7); rk.fill(); }
    let dots, finds, suns, P, S, lives, battery, charged, found, state, raf, last, pauseT, toastT;
    function reset(full) {
      if (full) { dots = new Set(); suns = new Set(); finds = FINDS.map(f => ({x: f[0], y: f[1], e: f[2], t: f[3], got: false})); lives = 3; found = 0; K.setScore(0);
        MAP.forEach((r, cy) => [...r].forEach((ch, cx) => { if (ch === '.' && !finds.some(f => f.x === cx && f.y === cy)) dots.add(cx + ',' + cy); if (ch === 'S') suns.add(cx + ',' + cy); })); }
      P = {x: 7, y: 9, dir: null, want: null, face: 1}; battery = 100; charged = 0;
      S = [{x: 7, y: 5, dir: 'up', home: [7, 5], wait: 2.5}, {x: 7, y: 7, dir: 'down', home: [7, 7], wait: 5}];
      state = 'play'; pauseT = 1.2; hud(); }
    function hud() { batEl.style.width = Math.max(0, battery) + '%'; livesEl.textContent = '❤️'.repeat(lives) + '🤍'.repeat(3 - lives); fEl.textContent = found; dEl.textContent = dots.size; }
    function toast(t) { toastEl.textContent = t; toastEl.classList.add('on'); clearTimeout(toastT); toastT = setTimeout(() => toastEl.classList.remove('on'), 3200); }
    /* move an actor along the grid; when it reaches a tile centre, pick the next direction */
    function step(a, sp, dt, choose) {
      let left = sp * dt, guard = 0;
      while (left > 1e-9 && guard++ < 10) {
        const cx = Math.round(a.x), cy = Math.round(a.y), centre = Math.abs(a.x - cx) < 1e-6 && Math.abs(a.y - cy) < 1e-6;
        if (centre) { a.x = cx; a.y = cy; choose(a); if (!a.dir || wall(cx + DIRS[a.dir][0], cy + DIRS[a.dir][1])) { a.dir = null; return; } }
        const [mx, my] = DIRS[a.dir];
        const tx = centre ? cx + mx : (mx > 0 ? Math.ceil(a.x) : mx < 0 ? Math.floor(a.x) : a.x), ty = centre ? cy + my : (my > 0 ? Math.ceil(a.y) : my < 0 ? Math.floor(a.y) : a.y);
        const dist = Math.abs(tx - a.x) + Math.abs(ty - a.y), m = Math.min(left, dist);
        a.x += mx * m; a.y += my * m; left -= m;
        if (m >= dist - 1e-9) { a.x = tx; a.y = ty; if (a.onTile) a.onTile(a); }
      }
    }
    const choosePlayer = a => { if (a.want && !wall(Math.round(a.x) + DIRS[a.want][0], Math.round(a.y) + DIRS[a.want][1])) a.dir = a.want; else if (a.dir && wall(Math.round(a.x) + DIRS[a.dir][0], Math.round(a.y) + DIRS[a.dir][1])) a.dir = null; };
    const chooseStorm = a => { const ax = Math.round(a.x), ay = Math.round(a.y);
      let opts = Object.keys(DIRS).filter(d => !wall(ax + DIRS[d][0], ay + DIRS[d][1]) && d !== OPP[a.dir]); if (!opts.length) opts = [OPP[a.dir]];
      if (Math.random() < .45) { const sc = d => Math.hypot(ax + DIRS[d][0] - P.x, ay + DIRS[d][1] - P.y) * (charged > 0 ? -1 : 1); opts.sort((p, q) => sc(p) - sc(q)); a.dir = opts[0]; }
      else a.dir = opts[Math.floor(Math.random() * opts.length)]; };
    function eat(a) { const k = a.x + ',' + a.y;
      if (dots.delete(k)) { battery = Math.max(0, battery - .3); }
      if (suns.delete(k)) { battery = 100; charged = 7; K.afTone(true); toast('☀️ Sunshine! Battery full, and the sunlight can blow the dust storms away!'); }
      const f = finds.find(f => !f.got && f.x === a.x && f.y === a.y);
      if (f) { f.got = true; found++; K.setScore(found); K.afTone(true); toast(f.e + ' ' + f.t); }
      hud();
      if (!dots.size && found === FINDS.length && state === 'play') { state = 'won'; setTimeout(() => K.finish('Mission accomplished! You collected every rock sample and all 5 big discoveries while dodging the dust storms. Opportunity’s real discoveries still help scientists understand Mars today.'), 1200); } }
    function lose(why) { lives--; K.shake(cv); K.afTone(false); hud();
      if (lives <= 0) { state = 'over'; over.classList.add('on'); return; }
      toast(why); const keepDots = dots, keepSuns = suns, keepF = finds, keepFound = found; reset(false); dots = keepDots; suns = keepSuns; finds = keepF; found = keepFound; hud(); }
    over.querySelector('button').onclick = () => { over.classList.remove('on'); reset(true); };
    function update(dt) {
      if (state !== 'play') return; if (pauseT > 0) { pauseT -= dt; return; }
      battery -= dt * 2.2; if (charged > 0) charged -= dt; hud();
      if (battery <= 0) { lose('🔋 The battery ran out! Find a sun ☀️ to recharge.'); return; }
      P.onTile = eat; step(P, 4.6, dt, choosePlayer); if (P.dir === 'left') P.face = -1; if (P.dir === 'right') P.face = 1;
      S.forEach(s => { if (s.wait > 0) { s.wait -= dt; return; } step(s, charged > 0 ? 1.9 : 2.7, dt, chooseStorm);
        if (Math.hypot(s.x - P.x, s.y - P.y) < .62) { if (charged > 0) { s.x = s.home[0]; s.y = s.home[1]; s.dir = 'up'; s.wait = 3; K.afTone(true); toast('💨 Whoosh! The sunlight scattered the dust storm!'); } else lose('🌪️ A dust storm caught Opportunity! Be careful…'); } });
    }
    function draw(now) {
      x.drawImage(rocks, 0, 0);
      x.fillStyle = '#e8e0d8'; dots.forEach(k => { const [cx, cy] = k.split(',').map(Number); x.beginPath(); x.arc(cx * T + T / 2, cy * T + T / 2, 5, 0, 7); x.fill(); });
      x.textAlign = 'center'; x.textBaseline = 'middle';
      suns.forEach(k => { const [cx, cy] = k.split(',').map(Number); x.font = `${28 + Math.sin(now / 200) * 4}px sans-serif`; x.fillText('☀️', cx * T + T / 2, cy * T + T / 2); });
      finds.forEach(f => { if (f.got) return; x.font = `${30 + Math.sin(now / 300 + f.x) * 3}px sans-serif`; x.fillText(f.e, f.x * T + T / 2, f.y * T + T / 2); });
      S.forEach(s => { const px = s.x * T + T / 2, py = s.y * T + T / 2, fade = charged > 0, g = x.createRadialGradient(px, py, 2, px, py, T * .6);
        g.addColorStop(0, fade ? 'rgba(240,220,200,.5)' : 'rgba(120,60,30,.95)'); g.addColorStop(1, 'rgba(160,90,50,0)'); x.fillStyle = g; x.beginPath(); x.arc(px, py, T * .6, 0, 7); x.fill();
        x.strokeStyle = fade ? 'rgba(255,255,255,.6)' : 'rgba(70,30,15,.85)'; x.lineWidth = 3; for (let i = 0; i < 3; i++) { x.beginPath(); x.arc(px, py, 8 + i * 7, now / 180 + i * 2, now / 180 + i * 2 + 3.6); x.stroke(); } });
      const px = P.x * T + T / 2, py = P.y * T + T / 2;
      if (charged > 0) { x.fillStyle = `rgba(255,230,120,${.3 + .2 * Math.sin(now / 120)})`; x.beginPath(); x.arc(px, py, T * .62, 0, 7); x.fill(); }
      if (roverImg.complete && roverImg.naturalWidth) { const w = T * 1.25, h = w * roverImg.naturalHeight / roverImg.naturalWidth; x.save(); x.translate(px, py); x.scale(-P.face, 1); x.drawImage(roverImg, -w / 2, -h / 2 - 3, w, h); x.restore(); }
      else { x.font = '30px sans-serif'; x.fillText('🚙', px, py); }
      if (pauseT > 0 && state === 'play') { x.fillStyle = 'rgba(0,0,0,.35)'; x.fillRect(0, H / 2 - 34, W, 68); x.fillStyle = '#fff'; x.font = 'bold 34px sans-serif'; x.fillText('Ready… go!', W / 2, H / 2); }
    }
    const loop = now => { raf = requestAnimationFrame(loop); const dt = Math.min(.05, (now - (last || now)) / 1000); last = now; update(dt); draw(now); };
    const go = d => { if (state !== 'play') return; P.want = d; if (!P.dir) choosePlayer(P); else if (d === OPP[P.dir]) P.dir = d; };
    body.querySelectorAll('.af-ex-pad .af-btn').forEach(b => b.addEventListener('pointerdown', e => { e.preventDefault(); go(b.dataset.d); }));
    const key = e => { const d = {ArrowUp: 'up', ArrowDown: 'down', ArrowLeft: 'left', ArrowRight: 'right', w: 'up', s: 'down', a: 'left', d: 'right', W: 'up', S: 'down', A: 'left', D: 'right'}[e.key]; if (d) { e.preventDefault(); e.stopPropagation(); go(d); } };
    addEventListener('keydown', key, true);
    let sw = null; cv.addEventListener('pointerdown', e => { sw = [e.clientX, e.clientY]; });
    cv.addEventListener('pointerup', e => { if (!sw) return; const dx = e.clientX - sw[0], dy = e.clientY - sw[1]; sw = null; if (Math.max(Math.abs(dx), Math.abs(dy)) < 18) return; go(Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? 'right' : 'left') : (dy > 0 ? 'down' : 'up')); });
    reset(true); raf = requestAnimationFrame(loop);
    window.AFExploreDebug = {get P() { return P; }, get dots() { return dots; }, get finds() { return finds; }, get state() { return state; }, go, MAP};
    return () => { cancelAnimationFrame(raf); removeEventListener('keydown', key, true); clearTimeout(toastT); body.classList.remove('af-xg', 'af-ex'); };
  }

  function css() {
    if (document.getElementById('af-ch2b-css')) return;
    const st = document.createElement('style'); st.id = 'af-ch2b-css';
    st.textContent = `.af-g-body.af-xg{display:grid;justify-items:center;align-content:center;gap:10px}
.af-xg .af-mc{font-size:clamp(1.05rem,2.4vw,1.45rem);margin:0;text-align:center}.af-xg .af-hint{font-size:1.1rem;margin:0;text-align:center}
.af-vn{width:min(100%,calc((100vh - 260px)*1.6),1000px);aspect-ratio:8/5;border-radius:18px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,.4);touch-action:none}
.af-vn canvas{display:block;width:100%;height:100%;cursor:pointer;touch-action:none}
.af-xpw{display:flex;align-items:stretch;gap:14px;justify-content:center;width:100%}
.af-xpnl{position:relative;width:min(calc(100% - 70px),calc((100vh - 220px)*1.254),760px);aspect-ratio:612/488;border-radius:18px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,.4);touch-action:none;background:#111}
.af-xpnl img,.af-xpnl canvas{position:absolute;inset:0;width:100%;height:100%;display:block}.af-xpnl canvas{cursor:grab;touch-action:none}
.af-xwind{position:absolute;font-size:2.4rem;transform:translate(-50%,-50%) scaleX(-1);pointer-events:none;opacity:0;transition:opacity .3s}.af-xwind.on{opacity:1}
.af-xmeter{position:relative;width:46px;border-radius:23px;background:rgba(20,10,40,.55);border:3px solid #ffe08a;overflow:hidden}
.af-xmeter i{position:absolute;left:0;right:0;bottom:0;height:20%;background:linear-gradient(0deg,#ffb020,#ffe66d);transition:height .4s}
.af-xmeter span{position:absolute;left:0;right:0;top:6px;text-align:center;font-size:1.3rem}`;
    document.head.appendChild(st);
  }
})();
