---
mathLink: $\mathcal{K}$-tensor product of linear maps
tags:
  - public
---
[[Tensor product of modules over a commutative ring]]
# Tensor product of $\mathcal{K}$-linear maps

Suppose $f : V_{1} \to V_{2}$ and $g : W_{1} \to W_{2}$ are $\mathcal{K}$-linear maps.
Then there is a unique $\mathcal{K}$-linear map $f \otimes g : V_{1} \otimes W_{1} \to V_{2} \otimes W_{2}$, 
called the <dfn>tensor product</dfn> of the maps $f$ and $g$, 
such that

![[tensor-product-of-maps.svg#invert|c|https://q.uiver.app/#q=WzAsNCxbMiwwLCJWXzEgXFxvdGltZXMgV18xIl0sWzIsMiwiVl8yIFxcb3RpbWVzIFdfMiJdLFswLDIsIlZfMiBcXHRpbWVzIFdfMiJdLFswLDAsIlZfMSBcXHRpbWVzIFdfMSJdLFswLDEsImYgXFxvdGltZXMgZyJdLFsyLDEsIihcXG90aW1lcykiLDJdLFszLDAsIihcXG90aW1lcykiXSxbMywyLCJmIFxcdGltZXMgZyIsMl1d]]

commutes. #m/thm/module 

> [!check]- Proof
> We claim that the map
> $$
> \begin{align*}
> h :=(\otimes) \circ (f \times g) : V_{1} \times W_{1} \to V_{2} \otimes W_{1}
> \end{align*}
> $$
> along the diagonal is [[Multilinear map|bilinear]],
> the conclusion then follows from the [[Tensor product of modules over a commutative ring#Universal property]] of the tensor product.
> Let $v_{1}, v_{2} \in V_{1}$, $w \in W_{1}$, and $\alpha, \beta \in \mathcal{K}$.
> Then
> $$
> \begin{align*}
> h(\alpha v_{1} + \beta v_{2} , w)
> &= f(\alpha v_{1} + \beta v_{2}) \otimes g w \\
> &= (\alpha f v_{1} + \beta f v_{2}) \otimes g w \\
> &= \alpha f v_{1} \otimes gw + \beta f v_{2} \otimes gw  \\
> &= \alpha h(v_{1}, w) + \beta h(v_{2} , w)
> \end{align*}
> $$
> so $h$ is linear when the second argument is held constant.
> A similar calculation holds for the first argument held constant.
> Therefore $h$ is bilinear, as claimed. <span class="QED"/>

This makes $(\otimes_{\mathcal{K}}) : \lMod{\mathcal{K}} \times \lMod{\mathcal{K}} \to \lMod{\mathcal{K}}$ into a [[Multifunctor|bifunctor]] and [[Category of modules over a commutative ring]] into a monoidal category.

## See also

- [[Tensor product of linear maps over a noncommutative ring]]
- [[Tensor product of group representations]]

#
---
#state/develop | #lang/en | #SemBr
