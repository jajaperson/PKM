---
mathLink: Induced extraspecial 2-group of a $\mathbb{Z}_{2}$ extension of a free abelian group
tags:
  - public
---
[[Cyclic central extension of a free abelian group]]
# Induced extraspecial 2-group of a $\mathbb{Z}_{2}$ extension of a free abelian group

Let $A = \mathbb{Z}[S]$ be a [[Free module|free abelian group]] of finite [[Rank of a module|rank]],
and let
$$
\begin{align*}
1 \to \mathbb{Z}_{2}^+ \stackrel{\exp}{\hookrightarrow} \hat{A} \stackrel{\pi}\twoheadrightarrow A \to 1
\end{align*}
$$
be a [[Cyclic central extension of a free abelian group|central extension]] with [[Central extension of an abelian group|associated commutator map]] $c_{0} : A \times A \to \mathbb{Z}_{2}^+$.
Now $\check A = A / 2A$ is an [[Elementary abelian group|elementary abelian]] [[p-group|2-group]], 
and we have an induced $\mathbb{Z}_{2}$-[[bilinear form]]
$$
\begin{align*}
c_{1}: \check A \times \check A \to \mathbb{Z}_{2}
\end{align*}
$$
By [[Correspondence between quadratic forms and alternating bilinear forms in characteristic 2]] there exists a quadratic form
$$
\begin{align*}
s_{1} : \check A \to \mathbb{Z}_{2}
\end{align*}
$$
with pullback
$$
\begin{align*}
s_{1} : A \to \mathbb{Z}_{2}
\end{align*}
$$
We may then define the [[Centre of a group|central]] subgroup
$$
\begin{align*}
K = \{ a^2 \mathrm{e}^{s_{0}(\pi a)} : a \in \hat{A} \}
\end{align*}
$$
whence $\widehat{2A} = \mathrm{e}^{\mathbb{Z}_{2}} \times K$ ([[Direct product of groups#Internal direct product]]) is the kernel of the projection $\hat{A} \to \check A$, and
$$
\begin{align*}
1 \to \mathbb{Z}_{2}^+ \hookrightarrow \hat{A} / K \to \check A \to 1
\end{align*}
$$
is a central extension with [[Extraspecial 2-group|associated squaring map]] $s_{1}$.[^1988] #m/thm/group 

  [^1988]: 1988\. [[Sources/@frenkelVertexOperatorAlgebras1988|Vertex operator algebras and the Monster]], ¶5.3.4, p. 111

> [!missing]- Proof
> #missing/proof

#
---
#state/develop | #lang/en | #SemBr
