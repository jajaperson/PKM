---
tags:
  - public
---
[[Fixed point]]
# Linear stability analysis

**Linear stability analysis** exploits the [[Hartman-Grobman theorem]] to gain insight into the stability of a [[Fixed point|fixed point]] via the vector field's [[Jacobian matrix|Jacobian]] at that point.

## Differential system

Given a [[differential system]] $\dot{\mathbf{x}} = f(\mathbf{x})$ with a fixed point $\mathbf{x}^*$,
the local behaviour at $\mathbf{x}^*$ resembles the linear dynamics of the [[Linear differential system]] $\dot{\mathbf{y}} = Df(\mathbf{x}^*)\, \mathbf{y}$.
Thus if $\mathbf{v}_{i}$ are each eigenvectors of $Df(\mathbf{x}^*)$ with eigenvalues $\lambda_{i}$,
the local behaviour follows
$$
\begin{align*}
\mathbf{y}(t) = \sum c_{i}\mathbf{v}_{i} e^{\lambda_{i}t}
\end{align*}
$$
where

- $\lambda_{i} > 0$ indicates instability along eigendirection $\mathbf{v}_{i}$
- $\lambda_{i} < 0$ indicates stability along eigendirection $\mathbf{v}_{i}$
- $\lambda_{i,j} = \alpha \pm \beta i$ with $\alpha \neq 0$ indicates a spiral in the plane of $\mathbf{v}_{i}$ and $\mathbf{v}_{j}$. $\alpha$ indicates stability
- $\lambda_{i,j} = \pm \beta i$ indicates the fixed point is a [[Centre (dynamics)|linear centre]] but gives no guarantee of a nonlinear centre[^2024]

If any eigenvalues have a real part of zero, the [[Hartman-Grobman theorem]] does not apply and linear stability analysis fails,
since the stability at $\mathbf{x}^*$ depends on higher order terms of the Taylor expansion.[^2022]

[^2022]: 2022\. [[Sources/@datserisNonlinearDynamicsConcise2022|Nonlinear Dynamics: A Concise Introduction Interlaced with Code]], §1.4, pp. 9–12
[^2024]: 2024\. [[Sources/@strogatzNonlinearDynamicsChaos2024|Nonlinear dynamics and chaos: With applications to physics, biology, chemistry, and engineering]], §6.3, p. 170

## Iterated map

Given an [[Iterated map]] $\mathbf{x}_{n+1} = f(\mathbf{x}_{n})$ with a fixed point $\mathbf{x}^*$,
the local behaviour at $\mathbf{x}^*$ resembles that of $\mathbf{x}_{n+1} = Df(\mathbf{x}^*) \, \mathbf{x}_{n}$.
Thus if $\mathbf{v}_{i}$ are each eigenvectors of $Df(\mathbf{x}^*)$ with eigenvalues $\lambda_{i}$,
the local behaviour follows
$$
\begin{align*}
\mathbf{y}_{n} = \sum c_{i} \mathbf{v}_{i} (\lambda_{i})^n
\end{align*}
$$
where

- $\abs{\lambda_{i}} > 1$ indicates instability along eigendirection $\mathbf{v}_{i}$
- $\abs{\lambda_{i}} <1$ indicates stability along eigendirection $\mathbf{v}_{i}$

If any eigenvalues are one, linear stability is insufficent.[^2022a]
In the 1D case,
this can easily be identified by the nature of the intersection between $f$ and $\id$ (which is the defining feature of fixed points).

> [!graph]- Desmos demo
> <iframe src="https://www.desmos.com/calculator/b3nyfb3lbm?embed" width="500" height="500" style="border: 1px solid #ccc" frameborder=0></iframe>

[^2022a]: 2022\. [[Sources/@datserisNonlinearDynamicsConcise2022|Nonlinear Dynamics: A Concise Introduction Interlaced with Code]], §1.4, p. 12

#
---
#state/develop | #lang/en | #SemBr
