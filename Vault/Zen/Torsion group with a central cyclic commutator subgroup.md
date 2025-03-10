---
tags:
  - public
---
[[Torsion group]]
# Torsion group with a central cyclic commutator subgroup

Let $G$ be a [[torsion group]] with [[Torsion group|exponent]] $s$ such that its [[commutator subgroup]] is [[Centre of a group|central]] and [[Cyclic subgroup|cyclic]]
$$
\begin{align*}
[G,G] \leq Z(G) \cong \mathbb{Z}_{s_{0}}^+
\end{align*}
$$

## Properties

### Representations
If the [[field]] $\mathbb{K}^\times$ contains an $s$th root of unity, and
$$
\begin{align*}
\chi : Z(G) \hookrightarrow \mathbb{K}^\times
\end{align*}
$$
is a [[Faithful representation|faithful]] [[central character]] of $G$, 
then there exists a unique (up to [[Equivalence of representations|equivalence]]) [[irrep]] $\Gamma: G \to \opn{GL}(V)$ with central character $\chi$,
and $\Gamma$ is itself faithful.[^1988] #m/thm/group 
If $A \leq G$ is a maximal [[Abelian group|abelian]] subgroup and $\psi : A \to \mathbb{K}^\times$ is a [[1-dimensional irrep|linear character]] extending $\chi$, then
$$
\begin{align*}
V_{\Gamma} = \Ind^G_{A} \mathbb{K}_{\psi} = G \otimes_{A} \mathbb{K}_{\psi}
\end{align*}
$$
where $V_{\Gamma}$ and $\mathbb{K}_{\psi}$ denote corresponding [[Module over a group|$G$-modules]] and $\Ind^G_{A} \mathbb{K}_{\psi}$ denotes the [[induced module]].
Moreover
$$
\begin{align*}
\dim V = \abs{A / Z(G)} = \abs{G / A} = \sqrt{ \abs{G / Z(G)} }
\end{align*}
$$

[!check]- Proof
Let $Z(G) = \langle \kappa \rangle$ and $V = G / Z(G)$, whence the [[Central extension of an abelian group]]
$$
\begin{align*}
1 \to \mathbb{Z}_{s_{0}}^+ \stackrel \kappa \hookrightarrow G \stackrel \pi \twoheadrightarrow V \to 1
\end{align*}
$$
with [[Central extension of an abelian group|associated commutator map]] $c_{0}: V \times V \to \mathbb{Z}_{s_{0}}$.
Now $c_{0}$ is nondegenerate,
for if $[v, V] = 1$ then


  [^1988]: 1988\. [[Sources/@frenkelVertexOperatorAlgebras1988|Vertex operator algebras and the Monster]], §5.5, p. 118

#
---
#state/develop | #lang/en | #SemBr
