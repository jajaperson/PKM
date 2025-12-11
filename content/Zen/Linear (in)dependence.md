---
aliases:
  - linear dependence
  - linear independence
  - linearly dependent
  - linearly independent
tags:
  - public
---
[[Linear algebra MOC]]
# Linear (in)dependence
Essentially, a set of vectors $A$ is **linearly dependent** 
iff at least one of its contained vectors
can be derived from a linear combination of the others. #m/def/linalg 
$$
\begin{align*}
\forall[\vab v \in A] \quad \vab v \in \Span(A \setminus \{ \vab v \})
\end{align*}
$$
If the inverse is true,
the vectors are **linearly independent**.
Such a set it said to be an _efficient_ [[Span|spanning set]],
since none of the set's members are redundant,
i.e. removing any vector from the set would change the [[Span|span]].
A [[Span|spanning set]] that is linearly independent forms a [[Vector basis|basis]] for its [[Span|span]].

An infinite set of vectors is linearly independent iff. every finite subset is linearly independent.[^2022]

[^2022]: 2022\. [[Sources/@grassoMathematicalPhysicsLecture2022|Mathematical physics lecture notes]], p. 136

## Proving linear independence
Proving a set of vectors $A$ is linearly independent amounts to showing that there are no non-trivial solutions to the equation
$$
\begin{align*}
k_{0}\vab v_{1} + k_{2}\vab v_{2} + \dots + k_{n}\vab v_{n} = \vab 0
\end{align*}
$$
where a trivial solution is one where $k_{1} = k_{2} = \dots = k_{3} = 0$.
This amounts to solving the [[homogenous system of linear equations]]
$$
\begin{align*}
\begin{bmatrix}
\vab v_{1} & \vab v_{2} & \cdots & \vab v_{3}
\end{bmatrix}
\begin{bmatrix}
k_{1} \\
k_{2} \\
\vdots \\
k_{2}
\end{bmatrix}
=
\vab 0
\end{align*}
$$
where a single, trivial solution indicates the set is indeed independent —
otherwise, infinite solutions will be given.



#
---
#state/tidy | #SemBr
