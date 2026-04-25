---
tags:
  - public
---
[[Wavefunction]]
# Wavefunction in position space

For a system in which position is the only degree of freedom, we may choose eigenfunctions of the position operator $\hat{x}$ as a basis.
Thus $\Psi : \mathbb{R}^3 \times \mathbb{R} \to \mathbb{C}$ is a **wavefunction in position space**.
The [[Hamiltonian operator]] may then be represented as
$$
\begin{align*}
\hat{H}(t) &= \frac{\unitv p \cdot \unitv p}{2m} + V(\unitv x, t) \\ 
&= - \frac{\hbar^2}{2m} \nabla^2 + V(\unitv x, t)
\end{align*}
$$
wherefore the [[Schrödinger equation]] becomes
$$
\begin{align*}
i\hbar \frac{ \partial }{ \partial t } \Psi(\vab x,t) = -\frac{\hbar}{2m} \nabla^2 \Psi(\vab x, t) +V(\vab x, t) \Psi(\vab x, t)
\end{align*}
$$
## See also

- [[QM in 1D position-space]]
- [[QM in 3D position-space]]

#
---
#state/tidy| #lang/en | #SemBr
