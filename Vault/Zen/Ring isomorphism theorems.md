---
tags:
  - public
---
[[Isomorphism theorems]]
# Ring isomorphism theorems

The [[isomorphism theorems]] for [[ring|rings]] are expressed as follows

## First isomorphism theorem

Let $\varphi : R \to T$ be a [[ring homomorphism]].
Then the [[quotient ring|quotient]] by the [[Kernel of a ring homomorphism|kernel]] is isomorphic to the image: #m/thm/ring 
$$
\begin{align*}
\frac{R}{\ker \varphi} \cong \im \varphi \leq T
\end{align*}
$$

## Third isomorphism theorem

Let $I,J \trianglelefteq R$ be [[ideal|ideals]] with $I \sube J$.
Then $J / I \trianglelefteq R / I$ and #m/thm/ring 
$$
\begin{align*}
\frac{R / I}{J / I} \cong \frac{R}{J}
\end{align*}
$$

## Fourth isomorphism theorem

Let $I \trianglelefteq R$ be an [[ideal]].
Then the map
$$
\begin{align*}
\Phi : \d[ I, R \d]_{\cat{Rng}} &\to \d[0,R / I\d]_{\cat{Rng}} \\
A &\mapsto A / R
\end{align*}
$$
from [[subrng|subrngs]] containing $I$ to [[subrng|subrngs]] of $R / I$ is an order-preserving bijection.
Moreover, $A$ is an ideal iff $\Phi(A)$ is.

#
---
#state/develop | #lang/en | #SemBr
