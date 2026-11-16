# Astro Frontier: Abandoned, but Not Forgotten

**Team AstroFrontier · NASA Space Apps Challenge 2026 (Malaysia)**

An interactive storybook website about NASA explorers that were left behind in space. Shasha and her cat Miaw Miaw travel to meet them, hear their stories, and learn real NASA science along the way.

## Chapters

- **Chapter 1: The Moon.** Shasha and Miaw Miaw meet *Eagle*, the Apollo 11 Lunar Module descent stage, and the science packages (EASEP) left on the Moon.
- **Chapter 2: Mars.** They meet the twin rovers *Spirit* and *Opportunity*, from landing to their last messages home.

Every scene has narration and character voices, music, floating characters with speech bubbles, NASA data flash cards, and mini-games.

## How to use it

Tap **Explore the Story** to open **Your Space Journey**: a rocket flies from Earth to the Moon station (Chapter 1) and then to the Mars station (Chapter 2). Tap Miaw Miaw in the corner any time for help with the buttons.

## How to open it

Open `index.html` in a web browser (best through a local web server, so the 3D rover model can load). Keep all the files in this folder together:

- videos and pictures (`*.mp4`, `*.webp`, `*.jpg`)
- music (`*.mp3`)
- the recorded voices (`voice/`)
- the extra Chapter 2 scenes (`story-ch2b.js`)

## Files

| File | What it is |
|---|---|
| `index.html` | The whole website and story engine |
| `story-ch2b.js` | Chapter 2, Scenes 7–11 (Opportunity), with their NASA data cards and games |
| `mer-rover-glb.txt` / `mer-rover.glb` | The Mars Exploration Rover 3D model for the Meet the Probes section |
| `astrofrontier-emblem.svg` | The AstroFrontier emblem |
| `voice/` | Recorded narrator and character lines; `voice-lines.txt` lists what each file says |
| `story-addon-only.html` | The story add-on part of `index.html`, kept separately for reference |

## AI-generated content

The story pictures, videos and character art were made with AI tools, and the website says so on every scene and at the bottom of the home page. NASA photos and facts are real and credited.

## NASA data and images

NASA facts and images are from NASA / JPL-Caltech and their partners (Cornell, ASU, USGS). Credits are shown on each NASA data card.
