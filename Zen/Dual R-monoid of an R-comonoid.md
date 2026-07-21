---
date: 2026-05-12
mathLink: Dual $\mathcal{K}$-monoid of a $\mathcal{K}$-comonoid
tags:
  - public
---
[[R-comonoid]]
# Dual $\mathcal{K}$-monoid of a $\mathcal{K}$-comonoid

Let $\mathcal{C}$ be a [[R-comonoid]].
Then the [[Dual module]] $\mathcal{C}^*$ naturally has the structure of a [[R-monoid]]. #m/thm/ralg/hopf 
We define the maps
$$
\begin{align*}
\eta : \mathcal{K} &\to \mathcal{C}^* && \mu : \mathcal{C}^* \otimes \mathcal{C}^* \to \mathcal{C}^*
\end{align*}
$$
where 

1. $\eta = \epsilon^*$, i.e.
    $$
    \begin{align*}
    \langle 1, x \rangle = \epsilon(x)
    \end{align*}
    $$
    for $x \in \mathcal{C}$.
2. $\mu(f \otimes g) = (f \otimes g) \circ \Delta$, i.e.
    $$
    \begin{align*}
    \langle f \cdot g , x \rangle = \sum_{(x)} \langle f, x_{(1)} \rangle \langle g, x_{(2)} \rangle  
    \end{align*}
    $$
    for $x \in \mathcal{C}$.


> [!check]- Proof
> Even though $\mathcal{C}^*$ may not be a true [[dual object]],
> we will use the string diagram notation given there.
> Left unitality is evident from
> 
> ![[dual-unital-string.svg#invert|c]]
> 
> and right unitality is similar.
> Associativity is evident from
> 
> ![[dual-associative-string.svg#invert|c]]
> 
> Therefore $\mathcal{C}^*$ is in fact a $\mathcal{K}$-monoid with this multiplication and unit. <span class="QED"/>


One might assume that this dualizes nicely, but unfortunately the category [[Category of modules over a commutative ring]] is not strong enough this.
If we have true [[dual object|dual objects]] as in [[Category of finite-dimensional vector spaces]], everything falls out automatically by bending wires in string diagrams.

#
---
#state/tidy | #lang/en | #SemBr
