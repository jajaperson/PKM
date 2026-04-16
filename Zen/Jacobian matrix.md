---
tags:
  - public
---
[[Infinitesimal calculus MOC]]
# Jacobian Matrix
The **Jacobian matrix** generalises the notion of _first derivative_
to functions of multivariable input _and_ output.
In general, a function (also called a _transformation_) of type
$f: \mathbb R^n \to \mathbb R^m$
will have a $n \times m$ Jacobian matrix $\jacob f$.
It is defined as follows
$$
\begin{align*}
\jacob f(\vab c) 
= 
[D f (\vab c)]_{\mathcal{SS}}
=
\begin{bmatrix}
\frac{\partial \vab f}{\partial x_1} & \dots & \frac{\partial \vab f}{\partial x_ n}
\end{bmatrix}
=
\vthree{\tp{\vab{\nabla}} f_1}{\vdots}{\tp{\vab{\nabla}} f_n}
=
\begin{bmatrix}
\frac{\partial f_1}{\partial x_1} & \dots & \frac{\partial f_1}{\partial x_ n} \\
\vdots & \ddots & \vdots \\
\frac{\partial f_n}{\partial x_1} & \dots & \frac{\partial f_n}{\partial x_n}
\end{bmatrix}
\end{align*}
$$
where the first definition uses the standard definition of a vector-valued derivative
and the second is based on the [[Matrix transpose]] of the [[Multivariable gradient]].
Hence, the Jacobian can be thought of as combining these two methods into a single concept which can be extended to all multivariable functions.
It packages together all the partial derivatives one can take of a function in a logical way,
where **rows correspond to dimensions of output**
and **columns correspond to dimensions of input**.

Perhaps the most productive way to think about the Jacobian Matrix is [[The Jacobian matrix describes a linear transformation]].

## A note on notation
> The most universally recognisable notation 
> for the jacobian matrix is $\jacob_f(\vab c)$,
> but the subscript tends to be an inconvenience.
> Another alternative is the operator $D f(\vab c)$,
> which takes inspiration from the standard differential operator,
> however this is ugly 
> and can confuse the notion of the directional derivative $D_\unitv v f(\vab c)$.
> My preferred notation is the operator $\nabla f(\vab c)$,
> since it is easily distinguished from standard alphanumeric characters
> (as are used for functions and variables),
> and includes within it the notion of the [[Multivariable gradient]].
> However this is slightly controversial,
> as it means the gradient becomes a [[Row vector]].
> I would argue this is the correct interpretation though —
> indeed, the multivariable gradient certainly behaves like a covector.

This was my stance at the beginning of 2022,
but after taking a class in electrodynamics in 2023 I realise the utility of $\vab{\nabla}$ as a vector operator.
The best option I can think of for representing the Jacobian as a differential operator is $D$,
since it generalises the properties of the ordinary interpretation $D = \frac{d}{dx}$ for a single variable function nicely.
Besides, in many applications it's better to be explicit with tensorial indices, so we just say
$\jacob^i_{j}  = \frac{df_{i}}{dx_{j}}$.

---
#state/tidy | #SemBr 

