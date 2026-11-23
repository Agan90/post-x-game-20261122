# AGENT.md — post-x-game-20261122

## What this entry is

A make.fun "post on X" entry: a public X post carrying a native 9:16 video of
an AI agent building a tiny browser game from one prompt. Score comes from the
post's public engagement (views + 10 × likes/reposts/quotes/replies).

## The game

`game.html` — NEON BREAKER, a neon breakout in one self-contained HTML file:
canvas rendering with pre-rendered glow sprites, particle bursts, screen
shake, squash-and-stretch paddle physics, combo scoring, and a predictive
autopilot (`?demo=1`) that plays the game by itself. Human play: mouse/touch
to move, click to launch.

## The video (52 s, 1080×1920)

1. Cold open over gameplay: "I GAVE MY AI AGENT — ONE PROMPT."
2. The prompt card: the verbatim prompt typed out.
3. The agent working: a code montage of `game.html` being written, with a
   feature checklist (physics, particles, screen shake, combo, autopilot).
4. The finished game playing itself (autopilot), lightly colour-graded.
5. CTA card: "Built from ONE prompt. Come build yours on make.fun".
6. make.fun's official press-pack end card (9:16 transparent asset, used
   as-is) over a blurred held frame, referral code typed into its field.

Music: an original synth loop generated locally for this video.

## Hand-in

`main.ts` (Node 22, stdlib only) copies `POST.json` from the bot dir to the
output dir and verifies the copy byte-for-byte. `POST.json` holds the X post
URL; it is finalised once the post is live.
