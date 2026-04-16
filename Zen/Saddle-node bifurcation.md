---
tags:
  - public
---
[[Bifurcation]]
# Saddle-node bifurcation

The **saddle-node** bifurcation is perhaps the simplest example of a bifurcation in 1D.
It involves the sudden appearance of a non-hyperbolic fixed point, which then splits into a stable and unstable node.
The general form is[^2021]
$$
\begin{align*}
\dot{x} = \mu - x^2
\end{align*}
$$
which has fixed points
$$
\begin{align*}
x^* = \begin{cases}
\pm \sqrt{ \mu } & \mu>0 \\
0 & \mu=0 \\
\text{none} & \mu < 0
\end{cases}
\end{align*}
$$

[^2021]: 2021\. [[Sources/@walkerMATH3021NonlinearDynamics2021|MATH3021: Nonlinear dynamics & chaos]], p. 62


> [!graph]- Bifurcation diagram
> <iframe src="https://www.desmos.com/calculator/njhkthwf33?embed" width="500" height="300" style="border: 1px solid #ccc" frameborder=0></iframe>

#
---
#state/tidy | #lang/en | #SemBr
