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

Let $K=K_{0}$ be a field.
There exists an extension $K_{1}:K_{0}$ such that every nonconstant polynomial $f(x) \in K[x]$ has at least one root in $K_{1}$.

> [!check]- Proof due to [[Emil Artin]]
> Let $\mathcal{F}$ denote the set of nonconstant monic polynomials in $K_{0}[x]$, and let $K_{0}[t_{f}]_{f \in \mathcal{F}}$ be the corresponding [[polynomial ring]], potentially in infinitely many indeterminates.
> Consider the ideal
> $$
> \begin{align*}
> I=\langle f(t_{f} ) : f \in \mathcal{F} \rangle \triangleleft K_{0}[x],
> \end{align*}
> $$
> which we will show must be proper.
> Suppose towards contradiction that $I = \langle 1 \rangle$, so
> $$
> \begin{align*}
> 1 = \sum_{i=1}^n a_{i} \,f_{i}(t_{f_{i}})
> \end{align*}
> $$
> for some $a_{i} \in K_{0}[t_{f}]_{f \in \mathcal{F}}$ and $f_{i} \in \mathcal{F}$.
> We can then construct an extension $F:K$ where the polynomials $(f_{i})_{i=1}^n$ have roots $(\alpha_{i})_{i=1}^n$, by iteratively [[Adjoining a root to a field]].
> If we evaluate
> $$
> \begin{align*}
> 1 = \sum_{i=1}^n a_{i} \, f_{i}(\alpha_{i}) = \sum_{i=1}^n a_{i} \cdot 0 = 0
> \end{align*}
> $$
> which is a contradiction.
> Since $I$ is proper, invoking Zorn [[Every commutative ring has a maximal ideal|it is contained in a maximal ideal]] $\mathfrak{m}$, giving the the [[field extension]]
> $$
> \begin{align*}
> \frac{K_{0}[t_{f}]_{f \in \mathcal{F}}}{\mathfrak{m}} := K_{1} : K_{0},
> \end{align*}
> $$
> where by construction every nonconstant monic (and thus nonconstant general) polynomial $f(x)$ has a root $\pi(t_{f})$. <span class="QED"/>

To guarantee the existence of _all_ roots we iterate this process ad infinitum,
so not only does $f(x) \in K_{0}[x]$ have a root $\alpha_{1} \in K_{1}$,
but $f(x) / (x - \alpha_{1}) \in K_{1}[x]$ has a root $\alpha_{2} \in K_{2}$, &c.
This yields a chain of extensions
$$
\begin{align*}
K_{0} \hookrightarrow K_{1} \hookrightarrow K_{2} \hookrightarrow \cdots
\end{align*}
$$
Let $L$ be the union or [[Limits and colimits|limit]] of this chain.
$L$ is an algebraically closed field, and [[Algebraic interior of a field extension#^P1|thus $(L:K)^\circ$ is an algebraic closure of $K$]].

> [!check]- Proof
> For every $a,b \in L$ we have $a,b \in K_{i}$ for some $i \in \mathbb{N}_{0}$,
> so we can just work within whatever $K_{i}$ is necessary, since the result is independent.
> Thus $L$ is a field.
> If $f(x) \in L[x]$, then $f(x) \in K_{i}[x]$ for some $i \in \mathbb{N}_{0}$,
> and thus it has a root in $K_{i+1} \leq L$. <span class="QED"/>

### Uniqueness

See [[Embedding an algebraic extension into an algebraically closed field]].

Suppose $\overline{K}_{1}$ and $\overline{K}_{2}$ are algebraic closures of $K$.
Then there exists an [[Morphism of field extensions|isomorphism of field extensions]] $\psi \in \cat{Fld}_{K}(\overline{K}_{1}, \overline{K}_{2})$.

> [!check]- Proof
> By the above, there exists a homomorphism $i \in \cat{Fld}_{K} (\overline{K}_{2}, \overline{K}_{1})$,
> which is automatically injective ([[Field homomorphisms are injective]]).
> It is also surjective, by [[Algebraically closed field#^A3]]. <span class="QED"/>

  [^2009]: 2009\. [[Sources/@aluffiAlgebraChapter02009|Algebra: Chapter 0]], §VII.2.1, pp. 400–404



#
---
#state/tidy| #lang/en | #SemBr

[^1]: Allegedly, existence follows from the weaker [[Compactness theorem for first order logic]], see footnote 7 on 2009\. [[Sources/@aluffiAlgebraChapter02009|Algebra: Chapter 0]], p. 403
