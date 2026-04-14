---
tags:
  - public
---
[[Fundamental theorem of calculus]]
# Fundamental theorem for line integrals
The **fundamental theorem for line integrals** is a generalisation of the [[Fundamental theorem of calculus]]
describing vector fields defined as potentials.
It essentially states that the line integral and multivariable gradients are inverse operations.



Let $C$ be a smooth curve with endpoints $\vab a$ and $\vab b$.
Let $f$ be a differentiable function whose gradient $\grad f$ is continuous on $C$.
Then[^2016] #m/thm/calculus 
$$
\int _{C} \vab \nabla f \cdot d\vab r = f(\vab a) - f(\vab b) 
$$

[^2016]: 2016\. [[Sources/@stewartCalculus2016|Calculus]], p. 1127

An important  consequence of this is that if $C$ is _closed_,
then the integral evaluates to $0$.
This is the defining property of a [[Conservative vector field]],
defined as $\grad f$.

#
---
#state/tidy | #lang/en | #SemBr
