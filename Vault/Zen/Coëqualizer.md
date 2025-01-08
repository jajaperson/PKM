---
tags:
  - public
---
[[Limits and colimits]]
# Coëqualizer

The **coëqualizer** $(Q, q)$ of a collection of morphisms $M \sube \cat C(Y,X)$ is the [[Limits and colimits|colimit]] of the diagram containing these morphisms. #m/def/cat 
Thus $fq = gq$,
and given any other morphism $h : X \to Z$ there exists a unique $\bar h : Q \to Z$  such that the following diagram commutes, except for $f = g$:

<p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%5Cusetikzlibrary%7Bcalc%7D%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%25%20TikZ%20arrowhead%2Ftail%20styles.%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%25%20TikZ%20arrow%20styles.%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsNCxbNCwyLCJaIl0sWzQsMCwiUSJdLFsyLDAsIlgiXSxbMCwwLCJZIl0sWzMsMiwiZiIsMCx7Im9mZnNldCI6LTF9XSxbMywyLCJnIiwyLHsib2Zmc2V0IjoxfV0sWzIsMCwiaCIsMl0sWzEsMCwiXFxiYXIgaCIsMCx7InN0eWxlIjp7ImJvZHkiOnsibmFtZSI6ImRhc2hlZCJ9fX1dLFsyLDEsInEiXV0%3D%0A%5Cbegin%7Btikzcd%7D%5Bampersand%20replacement%3D%5C%26%5D%0A%09Y%20%5C%26%5C%26%20X%20%5C%26%5C%26%20Q%20%5C%5C%0A%09%5C%5C%0A%09%5C%26%5C%26%5C%26%5C%26%20Z%0A%09%5Carrow%5B%22f%22%2C%20shift%20left%2C%20from%3D1-1%2C%20to%3D1-3%5D%0A%09%5Carrow%5B%22g%22'%2C%20shift%20right%2C%20from%3D1-1%2C%20to%3D1-3%5D%0A%09%5Carrow%5B%22q%22%2C%20from%3D1-3%2C%20to%3D1-5%5D%0A%09%5Carrow%5B%22h%22'%2C%20from%3D1-3%2C%20to%3D3-5%5D%0A%09%5Carrow%5B%22%7B%5Cbar%20h%7D%22%2C%20dashed%2C%20from%3D1-5%2C%20to%3D3-5%5D%0A%5Cend%7Btikzcd%7D%0A#invert" alt="https://q.uiver.app/#q=WzAsNCxbNCwyLCJaIl0sWzQsMCwiUSJdLFsyLDAsIlgiXSxbMCwwLCJZIl0sWzMsMiwiZiIsMCx7Im9mZnNldCI6LTF9XSxbMywyLCJnIiwyLHsib2Zmc2V0IjoxfV0sWzIsMCwiaCIsMl0sWzEsMCwiXFxiYXIgaCIsMCx7InN0eWxlIjp7ImJvZHkiOnsibmFtZSI6ImRhc2hlZCJ9fX1dLFsyLDEsInEiXV0=" /></p>


Note that in case $M = \0$ we take the diagram consisting of only $X$.
Thus the coëqualizer is the “most general” [[quotient object]] onto which the morphisms concur.
See [[Equalizer]] for the dual motion.

## Properties

1. The equalizer $q$ is always a [[Regular epimorphism]].

#
---
#state/develop | #lang/tidy | #SemBr
