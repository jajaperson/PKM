---
tags:
  - public
---
[[Quantum mechanics MOC]]
# Uncertainty principle

For any observables $A$ and $B$,
$$
\begin{align*}
\sigma^2_{A}\sigma^2_{B} \geq \left( \frac{1}{2i} \left\langle \left [\hat{A},\hat{B}\right] \right\rangle  \right)^2
\end{align*}
$$
which is the **generalized uncertainty principle**.

> [!check]- Proof of inequality
> Let $\hat{A}$ and $\hat{B}$ be Hermitian operators corresponding to observables.
> Define
> $$
> \begin{align*}
> \ket{f}  &= (\hat{A}-\langle A \rangle ) \ket{\psi} \\
> \ket{g} &= (\hat{B}-\langle B \rangle ) \ket{\psi} 
> \end{align*}
> $$
> so that $\sigma^2_{A} = \braket{ f | f }$ and $\sigma^2_{B} = \braket{ g | g }$.
> Then by the [[Cauchy-Schwarz inequality]]
> $$
> \begin{align*}
> \sigma^2_{A}\sigma^2_{B} &= \braket{ f | f } \braket{ g | g } \geq \abs{\braket{ f | g } }^2 \\
> &\geq \Im(\braket{ f | g } )^2 = \left( \frac{1}{2i}(\braket{ f | g } - \braket{ g | f } ) \right)^2
> \end{align*}
> $$
> Now
> $$
> \begin{align*}
> \braket{ f | g } &= \bra{\psi} (\hat{A}-\langle A \rangle )(\hat{B}-\langle B \rangle ) \ket{\psi} \\
> &= \bra{\psi} (\hat{A}\hat{B}-\hat{A}\langle B \rangle -\langle A \rangle \hat{B}+\langle A \rangle \langle B \rangle )\ket{\psi} \\
> &= \bra{\psi} \hat{A}\hat{B} \ket{\psi} - \langle A \rangle \langle B \rangle -\langle A \rangle \langle B \rangle + \langle A \rangle \langle B \rangle \\
> &= \langle \hat{A}\hat{B} \rangle -\langle A \rangle \langle B \rangle 
> \end{align*}
> $$
> and by similar calculation $\braket{ g | f } = \langle \hat{B}\hat{A} \rangle - \langle B \rangle\langle A \rangle$
> Hence
> $$
> \begin{align*}
> \sigma^2_{A}\sigma^2_{B} \geq \left( \frac{1}{2i} (\langle \hat{A}\hat{B} \rangle - \langle \hat{B}\hat{A} \rangle ) \right)^2
> = \left( \frac{1}{2i} \left\langle \left [\hat{A},\hat{B}\right] \right\rangle  \right)^2
> \end{align*}
> $$
> as claimed.
> <span class="QED"/>

> [!check]- Minimum uncertainty wavepacket
> In order for the inequalities above to become equalities,
> we require $\ket{g} = c \ket{f}$ and $\Re(\braket{ f | g }) = \Re(c \braket{ f | f }) = 0$,
> implying $\Re(c) = 0$.
> Thus a minimum uncertainty $\ket{\psi}$ has
> $$
> \begin{align*}
> \ket{g}  &= i a\ket{f} \\
> (\hat{B} - \langle \hat{B} \rangle )\ket{\psi}  &= ia (\hat{A} - \langle \hat{A} \rangle ) \ket{\psi} 
> \end{align*}
> $$
> with $a$ real.
> For $\hat{A}=\hat{x}$ and $\hat{B}=\hat{p}$ in [[QM in 1D position-space|1D position-space]] we get a Gaußian[^2018]
> $$
> \begin{align*}
> \psi(x) = A\exp\left( -\frac{a(x-\langle x \rangle)^2)}{2\hbar} \right) \exp \left(\frac{i \langle p \rangle x}{\hbar} \right)
> \end{align*}
> $$
> in which case $\sigma_{x} \sigma_{p} = \frac{\hbar}{2}$.
> Hence the uncertainty principle is correct, giving the greatest lower bound on the uncertainty of arbitrary observables.
> <span class="QED"/>

> [!tip]- Intuition: The uncertainty principle for classical waves
> Consider a classical wave, e.g. a sinusoidal wave traveling down a long rope.
> It is difficult to say where the wave is, since it is distributed throughout the rope,
> but it is possible to give the wavelength.
> Now consider a localized bump travelling down the rope.
> In this case, it is possible to describe the position of the bump,
> but giving its wavelength is difficult, since it has no periodicity.
> Hence we see that _the more precise a wave's position is, the less precise its wavelength, and vice versa_.
> In quantum mechanics, wavelengths correspond to momenta.[^2018]

[^2018]: 2018\. [[Sources/@griffithsIntroductionQuantumMechanics2018|Introduction to Quantum Mechanics]], §3.5.2, pp. 108–109

## Heisenberg uncertainty princple

The **Heisenberg uncertainty principle** is the special case of
$$
\begin{align*}
\sigma^2_{x}\sigma^2_{p} \geq \frac{\hbar}{2}
\end{align*}
$$

#
---
#state/develop | #lang/en | #SemBr
