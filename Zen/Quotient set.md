---
tags:
  - public
---
[[Naïve set theory MOC]]
# Quotient set

Let $\sim$ be an [[equivalence relation]] on $A$,
and for each $a \in A$ let $[a]$ denote its [[Equivalence relation#Equivalence class|equivalence class]].
Then the **quotient set** $A / {\sim}$ is the set of all such equivalence classes #m/def/set/naïve
$$
\begin{align*}
A/{\sim} = \{ [a] : a \in A \}
\end{align*}
$$
with the natural projection
$$
\begin{align*}
\pi : A &\twoheadrightarrow A / {\sim} \\
a &\mapsto [a]
\end{align*}
$$
## Universal property

The quotient set with canonical projection $(A / {\sim}, \pi)$ is characterized up to unique isomorphism by the universal property:

$a \sim b \implies \pi(a) = \pi(b)$.
If $B$ is a set a set and $f : A \to B$ is a function with $a \sim b \implies f(a) = f(b)$,
then there exists a unique function $\bar f : A / {\sim} \to B$ so that $f = \bar f \pi$, i.e.

<p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%5Cusetikzlibrary%7Bcalc%7D%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%25%20TikZ%20arrowhead%2Ftail%20styles.%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%25%20TikZ%20arrow%20styles.%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsMyxbMCwwLCJBIl0sWzIsMiwiQiJdLFsyLDAsIkEve1xcc2ltfSJdLFswLDIsIlxccGkiLDAseyJzdHlsZSI6eyJoZWFkIjp7Im5hbWUiOiJlcGkifX19XSxbMiwxLCJcXGJhciBmIiwwLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV0sWzAsMSwiZiIsMl1d%0A%5Cbegin%7Btikzcd%7D%5Bampersand%20replacement%3D%5C%26%5D%0A%09A%20%5C%26%5C%26%20%7BA%2F%7B%5Csim%7D%7D%20%5C%5C%0A%09%5C%5C%0A%09%5C%26%5C%26%20B%0A%09%5Carrow%5B%22%5Cpi%22%2C%20two%20heads%2C%20from%3D1-1%2C%20to%3D1-3%5D%0A%09%5Carrow%5B%22f%22'%2C%20from%3D1-1%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22%7B%5Cbar%20f%7D%22%2C%20dashed%2C%20from%3D1-3%2C%20to%3D3-3%5D%0A%5Cend%7Btikzcd%7D%0A#invert" alt="https://q.uiver.app/#q=WzAsMyxbMCwwLCJBIl0sWzIsMiwiQiJdLFsyLDAsIkEve1xcc2ltfSJdLFswLDIsIlxccGkiLDAseyJzdHlsZSI6eyJoZWFkIjp7Im5hbWUiOiJlcGkifX19XSxbMiwxLCJcXGJhciBmIiwwLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV0sWzAsMSwiZiIsMl1d" /></p>

> [!missing]- Proof
> This is fairly trivial to prove.

This notion is treated more generally by the [[Quotient object]].

#
---
#state/tidy | #lang/en | #SemBr 