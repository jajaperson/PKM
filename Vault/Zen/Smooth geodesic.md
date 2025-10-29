---
tags:
  - public
---
[[Differential geometry MOC]]
# Smooth geodesic

On a $C^\alpha$-[[Differentiable manifold|manifold]], there are two ways to go about defining a **[[geodesic]]**:

1. As the _straightest_ path between two points, i.e. tangent vectors are parallel by [[Parallel transport]] using the [[affine connexion]];
2. As a _shortest_ or _extremizing_ path between two points, i.e. a path of maximal or minimal length as defined using the [[Semi-Riemannian manifold|metric tensor]].[^2024]

Note that the latter only makes sense for a path which is definite, i.e. the line element is strictly positive or strictly negative.[^1]
When the connexion used is the [[Levi-Civita connexion]], these notions coïncide.[^2]

  [^2024]: 2024\. [[Sources/@grassoGeneralRelativityWorkshop2024|General relativity workshop notes]], §7, pp. 52–56.

## Straightest path

Let $M$ be a $C^\alpha$-[[Differentiable manifold|manifold]] equipped with an [[affine connexion]] $\nabla$.
Consider a smooth path 
$$
\begin{align*}
\gamma :I \to M : \lambda \mapsto \gamma(\lambda)
\end{align*}
$$
with $\dot{\gamma} = \mathrm{d}\gamma / \mathrm{d} \lambda$.
We say $\gamma$ is a geodesic iff its tangent vectors are related by [[parallel transport]] along $\gamma$, i.e.
$$
\begin{align*}
\dot{\gamma}^a \nabla_{a} \dot{\gamma}^b = 0.
\end{align*}
$$
all along $\gamma$.
In [[Coördinate chart|local coördinates]] $x : U \to M$ we therefore have
$$
\begin{align*}
\ddot x^\alpha + \Gamma^\alpha{}_{\mu\nu} \, \dot{x}^\mu \, \dot{x}^\nu = 0.
\end{align*}
$$

## Extremizing path

Let $(M, g_{ab})$ be a [[semi-Riemannian manifold]].
Consider a definite smooth path 
$$
\begin{align*}
\gamma : [0,1] &\to M : \lambda \mapsto \gamma(\lambda)
\end{align*}
$$
and let
$$
\begin{align*}
\dot{f} := \frac{\mathrm{d}}{\mathrm{d}\lambda} f(\gamma(\lambda))
\end{align*}
$$
for any smooth function $f : M \to N$.
The path $\gamma$ induces a 1-dimensional pullback metric on $[0,1]$ so that in [[Coördinate chart|local coördinates]] $x : U \to \mathbb{R}^m$ we have
$$
\begin{align*}
\mathrm{d} s^2= g_{\mu\nu} \, \dot{x}^\mu \, \dot{x}^\nu \, \mathrm{d}\lambda^2
\end{align*}
$$
where everything is a function of $\lambda$.
Since $\gamma$ is definite, without loss of generality we may assume that the factor in front of $\mathrm{d}\lambda^2$ is nonnegative.[^3]
We may thus define the length functional
$$
\begin{align*}
\mathscr{L}[\gamma] = \int_{\lambda \in [0,1]} \mathrm{d} s = \int_{\lambda \in [0,1]} \sqrt{ g_{\mu\nu} 
\, \dot{x}^\mu \, \dot{x}^\nu
} \, \mathrm{d}\lambda
= \int _{\lambda \in[0,1]} L \,  d\lambda 
\end{align*}
$$
where we have introduced the [[Action functional|Lagrangian]] function
$$
\begin{align}
L = L\left( (x^\mu), \left( \frac{\mathrm{d}x^\mu}{\mathrm{d}\lambda} \right)  \right) := \sqrt{ g_{\mu\nu} 
\, \dot{x}^\mu \, \dot{x}^\nu
}.
\end{align}
$$
We wish to find the extermizing path for the functional $\mathscr{L}$.

