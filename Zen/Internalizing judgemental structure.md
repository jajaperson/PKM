---
date: 2026-06-03
tags:
  - public
---
[[Type theory]]
# Internalizing judgemental structure

A well-justified connective (i.e. way of introducing types and their terms) abides the following:

> [!quote] Slogan 2.5.4
> 
> A connective in type theory is given by (1) a natural type-forming operation $\Upsilon$ and (2) one of the following:
> 
> 1. a natural isomorphism relating $\opn{Tm}(\Gamma, \Upsilon)$ to judgementally-determined structure, or
> 2. a collection of natural term constructors for $\Upsilon$ which, for all dependent types $\Gamma . \Upsilon \vdash A$,
>     determine a natural isomorphism relating $\opn{Tm}(\Gamma . \Upsilon , A)$ to judgementally-determined structure.[^2026]

The first camp accounts for the most well-behaved connectives, the latter for [[inductive type|inductive types]].


[^2026]: 2026\. [[Sources/@angiuliPrinciplesDependentType2025|Principles of dependent type theory]], p. 52. Terminology and notation adapted to that used in these notes.

#
---
#state/develop | #lang/en | #SemBr
