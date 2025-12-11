---
tags:
  - public
---
[[Relatively prime ideals]]
# Chinese remainder theorem for rings

Let $R$ be a [[commutative ring]] and suppose $\mathfrak{a}_{1}, \dots, \mathfrak{a}_{n} \trianglelefteq R$ are pairwise [[Relatively prime ideals]]. 
Then the homomorphism #m/thm/ring
$$
\begin{align*}
\varphi = (\pi_{1}, \dots, \pi_{n}) : R \twoheadrightarrow \bigoplus _{i=1}^n \frac{R}{\mathfrak{a}_{i}}
\end{align*}
$$
is surjective and induces an isomorphism
$$
\begin{align*}
\tilde{\varphi} : \frac{R}{\mathfrak{a}_{1} \cdots \mathfrak{a}_{n}} \to \bigoplus _{i=1}^n \frac{R}{\mathfrak{a}_{i}}.
\end{align*}
$$

> [!check]- Proof
> Since by [[Relatively prime ideals#^P1]] we have $\ker \varphi = \mathfrak{a}_{1} \cdots \mathfrak{a}_{n}$,
> it suffices to show surjectivity of $\varphi$.
> We argue by induction on $n$.
> For $n=1$, there is nothing to show.
> For $n>1$ assume the statement holds for fewer ideals,
> so all we need to prove is that the homomorphism
> $$
> \begin{align*}
> R \to \frac{R}{\mathfrak{a}_{1} \cdots \mathfrak{a}_{n-1}} \oplus \frac{R}{\mathfrak{a}_{n}}
> \end{align*}
> $$
> is surjective.
> By [[Relatively prime ideals#^P2]], $\mathfrak{a}_{1}\cdots\mathfrak{a}_{n-1} + \mathfrak{a}_{n} = \langle 1 \rangle$,
> so we are reduced to the case of two ideals.
> 
> If $\mathfrak{a}_{1} + \mathfrak{a}_{2} = \langle 1 \rangle$, then there exist $a_{i} \in \mathfrak{a}_{i}$ for $i=1,2$ such that $a_{1}+a_{2}=1$.
> We need to verify that for $r_{1},r_{2} \in R$ there exists an $r \in R$ such that $r \equiv r_{i} \pmod{\mathfrak{a}_{i}}$.
> We get this from $r = a_{1}r_{2} + a_{2}r_{1}$, for which
> $$
> \begin{align*}
> r = a_{1}r_{2} + (1-a_{1})r_{1} = a_{1}(r_{2}-r_{1})+ r_{1} \equiv r_{1} \pmod{\mathfrak{a}_{1}}
> \end{align*}
> $$
> and by the same token $r \equiv r_{2} \pmod{\mathfrak{a}_{2}}$, as required. <span class="QED"/>


  [^2022]: 2022\. [[Sources/@bakerAlgebraicNumberTheory2022|Algebraic number theory course notes]], ¶1.3.3, pp. 25–26

It should be clear that the classical [[Chinese remainder theorem]] is a special case.

#
---
#state/tidy | #lang/en | #SemBr
