---
tags:
  - public
---
[[QM in 1D position-space]]
# QM of a free particle in 1D

A particle in free space $V(x) = 0$ has two-fold degenerate non-normalizable[^dirac] (and hence non-physical) [[Schrödinger equation|stationary states]]
$$
\begin{align*}
\Psi_{k}(x,t) = \frac{1}{\sqrt{ 2\pi }} e^{ikx}e^{-i\hbar k^2 t / 2m}
\end{align*}
$$
where $k = \pm \sqrt{ 2mE_{k} } / \hbar$ with sign indicating direction of propagation.
Since energy exhibits no quantisation,
a general solution has the form
$$
\begin{align*}
\Psi(x,t) = \frac{1}{\sqrt{ 2\pi }} \int_{-\infty}^{\infty} \phi(k) e^{ikx}e^{-i\hbar k^2 t / 2m} \, dk
\end{align*}
$$
where $\phi(k)$ is the distribution of $k$ within a **wave packet**,
which can be found for normalized $\Psi(x,0)$ via the [[Fourier transform]]
$$
\begin{align*}
\phi(k) = \mathcal{F} \{ \Psi(x,0) \}(k) = \frac{1}{\sqrt{ 2\pi }} \int_{-\infty}^{\infty} \Psi(x,0) e^{-ikx} \, dx 
\end{align*}
$$


> [!check]- Proof
> The TISE reads
> $$
> \begin{align*}
> -\frac{\hbar}{2m} \frac{d}{dx^2}\psi = E \psi
> \end{align*}
> $$
> or equivalently
> $$
> \begin{align*}
> \frac{d^2}{dx^2}\psi = -k^2 \psi
> \end{align*}
> $$
> which has solutions
> $$
> \begin{align*}
> \psi(x) = \tilde{A}e^{ikx} + \tilde{B}e^{-ikx}
> \end{align*}
> $$
> which we split into left- ($k < 0$) and right-moving ($k > 0$) waves.
> Since there are no boundary conditions on $A$ and $B$,
> there is no quantization of $k$.
> Furthermore these states are non-normalizable
> <span class="QED"/>

[^dirac]: But [[Dirac orthonormality|Dirac orthonormal]]

## Properties

1. The velocity of a stationary state $\langle \hat{v} \rangle = v_{\varphi} = \sqrt{ \frac{E}{2m} }$,
   whereas the [[group velocity]] $v_{g} = \sqrt{ \frac{2E}{m} }$ matches the classical velocity.[^2018]
2. The probability flux for $\Psi_{k}(x,t)$ is $J_{k}(x,t) = \frac{\hbar k}{2m}$. ^P2

[^2018]: 2018\. [[Sources/@griffithsIntroductionQuantumMechanics2018|Introduction to quantum mechanics]], §2.4, pp. 58–59.

> [!check]- Proof of 2.
> Applying [[Probability current#^1D]] we have
> $$
> \begin{align*}
> J_{k}(x,t) &= \frac{i\hbar}{2m} \left( \Psi_{k} \frac{ \partial }{ \partial x } \Psi_{k}^* - \Psi_{k}^* \frac{ \partial }{ \partial x } \Psi_{k} \right) \\
> &= \frac{i\hbar}{2\pi m} \left( -ik  -ik   \right) \\
> &= \frac{\hbar k}{\pi m}
> \end{align*}
> $$
> proving [[#^P2]].
> <span class="QED"/>

See also

- [[Uncertainty principle for a free particle in 1D position-space]]

#
---
#state/tidy | #lang/en | #SemBr


