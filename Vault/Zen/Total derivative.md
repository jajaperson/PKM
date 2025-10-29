---
tags:
  - public
---
[[Analysis MOC]]
# Total derivative

The **total derivative** of a function $f : X \to Y$ at a point $x$ gives the best _linear_ approximation of $f$ in a neighbourhood of $x$.
Let $U \sube \mathbb{R}^N$ and $V \sube \mathbb{R}^M$ be open,
$x \in U$, and
$f:U \to V$ be  $C^1$ [[Differentiability|differentiable]].
The **total derivative** $Df(x) : \mathbb{R}^N \to \mathbb{R}^M$ at $x$ is the [[linear map]] defined by[^1997] #m/def/anal 
$$
\begin{align*}
Df(x)(\vab a ) = \lim_{ t \to 0 } \frac{f(x+t\vab a)-f(x)}{t}
\end{align*}
$$
For more general spaces, see [[Tangent map]].

  [^1997]: 1997\. [[Sources/@milnorTopologyDifferentiableViewpoint1997|Topology from the differentiable viewpoint]], p. 3


#
---
#state/tidy | #lang/en | #SemBr
