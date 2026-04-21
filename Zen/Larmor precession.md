---
aliases:
  - Larmor interaction
tags:
  - public
---
[[Internal spin angular momentum]]
# Larmor precession

A spin-$\frac{1}{2}$ particle in a constant magnetic field $\mathbf{B}$ experiences a Hamiltonian[^2018]
$$
\begin{align*}
\hat{H} = -\gamma \mathbf{B} \cdot \hat{\mathbf{S}}
\end{align*}
$$
and given an initial state (measured along the direction of $\mathbf{B}$, which we will call the $z$-axis) of $\ket{\chi(0)} = \cos(\alpha/2) \ket{\uparrow} + \sin(\alpha / 2) \ket{\downarrow}$,
the state evolves as
$$
\begin{align*}
\ket{\chi(t)} = \cos(\alpha / 2)e^{i\omega t/2} \ket{\uparrow}  + \sin(\alpha / 2)e^{-i\omega t / 2} \ket{\downarrow} 
\end{align*}
$$
where $\omega = \gamma \|\mathbf{B}\|$ is the **Larmor (angular) frequency**.
This corresponds to $\langle \mathbf{S} \rangle$ tilted at angle $\alpha$ to the $z$-axis precessing with angular frequency $\omega$.

[^2018]: 2018\. [[Sources/@griffithsIntroductionQuantumMechanics2018|Introduction to quantum mechanics]], §4.4.2, pp. 172–173

#
---
#state/tidy | #lang/en | #SemBr
