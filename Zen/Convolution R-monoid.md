---
date: 2026-07-20
mathLink: convolution $\mathcal{K}$-monoid
tags:
  - public
---
[[Hopf theory MOC]]
# Convolution $\mathcal{K}$-monoid

Suppose $\Red$ is a [[R-comonoid]] and $\Blue$ is a [[R-monoid]].
Then the [[convolution monoid]] $\Red \multimap \Blue := \lMod{\mathcal{K}}(\Red, \Blue)$ is in fact a [[R-monoid]], #m/thm/ralg/hopf 
i.e. the multiplication is $\mathcal{K}$-bilinear.

> [!check]- Proof
> We prove linearity in the left argument, linearity in the right argument is similar.
> Let $f,g,h$ and $\alpha,\beta \in \mathcal{K}$.
> Then for $x \in \Red$, we have
> $$
> \begin{align*}
> [(\alpha f + \beta g) * h](x) &= \sum_{(x)} (\alpha f x_{(1)} + \beta gx_{(1)}) \cdot hx_{(2)} \\
> &= \sum_{(x)} \alpha f x_{(1)} \cdot hx_{(2)} + \sum_{(x)} \beta gx_{(1)} \cdot hx_{(2)} \\
> &= [\alpha (f * h) + \beta (g*h)](x)
> \end{align*}
> $$
> as required.
> <span class="QED"/>

In the special case where $\Blue = \mathcal{K}$, we get the [[Dual R-monoid of an R-comonoid|dual $\mathcal{K}$-monoid]] $\Red^*$.

#
---
#state/tidy | #lang/en | #SemBr
