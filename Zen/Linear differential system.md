---
aliases:
  - Linear differential system
  - Homogenous system of linear ODEs with constant coëfficients
tags:
  - public
---
[[Differential system]]
# Linear differential system
A **linear [[differential system]]** has the form
$$
\begin{align*}
\vab x' = A \vab x
\end{align*}
$$
where $A$ is an $n \times n$ square matrix.

## Solutions

The solution is given by the [[Matrix exponential]], but may alternatively be found by finding the [[Eigenvectors, eigenvalues, and eigenspaces|eigenvalues]] of the matrix $A$,
which produces a **characteristic polynomial** similar to those used to solve [[Linear second-order differential equations]].
The $2 \times2$ example is discussed below.

### Unique eigenvalues
If the [[Eigenvectors, eigenvalues, and eigenspaces#Multiplicity|algebraic multiplicity]] is the same as the [[Eigenvectors, eigenvalues, and eigenspaces#Multiplicity|geometric multiplicity]] for each eigenvalue,
take nonzero eigenvectors $\vab v_{1} \in E_{\lambda_{1}}(A)$ and $\vab v_{2} \in E_{\lambda_{2}}(A)$.
The solution is hence
$$
\begin{align*}
\vab x = C_{1} \vab v_{1} e^{\lambda_{1}t} + C_{2} \vab v_{2} e^{\lambda_{2}t}
\end{align*}
$$

#### Complex conjugates
If the eigenvalues are complex conjugates $\lambda = \alpha \pm \beta i$,
then Euler's formula can be used to separate **one** of the spanning solutions into its real and imaginary parts.
This will form a full spanning solution set.

### Repeated eigenvalues
If the [[Eigenvectors, eigenvalues, and eigenspaces#Multiplicity|algebraic multiplicity]] is the same as the [[Eigenvectors, eigenvalues, and eigenspaces#Multiplicity|geometric multiplicity]] for each eigenvalue, the same method as above can be used.
However, if the geometric multiplicity is less, the solution will have the form
$$
\begin{align*}
\vab x = C_{1} \vab v_{1} e^{\lambda t} + C_{2}
\end{align*}\vab v_{1} te^{\lambda t} + C_{2} \vab we^{\lambda t}
$$
where $\vab v_{1} \in E_{\lambda}(A)$ is an eigenvector and $\vab w$ is a [[Generalized eigenvector]].

## Stability of the origin

In [[Stability language]][^2024]

[^2024]: 2024\. [[Sources/@strogatzNonlinearDynamicsChaos2024|Nonlinear dynamics and chaos: With applications to physics, biology, chemistry, and engineering]], §5, pp. 137ff.

- If both eigenvalues are negative then the origin is a **stable node.**
- If both eigenvalues are positive then the origin is an **unstable node**.
- If the eigenvalues are equal with geometric multiplicity 2 then the origin is a **star** or **symmetric node**.
- If an eigenvalue has more algebraic multiplicity than geometric, then it is a **degenerate node**.
- If some eigenvalues are negative and some are positive, the origin is a **saddle point**.
- The eigenspace of a negative eigenvalue is a **stable manifold**,
  the eigenspace of a positive eigenvalue is an **unstable manifold**.

Trajectories typically approach the origin tangent to the slow eigendirection.

![[@strogatzNonlinearDynamicsChaos2024_5.2.8.png#invert]]

## Practice problems
- 2017\. [[Sources/@boyceElementaryDifferentialEquations2017|Elementary differential equations and boundary value problems]]
  - Real-valued: pp. 318–319 (§7.5 problems)
  - Complex-valued: pp. 327–329 (§7.6 problems)
  - Repeated eigenvalues: pp. 343–345 (§7.8 problems)

#
---
#state/tidy | #lang/en | #SemBr | #review
