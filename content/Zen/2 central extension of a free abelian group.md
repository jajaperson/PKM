---
tags:
  - public
---
[[Cyclic central extension of a free abelian group]]
# 2 central extension of a free abelian group

Let $A = \mathbb{Z}^S$ be a [[Free module|free abelian group]] of finite [[Rank of a module|rank]],
and let
$$
\begin{align*}
1 \to 2 \stackrel{\exp}{\hookrightarrow} \hat{A} \stackrel{\pi}\twoheadrightarrow A \to 1
\end{align*}
$$
be a [[Cyclic central extension of a free abelian group|central extension]] with [[Central extension of an abelian group|associated commutator map]] $c_{0} : A \times A \to 2$,
where $\pi(x) = \overline{x}$

## Properties
### Induced extraspecial 2-group
Now $\check A = A / 2A$ is an [[Elementary abelian group|elementary abelian]] [[p-group|2-group]], 
and we have an induced $\mathbb{Z}_{2}$-[[bilinear form]]
$$
\begin{align*}
c_{1}: \check A \times \check A \to \mathbb{Z}_{2}
\end{align*}
$$
By [[Correspondence between quadratic forms and alternating bilinear forms at 2]] we have a quadratic form
$$
\begin{align*}
q_{1} : \check A \to \mathbb{Z}_{2}
\end{align*}
$$
with pullback
$$
\begin{align*}
q_{0} : A \to \mathbb{Z}_{2}
\end{align*}
$$
We may then define the [[Centre of a group|central]] subgroup
$$
\begin{align*}
K = \{ x^2 \mathrm{e}^{s_{0}(\overline{x})} : x \in \hat{A} \}
\end{align*}
$$
whence $\widehat{2A} = \mathrm{e}^{\mathbb{Z}_{2}} \times K$ ([[Direct product of groups#Internal direct product]]) is the kernel of the projection $\hat{A} \to \check A$, and
$$
\begin{align*}
1 \to 2 \hookrightarrow \hat{A} / K \to \check A \to 1
\end{align*}
$$
is a central extension with [[2 central extension of an elementary abelian 2-group|associated squaring map]] $q_{1}$,[^5.3.4] #m/thm/group 
thus $\hat{A}/K$ is an [[2 central extension of an elementary abelian 2-group|extraspecial 2-group]].

  [^5.3.4]: 1988\. [[Sources/@frenkelVertexOperatorAlgebras1988|Vertex operator algebras and the Monster]], ¶5.3.4, p. 111

> [!missing]- Proof
> #missing/proof

### Liftings of $-1$

Using [[Cyclic central extension of a free abelian group#Automorphisms|this notation]], a map $\vartheta : \hat{A} \to \hat{A}$ is an automorphism in $\Aut(\hat{A};\mathrm{e})$ such that $\vartheta = -1$ iff
$$
\begin{align*}
\vartheta : x \mapsto x^{-1} \mathrm{e}^{q_{0}(\overline{x})}
\end{align*}
$$
for the pullback $q_{0}$ of some quadratic form $q_{1}$ with polar form $c_{0}$,[^5.4.3]
and we have
$$
\begin{align*}
K &= \{ x^2 \mathrm{e}^{s_{0}(\overline{x})} : x \in \hat{A} \} = \{ x\vartheta(x^{-1}) : x \in \hat{A} \} \\
&= \{ x^{-1}\vartheta(x) : x \in \hat{A} \} = \{ \vartheta(x)x^{-1}: x \in \hat{A} \}
\end{align*}
$$

  [^5.4.3]: 1988\. [[Sources/@frenkelVertexOperatorAlgebras1988|Vertex operator algebras and the Monster]], ¶5.4.3–5.4.4, p. 113
  
> [!missing]- Proof
> #missing/proof

## See also

- [[2 central extension of an elementary abelian 2-group]]

#
---
#state/develop | #lang/en | #SemBr
