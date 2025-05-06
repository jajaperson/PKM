---
tags:
  - public
---
[[Dedekind domain]]
# Ideal class group

Let $R$ be a [[Dedekind domain]], e.g. the [[Algebraic integer|ring of integers]] of some [[number field]], $I(R)$ its [[Fractional ideals of a Dedekind domain form an abelian group|group of fractional ideals]], and $P(R)$ be the subgroup of [[Principal ideal|principal ideals]].
The **ideal class group** is the [[quotient group]] #m/def/ring 
$$
\begin{align*}
\opn{Cl}(R) = I(R) / P(R)
\end{align*}
$$
Equivalently, let $J(R)$ be the set of nonzero ideals in $R$,
and define an [[equivalence relation]] on $R$ so that for $\mathfrak{a}, \mathfrak{b} \in J(R)$
$$
\begin{align*}
\mathfrak{a} \sim \mathfrak{b} \iff (\exists 0 \neq a,b \in R)[a \mathfrak{a} = b \mathfrak{b}]
\end{align*}
$$
Then $J(R) / {\sim} \cong \Cl(R)$.[^2022]

  [^2022]: 2022\. [[Sources/@bakerAlgebraicNumberTheory2022|Algebraic number theory course notes]], pp. 21–22

> [!check]- Proof
> First we verify that $(\sim)$ defines an [[equivalence relation]] on $J(R)$,
> where the only condition that isn't immediately obvious is [[Equivalence relation#^E3]].
> Suppose $0 \neq a,b,\beta,\gamma \in R$ so that
> $$
> \begin{align*}
> a \mathfrak{a} &= b\mathfrak{ b} & \beta \mathfrak{b} &= \gamma \mathfrak{c}
> \end{align*}
> $$
> Then $a \beta \mathfrak{a} = b \beta \mathfrak{b} = b\gamma \mathfrak{c}$, so $\mathfrak{a} \sim \mathfrak{c}$, as required.
> 
> Next we show that $(\sim)$ defines a [[congruence relation]] on the monoid $J(R)$.
> Now suppose $\mathfrak{a},\mathfrak{a}',\mathfrak{b},\mathfrak{b}' \in J(R)$ such that $a \mathfrak{a} = \alpha \mathfrak{a'}$ and $b \mathfrak{b} = \beta \mathfrak{b}'$.
> Then $ab\mathfrak{a} \mathfrak{b} = \alpha \beta \mathfrak{a}' \mathfrak{b}'$ so $\mathfrak{a}\mathfrak{b} \sim \mathfrak{a}'\mathfrak{b}'$.
> The [[quotient monoid]] $J(R) / (\sim)$ is thence well-defined.
> 
> Now we show that $J(R) / (\sim)$ is in fact a group.
> Let $\mathfrak{a} \in J(R)$ and $0 \neq a \in \mathfrak{a}$.
> Then $\langle a \rangle \sube \mathfrak{a}$ so $1 \sim \langle a \rangle = \mathfrak{a}\mathfrak{b}$ for some ideal $\mathfrak{b}$.
> 
> Finally we show that these groups are isomorphic,
> letting $G$ and $\tilde G$ denote the constructions with and without fraction ideals respectively.
> An arbitrary element in $G$ is $A P(R)$ for some fractional ideal $A$.
> But $r A = \mathfrak{a}$ for some $r \in R$ and $\mathfrak{a} \in I(J)$, so $\mathfrak{a} P(R) = A \langle r \rangle P(R)$.
> Therefore we can always use an integral ideal as a representative for an element of $G$,
> which itself represents an element of $\tilde{G}$.
> Clearly $\mathfrak{a}P(R) = \mathfrak{b}P(R) \iff \mathfrak{a} \sim \mathfrak{b}$:
> hence we have an isomorphism. <span class="QED"/>

## Results

- [[Ideal class group of the ring of a number field]]

#
---
#state/tidy | #lang/en | #SemBr
