---
tags:
  - public
---
[[Central extension of an abelian group]]
# Cyclic central extension of a free abelian group

Let $A = \mathbb{Z}[S]$ be a [[Free module|free abelian group]] of finite [[Rank of a module|rank]].
Then there is a bijection between the set of [[Alternating multilinear map|alternating]] $\mathbb{Z}$-[[Multilinear map|bilinear maps]]
$$
\begin{align*}
c_{0} : A \times A \to \mathbb{Z}_{p}^+
\end{align*}
$$
and equivalence classes of [[Central extension of an abelian group|central extensions]]
$$
\begin{align*}
1 \to \mathbb{Z}_{p}^+ \stackrel{\exp}{\hookrightarrow} \hat{A} \stackrel{\pi}{\twoheadrightarrow} A \to 1
\end{align*}
$$
given by taking $c_{0}$ as the [[Central extension of an abelian group|associated commutator map]], and using the [[Central group extension#Correspondence between 2-cocycles and central extensions]].[^1988] #m/thm/group

  [^1988]: 1988\. [[Sources/@frenkelVertexOperatorAlgebras1988|Vertex operator algebras and the Monster]], ¶5.2.3, pp. 106–107

> [!check]- Proof
> That equivalent central extensions determine the same commutator map follows from [[Central extension of an abelian group#^P3]] and [[Central group extension#Correspondence between 2-cocycles and central extensions]].
> 
> Now let
> $$
> \begin{align*}
> c_{0}: A \times A \to \mathbb{Z}_{p}^+
> \end{align*}
> $$
> be an alternating $\mathbb{Z}$-bilinear map and let $S = \{ a_{i} \}_{i=1}^n$.
> Let
> $$
> \begin{align*}
> \varepsilon_{0} : A \times A &\to \mathbb{Z}_{p}^+ \\
> (\alpha_{i},\alpha_{j}) &\mapsto \begin{cases}
> c_{0}(\alpha_{i},\alpha_{j}) & i > j  \\
> 0 & i \leq j
> \end{cases}
> \end{align*}
> $$
> Then $\varepsilon_{0}$ is $\mathbb{Z}$-bilinear and thus a 2-cocycle,
> amd $\varepsilon_{0}(a,b) - \varepsilon_{0}(b,a) = c_{0}(a,b)$.
> By the [[Central group extension#Correspondence between 2-cocycles and central extensions]], there is a central extension of the form above with 2-cocycle $\varepsilon_{0}$ and thus commutator map $c_{0}$.
> 
> Finally let
> $$
> \begin{align*}
> 1 \to \mathbb{Z}_{p}^+ \hookrightarrow B \stackrel{\pi'}\twoheadrightarrow A \to 1
> \end{align*}
> $$
> be a central extension with the same commutator map $c_{0}$.
> Define a $\Set$-section $s_{(-)}$ of $\pi'$ so that
> $$
> \begin{align*}
> s_{(-)} : \sum_{k=1}^n m_{k}a_{k} = \prod_{k=1}^n s_{a_{k}}^{m_{k}}
> \end{align*}
> $$
> Then
> $$
> \begin{align*}
> s_{a}s_{b} = s_{a+b} \mathrm{e}^{\varepsilon_{0}(a,b)}
> \end{align*}
> $$
> for any $a,b \in A$,
> so by the [[Central group extension#Correspondence between 2-cocycles and central extensions]] these extensions are equivalent. <span class="QED"/>
> 

## Properties

- [[Induced extraspecial 2-group of a Z2 extension of a free abelian group]]

## Special cases

- [[Extraspecial 2-group]] (central extension of an elementary abelian 2-group)

#
---
#state/tidy | #lang/en | #SemBr
