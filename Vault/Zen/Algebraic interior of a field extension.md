---
tags:
  - public
---
[[Algebraic element]]
# Algebraic interior of a field extension

Let $L:K$ be a [[field extension]].
The **algebraic interior** $(L:K)^\circ$ is the set of all elements of $L$ [[Algebraic element|algebraic]] over $K$,[^1] #m/def/field
moreover this is a field and [[Intermediate field extension|intermediate extension]] so that
$$
\begin{matrix}
L \\
| \\
(L:K)^\circ \\
| \\
K
\end{matrix}
$$
is a tower of field extensions.

> [!check]- Proof
> Suppose $\alpha,\beta \in L$ are algebraic over $K$.
> Then $K(\alpha,\beta)$ is algebraic by [[Field extension of finite type#^P1]],
> so in particular $\alpha\beta^{-1}$ is algebraic. <span class="QED"/>

## Properties

Let $L:K$ be a field extension.

1. If $L$ is [[Algebraically closed field|algebraically closed]], then $\overline{K} = (L:K)^\circ$ is an [[algebraic closure]] of $K$. ^P1

> [!check]- Proof of 1
> The extension $\overline{K} : K$ is tautologically algebraic, so we need only show that $\overline{K}$ is algebraically closed.
> To this end let $\alpha$ be algebraic over $\overline{K}$, so
> $$
> \begin{align*}
> K : \overline{K} : \overline{K}(\alpha)
> \end{align*}
> $$
> and since [[Compositions only of algebraic extensions are algebraic]], $K:K(\alpha)$ is an algebraic extension,
> and in particular $\alpha$ is algebraic over $K$.
> But then $\alpha \in \overline{K}$ by definition of the latter. <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr

[^1]: This is nonstandard terminology which I have not seen used elsewhere, but I like the analogy to [[Algebraic closure]].
