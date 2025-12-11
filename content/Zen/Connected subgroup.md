---
tags:
  - public
---
[[Topological group]]
# The connected component of the identity is a normal subgroup

Let $G$ be a [[Topological group]] and $[e]_{\sim} \sube G$ be the (path) [[Connectedness|connected component]] containing the identity $e$, where $\sim$ is the (path) connectedness relation.
Then $G_{e} = [e]_{\sim} \trianglelefteq G$ is a [[normal subgroup]] of $G$,
called the (path) **connected subgroup** of $G$ #m/thm/group

> [!check]- Proof
> $e \in G_{0}$ by construction.
> Let $a, b \in [e]_{\sim}$, so $a \sim b \sim e$.
> We will use [[Main theorem of connectedness|The continuous image of a connected space is connected]].
> $(-)^{-1}$ so continuous $b^{-1} \sim e^{-1} \sim e \sim b$.
> Right-multiplication by $b^{-1}$ is continuous so $ab^{-1} \sim bb^{-1} = e$.
> Thus $ab^{-1} \in [e]_{\sim}$,
> and $[e]_{\sim}$ is a subgroup by [[Subgroup#One step subgroup test]].
> For any $x \in G$, conjugation by $x$ is continuous.
> Hence $xyx^{-1} \sim x e x^{-1} = e$ for any $y \in [e]_{\sim}$.
> Therefore $[e]_{\sim} \trianglelefteq G$ is a [[normal subgroup]].
> <span class="QED"/>

## Properties

1. The cosets of $G_{e}$ are the [[Connectedness|connected components]] of $G$, i.e. $h[g]_{\sim} = [hg]_{\sim}$ ^P1

> [!check]- Proof of 1
> Since multiplication is continuous and hence preserves connected components
> $$
> \begin{align*}
> h \sim g &\iff g^{-1}h \sim g^{-1}g = e \\
> &\iff g^{-1}h \in G_{e}\\
> &\iff h \in g G_{e}
> \end{align*}
> $$
> proving [[#^P1]].
> <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr 