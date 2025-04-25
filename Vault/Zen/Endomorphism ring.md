---
tags:
  - public
---
[[Module homomorphism]]
# Endomorphism ring

Let $R$ be a [[ring]] and $V$ be an $R$-[[module]].
Then $\End_{R} V = \lMod R(V,V)$ forms a [[ring]]
called the **endomorphism ring**,
under composition, #m/def/module 
so for $f,g \in \End_{R} V$ and $v \in V$
$$
\begin{align*}
(f+g)(v) &= f(v) + g(v) \\
(f \cdot g)(v) &= f \circ g(v)
\end{align*}
$$
If $R$ is a [[commutative ring]] this becomes an $R$-[[Algebra over a field|algebra]], so for $\lambda,\mu \in R$
$$
\begin{align*}
(\lambda f + \mu g)(v) = \lambda f(v) + \mu g(v)
\end{align*}
$$

> [!check]- Proof
> Let $f,g,h \in \End_{R}V$
> Clearly
> $$
> \begin{align*}
> (f+g)h &= f \circ h + g\circ h , \\
> h(f+g) &= h \circ f + h \circ g .
> \end{align*}
> $$
> if $R$ is commutative then
> $$
> \begin{align*}
> (\alpha f) \circ (\beta g) &= \alpha\beta(f \circ g)
> \end{align*}
> $$
> as required. <span class="QED"/>

## Properties 

- [[Cayley's theorem for rings]]

#
---
#state/tidy | #lang/en | #SemBr
