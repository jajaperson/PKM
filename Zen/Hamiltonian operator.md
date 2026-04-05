---
tags:
  - public
---
[[Quantum mechanics MOC]]
# Hamiltonian operator

The **hamiltonian** $\hat{H}$ is the quantum [[Linear endomorphism|operator]] corresponding to the measurement of the **total energy** of a particle.
$$
\begin{align*}
\hat{H} = \hat{T} + \hat{V}
\end{align*}
$$

## Position-momentum system
For a typical position-momentum single-particle system with time-independent potential, 
the hamiltonian is given by
$$
\begin{align*}
\hat{H} = \frac{\hat{p}^2}{2m} + V(\hat{x})
\end{align*}
$$
where $\hat{x}$ and $\hat{p}$ are the position and momentum operators respectively
and $V$ is the potential.
Thus
$$
\begin{align*}
\hat{H} = - \frac{\hbar^2}{2m} \nabla^2 + V(\hat{x})
\end{align*}
$$

> [!check]- Verification of hermiticity
> Let $\psi,\varphi \in L^2(M)$ where $M$ is some infinite space.
> Then
> $$
> \begin{align*}
> \braket{ \varphi | \hat{H} \psi } &= \int _{M} \varphi^* \left( -\frac{\hbar}{2m} \nabla^2 \psi + V\psi \right) \, d\tau  \\
> &= \int _{M} \varphi^*V\psi \, d\tau -\frac{\hbar}{2m} \int _{M} \varphi^* \nabla^2 \psi \, d\tau
> \end{align*}
> $$
> Since $V$ is real-valued, applying [[Integration by parts#^GE1]] twice, and using the fact that both wavefunctions and all derivatives are zero at the boundary $\partial M$
> $$
> \begin{align*}
> \braket{ \varphi | \hat{H}\psi }
> &= \int _{M}(V\varphi)^* \psi \, d\tau - \frac{\hbar}{2m} \left(\cancel{ \oint_{\partial M} \varphi^* \nabla \psi \cdot d\mathbf{a} } - \int_{M} \nabla\varphi^* \cdot \nabla \psi \, d\tau  \right) \\
> &= \int _{M}(V\varphi)^* \psi \, d\tau - \frac{\hbar}{2m} \left(\int _{M} \psi \nabla^2 \varphi^* \, d\tau - \cancel{ \oint_{\partial M} \psi \nabla\varphi^* \cdot d \mathbf{a} }  \right) \\
> &= \int_{M} (V\varphi)^* \psi \, d\tau - \frac{\hbar}{2m} \int_{M} (\nabla^2 \varphi)^* \psi \, d\tau \\
> &= \braket{ \hat{H}\varphi | \psi } 
> \end{align*}
> $$
> as required.
> <span class="QED"/>

#
---
#state/develop | #lang/en | #SemBr
