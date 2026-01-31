---
tags:
  - public
---
[[Tensor product of algebras]]
# Tensor product of a Lie algebra and a commutative algebra

Let $\mathfrak{g}$ be a [[Lie algebra]] and $A$ be a commutative [[K-algebra|algebra]], both over $\mathbb{K}$.
Then their [[Tensor product of algebras|tensor product algebra]] $\mathfrak{g} \otimes_{\mathbb{K}} A$ is also a Lie algebra. #m/thm/lie

> [!check]- Proof
> That the product on $\mathfrak{g} \otimes_{\mathbb{K}} A$ is alternating follows immediately.
> For the [[Lie algebra#^Jacobi]] note
> $$
> \begin{align*}
> [x \otimes a, [y \otimes b, z \otimes c]] + [y \otimes b, [z \otimes c, x \otimes a]] + [z \otimes c, [x \otimes a, y \otimes b]] \\
> = [x, [y,z]]abc + [y, [z,x]] bca + [z, [x,y]]cab \\
> = ([x,[y,z]] + [y, [z,x]] + [z,[x,y]]) abc \\
> = 0
> \end{align*}
> $$
> as required.
> <span class="QED"/>

Note that if $A$ is [[K-monoid|unital]], then we have the injective [[Lie algebra homomorphism]]
$$
\begin{align*}
\iota : \mathfrak{g} &\hookrightarrow \mathfrak{g} \otimes_{\mathbb{K}} A \\
x &\mapsto x \otimes 1
\end{align*}
$$

## Functoriality

This construction forms a functor $\cat{Lie}_{\mathbb{K}} \times \cat{CAlg}_{\mathbb{K}} \to \cat{Lie}_{\mathbb{K}}$.

#
---
#state/tidy | #lang/en | #SemBr
