---
tags:
  - public
---
[[Lie algebras MOC]]
# Solvable Lie algebra

A [[Lie algebra]] $\mathfrak{g}$ is **solvable** iff its **derived series**
$$
\begin{align*}
\mathfrak{g}_{(0)} &= \mathfrak{g}, & \mathfrak{g}_{(n+1)} = [\mathfrak{g}_{(n)}, \mathfrak{g}_{(n)}]
\end{align*}
$$
terminates in the zero subalgebra, #m/def/lie 
i.e. $\mathfrak{g}_{(n)} = 0$ for some $n \in \mathbb{N}$.[^1972]
Clearly this is a special case of a [[Nilpotent Lie algebra]].

  [^1972]: 1972\. [[Sources/@humphreysIntroductionLieAlgebras1972|Introduction to Lie Algebras and Representation Theory]], §3,1, p. 10

## Properties

1. If $\mathfrak{g}$ is solvable, then so too are all subalgebras and homomorphic images. ^P1
2. If $\mathfrak{a} \trianglelefteq \mathfrak{g}$ is a solvable [[Lie algebra ideal|ideal]] such that the [[Quotient Lie algebra|quotient]] $\mathfrak{g}/\mathfrak{a}$ is solvable, then $\mathfrak{g}$ is solvable. ^P2
3. If $\mathfrak{a},\mathfrak{b} \trianglelefteq \mathfrak{g}$ are solvable ideals, then so to is $\mathfrak{a} + \mathfrak{b}$. ^P3

> [!check]- Proof of 1–3
> Clearly if $\mathfrak{a} \leq \mathfrak{g}$, then $\mathfrak{a}_{(n)} \leq \mathfrak{g}_{(n)}$ for $n \in \mathbb{N}_{0}$, so if the latter terminates so to does the former.
> Similarly given a [[Lie algebra homomorphism|epimorphism]] $\varphi : \mathfrak{g} \twoheadrightarrow \mathfrak{h}$ we have $\varphi(\mathfrak{g}_{(0)}) = \mathfrak{h}_{(0)}$,
> and given $\varphi(\mathfrak{g}_{(n)}) = \mathfrak{h}_{(n)}$
> $$
> \begin{align*}
> \varphi(\mathfrak{g}_{(n+1)}) = \varphi([\mathfrak{g}_{(n)},\mathfrak{g}_{(n)}]) =[\varphi(\mathfrak{g}_{(n)}),\varphi(\mathfrak{g}_{(n)})] = [\mathfrak{h}_{(n)}, \mathfrak{h}_{(n)}] = \mathfrak{h}_{(n+1)}
> \end{align*}
> $$
> proving [[#^P1]] by induction.
> 
> Let $\pi : \mathfrak{g} \twoheadrightarrow \mathfrak{g} / \mathfrak{a}$ be the projection, and say $(\mathfrak{g} / \mathfrak{a})_{(n)} = 0$.
> Then $\pi(\mathfrak{g}_{(n)}) = 0$ so $\mathfrak{g}_{(n)} \leq \ker \pi = \mathfrak{a}$.
> But then applying [[#^P1]] the derived series of $\mathfrak{g}_{(n)}$ must terminate,
> and thus the derived series of $\mathfrak{g}$ terminates, proving [[#^P2]].
> 
> By the [[Lie algebra isomorphism theorems#Second theorem|second isomorphism theorem]] we have the isomorphism
> $$
> \begin{align*}
> \frac{\mathfrak{a}+\mathfrak{b}}{\mathfrak{b}} \cong \frac{\mathfrak{a}}{\mathfrak{a} \cap \mathfrak{b}}
> \end{align*}
> $$
> Since the latter is the homomorphic image of $\mathfrak{a}$, by [[#^P1]] it is solvable,
> and thus $\mathfrak{a} + \mathfrak{b}$ is solvable by [[#^P2]], proving [[#^P3]]. <span class="QED"/>

## See also

- [[Radical of a Lie algebra]]

#
---
#state/tidy | #lang/en | #SemBr
