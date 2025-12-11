---
tags:
  - public
---
[[Quantum mechanics MOC]]
# QM with one continuous degree of freedom

Consider the Hilbert space $L^2(\mathbb{R})$ with vectors represented in the position basis $\Psi(x,t) = \braket{ x | \psi(t) }$.
The momentum operator is given by
$$
\begin{align*}
\hat{p} = -i\hbar \frac{ \partial }{ \partial x } 
\end{align*}
$$
and thus the [[Hamiltonian operator]] by
$$
\begin{align*}
\hat{H}(t) = -\frac{\hbar}{2m} \frac{ \partial^2 }{ \partial x^2 } + V(x,t)
\end{align*}
$$
and the [[Schrödinger equation]] becomes
$$
\begin{align*}
i\hbar \frac{ \partial }{ \partial t } \Psi(x,t) = -\frac{\hbar}{2m} \frac{ \partial^{2} }{ \partial x^{2} } + V(x,t)
\end{align*}
$$

[^2018]: 2018\. [[Sources/@griffithsIntroductionQuantumMechanics2018|Introduction to Quantum Mechanics]], §2.1, p. 26

## Time independent Schrödinger equation

If $V$ is time-independent the [[Schrödinger equation#Time independent Schrödinger equation|stationary states]] are given by the time-independent Schrödinger equation
$$
\begin{align*}
\Psi_{n}(x,t) &= \psi_{n}(x)e^{-iE_{n}t/\hbar} \\
E_{n}\psi &= -\frac{\hbar}{2m} \frac{ \partial^{2} }{ \partial x^{2} } \psi + V(x)\psi
\end{align*}
$$
and thus general solutions are given by[^2018]
$$
\begin{align*}
\Psi(\mathbf{r},t) = \sum c_{n} \psi_{n}(x) e^{-iE_{n}t/\hbar}
\end{align*}
$$

### Properties of solutions

1. If $V(x)$ is an [[Odd and even functions|even function]] then $\psi(x)$ is either odd or even ^TISEP1

> [!check]- Proof of 1
> Let $V(x)$ be even, i.e. $V(x) = V(-x)$
> Let $\psi$ be a solution to the TISE so that
> $$
> \begin{align*}
> E \psi(x) &= \hat{H}\psi(x) \\
> &= -\frac{\hbar}{2m}\frac{ \partial^2  }{ \partial x^2 } \psi(x) + V(x) \psi(x)
> \end{align*}
> $$
> it follows immediately that
> $$
> \begin{align*}
> E\psi(-x) &= -\frac{\hbar}{2m}\frac{ \partial^{2}  }{ \partial x^{2} } \psi(-x) + V(-x) \psi(-x) \\
> &= -\frac{\hbar}{2m}\frac{ \partial^{2}  }{ \partial x^{2} } \psi(-x) + V(x) \psi(-x) \\
> &= \hat{H}\psi(-x)
> \end{align*}
> $$
> Let $\psi_{\pm}(x) = \psi(x) \pm \psi(-x)$, so
> $$
> \begin{align*}
> \psi_{\pm}(-x) &= \psi(-x) \pm \psi(x) \\
> &= \pm (\psi(x) \pm \psi(-x)) \\
> &= \pm \psi_{\pm}(x)
> \end{align*}
> $$
> hence $\psi_{+}$ is even and $\psi_{-}$ is odd.
> Then $\hat{H} \psi_{\pm} = E\psi_{\pm}$ by linearity, 
> and $\psi = \frac{1}{2}\psi_{+} + \frac{1}{2}\psi_{-}$,
> so any solution is a linear combination of even and odd eigenstates.
> Hence $\psi_{\pm}$ may be chosen as eigenstates.
> Note in cases of energy degeneracy there is always a choice.
> <span class="QED"/>

## General properties

1. The canonical commutation relations is
  $$
  \begin{align*}
  [\hat{x},\hat{p}] &= i\hbar
  \end{align*}
  $$
2. The energy of a normalizable solution must exceed the the infimum of the potential.


## Particular potentials

- [[QM of a particle in a 1D infinite square well]]
- [[QM of a particle in a 1D harmonic oscillator]]
- [[QM of a free particle in 1D]]
- [[QM of a particle in a 1D Dirac delta potential]]
- [[QM of particle in a 1D finite square well]]

#
---
#state/develop | #lang/en | #SemBr
