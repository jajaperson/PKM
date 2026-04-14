---
aliases:
  - homotopic
  - homotopy relation
  - homotopy class
  - homotopy
tags:
  - public
---
[[Homotopy theory MOC]]
# Homotopy of maps

A **homotopy** is a continuous transformation from one continuous map into another.
Let $f,g \in \Top(X,Y)$.
Then a homotopy from $f$ to $g$ is a continuous map $H : X \times [0,1] \to Y$ such that $H(x, 0)  = f(x)$ and $h(x,1) = g(x)$. 
The maps are thereby said to be **homotopic**, denoted with $H: f \simeq g$ #m/def/homotopy
It is useful to have $h_{t}(x) = H(x,t)$, whereby we can say $h_{0} = f$ and $h_{1} = g$.

![infamous homotopy](https://upload.wikimedia.org/wikipedia/commons/2/26/Mug_and_Torus_morph.gif#invert)

The homotopy relation $\simeq$ is a [[congruence relation]] on $\Top(X,Y)$.

> [!check]- Proof
> Clearly $f \in \Top(X,Y)$ is homotopic to itself via $h(x,t) = f(x)$,
> so $\simeq$ is reflexive.
> If $h : X \times [0,1] \to Y$ is a homotopy from $f$ to $g$
> then $h' : (x,t) \mapsto h(x, 1-t)$ is a homotopy from $g$ to $f$,
> so $\simeq$ is symmetric.
> If $h$ is a homotopy from $f$ to $g$ and $h'$ is a homotopy from $g$ to $k$,
> then
> $$
> \begin{align*}
> h' \cdot h = \begin{cases}
> h(2t) & 0 \leq t \leq \frac{1}{2} \\
> h'(2t-1)  & \frac{1}{2}\leq t\leq 1
> \end{cases}
> \end{align*}
> $$
> is a homotopy from $f$ to $k$,
> so $\simeq$ is transitive.
> Therefore $\simeq$ is an equivalence relation.
> To show $\simeq$ is a congruence relation, let $f_{1},f_{2} : X \to Y$ with $h_{1}: f_{1} \simeq f_{2}$ and $g_{1},g_{2} : Y \to Z$ with $h_{2}: g_{1} \simeq g_{2}$.
> Then $g_{2}h_{1} : g_{2}f_{1} \simeq g_{2}f_{2}$,
> and similarly $h_{2}(f(-), -) : g_{1}f_{1} \simeq g_{2}f_{1}$.
> Thus $g_{1}f_{1} \simeq g_{2}f_{2}$, as required.

## Homotopy class

The congruence classes of homotopic maps are called **homotopy classes** of maps,
and form the morphisms in the [[Naïve homotopy category]] $\hTop$,
which is a [[Quotient category]] $\hTop = \Top / {\simeq}$.

## Other kinds of topological homotopy

- [[Homotopy of paths]]
- [[Pointed homotopy of maps]]

## Further terminology

- A map $f$ is said to be [[Null-homotopic map|null-homotopic]] iff it is homotopic to a [[Constant map]].

#
---
#state/develop | #lang/en | #SemBr
