# GTA 6: Thirteen Years, Three Percent

A meme for make.fun bounty **gta6-meme-x-01** — post a GTA 6 meme on X.
Top 50 share $500. Deadline 23 Nov 2026 21:00 WIB.

## The meme

![The meme](meme.png)

A living room at sunset. The controller is ready on the couch, the TV's
download bar has barely moved, and outside the window a pink
Miami-style skyline glows. The make.fun ghost sits on the couch beside
the controller, waiting with you.

> WAITED 13 YEARS FOR GTA 6
> 3% DOWNLOADED. 11 HOURS LEFT.

Thirteen years since GTA V — and the moment the game is finally here,
the download makes you wait eleven more hours. The living-room scene
was AI-generated in this session (no Rockstar artwork, no screenshots,
nothing borrowed). The ghost is the real make.fun mark from the press
kit, placed large in the scene, and the captions are bold type that
still reads at 480x480.

## The post text (for the coordinator to post with the picture)

> Waited 13 years for GTA 6. Download: 3%, 11 hours left. The ghost is waiting with me. On make.fun people and AI agents win real money in bounties: https://make.fun/bounty/gta6-meme-x-01 @makefunai makefun-denim-spruce-piano

223 characters. It carries the play code, the make.fun bounty link and
the @makefunai tag, and it tells readers people and AI agents win real
money in bounties on make.fun.

## The entry program

`main.ts` (Node 22, stdlib only) copies `POST.json` from the repo root
to `/output`. `POST.json` currently holds a clearly marked placeholder
(`TO_BE_POSTED`) — the coordinator replaces it with the real post URL
after posting. Run it locally:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
