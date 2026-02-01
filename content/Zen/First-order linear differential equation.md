---
sr-due: 2024-03-29
sr-interval: 14
sr-ease: 227
tags:
  - public
---



[[Differential equations MOC#First order ODEs]]
# First-order linear differential equation

A [[Classifying DEs#Order|first-order]], [[Classifying DEs#Linearity|linear]] ODE is given the standard form[^2017]
$$
\begin{align*}
\frac{dy}{dx} + p(x)y = g(x)
\end{align*}
$$

[^2017]: 2017\. [[Sources/@boyceElementaryDifferentialEquations2017|Elementary differential equations and boundary value problems]], pp. 24ff. (§2.1)

In the case of $g(x) = 0$, the ODE is [[Separable differential equation|separable]].
Sometimes this is written as
$$
\begin{align*}
P(x) \frac{dy}{dx} + Q(x)y = G(x)
\end{align*}
$$
which can be rearranged trivially to yield the standard form.


## Solutions

- [[#Integrable LHS|Integrable LHS]]
- [[#Integrating factor|Integrating factor]]
	- [[#Integrating factor#Explanation|Explanation]]
	- [[#Integrating factor#Algorithm|Algorithm]]



### Integrable LHS
In some cases a first-order linear ODE may be immediately solvable by integration.
This is the case when the LHS is or can be rearranged to be the case of a **product rule**, that is of the form
$$
\begin{align*}
P(x) \frac{dy}{dx} + P'(x)y = G(x)
\end{align*}
$$
which can easily be rewritten as
$$
\begin{align*}
\frac{d}{dx} \left( P(x)y \right) &= G(x) \\
\implies P(x)y &= \int G(x) \, dx
\end{align*}
$$
so the general solution is
$$
\begin{align*}
y = \frac{\int G(x) \, dx}{P(x)} 
\end{align*}
$$
including the integration constant. 
In cases where this is _not_ possible, an [[#Integrating factor]] $\mu(x)$ may be used to make it so.

### Integrating factor

#### Explanation

In cases where the LHS is _not_ immediately integrable, it may be made so by multiplying both sides by a chosen **integrating factor**, conventionally called either $\mu(x)$ or $I(x)$[^m].
$$
\begin{align*}
\mu(x) \frac{dy}{dx} + \mu(x) p(x) y = \mu(x) g(x)
\end{align*}
$$

[^m]: I will be using the former since it is prettier.

We select $\mu(x)$ such that the LHS is the result of a product rule, i.e.
$$
\begin{align*}
\frac{d}{dx} \left( \mu(x) y \right) &= \mu(x) \frac{dy}{dx} + \mu(x) p(x) y \\ 
\implies \mu'(x) &= p(x) \mu(x)
\end{align*}
$$
A family of solutions to this very basic differential equation for $\mu$ is given by
$$
\begin{align*}
\mu(x) = \exp \left( \int p(x) \, dx  \right) 
\end{align*}
$$
where the integration constant may be conveniently selected as $0$.
Thus, the ODE may be solved generally
$$
\begin{align*}
\frac{d}{dx} \left( \mu(x) y(x) \right) &= \mu(x) g(x) \\
\implies y(x) &= \frac{1}{\mu(x)}  \int \mu(x) g(x) \, dx 
\end{align*}
$$

#### Algorithm
Algorithmically, the integrating factor method is summarised as follows

1. **Write the differential equation in standard form**
2. **Find the integrating factor** (setting the constant of integration conveniently to $0$)
   $$
  \begin{align*}
  \mu(x) = \exp\left( \int{p(x)\,dx} \right)
  \end{align*}
  $$
3. **The general solution is**
   $$
\begin{align*}
y(x) &= \frac{1}{\mu(x)} \int \mu(x)g(x) \, dx + \frac{C}{\mu(x)}
\end{align*}
$$
   

## Practice problems
- 2017\. [[Sources/@boyceElementaryDifferentialEquations2017|Elementary differential equations and boundary value problems]], pp. 31–32 (§2.1 problems)

#
---
#state/tidy  | #lang/en | #SemBr | #review