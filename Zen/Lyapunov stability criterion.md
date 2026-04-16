---
tags:
  - public
---
[[Fixed point]]
# Lyapunov stability criterion

Let $x^*$ be a [[Fixed point]] with neighbourhood $U$ of a [[differential system]] $\dot{x} = f(x)$
and let $V : U \to \mathbb{R}^n$ be [[Differentiability|differentiable]] with $V(x^*)=0$ as a minimum in $U$.
Denote $\dot{V}(x) = DV(x) f(x)$.
Then[^2024][^2021] #m/thm/dynamics/flow 

- $x^*$ is **asymptotically stable** if $\dot{V}(x) < 0$ for all $x \in U \setminus \{ x^* \}$
- $x^*$ is **Lyapunov stable** if $\dot{V}(x) \leq 0$ for all $x \in U \setminus \{ x^* \}$
- $x^*$ is **Lyapunov unstable** if $\dot{V}(x) \geq 0$ for all $x \in U \setminus \{ x^* \}$
- $x^*$ is **asymptotically unstable** if $\dot{V}(x) > 0$ for all $x \in U \setminus \{ x^* \}$

> [!missing]- Proof
> #missing/proof

[^2021]: 2021\. [[Sources/@walkerMATH3021NonlinearDynamics2021|MATH3021: Nonlinear dynamics & chaos]], p. 49
[^2024]: 2024\. [[Sources/@strogatzNonlinearDynamicsChaos2024|Nonlinear dynamics and chaos: With applications to physics, biology, chemistry, and engineering]], §7.2, pp. 224–225

#
---
#state/develop | #lang/en | #SemBr
