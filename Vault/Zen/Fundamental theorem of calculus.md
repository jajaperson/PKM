---
tags:
  - public
---
[[Infinitesimal calculus MOC]]
# Fundamental theorem of calculus
The **fundamental theorem of calculus** relates the two main operations of infinitesimal calculus,
differentiation and integration,
as inverses of each other. 
Formerly the _second part_ of the theorem states (however still simplified from traditional statements)

**Fundamental theorem of calculus, second part** 
Let $F$ be a smooth function on $[a,b]$. Then #m/thm/calculus 
$$
\begin{align*}
\int_{a}^{b} F'(x) \, dx = F(b) - F(a) 
\end{align*}
$$



## Generalizations
There exist a number of generalizations of the fundamental theorem
to different kinds of integrals and derivatives.
The most general form, which includes all the below cases as well as the original theorem,
is the [[Generalized Stokes's theorem]] which uses the concept of the [[Differential form]].

- [[Fundamental theorem for line integrals]] ([[Multivariable gradient]])
- [[Green's theorem]] ([[Double integral]])
- [[Острогра́дский's divergence theorem]] ([[Flux]] and [[Divergence]])
- [[Stokes's theorem]] ([[Circulation]] and [[Curl]])

The general structure of these generalizations[^p2] is as follows

- The left hand side involves some kind of derivative(s) of functions (single variable or multivariable)
- The right hand side involves the values of the original functions at the _boundary_ of the domain of integration,
  and one less integral

[^p2]: When stated in the format of the _second part_ of the fundamental theorem.

The fundamental theorems may be used to generate alternative generalisations of [[Integration by parts]].

#
---
#state/develop | #lang/en | #SemBr
