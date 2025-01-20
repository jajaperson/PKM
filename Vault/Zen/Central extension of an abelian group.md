---
tags:
  - public
---
[[Central group extension]]
# Central extension of an abelian group

Let $(A, +)$ be an [[abelian group]] and consider a [[Central group extension|central extension]]
$$
\begin{align*}
1 \to B \stackrel \exp \hookrightarrow  \hat{A} \stackrel{\pi}{\twoheadrightarrow}A \to 1
\end{align*}
$$

Then $\hat{A}$ is [[nilpotent group|nilpotent]] with its [[commutator subgroup]] central #m/thm/group 
since
$$
\begin{align*}
[\hat{A},\hat{A}] \trianglelefteq \exp(B) \trianglelefteq Z(\hat{A})
\end{align*}
$$
and given a $\Set$-[[Split epimorphism|section]] $s_{(-)}: A \hookrightarrow \hat{A}$ of $\pi$ we have the **associated commutator map**
$$
\begin{align*}
c_{0} : A \times A &\to B \\
(a,b) &\mapsto \ln[s_{a},s_{b}]
\end{align*}
$$
which is [[Alternating multilinear map|alternating]] $\mathbb{Z}$-[[Multilinear map|bilinear]] and independent of $s_{(-)}$.


## Properties

1. Let $B \leq A$ be a [[subgroup]], and $\hat{B} = \pi^{-1} B$. Then $\hat{B}$ is abelian iff $c_{0}(B,B) = 0$.
2. Consider the radical of $c_{0}$
   $$
  \begin{align*}
  R = \{ a \in A : c_{0}(a,A) = 0 \}
  \end{align*}
  $$
  Then $\hat{R} = Z(\hat{A})$.
3. The [[Central group extension#Correspondence between 2-cocycles and central extensions|associated 2-cycle]] $\varepsilon_{0} : A \times A \to N$ and associated commutator $c_{0} : A \times A \to B$ are related by
   $$
  \begin{align*}
  c_{0}(a,b) = \varepsilon_{0}(a,b) - \varepsilon_{0}(b,a)
  \end{align*}
  $$

> [!missing]- Proof
> #missing/proof

#
---
#state/develop | #lang/en | #SemBr
