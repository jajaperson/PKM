---
aliases: McKay matrix
tags:
  - public
---
[[Representation theory MOC]]
# McKay graph

Let $G$ be a [[finite group]] and $\mathbb{K}$ be [[Group algebra semisimplicity criterion|of characteristic not dividing $\abs G$]],
and $\{ V_{i} \}_{i=1}^r$ be representative simple $\mathbb{K}[G]$-modules,
where we denote the trivial irrep $V_{1} = \mathbb{C}$.
The **McKay graph** $\Gamma_{W}(G)$ of a $\mathbb{K}[G]$-module $W$ is a [[Graph|pseudomultidigraph]] such that #m/def/rep2

- the vertices of $\Gamma_{W}(G)$ are the irreps $\{ V_{i} \}_{i=1}^r$;
- there exists an edge $V_{i} \to V_{j}$ for every occurrence of $V_{j}$ in the decomposition of $W \otimes_{\mathbb{K}} V_{i}$.[^2021]

The **McKay matrix** $A_{W}(G) = (a_{ij})_{i,j=1}^r$ is then the [[adjacency matrix]] of $\Gamma_{W}(G)$, and we have

$$
\begin{align*}
W \otimes_{\mathbb{K}} V_{i} \cong_{\mathbb{K}[G]} \bigoplus _{j=1}^r \mathbb{C}^{a_{ij}} \otimes V_{j}
\end{align*}
$$

## Properties

- [[Spectrum of a McKay graph]]


  [^2021]: 2021\. [[Sources/@browneConnectivityPropertiesMcKay2021|Connectivity properties of McKay quivers]]

#
---
#state/develop | #lang/en | #SemBr
