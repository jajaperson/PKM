---
tags:
  - public
---
[[Nilpotent Lie algebra]]
# Engel's theorem

Let $\mathfrak{g}$ be a finite-dimensional [[Lie algebra]].
Then $\mathfrak{g}$ is a [[nilpotent Lie algebra]] iff all elements are [[Adjoint Lie algebra representation#^nilpotent]].[^1972] #m/thm/lie 

> [!check]- Proof
> Let $\mathfrak{g}_{[0]}$ be a Lie algebra with all elements $\ad$-nilpotent.
> Since $\ad_{\mathfrak{g}_{[0]}} \leq \mathfrak{gl}(\mathfrak{g}_{[0]})$ is a [[Lie algebra of nilpotent endomorphisms]], there exists some nonzero $x \in \mathfrak{g}_{[0]}$ such that $[\mathfrak{g}_{[0]},x] = 0$,
> i.e. the [[Centre of a Lie algebra|centre]] $\mathfrak{z}(\mathfrak{g}_{[0]}) \neq 0$. 
> 
> Thus $\mathfrak{g}_{[1]} = \mathfrak{g}_{[0]} / \mathfrak{z}(\mathfrak{g}_{[0]})$ has all elements $\ad$-nilpotent and is of smaller dimension. 
> We can repeat the process, and eventually it must bottom out with  $\mathfrak{z}(\mathfrak{g}_{[k]})= \mathfrak{g}_{[k]}$;
> thus by [[Nilpotent Lie algebra#^P2]] $\mathfrak{g}_{[k-1]}$ is nilpotent,
> and so on all the way back to $\mathfrak{g}_{[0]}$.
> 
> For the converse, assume $\mathfrak{g}$ is nilpotent, say $\mathfrak{g}_{n} = 0$.
> Then $(\ad_{x})^n = 0$, as required. <span class="QED"/>

  [^1972]: 1972\. [[Sources/@humphreysIntroductionLieAlgebras1972|Introduction to Lie Algebras and Representation Theory]], §3.3, pp. 12–13



#
---
#state/tidy | #lang/en | #SemBr
