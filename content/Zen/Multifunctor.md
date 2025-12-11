---
aliases:
  - bifunctor
tags:
  - public
---
[[Functor]]
# Multifunctor

A **multifunctor** $F : \prod_{\alpha \in A} \cat C_{\alpha} \to \cat D$ is a [[functor]] from the [[product category]] $\prod_{\alpha \in A} \cat C_{\alpha}$. #m/def/cat
This is stronger to a mapping on objects and morphisms which is functorial in each argument when all other arguments are held constant,
viewing [[objects as identities]].

> [!tip]+ Counterexample
> Let $G,H$ be [[Groups as categories|groups-as-categories]].
> Then $G \times H$ is the [[direct product of groups]],
> and a bifunctor $F : G \times H \to \cat C$ is a [[group action]] of $G \times H$ on an object of $\cat C$.
> Functoriality in both arguments, on the other hand, makes $F$ a group action of the [[free product of groups]] on an object of $\cat C$. <span class="QED"/>

In fact, if $F : \cat C \times \cat D \to \cat E$ is a mapping functorial in each argument, namely $F(C,-)$ and $F(-,D)$ are functors for any $C \in \Ob \cat C$ and $D \in \cat D$,
then $F$ is a bifunctor iff the following diagram commutes for any $c \in \cat C(C,C')$ and $d \in \cat D(D,D')$:

<p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%5Cusetikzlibrary%7Bcalc%7D%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%25%20TikZ%20arrowhead%2Ftail%20styles.%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%25%20TikZ%20arrow%20styles.%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsOCxbMiwyLCJGKEMsRCkiXSxbMiw0LCJGKEMsRCcpIl0sWzQsMiwiRihDJyxEKSJdLFs0LDQsIkYoQycsRCcpIl0sWzIsMCwiQyJdLFs0LDAsIkMnIl0sWzAsMiwiRCJdLFswLDQsIkQnIl0sWzAsMiwiRihjJyxEKSJdLFswLDEsIkYoQyxkKSIsMl0sWzEsMywiRihjLEQnKSIsMl0sWzIsMywiRihDJyxkKSJdLFs0LDUsImMiXSxbNiw3LCJkIiwyXSxbMCwzLCJGKGMsZCkiLDEseyJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJkYXNoZWQifX19XV0%3D%0A%5C%5B%5Cbegin%7Btikzcd%7D%0A%09%26%26%20C%20%26%26%20%7BC'%7D%20%5C%5C%0A%09%5C%5C%0A%09D%20%26%26%20%7BF(C%2CD)%7D%20%26%26%20%7BF(C'%2CD)%7D%20%5C%5C%0A%09%5C%5C%0A%09%7BD'%7D%20%26%26%20%7BF(C%2CD')%7D%20%26%26%20%7BF(C'%2CD')%7D%0A%09%5Carrow%5B%22c%22%2C%20from%3D1-3%2C%20to%3D1-5%5D%0A%09%5Carrow%5B%22d%22'%2C%20from%3D3-1%2C%20to%3D5-1%5D%0A%09%5Carrow%5B%22%7BF(c'%2CD)%7D%22%2C%20from%3D3-3%2C%20to%3D3-5%5D%0A%09%5Carrow%5B%22%7BF(C%2Cd)%7D%22'%2C%20from%3D3-3%2C%20to%3D5-3%5D%0A%09%5Carrow%5B%22%7BF(c%2Cd)%7D%22%7Bdescription%7D%2C%20dashed%2C%20from%3D3-3%2C%20to%3D5-5%5D%0A%09%5Carrow%5B%22%7BF(C'%2Cd)%7D%22%2C%20from%3D3-5%2C%20to%3D5-5%5D%0A%09%5Carrow%5B%22%7BF(c%2CD')%7D%22'%2C%20from%3D5-3%2C%20to%3D5-5%5D%0A%5Cend%7Btikzcd%7D%5C%5D%0A#invert" alt="https://q.uiver.app/#q=WzAsOCxbMiwyLCJGKEMsRCkiXSxbMiw0LCJGKEMsRCcpIl0sWzQsMiwiRihDJyxEKSJdLFs0LDQsIkYoQycsRCcpIl0sWzIsMCwiQyJdLFs0LDAsIkMnIl0sWzAsMiwiRCJdLFswLDQsIkQnIl0sWzAsMiwiRihjJyxEKSJdLFswLDEsIkYoQyxkKSIsMl0sWzEsMywiRihjLEQnKSIsMl0sWzIsMywiRihDJyxkKSJdLFs0LDUsImMiXSxbNiw3LCJkIiwyXSxbMCwzLCJGKGMsZCkiLDEseyJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJkYXNoZWQifX19XV0=" /></p>

This essentially says the two parts of a bifunctor _commute_.

#
---
#state/tidy | #lang/en | #SemBr
