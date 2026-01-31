---
tags:
  - public
---
[[Linear map]]
# Rank-nullity theorem

Let $T \in \Vect_{\mathbb{K}}(U,V)$ be a [[linear map]].
Then any [[Complement subspace|complement]] of the [[Linear kernel|kernel]] is isomorphic to the image #m/thm/linalg 
$$
\begin{align*}
(\ker T)^c \cong \im T
\end{align*}
$$
and thus the sum of the [[rank]] and the [[Linear kernel|nullity]] equals the [[Dimension of a vector space|dimension]] of $U$[^2008]
$$
\begin{align*}
\rank T + \nullity T = \dim U.\end{align*}
$$
In full generality, this is downstream of [[Axiom of Choice|AC]].

[^2008]: 2008\. [[Sources/@romanAdvancedLinearAlgebra2008|Advanced Linear Algebra]], p. 63

> [!check]- Proof
> By [[Complement subspace#^Existence]] we have $U = \ker T \oplus (\ker T)^c$
> whence $\dim U = \nullity T + \dim((\ker T)^c)$.
> Let $T^c = T \restriction (\ker T)^c$.
> Note $T^c$ is monic since $\ker T^c = (\ker T) \cap (\ker T)^c = \{ 0 \}$.
> Let $Tv \in \im T$.
> Since $v = u + u^c$ for $u \in \ker T$ and $u \in (\ker T)^c$ we have
> $$
> \begin{align*}
> Tv = Tu + Tu^c = Tu^c = T^cu^c \in \im(T^c)
> \end{align*}
> $$
> hence $\im(T) \sube \im(T^c)$ so $T^c:(\ker T)^c \to \im T$ is an isomorphism
> It follows immediately that $\rank T + \nullity T = \dim U$.
> <span class="QED"/>

## Corollaries

- It follows that an endomorphism $T$ on a finite-dimensional vector space is [[Linear monomorphism|monic]] iff it is [[Linear epimorphism|epic]].

#
---
#state/tidy | #lang/en | #SemBr 