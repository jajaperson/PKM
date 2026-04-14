---
tags:
  - public
---
[[Group order]]
# Cauchy's order theorem

Let $G$ be a [[finite group]] and $p$ be a prime dividing $\abs G$.
Then $G$ has an element of order $p$.^[[[MATH4031]]] #m/thm/group 


> [!check]- Proof via permutation groups (James McKay)
> Let
> $$
> \begin{align*}
> \Omega = \{ (g_{1}, \dots, g_{p}) \in G^p : g_{1} \cdots g_{p} = 1 \}
> \end{align*}
> $$
> Note $\Omega$ is closed under the natural action of $\mathrm{C}_{p} \leq \mathrm{S}_{p}$, 
> since if $g_{1} \cdots g_{p} = 1$, then $g_{1}^{-1} g_{1} \cdots g_{p}g_{1} = 1$.
> 
> By the [[Orbit-stabilizer theorem]], a $\mathrm{C}_{p}$-orbit in $\Omega$ has size 1 or $p$.
> For an element to have an orbit of size 1, it must have order 1 or $p$.
> 
> Furthermore, $\abs \Omega = \abs{G}^{p-1}$, by basic combinatorics (the first $p-1$ choices are free).
> 
> It follows that the number of orbits of size 1 is divisible by $p$, and hence there exists more than 1 orbit of size 1.
> Since only one of these may be the repeated identity,
> it follows there exists at least one element of order $p$.
> 


#
---
#state/tidy | #lang/en | #SemBr
