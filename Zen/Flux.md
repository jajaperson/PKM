---
sr-due: 2024-03-24
sr-interval: 3
sr-ease: 210
tags:
  - public
---

[[Infinitesimal calculus MOC]]
# Flux
**Flux** $\Phi$ is a measure of the tendency of a vector field $\vab F$
to flow through an [[Manifold orientation|Orientated manifold]] (typically an [[Surface orientation|Orientated surface]]).
It can be defined as

$$
\begin{align*}
\Phi &= \oint_M{\det{\left( 
\begin{bmatrix}
\vab F & d\vab M
\end{bmatrix}
\right)}} \\
\end{align*}
$$

but is often thought of as

$$
\begin{align*}
\Phi = \oint_M{\vab F \cdot \unitv n} \,dM
\end{align*}
$$
in many cases this may be calculated using [[Острогра́дский's divergence theorem]]
and if a [[vector potential]] is known using [[Stokes's theorem]].

## Practice problems
- 2016\. [[Sources/@stewartCalculus2016|Calculus]], p. 1173 (§16.7 questions 21–32)

#
---
#state/tidy | #SemBr | #review
