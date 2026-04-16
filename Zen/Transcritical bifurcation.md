---
tags:
  - public
---
[[Bifurcation]]
# Transcritical bifurcation

The **transcritical bifurcation** occurs when one node collides and passes over another,
in the process swapping stabilities.

## Flows

The canonical form is
$$
\begin{align*}
\dot{x} = \mu x -x^2 = x(\mu-x)
\end{align*}
$$
with fixed points $x^*_{1} = 0$ and $x^*_{2}=\mu$.
With this setup,

- $\mu<0$ has $x^*_{1} = 0$ stable and $x^*_{2} = \mu$ unstable
- $\mu = 0$ has $x^*_{1} = x^*_{2} = 0$ non-hyperbolic
- $\mu > 0$ has $x^*_{1} = 0$ unstable and $x^*_{2}= \mu$ stable

> [!graph]- Bifurcation diagram
> <iframe src="https://www.desmos.com/calculator/tivzbctv9s?embed" width="500" height="400" style="border: 1px solid #ccc" frameborder=0></iframe>


## Maps

The canonical form is

$$
\begin{align*}
M(x) = \mu x + x^2
\end{align*}
$$

#
---
#state/develop | #lang/en | #SemBr
