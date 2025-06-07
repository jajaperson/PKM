---
tags:
  - public
---
[[Module theory MOC]]
# Noetherian module

A (left) $R$-[[module]] $M$ is (left) **noetherian** iff every [[submodule]] of $M$ is [[Finitely generated module|finitely generated]] as a (left) $R$-module.[^2009] #m/def/module 

## Properties

1. Let $M \in \lMod R$ and $N \leq_{R} M$. Then $M$ is noetherian iff both $N$ and $M / N$ are. ^P1
2. Let $R$ be a [[noetherian ring]] and $M \in \lMod R$ be finitely generated.
   Then $M$ is noetherian. ^P2

> [!check]- Proof
> If $M$ is Noetherian, then so is $M / N$, since any submodule of $M / N$ is just the projection of some submodule of $M$ which is thus finitely generated,
> and so is $N$, since its submodules are also submodules of $M$.
> 
> For the converse, assume $N$ and $M / N$ are Noetherian.
> Given a $P \leq_{R} M$, we need to prove $P$ is finitely generated.
> Since $P \cap N \leq_{R} N$, this is finitely generated.
> By the [[Module isomorphism theorems#Second isomorphism theorem]],
> $$
> \begin{align*}
> \frac{P}{P \cap N} \cong_{R} \frac{P+N}{N} \leq_{R} \frac{M}{N}
> \end{align*}
> $$
> since $\frac{P+N}{N}$ must be finitely generated, so must $\frac{P}{P \cap N}$ be.
> Therefore by [[Finitely generated module#^P1]], $P$ is finitely generated, proving [[#^P1]]. 
> 
> [[#^P2]] is a corollary: Since there is a [[module epimorphism]] $R^{(n)} \twoheadrightarrow M$, the [[Module isomorphism theorems#First isomorphism theorem]] says that $M$ is isomorphic to a quotient of $R^{(n)}$.
> By [[#^P1]] is suffices to show $R^{(n)}$ is noetherian, which we do by induction.
> 
> The statement is true for $n=1$ since $R$ is noetherian.
> For $n > 1$, assume $R^{(n-1)} \leq_{R} R^{(n)}$ is noetherian,
> where
> $$
> \begin{align*}
> \frac{R^{(n)}}{R^{(n-1)}} \cong_{R} R.
> \end{align*}
> $$
> So by [[#^P1]], $R^{(n)}$ is noetherian. <span class="QED"/>

  [^2009]: 2009\. [[Sources/@aluffiAlgebraChapter02009|Algebra: Chapter 0]], §III.6.4, pp. 170–171

#
---
#state/develop | #lang/en | #SemBr
