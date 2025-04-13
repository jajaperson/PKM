---
tags:
  - public
aliases:
  - Noetherian
---
[[Ring theory MOC]]
# Noetherian ring

A ring $R$ is called (left/right) **Noetherian** iff any of the following equivalent conditions hold:[^2022] #m/def/ring 

1. (left/right) [[ideal]] $I \trianglelefteq R$ is [[Finitely generated module|finitely generated]] as a (left/right) $R$-module; ^N1
2. every increasing sequence $I_{1} \trianglelefteq I_{2} \trianglelefteq \cdots$ of (left/right) ideals of $R$ has a largest element; ^N2
3. every non-empty set of (left/right) ideals of $R$ contains a maximal element. ^N3

> [!check]- Proof
> Suppose [[#^N1]] holds,
> and let $I_{1} \trianglelefteq I_{2} \trianglelefteq \cdots$ be an increasing sequence of (left/right) ideals.
> Then
> $$
> \begin{align*}
> I = \bigcup_{i=1}^\infty I_{n}
> \end{align*}
> $$
> is an ideal, since if $x \in I$ then $x \in I_{j}$ for some $j$ and thus $rx \in I_{j}$ resp. $xr \in I_{j}$ for any $r \in R$.
> Hence $I$ is finitely generated, and all these generators must be exhausted by some $I_{n}$, implying [[#^N2]].
> 
> Suppose [[#^N2]] holds, and assume towards contradiction there exists a set $\mathfrak{I}$ of (left/right) ideals with no maximal element.
> One can then form a strictly increasing sequence of $I_{n} \in \mathfrak{I}$, contradicting [[#^N2]].
> Therefore [[#^N2]] implies [[#^N3]].
> 
> Suppose [[#^N3]] holds,
> and let $I \trianglelefteq R$ be an arbitrary (left/right) ideal.
> Letting $\mathfrak{I}$ be the set of finitely generated ideals contained in $I$,
> which is nonempty since $0 \in \mathfrak{I}$,
> and thus contains a maximal element $I' \in \mathfrak{I}$.
> Assume towards contradiction $I' \neq I$.
> Then we can take $x  \in I \setminus I'$,
> and form $I + Rx$ resp. $I + xR$, which is a finitely generated (left/right) ideal strictly larger than $I'$, contradicting maximality.
> Therefore $I'=I$ and $I$ is finitely generated, 
> so [[#^N3]] implies [[#^N1]]. <span class="QED"/>


  [^2022]: 2022\. [[Sources/@bakerAlgebraicNumberTheory2022|Algebraic number theory course notes]], §2.5, pp. 14–15

## Properties

Let $R$ be two-sided Noetherian.

1. Let $I \triangleleft R$ be a nonzero proper ideal.
   Then there exist nonzero [[Prime ideal|prime ideals]] $\mathfrak{p}_{1}, \dots, \mathfrak{p}_{n} \triangleleft R$ such that $\langle \mathfrak{p}_{1} \cdots \mathfrak{p}_{n} \rangle \sube I$. ^P1

> [!check]- Proof
> Let $\mathcal{I}$ be the set of all ideals for which [[#^P1]] fails,
> and assume towards contradiction its maximal element is $I \in \mathcal{I}$, which cannot be a [[prime ideal]],
> so there exist $a,b \in R \setminus I$ such that $ab \in I$.
> Let $\mathfrak{a} = ( I, a )$ and $\mathfrak{b} = ( I, b )$,
> whence $I \subne \mathfrak{a}, \mathfrak{b}$,
> so by maximality $\mathfrak{a},\mathfrak{b} \notin \mathcal{I}$ and thus there exist nonzero prime ideals $\mathfrak{p}_{1}, \dots ,\mathfrak{p}_{m}, \mathfrak{q}_{1}, \dots \mathfrak{q}_{n} \triangleleft R$ such that
> $$
> \begin{align*}
> \mathfrak{a} &\sube (\mathfrak{p}_{1} \cdots\mathfrak{p}_{m}), & \mathfrak{b} &\sube (\mathfrak{q}_{1} \cdots \mathfrak{q}_{n}).
> \end{align*}
> $$
> Then
> $$
> \begin{align*}
> (\mathfrak{a}\mathfrak{b}) = (I^2, aI, bI, ab) \sube I
> \end{align*}
> $$
> whence
> $$
> \begin{align*}
> (\mathfrak{p}_{1} \cdots \mathfrak{p}_{m} \mathfrak{q}_{1} \cdots \mathfrak{q}_{n}) \sube I,
> \end{align*}
> $$
> a contradiction.
> Therefore $\mathcal{I} = \0$. <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr
