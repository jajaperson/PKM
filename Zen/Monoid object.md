---
aliases:
  - monoid
tags:
  - public
mathLink-blocks:
  unit: unit law
  ass: associative law
  comm: commutative law
---
[[Monoidal internalization]]
# Monoid object

Let $(\cat C, \otimes, \mathbb{1}, \alpha,\lambda,\rho)$ be a [[monoidal category]].
A **monoid** in $\cat C$ consists of the data #m/def/cat
$$
\begin{align*}
\mathbb{1} \xrightarrow \eta M \xleftarrow \mu M \otimes M
\end{align*}
$$
where $\eta$ is called the **unit** and $\mu$ is called the **multiplication**,
and these satisfy the **left/right unit laws**,

![[unital-string.svg#invert|c]]

^unit

and the <dfn>associative law</dfn>.

![[associative-string.svg#invert|c]]

^ass

We can thence define a [[Monoid morphism]] and [[Category of monoid objects]].


## Commutative monoid

If $\cat C$ is [[Symmetric monoidal category|symmetric]], a comonoid satisfying the <dfn>commutative law</dfn>

![[commutative-string.svg#invert|c]]

^comm

is called <dfn>commutative</dfn>.

## Properties

- As in the traditional case, there exists at most one unit $e : \mathbb{1} \to M$ compatible with the multiplication $m : M \otimes M \to M$.

## Examples

- A monoid in [[Category of sets]] with the cartesian product is a regulat [[monoid]].
- A monoid in [[Category of abelian groups]] is a [[ring]].
- More generally, for a [[commutative ring]] $R$, a monoid in [[Category of left modules]] is an [[R-monoid]].
- A monoid in an [[Endofunctor category]] is a [[Monad]].

## See also

- These concepts admit duals, see [[Comonoid object]].
- See also the weakening of [[Semigroup object]].

#
---
#state/develop | #lang/en | #SemBr
