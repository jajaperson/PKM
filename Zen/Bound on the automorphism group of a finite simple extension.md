---
tags:
  - public
---
[[Simple extension]]
# Bound on the automorphism group of a finite simple or separable extension

Suppose $L:K$ is a [[finite field extension]] which is [[Simple extension|simple]] (or [[Separable extension|separable]], which amounts to the same thing).
Then $\abs{\Aut(L:K)}$ is the number of distinct roots of the [[Algebraic element|minimal polynomial]] $m_{\vartheta}(x) \in K[x]$, #m/thm/field
in particular
$$
\begin{align*}
\abs{\Aut(L:K)} \leq [L:K]
\end{align*}
$$
with equality iff $L:K$ is [[Separable extension|separable]] and [[Normal extension|normal]], i.e. [[Galois extension|Galois]].[^2009]

> [!check]- Proof
> First consider the case $L=K(\alpha)$ is simple.
> Note that $\sigma \in \Aut(L:K)$ is completely specified by $\sigma(\alpha)$,
> and
> $$
> \begin{align*}
> p\sigma(\alpha) = \sigma p(\alpha) = \sigma(0) = 0
> \end{align*}
> $$
> thus this choice of $\sigma(\alpha)$ is from the roots of $m_{\alpha}(x)$.
> At the same time, by [[Simple extension#^P1]] each root indeed yields an automorphism. 
> 
> The case $L: K$ is separable follows from the [[primitive element theorem]].
> <span class="QED"/>

As a corollary, automorphisms act [[Effective group action|faithfully]] and [[Transitive group action|transitively]] on the roots of $m_{\vartheta}(x)$.

  [^2009]: 2009\. [[Sources/@aluffiAlgebraChapter02009|Algebra: Chapter 0]], §VII.1.2, p. 390

#
---
#state/tidy | #lang/en | #SemBr
