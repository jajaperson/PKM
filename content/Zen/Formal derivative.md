---
tags:
  - public
---
[[Formal calculus MOC]]
# Formal derivative

Let $V$ be a [[vector space]] (or, in particular, a [[field]]) 
and $V \{ z \}$ denote [[Formal sums over a vector space|formal sums]] over $V$.
The **formal derivative** #m/def/fcalc
$$
\begin{align*}
\frac{d}{dz} : V \{ z \} \to V \{ z \}
\end{align*}
$$
is defined by extending the rules
$$
\begin{align*}
\frac{d}{dz}(z^n) = \begin{cases}
0 & n = 0 \\
nz^{n-1} & n\neq 0
\end{cases}
\end{align*}
$$
by linearity.
The formal derivative therefore constitutes a [[Derivation on an algebra|derivation]] on the [[algebra of Laurent polynomials]] $\mathbb{K}[z,z^{-1}]$.

## See also

- [[Degree operator on formal sums over a vector space]]

#
---
#state/develop | #lang/en | #SemBr
