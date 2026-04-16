---
tags:
  - public
---
[[Bifurcation]]
# Hopf bifurcation

The **Hopf bifurcation** is a 2D analogue to the [[Pitchfork bifurcation]].
It is most easily represented in [[Polar coördinates]],
in which case the radial equation is precisely that of a [[Pitchfork bifurcation]].
For the **supercritical Hopf bifurcation** case[^2021]
$$
\begin{align*}
\dot{r} &= \alpha r - r^3 \\
\dot{\theta} &= \omega
\end{align*}
$$

which in cartesian coördinates becomes

$$
\begin{align*}
\dot{x} &= \alpha x - x^3 - \omega y - xy^2 \\
\dot{y} &= \alpha y+\omega x-x^2y-y^3
\end{align*}
$$

Thus

- For $\mu < 0$ there exists a single stable focus at $\mathbf{x}^* = (0,0)$
- For $\mu = 0$ there exists a [[Centre (dynamics)|nonlinear centre]] at $\mathbf{x}^* = (0,0)$
- For $\mu > 0$ there exists a stable orbit at $r = \sqrt{ \mu }$ enclosing an unstable focus $\mathbf{x}^* = (0,0)$

Visually,
a stable focus ejects a stable orbit around itself and becomes stable,
In the **subcritical Hopf bifurcation**, the roles are swapped:
An unstable orbit contracts around a stable focus to produce an unstable focus.

[^2021]: 2021\. [[Sources/@walkerMATH3021NonlinearDynamics2021|MATH3021: Nonlinear dynamics & chaos]], pp. 68–70

## Hopf bifurcation theorem

Let $\dot{x} = f(x,y,\mu)$ and $\dot{y}=g(x,y,\mu)$
where $f,g$ are thrice-differentiable in $x, y$ and once-differentiable in $\mu$.
Let $(x^*(\mu), y^*(\mu))$ be a critical point with eigenvalues $\alpha(\mu) \pm i \omega(\mu)$.
If there exists a $\mu^*$ such that

- $\alpha(\mu^*)= 0$
- $\alpha'(\mu^*) \neq 0$
- $Q(x^*, y^*, \mu^*) \neq 0$

where

$$
\begin{align*}
Q(x,y,\mu) &= \frac{1}{16}(f_{xxx} + f_{x y y} + g_{x x y} + g_{y y y}) \\ &\hphantom{=} + \frac{1}{16 \omega(\mu)} (f_{x y}(f_{xx} + f_{yy}) - g_{x y}(g_{x x}+ g_{yy}) - f_{x x}g_{x x} + f_{y y}g_{yy}
\end{align*}
$$

then there is a Hopf bifurcation at $\mu^*$,
which is supercitical for $Q < 0$ and subcritical for $Q > 0$.
#m/thm/dynamics/flow 

> [!missing]- Proof
> #missing/proof

#
---
#state/tidy  | #lang/en | #SemBr
