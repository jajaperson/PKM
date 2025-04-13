---
aliases:
  - eigenvector
  - eigenvalue
  - eigenspace
tags:
  - public
---
[[Linear algebra MOC]]
# Eigenvectors, eigenvalues, and eigenspaces
The **eigenvectors** of a [[Linear map]] are the vectors with images parallel to themselves under the transformation,
i.e. the vectors which remain on their span. #m/def/linalg 
Geometrically, such vectors are never rotated by the transformation,
but are scaled by some factor $\lambda$, called the **eigenvalue**.  #m/def/linalg 

Formally, the eigenvectors of a transformation $A$ are the vectors satisfying
$$
\begin{align*}
A \vab v = \lambda \vab v
\end{align*}
$$
for some scalar $\lambda$.
The set of all such vectors for a given $\lambda$ is called an **eigenspace**,
as it necessarily forms a [[vector subspace]].
$$
\begin{align*}
\Ex_{\lambda}(A) = \{ \vab v \in V \mid (A-\lambda I)\vab v = \vab 0 \}
\end{align*}
$$
The computation of eigenvalues uses the determinant
$$
\begin{align*}
A \vab v = \lambda \vab v &\implies (A - \lambda I) \vab v = \vab 0 \\
&\implies \det(A-\lambda I) = 0
\end{align*}
$$
to form the **characteristic polynomial**.
Once eigenvalues are known,
eigenspaces can be found using [[Gaußian elimination]] on the augmented matrix $\begin{bmatrix}A - \lambda I \mid \vab 0\end{bmatrix}$.


An important process is [[Diagonalization]],
by which any [[Types of square matrix|diagonalisable matrix]] is turned into a [[Types of square matrix|diagonal matrix]] with its eigenvalues as entries along the diagonal.

## Properties[^2022]
1. $$\det(A) = \prod_{i=1}^n \lambda_{i}$$ ^P1
2. $$\mathrm{Tr}(A) = \sum_{i=1}^n \lambda_{i}$$ ^P2
3. $$\lambda_{i}(A^{-1})=\lambda^{-1}_{i}(A)$$
4. $$\lambda_{i}(\tp A) = \lambda_{i}(A)$$
5. $$\lambda_{i}(A + kI) = \lambda_{i}(A) + k$$
6. $$\lambda_{i}(A^k) = \lambda_{i}(A)^k$$
7. **Cayley-Hamilton Theorem** — A matrix $A$ satisfies its own characteristic equation (by replacing $\lambda^n$ with $A^n$).
 8. Any $\ell$ vectors from $\ell$ different eigenspaces form a linearly independent set.

[^2022]: 2022\. [[Sources/@bassomMATH1012MathematicalTheory2022|MATH1012: Mathematical theory and methods]], pp. 103–102

For $2\times 2$ matrices, properties [[#^P1]] and [[#^P2]] allow for [[3b1b's eigenvalue trick]].

## Multiplicity
For each of a transformations eigenvalues we define **algebraic** and **geometric** multiplicity as follows

- **Algebraic multiplicity** is how many roots of the characteristic polynomial correspond to that eigenvalue. #m/def/linalg 
- **Geometric multiplicity** is the dimensions of the eigenspace $\dim({E_{\lambda}(A)})$ #m/def/linalg 

Geometric multiplicity is at most the algebraic multiplicities.[^2022]
It is clearly impossible for an eigenspace to have dimension 0,
so we have the inequality
$$
\begin{align*}
1 \leq \text{geometric multiplicity} \leq \text{algebraic multiplicity}
\end{align*}
$$


#
---
#state/tidy | #SemBr
