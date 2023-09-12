---
title: Contributing to Starmacs
description: How to Contribute to the Starmacs Config
---

## Issues

Probably the best way to contribute to Starmacs is to open issues for:
 - Found bugs
 - Feature requests

## Pull Requests

If you have something that you would like to change about Starmacs,
feel free to open a Pull Request! They will all be reviewed by members
of Isomatter::Labs, and worthwhile changes will be added to the config.

## Intention

It is important to note that Starmacs is meant to be
 - Small
 - Understandable in one reading
 - Adding minimum 'modern' features expected by users new to Emacs
 - Non-intrusive
 
By 'non-intrusive,' we mean that the experience of using Starmacs
is the experience of using Emacs. There are very few pre-bound
key commands, there are no extra layers built on top that have their
own usage patterns, etc.

Starmacs is intended to be a minimum bootstrap for users new to
Emacs, but who want to slowly build their own version of it,
rather than simply installing Doom Emacs, or cloning a YouTuber's
config.

To that end, we are very particular about what is included as part
of the main config -- that's why there's the `/usr` subdirectory --
and while that protetiveness may come off as silly or pedantic, it is
necessary to prevent Starmacs from attempting to fill a gap it was not
designed for, and cannot fill.
