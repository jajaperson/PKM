---
tags:
  - public
---
[[Group ring]]
# Centre of the group ring

The following theorem means we can speak of [[Group class function|class functions]] into some ring as the **centre of the group ring**:

Let $G$ be a group, $R$ be a ring, and $R[G]$ denote the [[Group ring]] of maps $G \to R$ of finite support.
Then $f \in Z(R[G])$ ([[Centre of a rng]]) iff $f$ is a [[Group class function]], #m/thm/group
i.e. $f * g = g * f$ for all $g \in R[G]$ iff $f(yxy^{-1})=f(x)$ for all $x,y \in G$.

> [!check]- Proof
> Let $f * g = g  * f$ for all $g \in R[G]$
> Since $\{ \delta_{z} \}_{z \in G} = \{ \delta_{z^{-1}} \}_{z \in G}$ forms a [[Group ring#Definition|basis of the group ring]],
> any $g$ may be expressed as
> $$
> \begin{align*}
> g = \sum_{z \in G} g(z^{-1})\delta_{z^{-1}}
> \end{align*}
> $$
> and thus for all $g \in R[G]$ and $x \in G$
> $$
> \begin{align*}
> f * \left( \sum_{z \in G} g(z^{-1})\delta_{z^{-1}} \right) &= \left( \sum_{z \in G} g(z^{-1})\delta_{z^{-1}} \right)  * f \\
> \sum_{w \in G}\sum_{z \in G} f(xw^{-1}) g(z^{-1}) \delta_{z^{-1}}(w) &= \sum_{w \in G}\sum_{z \in G}g(z^{-1})\delta_{z^{-1}}(xw^{-1})f(w) \\
> \sum_{z \in G} f(xz) g(z^{-1}) &= \sum_{z \in G} f(zx) g(z^{-1})
> \end{align*}
> $$
> which is true iff $f(xz) = f(zx)$ for all $x,z \in G$,
> which in turn is true iff $f(zxz^{-1}) = f(x)$ for all $x,z \in G$.
> <span class="QED"/>

Thus $\dim Z(R[G])$ equals the number of conjugacy classes.

#
---
#state/tidy | #lang/en | #SemBr
