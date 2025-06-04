---
tags:
  - public
---
[[Field theory MOC]]
# Algebraic closure

Let $K$ be a [[field]].
An **algebraic closure** $\overline{K}$ of $K$ is an [[algebraically closed field]] such that $\overline{K}:K$ is an [[Algebraic element|algebraic extension]]. #m/def/field
Assuming [[Axiom of Choice|AC]],[^1] an algebraic closure always exists and is unique up to [[Morphism of field extensions|isomorphism of field extensions]], so one often speaks of _the_ algebraic closure.

## Proof of existence and uniqueness

The proof of existence and uniqueness requires enough lemmata to warrant a section of this Zettel.[^2009]
We invoke [[Zorn's lemma]].

### Existence

Let $K$ be a field.
There exists an extension $L:K$ such that every nonconstant polynomial $f(x) \in K[x]$ has at least one root in $L$.

> [!missing]- Proof

Moreover, $L$ is algebraically closed, and [[Algebraic interior of a field extension#^P1|thus $(L:K)^\circ$ is an algebraic closure of $K$]].

> [!missing]- Proof

### Uniqueness

If $L:K$ is a field extension with $L$ algebraically closed and $F:K$ is any other algebraic extension, then there exists a unique [[morphism of field extensions]]
$$
\begin{align*}
i : (F:K) \to (L:K)
\end{align*}
$$

> [!missing]- Proof
> #missing/proof

Suppose $\overline{K}_{1}$ and $\overline{K}_{2}$ are algebraic closures of $K$.
Then there exists an [[Morphism of field extensions|isomorphism of field extensions]] $(\overline{K}_{1}:K) \to (\overline{K}_{2}:K)$.

> [!missing]- Proof
> #missing/proof

  [^2009]: 2009\. [[Sources/@aluffiAlgebraChapter02009|Algebra: Chapter 0]], §VII.2.1, pp. 400–404



#
---
#state/develop | #lang/en | #SemBr

[^1]: Allegedly, existence follows from the weaker [[Compactness theorem for first order logic]], see footnote 7 on 2009\. [[Sources/@aluffiAlgebraChapter02009|Algebra: Chapter 0]], p. 403
