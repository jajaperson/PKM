---
tags:
  - public
---
[[Infinitesimal calculus MOC]]
# Lagrange multiplier
Lagrange multipliers are an _optimisation technique_
under a constraint
particularly useful when it is impossible or difficult 
to reduce the function to be optimised to a single variable function.
It forms the basis of the [[Lagrangian function]].[^2022]

[^2022]: 2022\. [[Sources/@bassomMATH1011MultivariableCalculus2022|MATH1011: Multivariable calculus]], pp. 65–66

## Statement
Given a function to be optimised $f(\vab v)$
and constraining function $g(\vab v) = k$,
a maximising or minimising input $\vab c$ will satisfy
$$
\begin{align*}
\nabla f (\vab c) = \lambda \nabla g(\vab c)
\end{align*}
$$
where $\lambda \neq 0$ is called the **Lagrangian multiplier**.

### Multiple constraints
In the case of optimising $f(\vab v)$
under multiple constraints 
$$
g_{1}(\vab v) = k_{1},\; g_{2}(\vab v) = k_{2},\; \dots,\; g_{n}(\vab v) = k_{n} 
$$
the equation to be satisfied becomes
$$
\begin{align*}
\nabla f(\vab c) = \sum_{i=1}^n \lambda_{i}\nabla g_{n}(c) = \lambda_{1}\nabla g_{1}(\vab c) + \lambda_{2}\nabla g_{2}(\vab c) + \dots + \lambda_{n}\nabla g_{n}(\vab c)
\end{align*}
$$


## Intuitive justification
The constraint $g(\vab v) = k$ forms a [[Level set]] of $g(\vab v)$.
Therefore any inputs to $f$ which satisfy the constraint
correspond to intersections of the level curve $g(\vab v) = k$
and _some_ level curve $f(\vab v) = l$.
For any optimising (i.e. maximising or minimising) input of $\vab c$,
the two level curves will be tangent. 
Since [[Gradient vectors are perpendicular to level curves]],
this necessarily implies the the gradients $\nabla f(\vab c)$ and $\nabla g(\vab c)$ are parallel, 
and hence there exists some nonzero $\lambda$ such that[^2016]
$$
\begin{align*}
\nabla f (\vab c) = \lambda \nabla g(\vab c)
\end{align*}
$$

[^2016]: 2016\. [[Sources/@stewartCalculus2016|Calculus]], pp. 1011–1012

## Usage
In order to solve an optimisation problem using Lagrangian multipliers
with input of dimension $n$ (i.e. $f : \mathbb R^n \to \mathbb R$),
one must solve a system of $n + 1$ equations.
$$
\begin{align*}
\begin{bmatrix}
\frac{\partial f}{\partial x_1}(x_1, x_2 \dots x_n) \\
\frac{\partial f}{\partial x_2}(x_1, x_2 \dots x_n) \\
\vdots \\
\frac{\partial f}{\partial x_n
}(x_1, x_2 \dots x_n) \\
g(x_1, x_2 \dots x_n)
\end{bmatrix}
=
\begin{bmatrix}
\lambda\frac{\partial g}{\partial x_1}(x_1, x_2 \dots x_n) \\
\lambda\frac{\partial g}{\partial x_2}(x_1, x_2 \dots x_n) \\
\vdots \\
\lambda\frac{\partial g}{\partial x_n
}(x_1, x_2 \dots x_n) \\
k
\end{bmatrix}
\end{align*}
$$

## Significance of the multiplier
The lambda multiplier $\lambda$ is not an arbitrary, meaningless value.
It is the derivative of the _optimised value_ 
with respect to the constraining value $k$ 
where $g(\vab v) = k$ is the constraint.

## See also
- [[Duality of optimisation problems]]

## Practice problems

- 2022\. [[Sources/@bassomMATH1011MultivariableCalculus2022|MATH1011: Multivariable calculus]], pp. 65–66 (example 4.29; exercise 4.4.1)
- 2016\. [[Sources/@stewartCalculus2016|Calculus]], pp. 1017–1018 (§14.8 exercises)
- 2023\. [[Sources/@hillAdvancedMathematicalMethods2023|Advanced Mathematical Methods]], p. 77 (§4 problems)

---
#state/tidy | #SemBr | #lang/en | #review