By the [[Fundamental theorem of calculus]], it is clear that $L = \mathrm{d}s / \mathrm{d}\lambda$ and thus for $f = f(s(\lambda))$ we have
$$
\begin{align*}
\dot{f} = \frac{\mathrm{d}f}{\mathrm{d}s} \frac{\mathrm{d}s}{\mathrm{d}\lambda} = \frac{\mathrm{d}f}{\mathrm{d}s} L .
\end{align*}
$$
It follows from the [[Path Lagrangian#Euler-Lagrange equations]] that
$$
\begin{align*}
\frac{ \partial L }{ \partial x^\alpha } - \frac{\mathrm{d}}{\mathrm{d}\lambda} \frac{ \partial L }{ \partial (\mathrm{d}x^\alpha / \mathrm{d}\lambda) } = 0.
\end{align*}
$$
For the partial derivatives with respect to $x^\alpha$ we have
$$
\begin{align*}
\frac{ \partial L }{ \partial x^\alpha } 
&= - \frac{1}{2L} \frac{\partial g_{\mu\nu}}{\partial x^\alpha} \,\dot{x}^\mu \, \dot{x}^\nu = -\frac{L}{2} \frac{\partial g_{\mu\nu}}{\partial x^\alpha} \, \frac{\mathrm{d}x^\mu}{\mathrm{d}s} \frac{\mathrm{d}x^\nu}{\mathrm{d}s}.
\end{align*}
$$
For the partial derivatives with respect to $\dot{x}^\alpha$ we note
$$
\begin{align*}
\frac{\mathrm{d}}{\mathrm{d} \dot{x}^\alpha} [g_{\mu\nu} \, \dot{x}^\mu \,\dot{x}^\nu] &= g_{\mu\nu} \left( \dot{x}^\mu \, \delta^\nu_{\alpha} + \dot{x}^\nu \delta^\mu_{\alpha} \right)  =2g_{\alpha\mu} \,\dot{x}^\mu
\end{align*}
$$
by the product rule and thus
$$
\begin{align*}
\frac{ \partial L }{ \partial \dot{x}^\alpha } = -\frac{1}{L} g_{\alpha\mu} \, \dot{x}^\alpha.
\end{align*}
$$
Differentiating with respect to $\lambda$ and eliminating instances of $L$ using derivatives with respect to $s$, we have
$$
\begin{align*}
- \frac{\mathrm{d}}{\mathrm{d}\lambda} \left( \frac{ \partial L }{ \partial \dot{x}^\alpha }  \right) 
&= \frac{\mathrm{d}}{\mathrm{d}\lambda} \left( \frac{1}{L} g_{\alpha\mu} \, \dot{x}^\alpha \right) 
= \frac{\mathrm{d}}{ds} \left( g_{\alpha\mu} \frac{\mathrm{d}x^\mu}{\mathrm{d}s} \right) \, L \\
&= \left( g_{\alpha\mu} \frac{\mathrm{d}^2 x^\mu}{\mathrm{d}s^2} + \frac{\mathrm{d}g_{\alpha\mu}}{\mathrm{d}s} \frac{\mathrm{d} x^\mu}{\mathrm{d}s} \right) \, L \\
&= \left( g_{\alpha\mu} \frac{\mathrm{d}^2 x^\mu}{\mathrm{d}s^2} + \frac{\partial g_{\alpha\mu}}{\partial x^\nu} \frac{\mathrm{d}x^\mu}{\mathrm{d}s} \frac{\mathrm{d}x^\nu}{\mathrm{d}s} \right) \, L \\
&= \left( g_{\alpha \mu} \frac{\partial^2x^\mu}{\partial s^2} + \frac{1}{2}\left( \frac{\partial g_{\alpha\mu}}{\partial x^\nu} + \frac{\partial  g_{\alpha\nu}}{\partial x^\mu} \right) \frac{\mathrm{d}x^\mu}{\mathrm{d}s} \frac{\mathrm{d}x^\nu}{\mathrm{d}s} \right) \, L.
\end{align*} 
$$
Thus the Euler-Lagrange equations say
$$
\begin{align*}
0 &= \left( g_{\alpha \mu} \frac{\mathrm{d}^2x^\mu}{\mathrm{d}s^2} + \frac{1}{2}\left( \frac{\partial g_{\alpha\mu}}{\partial x^\nu} + \frac{\partial g_{\alpha\nu}}{\partial x^\mu} \right) \frac{\mathrm{d}x^\mu}{\mathrm{d}s} \frac{\mathrm{d}x^\nu}{\mathrm{d}s} \right) \, L -\frac{L}{2} \frac{\partial g_{\mu\nu}}{\partial x^\alpha} \, \frac{\mathrm{d}x^\mu}{\mathrm{d}s} \frac{\mathrm{d}x^\nu}{\mathrm{d}s}.
\end{align*}
$$
We divide out by $L$ to get
$$
\begin{align*}
g_{\alpha\mu} \frac{\mathrm{d}^2x^\mu}{\mathrm{d}s^2} &= \frac{1}{2}\left( \frac{ \partial g_{\mu\nu} }{  \partial x^\alpha } - \frac{ \partial g_{\alpha\mu} }{ \partial x^\nu } - \frac{ \partial g_{\alpha\nu} }{ \partial x^\mu }    \right) \frac{\mathrm{d}x^\mu}{\mathrm{d}s} \frac{\mathrm{d}x^\nu}{\mathrm{d}s} \\
\end{align*}
$$
and raising indices gives
$$
\begin{align*}
\frac{\mathrm{d}^2x^\alpha}{\mathrm{d}s^2} + \Gamma^\alpha{}_{\mu\nu} \frac{\mathrm{d}x^\mu}{\mathrm{d}s} \frac{\mathrm{d}x^\nu}{\mathrm{d}s} = 0
\end{align*}
$$
where the [[Christoffel symbols]] are defined by
$$
\begin{align*}
\Gamma_{\alpha\mu\nu} = \frac{1}{2}\left(  \frac{ \partial g_{\alpha\mu} }{ \partial x^\nu } + \frac{ \partial g_{\alpha\nu} }{ \partial x^\mu }   - \frac{ \partial g_{\mu\nu} }{  \partial x^\alpha } \right) .
\end{align*}
$$


#
---
#state/develop | #lang/en | #SemBr

[^1]: In the context of relativity, this corresponds to a timelike or spacelike worldline.
[^2]: This motivates the choice of connexion as the physical one.
[^3]: Otherwise we can just negate the metric.
