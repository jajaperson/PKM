---
tags:
  - public
---
[[Set theory MOC]]
# Subset

Let $A,B$ be [[Set|sets]].
A **subset** $A \sube B$ is a set whose elements are all elements of $B$, #m/def/set
i.e.
$$
A \sube B \stackrel{\text{def}}\iff (\forall x)[x \in A \implies x \in B]
$$
A  **proper subset** is is a subset that is not equal to its superset, i.e.
$$
A \subsetneq B \stackrel{\text{def}}\iff [A \sube B \land A \neq B]
$$

## Universal property

Adopting a [[Structuralism|structuralist]] perspective,
let $p : B \to \Omega$ denote the membership predicate so that $p(a) = \top T \iff a \in A$.
A subset $A$ along with its natural inclusion $\iota : {A} \hookrightarrow B$ is characterized up to unique bijection by the following universal property:

$p\iota = \top T$. If $C$ is a set and $f : C \to B$ is a function such that $pf=\top T$, then there exists a unique function $\bar f : C \to {A}$ such that $\iota \bar f = f$, i.e.
<p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%5Cusetikzlibrary%7Bcalc%7D%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%25%20TikZ%20arrowhead%2Ftail%20styles.%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%25%20TikZ%20arrow%20styles.%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsMyxbMCwwLCJDIl0sWzIsMiwiQiJdLFsyLDAsIkEiXSxbMCwyLCJcXGJhciBmIiwwLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV0sWzIsMSwiXFxpb3RhIl0sWzAsMSwiZiIsMl1d%0A%5Cbegin%7Btikzcd%7D%5Bampersand%20replacement%3D%5C%26%5D%0A%09C%20%5C%26%5C%26%20A%20%5C%5C%0A%09%5C%5C%0A%09%5C%26%5C%26%20B%0A%09%5Carrow%5B%22%7B%5Cbar%20f%7D%22%2C%20dashed%2C%20from%3D1-1%2C%20to%3D1-3%5D%0A%09%5Carrow%5B%22f%22'%2C%20from%3D1-1%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22%5Ciota%22%2C%20from%3D1-3%2C%20to%3D3-3%5D%0A%5Cend%7Btikzcd%7D%0A#invert" alt="https://q.uiver.app/#q=WzAsMyxbMCwwLCJDIl0sWzIsMiwiQiJdLFsyLDAsIkEiXSxbMCwyLCJcXGJhciBmIiwwLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV0sWzIsMSwiXFxpb3RhIl0sWzAsMSwiZiIsMl1d" /></p>

> [!check]- Proof
> Clearly $p \iota = \top$ by construction.
> If $pf = \top$, then $\im f \sube A$ so we can take $\bar f(c) = f(c)$.
> <span class="QED"/>

This may be rephrased as a [[Fibre product and coproduct|fibre product]] for a more general [[Subobject]] via a [[Subobject classifier]],
generalizing this construction to an arbitrary [[Elementary topos]]
as well as some other categories.

#
---
#state/tidy | #lang/en | #SemBr 