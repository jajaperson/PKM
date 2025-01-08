---
alias: vacuum vector
tags:
  - public
---
[[Graded module]]
# Vacuum space

Let $A$ be a $\mathbb{Z}$-[[Graded algebra|graded]] [[unital associative algebra]][^lie] and $V$ be a [[Graded module|graded]] $A$-[[Module over a unital associative algebra|module]] with the action denoted by $(\odot)$.
A nonzero vector $v \in V$ is called a **vacuum vector** iff $A^+ \odot v = 0$. #m/def/falg 
The **vacuum space** $\Omega_{V}$ consists of all vacuum vectors and zero
$$
\begin{align*}
\Omega_{V} = \{ v \in V : A^+ \odot v = 0 \} = \bigoplus _{i \in \mathbb{Z}} \Omega_{V_{i}}
\end{align*}
$$
and is a [[graded submodule]], i.e. all vacuum vector are linear combinations of homogenous vacuum vectors.[^1988]

> [!check]- Proof
> Let $v \in V$ be a vacuum vector.
> Then for any $x \in A^+$ and $i \in \mathbb{Z}$
> $$
> \begin{align*}
> \pi_{i}(x \odot v) = \sum_{j=1}^\infty \pi_{j}(x) \odot  \pi_{i-j}(v) = 0
> \end{align*}
> $$
> so $\pi_{j}(x) \odot  \pi_{i}(v) = 0$ for all $j > 1$ and $i \in \mathbb{Z}$. <span class="QED"/>
> 

  [^lie]: Or [[Graded Lie algebra]] via the [[Universal enveloping algebra]].

  [^1988]: 1988\. [[Sources/@frenkelVertexOperatorAlgebras1988|Vertex operator algebras and the Monster]], §1.7, p. 23

#
---
#state/tidy | #lang/en | #SemBr
