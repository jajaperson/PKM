---
cssClass: embed-strict
tags:
  - public
---
[[Mathematics MOC]]
# Differential Equations MOC

```mermaid
graph LR;
  DE[differential eqn.]
  gen[general soln.]
  par[particular soln.]
  DE-->|integrate|gen-->|boundary values|par
```


- [[Classifying DEs]]
- [[Existence and uniqueness theorem for IVPs]]
- [[Boundary value problem]]

## First order ODEs

1. [[Separable differential equation]]
2. [[First-order linear differential equation]]
3. [[Exact differential equation]]
    - [[Exact differential equation#Integrating factor|Almost exact differential equations]]
4. [[Bernoulli differential equations]]
5. [[Homogenous first-order differential equation]]
6. [[System of linear ODEs]]

## Higher order linear ODEs
A useful technique for describing properties of higher-order ODEs is to write them in terms of a [[Linear endomorphism]]
$$
\begin{align*}
L[f](t) = f''(t) + p(t)f'(t) + f(t) = g(t)
\end{align*}
$$
If $g(t) = 0$ the ODE is said to be **homogenous**.
Given the general solution to an ODE's related homogenous DE (called the **complimentary solution**),
and a particular solution to the full ODE,
[[Solving non-homogenous second order ODEs|the general solution to the full ODE is the sum of these]].
So any higher order ODE can be solved by [[#Solving a homogenous ODE]] and [[#Finding a particular solution]].

To verify that a solution is indeed general, it is necessary to prove that solutions are linearly independent, i.e. their [[Wronskian]] determinant is zero.

### Solving a homogenous ODE


1. [[Homogenous linear ODE with constant coëfficients]]
2. [[Cauchy-Euler differential equations]]
3. [[Converting a higher-order ODE to a system of first-order ODEs]]

![[Solving non-homogenous second order ODEs#Finding a particular solution]]

## Series solutions
By solving for a **series solution** to a DE,
we can convert the differential equation into a [[Recurrence relation]].
Typically we operate on the [[Laurent series]] about a specific point,
so the solution will only be valid in the neighbourhood of that point.

Given an ODE involving coëfficient functions,
the radius of convergence of a series solution will be at least as large as the distance in $\mathbb{C}$ to the nearest [[Singular point]].

- [[Taylor series solutions about ordinary points]]

## Partial differential equations
In practice, a PDE is solved by first reducing it to a system of ODEs.
For this purpose there are three main techniques:

- [[Similarity solutions]] (general, in theory)
- [[D'Alembert solution]] (linear)
- [[Separation of variables]] (linear)

#
---
#MOC | #state/develop | #SemBr 
