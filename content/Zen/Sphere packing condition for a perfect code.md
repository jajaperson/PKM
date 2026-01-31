---
tags:
  - public
---
[[Perfect code]]
# Sphere packing condition for a perfect code

$\mathcal{C} \sube S_{q}^n$ is a [[Perfect code|perfect $e$-error correcting code]], iff the [[Hamming distance|Hamming balls]] $\opn B_{e}(C) \cap \opn B_{r}(D) = \0$ for any two codewords $C \neq D$ and  #m/thm/code
$$
\begin{align*}
\abs{\mathcal{C}} \sum_{i=0}^e {n \choose i}(q-1)^i = q^n
\end{align*}
$$

> [!check]- Proof
> Given a codeword $c \in \mathcal{C}$, the number of strings with [[Hamming distance]] $i$ is given by
> $$
> \begin{align*}
> \abs{\{ x \in S_{q}^n : d(x,c) = i \}} = {n \choose i} (q-1)^i
> \end{align*}
> $$
> since there are $n \choose i$ combinations of positions different from $c$, and each differing position may be one of $q-1$ letters.
> Hence, for a code to be perfect,
> the closed balls of radius $e$ must partition $S_{q}^n$, giving the expression above. <span class="QED"/>

The latter part can be interpreted as

> The first $e+1$ terms of a row in [[Pascal's triangle]] sum to a power of $q$.

#
---
#state/tidy | #lang/en | #SemBr
