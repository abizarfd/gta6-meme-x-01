# GTA 6: Thirteen Years, Three Percent

Entry for the make.fun bounty **gta6-meme-x-01**: post a GTA 6 meme on X.
Prize pot $500, top 50 share it. Deadline 23 Nov 2026 21:00 WIB.

## The meme

`meme.png` — a living room at sunset, seen from behind the couch. A
controller waits on the cushion, the TV shows a download bar that has
barely started, and through the window a pink Miami-style skyline glows.
The make.fun ghost sits on the couch next to the controller, holding its
magenta star coin, waiting along with you. The captions say:

> WAITED 13 YEARS FOR GTA 6
> 3% DOWNLOADED. 11 HOURS LEFT.

The joke is the second wait: thirteen years since GTA V, and the moment
the game finally arrives, the download itself makes you wait eleven more
hours. The ghost is not a sticker in the corner — it is sitting on the
couch, in the scene, waiting too. A magenta `make.fun` pill sits under
the caption.

## Why this one

The first version of this entry ("everyone called in sick") scored a
56.35% dev win rate — a stock joke, and the ghost read as a badge pasted
on top. This version replaces it with a joke built from two things the
judge lists as specifically GTA 6: the thirteen-year wait and the
download. Three variants were built and judged against each other
pairwise (download wait / "just one more mission" at dawn / "Welcome to
Leonida, Florida with a save button"); the download won on
GTA-6-specificity, the criterion that outranks the others once make.fun
is in the picture.

## How the picture was made

- The living-room scene was AI-generated in this session: no Rockstar
  artwork, no game screenshots, no borrowed meme.
- The ghost is the genuine make.fun mark (`mark-1024.png` from
  https://make.fun/press/), placed large on the couch with a soft shadow
  so it sits in the room instead of floating over it.
- Captions were drawn on top in bold type with PIL and fitted so each
  line stays on one line — checked at full size and at 480x480, the size
  the judge sees, where the text and the ghost are still easy to read.
- Revision after the first build: the captions first wrapped onto extra
  lines and the `make.fun` pill was cut off at the bottom edge, and one
  early variant put the ghost over a person's face. All three were fixed
  — single-line captions, a taller bottom bar, and the ghost moved to a
  clear spot — then the final image was looked at again at both sizes.

## The post

Post `meme.png` from the public X account @abizarfd with the text in
README.md (joke first, pitch after, play code included). Then replace
the placeholder in `POST.json` with the real post address:

    {"url": "https://x.com/abizarfd/status/<id>"}

Do not invent a status id — the coordinator posts it and fills this in.

## Run it

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`main.ts` only copies `POST.json` to the output directory. That is all
it has to do.
