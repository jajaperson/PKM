---
tags:
  - public
---
[[Module homomorphism]]
# Endomorphism ring

Let $R$ be a [[commutative ring]] and $V$ be an $R$-[[module]].
Then $\End_{R} V = \lMod R(V,V)$ forms a unital associative $R$-[[Algebra over a field|algebra]] (and hence [[ring]]),
called the **endomorphism ring**,
under composition, #m/def/module 
so for any $\lambda \in R$, $f,g \in \End_{R} V$ and $v \in \mathbb{ V}$
$$
\begin{align*}
(\lambda f)(v) &= \lambda f(v) \\
(f+g)(v) &= f(v) + g(v) \\
(f \cdot g)(v) &= f \circ g(v)
\end{align*}
$$

> [!check]- Proof
> Let $f,g,h \in \End_{R}V$ and $\alpha,\beta \in R$.
> Clearly
> $$
> \begin{align*}
> (f+g)h &= f \circ h + g\circ h \\
> h(f+g) &= h \circ f + h \circ g \\
> (\alpha f) \circ (\beta g) &= \alpha\beta(f \circ g)
> \end{align*}
> $$
> as required. <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr
