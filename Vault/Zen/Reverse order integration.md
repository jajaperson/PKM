---
tags:
  - public
---
[[Integration techniques MOC]]
# Reverse order integration
In some situations it may be impossible to solve a multiple integral in one order (at least with finite terms),
but possible in another.
For example, in the double integral

$$
\begin{align*}
\int _{0}^1 \int _{\sqrt{ y }}^1 \exp(x^3) \, dx  \, dy 
\end{align*}
$$
the inner integral cannot be solved[^2023].
However, in reverse order, it is perfectly solvable.
$$
\begin{align*}
\int _{0}^1 \int _{\sqrt{ y }}^1 \exp(x^3) \, dx  \, dy  
&= \int _{0}^1 \int _{0}^{x^2} \exp(x^3) \, dy  \, dx \\
= \int_{0}^{1} \left[y \exp(x^3)\right]_{y=0}^{y=x^2} \, dx 
&= \int_{0}^{1} x^2\exp(x^3) \, dx \\
= \left[ \frac{1}{3}\exp(x^3) \right]_{0}^1 &= \frac{e-1}{3}
\end{align*}
$$

[^2023]: 2023\. [[Sources/@hillAdvancedMathematicalMethods2023|Advanced Mathematical Methods]], p. 6

### Finding integral bounds
To reverse the order of an integral it is necessary to “reverse engineer” the integral bounds.
Multiple coloured pens is recommended.

![[Reverse order integral bounds diagram.png#invert]]

## Practice problems
- 2016\. [[Sources/@stewartCalculus2016|Calculus]], p. 1049 (§15.2 exercises 45–56)
- 2023\. [[Sources/@hillAdvancedMathematicalMethods2023|Advanced Mathematical Methods]], p. 27 (§1 problems 3–4)


#
---
#state/tidy | #lang/en | #SemBr | #review 
