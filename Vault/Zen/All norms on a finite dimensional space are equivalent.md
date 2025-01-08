---
tags:
  - public
---
[[Equivalence of norms]]
# All norms on a finite dimensional space are equivalent

The theorem as stated above holds in general[^con],
but is currently beyond me.
The case for $\mathbb{C}^n$ and $\mathbb{R}^n$ is simpler.

[^con]: See [these lecture notes](https://kconrad.math.uconn.edu/blurbs/gradnumthy/equivnorms.pdf).

## Complex vector space

Any two [[Normed vector space|norms]] $\|\cdot\|_{a}$ and $\|\cdot\|_{b}$ on a finite-dimensional complex vector space $V$ are [[Equivalence of norms|equivalent]]. #m/thm/anal/vec

> [!check]- Proof
> Let $(e_i)_{i=1}^n$ be a [[vector basis]] of $V$, so that any $x \in V$ may be uniquely written as $x = \sum_{i=1}^n x_{i}e_{i}$.
> Let $\|\cdot\|_{1}$ denote the 1-norm $\|x\|_{1} = \sum_{i=1}^n x_{i}$.
> Now we will show that any norm $\|\cdot\|_{a}$ is [[Continuity|continuous]] under $\|\cdot\|_{1}$,
> i.e. for all $\epsilon > 0$ there exists $\delta>0$ such that
> $$
> \begin{align*}
> \|x-y\|_{1} < \delta \implies \abs{\|x\|_{a} - \|y\|_{a}} < \epsilon
> \end{align*}
> $$
> By the [[Reverse triangle inequality]], it is sufficient to show that
> $$
> \begin{align*}
> \|x-y\|_{1} < \delta \implies \|x -y\|_{a} < \epsilon
> \end{align*}
> $$
> Letting $x = \sum_{i=1}^nx_{i}e_{i}$ and $y = \sum_{i=1}^n y_{i}e_{i}$,
> it follows from the triangle inequality of $\|\cdot\|_{a}$ that
> $$
> \begin{align*}
> \|x-y\|_{a} \leq \sum_{i=1}^n |x_{i} - y_{i}| \|e_{i}\|_{a} \leq \|x - y\|_{1} \max_{i=1}^n \|e_{i}\|_{a}
> \end{align*}
> $$
> so
> $$
> \begin{align*}
> \|x-y\|_{1} < \frac{\epsilon}{\max_{i=1}^n \|e_{i}\|_{a}} \implies \|x -y\|_{a} < \epsilon
> \end{align*}
> $$
> Hence $\|\cdot\|_{a}$ is 1-continuous.
> Since the $\|\cdot\|_{1}$ unit sphere is [[Compact space|compact]],
> by the [[Extreme Value Theorem]] $\|\cdot\|_{a}$ has an absolute minimum $a$ and maximum $b$ on this domain.
> Hence
> $$
> \begin{align*}
> a < \|v\|_{a} < b
> \end{align*}
> $$
> for all $v \in V$ with $\|v\|_{1} = 1$.
> Therefore all norms on $V$ are equivalent to $\|\cdot\|_{1}$, and by transitivity equivalent.
> <span class="QED"/>

#
---
#state/develop | #lang/en | #SemBr
