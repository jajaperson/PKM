---
tags:
  - public
---
[[Lie algebras MOC]]
# Tensor product of Lie algebra representations
Let $\pi_{i} : \mathfrak{g} \to \mathfrak{gl}(V_{i})$ be [[Lie algebra representation|representations]] of a [[Lie algebra]] $\mathfrak{g}$ for $i=1,2$.
The **tensor product** $\pi_{1} \otimes \pi_{2} : \mathfrak{g} \to \mathfrak{gl}(V_{1} \otimes V_{2})$ is a representation defined by
$$
\begin{align*}
(\pi_{1} \otimes \pi_{2})(x) = \pi_{1}(x) \otimes 1 + 1 \otimes \pi_{2}(x)
\end{align*}
$$

> [!check]- Proof of representation
> Clearly each summand defines a representation,
> furthermore these representations commute.
> Thus by [[Sum of commuting Lie algebra representations]] the above defines a representation. <span class="QED"/>

## Properties

- This is the [[infinitesimal representation]] of the corresponding [[Tensor product of group representations]].


#
---
#state/tidy | #lang/en | #SemBr
