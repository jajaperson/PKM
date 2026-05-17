---
tags:
  - public
---
[[Homotopy theory MOC]]
# Fundamental groupoid

The **fundamental groupoid** $\pi_{1} X$ of a topological space $X$ is a [[groupoid]] where

- $\Ob(\pi_{1} X) = X$
- $\pi_{1}X (x,y)$ is the set of [[Homotopy of paths|homotopy classes of paths]] from $x$ to $y$

which is a quotient category of the [[Category of paths]].

> [!check]- Proof of groupoid
> Let $x,y,z \in X$.
> If $\alpha : x \rightsquigarrow y$ and $\beta: y \rightsquigarrow z$ are [[Continuous path|paths]],
> then their concatenation $\alpha \cdot \beta : x \rightsquigarrow z$ is a continuous path given by
> $$
> \begin{align*}
> \alpha \cdot \beta (t) = \begin{cases}
> \alpha(2t) & t \leq \frac{1}{2} \\
> \beta(2t-1) & t\geq \frac{1}{2}
> \end{cases}
> \end{align*}
> $$
> Likewise the reverse traversal of a path $\alpha^{-1} : y \rightsquigarrow x$ is a path given by $t \mapsto \alpha(t-1)$.
> Now consider [[Homotopy of paths|homotopy classes of paths]] using the [[Path traversal lemma]].
> Define
> $$
> \begin{align*}
> \phi(t) = \begin{cases}
> 2t & 0 \leq t \leq \frac{1}{4} \\
> \frac{1}{4} + t & \frac{1}{4} \leq t \leq \frac{1}{2} \\
> \frac{1}{2} + \frac{1}{2}t & \frac{1}{2}\leq t \leq 1
> \end{cases}
> \end{align*}
> $$
> Then $(\alpha \cdot \beta) \cdot \gamma = (\alpha \cdot (\beta \cdot \gamma)) \circ \phi \simeq \alpha \cdot (\beta \cdot \gamma)$.
> Hence concatenation is associative up homotopy.
> Similar arguments can be made for $[\alpha][\alpha^{-1}]$ and $[\alpha][cT]$.
> <span class="QED"/

## Properties

- [[Seifert-Van Kampen-Brown theorem]]

#
---
#state/tidy | #lang/en | #SemBr
