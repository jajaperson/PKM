---
mathLink: Abelian groups as $\mathbb Z$-modules
tags:
  - public
---
[[Module theory MOC]]
# Abelian groups as $\mathbb{Z}$-modules

The notions of [[abelian group]] and $\mathbb{Z}$-[[module]] agree, as well as the corresponding notions of homomorphism.
In fact, [[Category of abelian groups]] and [[Category of modules over a commutative ring|$\lMod{\mathbb Z}$]] are [[Isomorphism of categories|isomorphic categories]]. #m/thm/module 

> [!check]- Proof
> First note that every $\mathbb{Z}$-module is an abelian group under addition by definition,
> and every $\mathbb{Z}$-linear map is a group homomorphism.
> Thus there exists a “forgetful functor” (which turns out not to be forgetting anything)
> $$
> \begin{align*}
> F : \lMod{\mathbb{Z}} \to \Ab
> \end{align*}
> $$
> Now every abelian group $A$ admits a $\mathbb{Z}$-action, where for $a \in A$ and $n \in \mathbb{Z}$ we say
> $$
> \begin{align*}
> n \cdot a = \begin{cases}
> \sum^n a & n > 0 \\
> \sum^n -a & n < 0 \\
> 0 & n=0
> \end{cases}
> \end{align*}
> $$
> which is easily verified to satisfy all properties of a $\mathbb{Z}$-[[module]].
> Thus we have a functor
> $$
> \begin{align*}
> G : \Ab \to \lMod{\mathbb{Z}}
> \end{align*}
> $$
> where $FG = 1_{\Ab}$ and $GF = 1_{\lMod{\mathbb{Z}}}$, hence the categories are isomorphic. <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr
