---
tags:
  - public
---
[[Simple extension]]
# Bound on the automorphism group of a finite simple extension

Suppose $L = K(\vartheta) : K$ is a finite [[simple extension]].
Then $\abs{\Aut(L:K)}$ is the number of distinct roots of the [[Algebraic element|minimal polynomial]] $m_{\vartheta}(x) \in K[x]$, #m/thm/field
in particular
$$
\begin{align*}
\abs{\Aut(L:K)} \leq [L:K]
\end{align*}
$$
with equality iff $L:K$ is [[Separable extension|separable]] and [[Normal extension|normal]], i.e. [[Galois extension|Galois]].

> [!check]- Proof
> Note that $\sigma \in \Aut(L:K)$ is completely specified by $\sigma(\alpha)$,
> and
> $$
> \begin{align*}
> p\sigma(\alpha) = \sigma p(\alpha) = \sigma(0) = 0
> \end{align*}
> $$
> thus this choice of $\sigma(\alpha)$ is from the roots of $m_{\vartheta}(x)$.
> At the same time, by [[Simple extension#^P1]] each root indeed yields an automorphism. <span class="QED"/>

As a corollary, automorphisms act [[Effective group action|faithfully]] and [[Transitive group action|transitively]] on the roots of $m_{\vartheta}(x)$.

#
---
#state/tidy | #lang/en | #SemBr
