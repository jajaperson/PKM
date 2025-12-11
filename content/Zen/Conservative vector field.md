---
aliases:
  - irrotational
  - scalar potential
tags:
  - public
---
[[Vector field]]
# Conservative vector field
A **conservative vector field**[^aka] is a [[Vector field]] in which the line integral is _path-independent_,
i.e. only depends on the start and end points. #m/def/anal/vec 

[^aka]: also called **irrotational**

Any conservative vector field may be expressed as the gradient field of some scalar field, called the **scalar potential**, such that
$$
\begin{align*}
\vab F (\vab v) = - \vab\nabla \psi (\vab v)
\end{align*}
$$
> [!tip]- Deriving a scalar potential
> ![[example potential derivation.jpeg#invert]]

## Properties and examples
- The [[Circulation]] around any closed path is $0$ 
- The [[Curl]] of any conservative vector field $\nabla \times \vab F = 0$ (this follows from [[Stokes's theorem]]).
  The converse is true on any [[Simply connected space]].
- [[Fundamental theorem for line integrals]] may be used

## Partially conservative field
As a consequence of [[Stokes's theorem]],
if a simply connected region is irrotational w.r.t. a field (i.e. $\forall \vab v \in R \; \curl \vab F (\vab v) = \vab 0$),
then the vector space is conservative within that region.
However any region including a point which is not irrotational is not conservative.
In other words, a closed path integral is $0$ for any path whose enclosed region is irrotational everywhere.[^sim]

[^sim]: For an example of this in the two dimensional case, see 2023\. [[Sources/@hillAdvancedMathematicalMethods2023|Advanced Mathematical Methods]], pp. 31–32.

## Practice problems

Practice problems are mostly for deriving a potential.

- 2023\. [[Sources/@hillAdvancedMathematicalMethods2023|Advanced Mathematical Methods]], p. 28 (§1 problems 12–15)
- 2016\. [[Sources/@stewartCalculus2016|Calculus]], pp. 1124–1135 (§16.3 exercises 3–19)
- 2016\. [[Sources/@stewartCalculus2016|Calculus]], pp. 1149 (§16.5 exercises 13–18)

---
#state/tidy | #SemBr | #lang/en
