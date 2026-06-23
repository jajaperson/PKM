---
date: 2026-05-19
mathLink: $R$-tensor product of linear maps
tags:
  - public
---
[[Tensor product of modules over a noncommutative ring]]
# $R$-tensor product of linear maps

Suppose $f \in \rMod{R}(V_{1},V_{2})$ and $g \in \lMod R(W_{1},W_{2})$.
Then there is a unique morphism $f \otimes g : \Ab(V_{1} \otimes W_{1}, V_{2} \otimes W_{2})$,
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
> along the diagonal is [[Balanced product|balanced]],
> the conclusion then follows from the [[Tensor product of modules over a noncommutative ring#Universal property]] of the tensor product.
> Let $v, v' \in V_{1}$, $w, w' \in W_{1}$, and $\alpha \in R$.
> First, we have
> $$
> \begin{align*}
> h(v, w + w') &= fv \otimes g(w + vw)
> = fv \otimes (gw + gw') \\
> &= fv \otimes gw + fv \otimes gw' \\
> &= h(v,w) + h(v,w')
> \end{align*}
> $$
> giving [[Balanced product#^B2]].
> Similarly
> $$
> \begin{align*}
> h(v + v', w) 
> &= f(v+v') \otimes gw 
> = (fv \otimes fv') \otimes gw \\
> &= (fv + fv') \otimes gw \\
> &= fv \otimes gw + fv' \otimes gw \\
> &= h(v, w) + h(v' , w)
> \end{align*}
> $$
> giving [[Balanced product#^B2]].
> Finally,
> $$
> \begin{align*}
> h(v \alpha, w) &= f(v \alpha) \otimes gw = (fv)\alpha \otimes gw \\
> &= fv \otimes \alpha gw = fv \otimes g(\alpha w) \\
> &= h(v , \alpha w)
> \end{align*}
> $$
> giving [[Balanced product#^B3]].
> Therefore $h$ is balanced, as claimed. <span class="QED"/>


## See also

- [[Tensor product of linear maps over a commutative ring]]


#
---
#state/tidy | #lang/en | #SemBr
