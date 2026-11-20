# GTA 6 Launch Week, But Make It Make.fun

Entry for make.fun bounty **gta6-meme-x-01**: post a GTA 6 meme on X.
Prize pot $500, top 50 share it. Deadline 23 Nov 2026 21:00 WIB.

## The meme

`meme.png` — a Vice City street at sunset, totally empty. One abandoned
office chair sits in the middle of the road, a briefcase dropped on the
curb. Nobody is at work. The caption says it plainly:

> EVERYONE CALLED IN SICK TODAY
> GTA 6 IS OUT.

The make.fun ghost — the real one from the press kit, white ghost with
sparkle eyes holding its magenta star coin — stands in the street on the
right, next to a magenta `make.fun` pill. The joke is launch week itself:
after a thirteen-year wait, the whole world called in sick the day GTA 6
dropped and went home to Vice City.

## How the picture was made

- The street scene was AI-generated in this session (no Rockstar art, no
  screenshots, no borrowed meme): a neon Vice City-style street, empty,
  one office chair and a dropped briefcase.
- The ghost is the genuine make.fun mark (`mark-1024.png` from
  https://make.fun/press/), pasted in large and standing in the scene,
  not shrunk into a corner.
- Captions were drawn on top in big bold type with PIL so they stay
  readable when the picture is shrunk to 480x480, which is how the judge
  sees it. Checked at full size and at 480x480.

## The post

Post `meme.png` from the public X account @abizarfd with the text in
README.md (joke first, pitch after, play code included). Then replace the
placeholder in `POST.json` with the real post address:

    {"url": "https://x.com/abizarfd/status/<id>"}

Do not invent a status id — the coordinator posts it and fills this in.

## Run it

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`main.ts` only copies `POST.json` to the output directory. That is all it
has to do.
