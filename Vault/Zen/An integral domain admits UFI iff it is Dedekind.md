---
tags:
  - public
---
[[Dedekind domain]]
# An integral domain admits UFI iff it is Dedekind

Let $R$ be an [[integral domain]].
Then $R$ admits [[unique factorization of ideals]] iff it is a [[Dedekind domain]]. #m/thm/ring 

> [!check]- Dedekind implies UFI
> Let $I \triangleleft R$ be a nonzero proper ideal.
> First we show that if a prime factorization exists, it is necessarily unique.
> Suppose
> $$
> \begin{align*}
>  I = (\mathfrak{p}_{1} \cdots \mathfrak{p}_{r}) = (\mathfrak{q}_{1} \cdots \mathfrak{q}_{r})
> \end{align*}
> $$
> whence $(\mathfrak{q}_{1} \cdots \mathfrak{q}_{r}) \sube \mathfrak{p}_{1}$,
> so without loss of generality $\mathfrak{q}_{1} \sube \mathfrak{p}_{1}$ by [[Product ideal#^D2]].
> Since $\dim R = 1$, $\mathfrak{q}_{1}$ is maximal, whence $\mathfrak{q}_{1} = \mathfrak{p}_{1}$.
> Multiplying both sides by $\mathfrak{p}_{1}^{-1} = \mathfrak{q}_{1}^{-1}$ as a [[Product ideal]] gives
> $$
> \begin{align*}
> (\mathfrak{p}_{1}^{-1} I) = (\mathfrak{p}_{2} \cdots \mathfrak{p}_{r}) = (\mathfrak{q}_{2} \cdots \mathfrak{q}_{r})
> \end{align*}
> $$
> since [[Prime ideals are invertible in a Dedekind domain]],
> so we can induce that the factorization is unique.
> 
> To prove existence, we use the [[Noetherian ring|Noetherian]] property and [[Prime ideals are invertible in a Dedekind domain]].
> Let $\mathcal{I}$ be the set of all ideals of $R$ for which there exists no prime factorization,
> and assume towards $\mathcal{I} \neq \0$, whence there exists a maximal element $I \in \mathcal{I}$.
> Now $I$ must be contained in a [[maximal ideal]] $\mathfrak{p}$ ([[A maximal ideal in a commutative ring is prime|which is prime]]), and since $R \sube \mathfrak{p}^{-1}$ we have
> $$
> \begin{align*}
> I \sube (I \mathfrak{p}^{-1}) \sube (\mathfrak{p}\mathfrak{p}^{-1}) = R
> \end{align*}
> $$
> Since [[Prime ideals are invertible in a Dedekind domain]] guarantees $I\mathfrak{p}^{-1} \neq I$,
> it follows from the maximality of $I$ in $\mathcal{I}$ that $I \mathfrak{p}^{-1}$ has a prime factorization
> $$
> \begin{align*}
> (I \mathfrak{p}^{-1}) = (\mathfrak{p}_{1} \cdots \mathfrak{p}_{r})
> \end{align*}
> $$
> whence
> $$
> \begin{align*}
> I = (I \mathfrak{p}^{-1} \mathfrak{p}) = (\mathfrak{p}_{1} \cdots \mathfrak{p}_{r} \mathfrak{p})
> \end{align*}
> $$
> is a prime factorization of $I$, i.e. $I \notin \mathcal{I}$, a contradiction. <span class="QED"/>

> [!missing]- UFI implies Dedekind
> #missing/proof
#
---
#state/develop | #lang/en | #SemBr
