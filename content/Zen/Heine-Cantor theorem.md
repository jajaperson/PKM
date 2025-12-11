---
tags:
  - public
---
[[Uniform continuity]]
# Heine-Cantor theorem

Let $f : X \to Y$ be a [[Continuity|continuous]] function between [[metric space|metric spaces]] and $X$ be a [[Compact space|compact]].
Then $f$ is [[Uniform continuity|uniformly continuous]]. #m/thm/anal 

> [!check]- Proof
> Let $(X, d_{X})$ and  $(Y, d_{Y})$ be a [[metric space|metric spaces]] with $X$ [[Compact space|compact]],
> with $f : X \to Y$ a [[Continuity|continuous]] mapping between them.
> Let $\epsilon > 0$.
> By continuity, for every $x \in X$ there exists $\delta_{x}(\epsilon) > 0$ such that $f(y) \in \mathrm{B}_{\epsilon / 2}(f(x))$ for all $y \in \mathrm{B}_{\delta_{x}(\epsilon) / 2}(x)$.
> Then the balls $\{ \mathrm{B}_{\delta_{x}(\epsilon) / 2}(x)  : x \in X \}$ form a [[Cover set|open cover]] of $X$,
> so by [[Compact space|compactness]] there must exist a finite set of points $(x_i)_{i=1}^n$ whose balls cover the space,
> i.e. $\{ \mathrm{B}_{\delta_{x_{i}}(\epsilon) / 2}(x_{i}) \}_{i=1}^n$ is a finite subcover.
> Then there exists $\delta(\epsilon) = \min \left\{  \frac{1}{2} \delta_{x_{i}}(\epsilon)   \right\}_{i=1}^n$ since it is the minimum of finitely many positive real numbers.
> 
> Now we will show that $\delta(\epsilon)$ meets the requirements for [[Uniform continuity]].
> Let $x,y \in X$ such that $d_{X}(x,y) < \delta(\epsilon)$.
> Then $x \in \mathrm{B}_{\delta_{x_{i}}(\epsilon) / 2}(x_{i})$ for some $0 \leq i \leq n$.
> Then by the triangle inequality
> $$
> \begin{align*}
> d(x_{i}, y) \leq d(x_{i},x) + d(x, y) < \frac{1}{2} \delta_{x_{i}}(\epsilon) + \delta(\epsilon) \leq \delta_{x_{i}}(\epsilon)
> \end{align*}
> $$
> Therefore $x,y \in \mathrm{B}_{\delta_{x_{i}}(\epsilon)}(x_{i})$ and thus by the original definition of $\delta_{x_{i}}(\epsilon)$ it follows $f(x), f(y) \in \mathrm{B}_{\epsilon/2}(f(x_{i}))$.
> Thus $d(f(x), f(y)) < \epsilon$ as required.
> <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr
