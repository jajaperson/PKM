---
tags:
  - public
---
[[Lie algebra automorphism]]
# Exponential of a derivation on a Lie algebra

Let $\mathfrak{g}$ be a [[Lie algebra]] over $\mathbb{K}$[^char], and $d : \mathfrak{g} \to \mathfrak{g}$ be a nilpotent[^nilp] [[Derivation on an algebra|derivation]].
Then the [[Exponential function|exponential]]
$$
\begin{align*}
\mathrm{e}^d = \sum_{i=0}^\infty \frac{d^i}{i!} = 1+ d + \frac{d^2}{2!} + \dots + \frac{d^k}{k!}
\end{align*}
$$
is a [[Lie algebra automorphism]].[^1972] #m/thm/lie 

> [!check]- Proof
> Since for any $x,y \in \mathfrak{g}$
> $$
> \begin{align*}
> \mathrm{e}^d(x) \mathrm{e}^d(y)
> &= \left( \sum_{i=0}^{n-1} \frac{d^ix}{i!} \right) \left( \sum_{j=0}^{n-1} \frac{d^jy}{j!} \right) 
> = \sum_{n=0}^{2k}\left( \sum_{i=0}^n \frac{d^ix}{i!} \frac{d^{n-i}y}{(n-i)!} \right) \\
> &= \sum_{n=0}^{2k} \frac{d^n(xy)}{n!} 
> = \sum_{n=0}^{k} \frac{d^n(xy)}{n!} \\
> &= \mathrm{e}^d(xy)
> \end{align*}
> $$
> it follows $\mathrm{e}^d$ is a [[Lie algebra homomorphism|homomorphism]], and an inverse is given by $\mathrm{e}^{-d}$. <span class="QED"/>


  [^char]: where $\opn{char} \mathbb{K} = 0$.
  [^nilp]: i.e. $d^k = 0$ for some $k \in \mathbb{N}$.
  [^1972]: 1972\. [[Sources/@humphreysIntroductionLieAlgebras1972|Introduction to Lie Algebras and Representation Theory]], §2.3, pp. 8–9

#
---
#state/tidy | #lang/en | #SemBr
