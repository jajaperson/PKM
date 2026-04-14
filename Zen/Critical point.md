---
aliases:
  - regular value
  - regular point
  - critical value
tags:
  - public
---
[[Differential geometry MOC]]
# Critical points/values and regular points/values

Let $f : X \to Y$ be a $C^\infty$ [[Differentiability|differentiable]] map between $C^\infty$ [[Differentiable manifold|differentiable manifolds]] $X,Y$ of dimensions $n,m$ respectively.
A point $x \in X$ is called a **critical point** iff $\rank T_{x}f < m$
where $T_{x}f$ is the [[Tangent map]] at $x$;
otherwise $x$ is a **regular point** (and $f$ is [[Immersion and submersion|submersive]] at $x$).
The image of a critical point is a **critical value**,
and a value which is not critical is a **regular value**.

## Special cases

### Single variable function
A critical point is either a [[Local extremum]] or a **point of inflection** (POI).
It is defined as a point where the derivative is either 0 or undefined. #to/generalize

#### Classifying critical points
##### First derivative test
Given $f'(c) = 0$,

1. Iff. $\forall x < c\ .\ f'(x) \geq 0$ 
   and $\forall x > c\ .\ f'(x) \leq 0$
   then $c$ is a [[Local extremum|Local maximum]].
2. Iff. $\forall x < c\ .\ f'(x) \leq 0$
   and $\forall x > c\ .\ f'(x) \geq 0$
   then $c$ is a [[Local extremum|Local minimum]].
3. Otherwise, it is neither.

##### Second derivative test
We can also use the second derivative to test for [[Concavity]]
at a critical point, 
which can classify a critical point.
Given $f'(c) = 0$,

1. Iff. $f''(c) < 0$ 
   the critical point is [[Concavity|Concave down]]
   and $c$ is a [[Local extremum|Local maximum]].
3. Iff. $f''(c) > 0$
   the critical point is [[Concavity|Concave up]]
   and $c$ is a [[Local extremum|Local minimum]].

---
#state/tidy | #SemBr 
