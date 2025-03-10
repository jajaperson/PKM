---
tags:
  - public
aliases:
  - associated commutator map
---
[[Central group extension]]
# Central extension of an abelian group

Let $(A, +)$ be an [[abelian group]] and consider a [[Central group extension|central extension]]
$$
\begin{align*}
1 \to C \stackrel \exp \hookrightarrow  \hat{A} \stackrel{\pi}{\twoheadrightarrow}A \to 1
\end{align*}
$$

Then $\hat{A}$ is [[nilpotent group|nilpotent]] with its [[commutator subgroup]] central #m/thm/group 
since
$$
\begin{align*}
[\hat{A},\hat{A}] \trianglelefteq \exp(C) \trianglelefteq Z(\hat{A})
\end{align*}
$$
and given a $\Set$-[[Split epimorphism|section]] $s_{(-)}: A \hookrightarrow \hat{A}$ of $\pi$ we have the **associated commutator map**
$$
\begin{align*}
c_{0} : A \times A &\to C \\
(a,b) &\mapsto \ln[s_{a},s_{b}]
\end{align*}
$$
which is [[Alternating multilinear map|alternating]] $\mathbb{Z}$-[[Multilinear map|bilinear]] and independent of $s_{(-)}$.[^1988]


  [^1988]: 1988\. [[Sources/@frenkelVertexOperatorAlgebras1988|Vertex operator algebras and the Monster]], §5.2, pp. 104ff.

## Properties

In what follows, if $B \leq A$ is a subgroup let $\hat{B} = \pi^{-1}B$.

1. $\hat{B}$ is abelian iff $c_{0}(B,B) = 0$. ^P1
2. Consider the radical of $c_{0}$
   $$
  \begin{align*}
  R = \{ a \in A : c_{0}(a,A) = 0 \}
  \end{align*}
  $$
  Then $\hat{R} = Z(\hat{A})$. ^P2
3. The [[Central group extension#Correspondence between 2-cocycles and central extensions|associated 2-cycle]] $\varepsilon_{0} : A \times A \to C$ and associated commutator $c_{0} : A \times A \to C$ are related by
   $$
  \begin{align*}
  c_{0}(a,b) = \varepsilon_{0}(a,b) - \varepsilon_{0}(b,a)
  \end{align*}
  $$
  that is, $c_{0}$ is the antisymmetrization of $\varepsilon_{0}$. ^P3

> [!check]- Proof
> Note $\hat{B} = s_{B}\mathrm{e}^C$, and $[s_{B} \mathrm{e}^C, \mathrm{s}_{B} \mathrm{e}^C] = [s_{B}, s_{B}]$,
> from which one easily verifies [[#^P1]].
> 
> Assume $s_{a}\mathrm{e}^p \in \hat{R}$, so $a \in R$.
> Then $c_{0}(a, A) = \ln[s_{a}, s_{A}] = 0$.
> Given any $s_{b}\mathrm{e}^q \in \hat{A}$, 
> $$
> \begin{align*}
> s_{a}\mathrm{e}^p s_{b}\mathrm{e}^q = \mathrm{e}^q s_{a}s_{b}\mathrm{e}^p = \mathrm{e}^q s_{b}s_{a}\mathrm{e}^p = s_{b}\mathrm{e}^q s_{a} \mathrm{e}^p
> \end{align*}
> $$
> so $s_{a} \mathrm{e}^p \in Z(\hat{A})$.
> Similarly, if $s_{a} \in Z(\hat{A})$ then $c_{0}(a,A) = \ln[s_{a}, A] = 0$.
> Therefore $\hat{R} = Z(\hat{A})$, proving [[#^P2]].
> 
> Finally, noting that $\exp$ is a [[group monomorphism]], 
> $$
> \begin{align*}
> \mathrm{e}^{c_{0}(a,b)} &= [s_{a},s_{b}] = s_{a}s_{b} s_{a}^{-1}s_{b}^{-1} \\
> &= s_{a+b} \mathrm{e}^{\varepsilon_{0}(a,b)} s_{b+a}^{-1}\mathrm{e}^{-\varepsilon_{0}(b,a)} \\
> &= \mathrm{e}^{\varepsilon_{0}(a,b)-\varepsilon_{0}(a,b)}
> \end{align*}
> $$
> proving [[#^P3]]. <span class="QED"/>



## Special cases

- [[Cyclic central extension of a free abelian group]]
  - [[2 central extension of a free abelian group]]
- [[2 central extension of an elementary abelian 2-group]] (includes extraspecial 2-groups)

#
---
#state/tidy | #lang/en | #SemBr
