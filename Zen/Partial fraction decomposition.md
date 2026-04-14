---
tags:
  - public
---
[[Infinitesimal calculus MOC]]
# Partial fraction decomposition
Partial fraction decomposition can be used to simplify a complex algebraic fraction,
especially for the sake of integration,
into a number of simpler **partial fractions** that are more easily dealt with.

## Cases
### Denominator with distinct linear factors
$$
\begin{align*}
f(x)=\frac{P(x)}{(x-a_1)\cdots(x-a_k)} = \frac{A_1}{x-a_1} + \cdots + \frac{A_k}{x-a_k}
\end{align*}
$$

### Repeated linear factors
$$
\begin{align*}
f(x) = \frac{P(x)}{(x-a)^c} = \frac{A_1}{x-a} + \frac{A_1}{(x-a)^2} + \cdots + \frac{A_1}{(x-a)^{c-1}} + \frac{A_1}{(x-a)^c}
\end{align*}
$$

### Irreducible factor
$$
\begin{align*}
f(x) = \frac{P(x)}{(x-a)(x^2+bx+c)} = \frac{A}{x-a} + \frac{Bx+C}{x^2+bx+c}
\end{align*}
$$
Note that the numerator is always one degree lower than the denominator.

---
#state/tidy | #SemBr | #lang/en