---
tags:
  - public
---
[[Algebraic element|Algebraic extension]]
# Compositions only of algebraic extensions are algebraic

Let $F : L : K$ be a [[Intermediate field extension|tower of field extensions]].
Then $F:K$ is algebraic iff both $L:K$ and $F:L$ are algebraic.[^2009] #m/thm/field 

> [!check]- Proof
> If $F:K$ is algebraic, then every element of $F$ is algebraic over $K$;
> therefore $L:K$ and $F:L$ are algebraic.
> 
> Conversely, suppose $L:K$ and $F:L$ are algebraic,
> and let $\alpha \in F$.
> Then there exists a polynomial
> $$
> \begin{align*}
> f(x) = \sum_{i=0}^n a_{i}x^i \in L[x]
> \end{align*}
> $$
> such that $f(\alpha) = 0$, whence $\alpha$ is algebraic over the subfield
> $$
> \begin{align*}
> K(a_{0},\dots,a_{n}) \leq L
> \end{align*}
> $$
> so
> $$
> \begin{align*}
> K(a_{0},\dots,a_{n}, \alpha) : K(a_{0},\dots,a_{n})
> \end{align*}
> $$
> is [[Finite field extension|finite]].
> Now
> $$
> \begin{align*}
> K(a_{0},\dots,a_{n}) : K
> \end{align*}
> $$
> is finite by [[Finitely generated field extension#^P1]] since all the $a_{i}$ are algebraic over $K$ by construction.
> Thus by the basic property of an [[Intermediate field extension]],
> $$
> \begin{align*}
> K(a_{0},\dots,a_{n}) : K
> \end{align*}
> $$
> is finite.
> To summarize, we have the tower
> ![[algebraic tower.svg#invert]]
> where squiggly lines are algebraic and dashed lines are finite. 
> Finally we see that 
> $$
> \begin{align*}
> K(a_{0},\dots,a_{n},\alpha) : K
> \end{align*}
> $$
> must be finite and thus $\alpha$ is algebraic over $K$. <span class="QED"/>


  [^2009]: 2009\. [[Sources/@aluffiAlgebraChapter02009|Algebra: Chapter 0]], §VII.1.3, p. 395


#
---
#state/tidy | #lang/en | #SemBr
