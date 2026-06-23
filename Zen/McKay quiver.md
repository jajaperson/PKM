---
aliases: McKay matrix
tags:
  - public
---
[[Representation theory MOC]]
# McKay quiver

The <dfn>McKay quiver</dfn>[^McKay] $\Gamma_{G}(V)$ of $G$ at an $\mathcal{H}$-module $V$ is a [[quiver]] such that #m/def/rep2 

- the vertices of $\Gamma_{V}(G)$ are the simple modules $\{ S_{i} \}_{i=1}^t$;
- the edge set $V_{i} \to V_{j}$ is $\mathbb{N}_{n}$, where $n$ is the multiplicity of $V_{j}$ in the [[Jordan-Hölder series|Jordan-Hölder decomposition]] of $S_{i} \otimes_{\mathbb{K}} V$.

The <dfn>McKay matrix</dfn> $\mathbf{M}_{V}(G)$ is the [[adjacency matrix]] of $\Gamma_{G}(V)$.

[^McKay]: <span class="broad">məˈkaɪ</span>, for [[John McKay]].

## Special cases

### McKay quiver of a Chevalley $\mathbb{K}$-bimonoid at a semisimple module

If $\mathcal{H}$ has the [[Chevalley property]] and $V$ is [[Semisimple module|semisimple]],
then we have
$$
\begin{align*}
S_{i} \otimes V \cong_{\mathcal{H}} \bigoplus _{j =1}^t S_{j}^{\Gamma_{V}(G)(S_{i}, S_{j})}
\end{align*}
$$
which characterizes $\Gamma_{V}(G)$ up to quiver isomorphism.

### McKay quiver of a semisimple $\mathbb{K}$-bimonoid

if $\mathcal{H}$ is semisimple, then the hypotheses of [[#McKay quiver of a Chevalley $ mathbb{K}$-bimonoid at a semisimple module]] always hold.

### McKay quiver of a group in nice characteristic

This is the original case proposed by John McKay.[^1980]
If $\mathcal{H} = \mathbb{K} G$ is a [[Group ring|group algebra]] in “nice characteristic” (i.e. [[Maschke's theorem]] holds),
then in particular the hypothesis of [[#McKay quiver of a semisimple $ mathbb{K}$-bimonoid]] holds.

- [[Spectrum of a McKay quiver of a group]]

[^1980]: 1980\. [[Sources/@mckayGraphsSingularitiesFinite1980|Graphs, singularities, and finite groups]]

#
---
#state/develop | #lang/en | #SemBr
