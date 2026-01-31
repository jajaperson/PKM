---
tags:
  - public
---
[[Algebra homomorphism]]
# Kernel of an algebra homomorphism

The **kernel** $\ker f$ of an [[algebra homomorphism]] $f : A \to B$ over a field $\mathbb{K}$ is simply its [[linear kernel]], #m/def/falg 
i.e. $\ker f = f^{-1} \{ 0 \}$.
The kernel is necessarily a (two-sided) [[algebra ideal]] of $A$.

> [!check]- Proof
> Let $k \in K = \ker f$, so that $f(k) = 0$.
> Then for any $a \in A$, 
> $$
> \begin{align*}
> f(a \cdot k) = f(a) \cdot f(k) = f(a) \cdot 0 = 0 \\
> f(k \cdot a) = f(k) \cdot f(a) = 0 \cdot f(a) = 0
> \end{align*}
> $$
> so $K \trianglelefteq A$ is a two-sided [[algebra ideal]] of $A$. <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr
