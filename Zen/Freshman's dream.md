---
tags:
  - public
---
[[Ring theory MOC]]
# Freshman's dream

The **Freshman's dream**
$$
\begin{align*}
(x+y)^q = x^q + y^q
\end{align*}
$$
does not holds in $\mathbb{Z}$, but is true of $q = p^h$ in any [[commutative ring]] of prime [[characteristic]] $p$, #m/thm/ring
since applying the [[binomial expansion]]
$$
\begin{align*}
(x+y)^q = \sum_{k=0}^q {q \choose k} x^k y^{n-k}
\end{align*}
$$
and $p \mid {q\choose k}$ for $0 < k < n$.
Alternatively, one can do induction on the case where $q=p$ is a prime.

#
---
#state/tidy | #lang/en | #SemBr
