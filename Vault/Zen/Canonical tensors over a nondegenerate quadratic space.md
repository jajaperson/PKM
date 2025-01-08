---
tags:
  - public
---
[[Quadratic space]]
# Canonical tensors over a nondegenerate quadratic space

Let $(V, \langle \cdot,\cdot  \rangle)$ be a [[Bilinear form#^nondegenerate]] finite-dimensional [[quadratic space]] over $\mathbb{K}$.
Consider a [[vector basis|basis]] $\{ v_{i} \}_{i=1}^n$,
and let $\{ v_{i}' \}_{i=1}^n$ be the corresponding [[dual basis]].
Then the element
$$
\begin{align*}
\omega_{0}= \sum_{i=1}^n v_{i}' \otimes v_{i} \in T^2V
\end{align*}
$$
is independent of the choice of $\{ v_{i} \}_{i=1}^n$, #m/thm/linalg  and so is its symmetrization
$$
\begin{align*}
\omega_{1} = \sum_{i=1}^n v_{i}'v_{i} \in S^2 V
\end{align*}
$$

> [!info]+ Alternate representation
> Let $i : V^* \to V$ be the linear isomorphism induced by $\langle \cdot,\cdot \rangle$
> and $j : \End_{\mathbb{K}} V \to V^* \otimes V$ be the canonical isomorphism.
> Then
> $$
> \begin{align*}
> \omega_{0} = ((i \otimes 1) \circ j)(\id_{V})
> \end{align*}
> $$

#
---
#state/tidy | #lang/en | #SemBr
