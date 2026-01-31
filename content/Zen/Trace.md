---
tags:
  - public
---
[[Linear algebra MOC]]
# Trace

The **trace** $\Tr T$ of a linear endomorphism $T : V \to V$ is the sum of its [[Eigenvectors, eigenvalues, and eigenspaces|eigenvalues]] counted with (algebraic) multiplicity. #m/def/linalg 
This corresponds to the sum of main diagonal entries in any basis.

## Properties

- If $\mathbf{A}$ and $\mathbf{B}$ are real/complex $n\times n$ matrices, then $\Tr \mathbf{AB} = \Tr \mathbf{A} \Tr \mathbf{B}$.
- If $\mathbf{A}$ is nilpotent, $\Tr \mathbf{A} = 0$.
- $\Tr \mathbf{AB} = \Tr \mathbf{BA}$
- $\Tr \mathbf{T}^{-1}\mathbf{A}\mathbf{T} = \Tr \mathbf{A}$ for invertible $\mathbf{T}$

#
---
#state/develop | #lang/en | #SemBr
