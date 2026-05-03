---
tags:
  - public
---
[[Limits (Calculus)]]
# Multivariable limits
Limits also work in multivariable functions.
For $M \to \mathbb R^n$, simply take the respective limit in each dimension of the output space
(in a fashion similar to vector-valued derivatives).
$$
\lim_{t \to a} \vthree{f(t)}{g(t)}{h(t)} = 
\vthree
{\lim_{t \to a} {f(x)}}
{\lim_{t \to a} {g(x)}}
{\lim_{t \to a} {h(x)}}
$$
For $\mathbb R^n \to M$, observe how the output converges/diverges as we approach the given point in the input space.
$$
\lim_{(x, y) \to (1, 2)}{f(\vtwo{x}{y})}
$$
More formally,
$$
\begin{align*}
\lim_{\vec v \to \vec a}{f(\vec v)} = L \implies
&\forall \vec r : D_\vec r \to D_f\ . \\
&\lim_{t \to t_0}{\vec r(t)} = \vec a 
\implies \lim_{t \to t_0}{f 
\circ \vec r (t)} = L
\end{align*}
$$
That is to say, the limit is the same _from any direction of approach_.

## Non-existant limits
Since there are essentially infinite directions of approach for the latter case,
and the limit must be the same from all directions for the limit to exist,
proving that a limit exists becomes difficult — see [[Using polar co-ordinates to prove a bivariate limit exists at the origin]].
However, in order to show that a limit **Does Not Exist (DNE)**,
it is only necessary to give one counterexample,
i.e. one pair of directions for which the limits are not the same.
These directions need not be linear, e.g. $y=x^2$ is a valid direction of approach.

---
#state/tidy | #SemBr 
