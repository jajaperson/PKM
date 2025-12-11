---
tags:
  - public
---
[[Geometry MOC]]
# Minkowski's convex body theorem

Let $L \leq_{\mathbb{Z}} \mathbb{R}^n$ be a [[Lattice subgroup#Classical lattice|complete lattice]] and $S \subset \mathbb{R}^n$ be a [[Bounded set|bounded]] [[convex subset]] symmetric about the origin.
If
$$
\begin{align*}
\opn{vol}(S) > 2^n \opn{covol}(L),
\end{align*}
$$
then $S$ contains a nonzero element of $L$. #m/thm/geo
Moreover, the constant $2^n$ cannot be any smaller.
If $S$ is [[Heine-Borel theorem|compact]], then the same conclusion holds for the weaker hypothesis[^2022]
$$
\begin{align*}
\opn{vol}(S) \geq 2^n \opn{covol}(L).
\end{align*}
$$


  [^2022]: 2022\. [[Sources/@bakerAlgebraicNumberTheory2022|Algebraic number theory course notes]], ¶3.6, p. 62

> [!check]- Proof of first part
> For the first part, suppose $\opn{vol}(S) > 2^n \opn{covol}(L)$ 
> and consider the sublattice $2L \leq_{\mathbb{Z}} L$.
> By [[Covolume of a classical lattice]], we have $\opn{covol}(L') = 2^n \opn{covol}(L)$.
> 
> Let $F' \subset \mathbb{R}^n$ be a measurable [[fundamental domain]] for $L'$,
> and consider the map $T : \mathbb{R}^n \to F'$ induced by the projection $\mathbb{R}^n \to \mathbb{R}^n / L'$.
> Since
> $$
> \begin{align*}
> \opn{vol}(S) > \opn{vol}(F') \geq \opn{vol}(T(S))
> \end{align*}
> $$
> by the hypothesis,
> the [[Measure theoretic pigeonhole principle]] implies that $T \restriction S$ is not injective,
> i.e. there exist distinct $x',y' \in S$ such that $T(x')= T(y')$,
> whence $0 \neq P' := x' - y' \in L'$.
> Let $P = \frac{1}{2} P' \in L$.
> By symmetry of $S$, $-y' \in S$
> and by convexity
> $$
> \begin{align*}
> P = \frac{1}{2}x' + \frac{1}{2}(-y') \in S
> \end{align*}
> $$
> so $P$ is the required nonzero element.


> [!tip]- Sharpness
> It is already evident for $L = \mathbb{Z}^n \leq_{\mathbb{Z}} \mathbb{R}^n$ and $S = \Span_{(-1,1)}\{ \unitv e_{i} \}_{i=1}^n$
> that the constant $2^n$ cannot be made smaller.



#
---
#state/develop | #lang/en | #SemBr
