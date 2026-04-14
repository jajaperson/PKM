---
tags:
  - public
---
[[Local extremum]]
# Extreme Value Theorem

Let $(X, d)$ be a [[metric space]] and let $f : X \to \mathbb{R}$ be a [[Continuity|continuous]] function.
Then for every [[Sequentially compact space|compact]] subspace $K$ of $X$ the function $f$ has an absolute maximum and absolute minimum on $K$,
i.e. there exists $a,b \in K$ such that $f(a) \leq f(x) \leq f(b)$ for all $x \in K$. #m/thm/anal

> [!missing]- Proof
> #missing/proof

## Euclidean spaces

The **Extreme Value Theorem** is stated as follows[^1011]
> Let $D$ be a non-empty closed and bounded subset of $\mathbb R^n$
> and let $f : D \to \mathbb R$ be a [[Continuity|continuous function]].
> Then $f$ is bounded 
> and there exist $\vab a \in D$ and $\vab b \in D$
> such that $(\forall \vab x \in D) [f(\vab a) \leq f(\vab x) \leq f(\vab b)]$.
> #m/thm/calculus

[^1011]: 2022\. [[Sources/@bassomMATH1011MultivariableCalculus2022|MATH1011: Multivariable Calculus]], p. 59

As a consequence of this, 
it is possible to determine the absolute extrema of a function on such a domain $D$
by narrowing our view to the specific set of circumstances in which an absolute extrema can occur.
These are
1. At critical points, i.e. $\nabla f(\vab v) = \vab 0^*$ and $\det{\left( H_f(\vab v) \right)} \geq 0$.
2. At extrema along the boundary $\partial D$.
3. At extrema along the boundary of the boundary $\partial^2 D$
   <br/>_&c._

> [!tip]- Example
> In the case of a rectangular domain in $\mathbb R^2$
> $$
> \begin{align*}
> D = \left\{
> \vtwo{x}{y} \in \mathbb R^2 
> \mid a \leq x \leq b
> \sland c \leq x \leq d
> \right\}
> \end{align*}
> $$
> this involves checking for local extrema in $D$
> $$
> \begin{align*}
> \nabla f(\vab v) &= \vab 0^* \\
> \det\left( H_f(\vab v) \right) &\geq 0
> \end{align*}
> $$
> and then the extrema on the boundary $\partial D$
> $$
> \begin{align*}
> f_x(x,c) = 0 &\sland f_{xx}(x,c) \neq 0\\
> f_x(x,d) = 0 &\sland f_{xx}(x,d) \neq 0\\
> f_y(a,y) = 0 &\sland f_{yy}(a,y) \neq 0\\
> f_y(b,y) = 0 &\sland f_{yy}(b,y) \neq 0\\
> \end{align*}
> $$
> and then the extrema on the boundary of the boundary $\partial^2 D$,
> i.e. the corners
> $$
> \begin{matrix}
> f(a, c) & f(b, c)\\
> f(a, d) & f(b, d)\\
> \end{matrix}
> $$
> and then determining which of these values are indeed $\min_D f$ and $\max_D f$.
#
---
#state/tidy | #SemBr | #lang/en