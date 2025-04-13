---
aliases:
  - equivalent representation
tags:
  - public
---
[[Group representation theory MOC]]
# Equivalence of representations

Two [[Group representation|group representations]] $\mathfrak{X}, \tilde{\mathfrak{X}}$ of $G$ carried by $V$ and $W$ respectively are **equivalent**, written $\mathfrak{X} \simeq \tilde{\mathfrak{X}}$, iff the following interchangeable conditions hold #m/def/rep2

- there exists a [[natural equivalence]] between $S : \mathfrak{X} \Rightarrow \tilde{\mathfrak{X}} : G \to \Vect_{\mathbb{K}}$;
- there exists a $\mathbb{K}$-linear isomorphism $S : V \to W$ or **intertwiner** such that 
    $$
    \begin{align*}
    \mathfrak{X}(g) = S^{-1}\tilde{\mathfrak{X}}(g)S
    \end{align*}
    $$
    for all $g \in G$;
- $V$ and $W$ are isomorphic as [[Module over a group|$G$-modules]], written $V \cong_{\mathbb{K}[G]} W$.

## Properties

- If $S$ is unitary then it is a [[Unitary equivalence of representations]]
- [[Every finite complex representation of a compact group is equivalent to a unitary representation]]


#
---
#state/tidy | #lang/en | #SemBr
