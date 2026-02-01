---
tags:
  - public
---
[[Dynamical system]]
# Differential system

A $n$-dimensional **differential system** or **flow** has the form
$$
\begin{align*}
\dot{x}_{1} &= f_{1}(x_{1},\dots,x_{n}) \\
&\phantom{=} \vdots \\
\dot{x}_{n} &= f_{n}(x_{1},\dots,x_{n})
\end{align*}
$$
or more concisely #m/def/dynamics/flow 
$$
\begin{align*}
\dot{\mathbf{x}} = f(\mathbf{x})
\end{align*}
$$
Note that many ODEs may be converted to this form, including those with time-dependent terms.[^2024][^2017]
The vector $\vab x = \tp{\begin{bmatrix}x_{1} & \cdots & x_{n}\end{bmatrix}}$ is a point in the abstract [[Phase space]],
and every solution to the system thus corresponds to a path within this phase space, called a [[Trajectory]].

[^2024]: 2024\. [[Sources/@strogatzNonlinearDynamicsChaos2024|Nonlinear dynamics and chaos: With applications to physics, biology, chemistry, and engineering]], §1.2, pp. 6ff.

> [!tip]- Examples
> The [[Harmonic oscillator|damped harmonic oscillator]] equation
> $$
> \begin{align*}
> m \ddot{x} + b \dot{x} + kx = 0
> \end{align*}
> $$
> may be rewritten by setting $x_{1}=x$ and $x_{2}=\dot{x}$, thus
> $$
> \begin{align*}
> \dot{x}_{1} &= x_{2} \\
> \dot{x}_{2} &= - \frac{k}{m}x_{1} -\frac{b}{m} x_{2}
> \end{align*}
> $$
> which is a [[linear differential system]] since it is a linear combination of $x_{i}$.
> 
> The swinging pendulum equation
> $$
> \begin{align*}
> \ddot{x} + \frac{g}{L} \sin x = 0
> \end{align*}
> $$
> may be rewritten as
> $$
> \begin{align*}
> \dot{x}_{1} &= x_{2} \\
> \ddot{x}_{2} &= -\frac{g}{L}\sin x_{1}
> \end{align*}
> $$
> which is a **nonlinear differential system**.
> 
> A **non-autonomous system** such as a [[Harmonic oscillator|forced harmonic oscillator]]
> $$
> \begin{align*}
> d\ddot{x} + b \dot{x} + kx = F \cos \Omega t
> \end{align*}
> $$
> may be rewritten as
> $$
> \begin{align*}
> \dot{x}_{1} &= x_{2} \\
> \dot{x}_{2} &= \frac{1}{m}(-kx_{1}-bx_{2}+F\cos x_{3}) \\
> \dot{x}_{3} &= \Omega
> \end{align*}
> $$
> hence an $n$th-order non-autonomous equation is an $(n+1)$-dimensional differential system.
> This makes sense because the state of such a problem really does depend on time.

[^2017]: 2017\. [[Sources/@boyceElementaryDifferentialEquations2017|Elementary differential equations and boundary value problems]], p. 282

## Properties and further terminology

- [[Existence and uniqueness of flows]]
- [[Continuity of flows]]
- [[Equivalence of flows]]
- [[Fundamental theorem of flows]]
- [[Fixed point]]
- [[Hartman-Grobman theorem]]
- [[Lyapunov stability criterion]]

### Phenomena

- [[Homoclinic orbit]]

### Techniques

- [[Linear stability analysis]]

## Particular types of flow

- Flow in 2D
  - [[Reversible 2D flow]]

#
---
#state/tidy | #lang/en | #SemBr
