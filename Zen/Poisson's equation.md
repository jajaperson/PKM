---
tags:
  - public
---
[[Differential equations MOC]]
# Poisson's equation

**Poisson's equation** is a non-homogeneous generalization of [[Laplace's equation]]
$$
\begin{align*}
\nabla^2 f = \varphi
\end{align*}
$$
where $\nabla^2$ is the [[Laplacian]].

## Solution

Assume $\varphi$ has compact [[Support of a map|support]].
Let $\nabla^2f_{H}=0$ solve [[Laplace's equation]]. 
Invoking [[Green's function for the Laplacian]] $G$,
solutions take the form
$$
\begin{align*}
f(\vab r) = (G * \varphi)(\vab r) = - \frac{1}{4\pi} \iiint_{\mathbb{R}^3} \frac{\varphi(\vab r')}{\Sr}\,d\tau'
\end{align*}
$$
where $\Sr = \|\vab r - \vab r'\|$.

#
---
#state/develop | #lang/en | #SemBr
