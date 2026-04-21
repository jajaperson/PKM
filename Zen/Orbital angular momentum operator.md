---
tags:
  - public
---
[[QM in 3D position-space]]
# Orbital angular momentum operator

The **orbital angular momentum operators** are defined by $\hat{\mathbf{L}} = \hat{\mathbf{r}} \times \hat{\mathbf{p}}$,
or in cartesian coördinates
$$
\begin{align*}
\hat{L}_{x} &= \hat{y}\hat{p}_{z}-\hat{z}\hat{p}_{y}, & \hat{L}_{y} &= \hat{z}\hat{p}_{x} - \hat{x}\hat{p}_{z}, & \hat{L}_{z} = \hat{x}\hat{p}_{y}-\hat{y}\hat{p}_{x}
\end{align*}
$$
correspond to the observable [[orbital angular momentum]] for a single particle in [[QM in 3D position-space|3D position space]].
The **total orbital angular momentum operator** $\hat{L}^2 = \hat{\mathbf{L}} \cdot \hat{\mathbf{L}}$ has eigenvalues quantized by $\ell =0,1,\dots$ while $\hat{L}_{z}$[^wlog] is quantized by $m = -\ell, -\ell+1, \dots , \ell-1, \ell$.
$$
\begin{align*}
\hat{L}^2 \ket{\ell,m} &= \hbar \ell(\ell+1) \ket{\ell,m} \\
\hat{L}_{z} \ket{\ell,m} &= \hbar m \ket{\ell,m} 
\end{align*}
$$

[^wlog]: Selected without loss of generality by symmetry.

## Spherical coördinates
In [[QM in 3D position-space#Spherical coördinates|spherical coördinates]], they may be expressed as[^2018]

$$
\begin{align*}
\hat{L}_{x} &= -i\hbar \left( -\sin\phi \frac{ \partial }{ \partial \theta } -\cos\phi \cot\theta \frac{ \partial }{ \partial \phi }  \right) \\
\hat{L}_{y} &= -i\hbar \left( +\cos\phi \frac{ \partial }{ \partial \theta } -\sin\phi \cot\theta \frac{ \partial }{ \partial \phi }  \right) \\
\hat{L}_{z} &= -i\hbar \frac{ \partial }{ \partial \phi } 
\end{align*}
$$

[^2018]: 2018\. [[Sources/@griffithsIntroductionQuantumMechanics2018|Introduction to quantum mechanics]], §4.3.2, p. 163.

## Properties

1. The operators obey the commutation relation $[\hat{L}_{j}, \hat{L}_{k}] = i\hbar \epsilon_{jk}{}^\ell \hat{L}_{\ell}$,
  hence they form a Lie algebra isomorphic to [[Real special orthogonal group of dimension 3|𝔰𝔬(3)]].
  2. The eigenfunctions are the [[Spherical harmonic|spherical harmonics]] which are related via raising and lowering operators (see [[Irreps of SO(3)]]).
    It follows only integer values of $\ell$ are allowed.
#
---
#state/develop | #lang/en | #SemBr
