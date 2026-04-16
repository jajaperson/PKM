---
tags:
  - public
---
[[Dynamics MOC]]
# Lotka-Volterra model of competition

The **Lotka-Volterra** model is a model for competition between two species over the same food resource,
ignoring other complications such as predators and season.
The general form is the [[Differential system]]
$$
\begin{align*}
\dot{x} &= \alpha x + \beta xy = x(\alpha + \beta y) \\
\dot{y} &= \gamma y +  \delta xy = y(\gamma + \delta x)
\end{align*}
$$
which is linearized by the Jacobian
$$
\begin{align*}
Df(x,y) = \begin{bmatrix}
\alpha + \beta y & \beta x \\
\delta y & \gamma + \delta x
\end{bmatrix}
\end{align*}
$$


## Practice problems

- 2024\. [[Sources/@strogatzNonlinearDynamicsChaos2024|Nonlinear dynamics and chaos: With applications to physics, biology, chemistry, and engineering]], p. 198

#
---
#state/develop | #lang/en | #SemBr
