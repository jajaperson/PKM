---
tags:
  - public
---
[[QM in 1D position-space]]
# QM of a particle in a harmonic oscillator

A particle in the **harmonic oscillator potential**
$$
\begin{align*}
V(x) = \frac{1}{2}m \omega^2x^2 = \frac{1}{2}\omega \hbar \xi^2
\end{align*}
$$
where $\xi = \sqrt{ m\omega / \hbar } x$ is a dimensionless variable has ground state
$$
\begin{align*}
\psi_{0}(x) = \left( \frac{m\omega}{\pi \hbar} \right)^{1/4} e^{-m\omega x^2/2\hbar}
= \left( \frac{m\omega}{\pi \hbar} \right)^{1/4} e^{-\xi^2/2}
\end{align*}
$$
with all stationary states and their energies given by

$$
\begin{align*}
\psi_{n} &= \frac{1}{\sqrt{ n! }} (\hat{a}_{+})^n \psi_{0}\\
E_{n}&=\left( n+\frac{1}{2} \right)\hbar\omega
\end{align*}
$$
^energies

where $n \in \mathbb{N}_{0}$ and

$$
\begin{align*}
a_{\pm} = \frac{m\omega \hat{x} \mp i\hat{p}}{\sqrt{ 2m\omega \hbar }} = \frac{1}{\sqrt{ 2 }}\left( \hat{\xi} \mp \frac{d}{d\xi} \right)
\end{align*}
$$
^ladder

are the so-called [[Ladder operator|ladder operators]] (see properties [[#Properties of the ladder operators|below]]).


> [!check]- Proof of solutions
> The time independent Schrödinger equation is
> $$
> \begin{align*}
> \frac{1}{2m}(\hat{p}^2+(m\omega \hat{x})^2) \psi = E\psi
> \end{align*}
> $$
> which is only normalizable for $E > 0$ (see).
> Motivated by finding a “difference of perfect squares” like representation for $\hat{H}$,[^2018]
> we define the ladder operators given [[#^ladder|above]] with the properties listed [[#Properties of the ladder operators|below]].
> thus the time-independent Schrödinger equation becomes
> $$
> \begin{align*}
> \hbar\omega\left( \hat{a}_{\pm}\hat{a}_{\mp} \pm \frac{1}{2} \right)\psi = E\psi
> \end{align*}
> $$ 
> Crucially, $\hat{a}_{\pm}$ have the property that given a solution $\hat{H}\psi = E\psi$ to the TISE,
> then $\hat{a}_{\pm} \psi$ also solve the Schrödinger equation:
> $$
> \begin{align*}
> \hat{H}(\hat{a}_{\pm} \psi) &= \hbar\omega\left( \hat{a}_{\pm} \hat{a}_{\mp} \pm \frac{1}{2} \right) (\hat{a}_{\pm}\psi) 
> = \hbar\omega\left( \hat{a}_{\pm} \hat{a}_{\mp} \hat{a}_{\pm} \pm \frac{1}{2}\hat{a}_{\pm} \right)\psi \\
> &= \hbar\omega \hat{a}_{\pm}\left( \hat{a}_{\mp}\hat{a}_{\pm} \pm \frac{1}{2} \right) \psi
> = \hat{a}_{\pm} \hbar\omega\left( \hat{a}_{\pm}\hat{a}_{\mp} \pm 1 \pm \frac{1}{2} \right)\psi \\
> &= \hat{a}_{\pm} (\hat{H}\pm\hbar\omega)\psi
> = \hat{a}_{\pm} (E \pm \hbar\omega)\psi = (E\pm\hbar\omega) \hat{a}_{\pm}\psi
> \end{align*}
> $$
> which also follows from the defining property of [[Ladder operator|Ladder operators]].
> Since successively applying $\hat{a}_{-}$ lowers energy,
> and normalizable solutions have nonnegative energy,
> the sequence must terminate with $\hat{a}_{-} \psi_{0} = 0$.
> Finding this “bottom rung” amounts to solving the differential equation
> $$
> \begin{align*}
> \frac{d\psi_{0}}{dx} = - \frac{m\omega}{\hbar}x\psi_{0}
> \end{align*}
> $$
> is a [[First-order linear differential equation]] with normalized solution
> $$
> \begin{align*}
> \psi_{0}(x) = \left( \frac{m\omega}{\pi \hbar} \right)^{1/4} e^{-m\omega x^2/2\hbar}
> \end{align*}
> $$
> All normalizable solutions must be given by the ladder operators,
> since otherwise an alternate bottom rung could be found.
> <span class="QED"/>

> [!check]- Orthonormality
> It follows from [[#^LP8]] and [[#^LP9]] that
> $$
> \begin{align*}
> \ket{\psi_{n}}  &= \frac{1}{\sqrt{ n! }} (\hat{a}_{+})^n \ket{\psi_{0}} 
> \end{align*}
> $$
> hence the states given above are normalized.
> Orthogonality is manifest in
> $$
> \begin{align*}
> n \braket{ \psi_{m} | \psi_{n} } = \bra{\psi_{m}} \hat{a}_{+}\hat{a}_{-} \ket{\psi_{n}} 
> = \bra{\psi_{m}} (\hat{a}_{+}\hat{a}_{-})^{\dagger}\ket{\psi_{n}}  
> = m \braket{ \psi_{m} |  \psi_{n} }  
> \end{align*}
> $$
> and hence $(m-n)\braket{ \psi_{m} | \psi_{n} } = 0$,
> implying $\braket{ \psi_{m} | \psi_{n} } = 0$ for $m \neq n$.
> <span class="QED"/>

  [^2018]: 2018\. [[Sources/@griffithsIntroductionQuantumMechanics2018|Introduction to quantum mechanics]], §2.3.1, pp. 40ff

An alternate representation in terms of [[Hermite polynomial|Hermite polynomials]][^normed] is[^herm]
$$
\begin{align*}
\psi_{n}(x) = \left( \frac{m\omega}{\pi \hbar} \right)^{1/4} \frac{1}{\sqrt{ 2^n n! }} H_{n}(\xi) e^{-\xi^2/2}
\end{align*}
$$

  [^herm]: 2018\. [[Sources/@griffithsIntroductionQuantumMechanics2018|Introduction to quantum mechanics]], §2.3.2, p. 52
  [^normed]: Normalized so that the highest power of $\xi$ has coëfficient $2^n$.

## Properties

1. The harmonic oscillator potential is a good approximation for many potentials with a minimum at $0$, since $V(x) = \cancel{ V(0) } + \cancel{ V'(0)x } + \frac{1}{2} V''(0)x^2 + \cdots$.
2. The following general equations for expectation values hold for a stationary state $\ket{\psi_{n}}$
    - $\langle \hat{x} \rangle = 0$ ^Ex
    - $\langle \hat{p} \rangle = 0$ ^Ep
    - $\langle \hat{x}^2 \rangle = (\sigma_{\hat{x}})^2 = E_{n} / m\omega^2 = \left( n + \frac{1}{2} \right) \frac{\hbar}{m\omega}$ ^Ex2
    - $\langle \hat{p}^2 \rangle = (\sigma_{\hat{p}})^2 = m E_{n} = \left( n+\frac{1}{2} \right) m\hbar\omega$ ^Ep2
    - $\langle V \rangle = \frac{1}{2} m \omega^2 \langle \hat{x}^2 \rangle = \frac{E_{n}}{2} = \left( n+\frac{1}{2} \right) \frac{\hbar\omega}{2}$ ^EV
    - $\langle T \rangle = \frac{\langle p^2 \rangle}{2m} = \frac{E_{n}}{2} = \left( n+\frac{1}{2} \right) \frac{\hbar\omega}{2}$ ^ET

> [!check]- Proof of 2
> Clearly $\bra{  \psi_{n} } \hat{x} \ket{ \psi_{n} } = \int_{-\infty}^{\infty} x  \abs{\psi_{n}(x)}^2  \, dx = 0$ by [[Odd and even functions#Integration properties]], proving [[#^Ex]].
> Invoking various [[#Properties of the ladder operators]]
> $$
> \begin{align*}
> \bra{\psi_{n}} \hat{p}\ket{\psi_{n}} &= i\sqrt{ \frac{\hbar m\omega}{2} } \bra{\psi_{n}} (\hat{a}_{+} - \hat{a}_{-})\ket{\psi_{n}} \\
> &= i\sqrt{ \frac{\hbar m\omega}{2} } \left( \bra{\psi_{n}} \hat{a}_{+}\ket{\psi_{n}} - \bra{\psi_{n}} \hat{a}_{-}\ket{\psi_{n}}  \right) \\
> &= i\sqrt{ \frac{\hbar m\omega}{2} } \left( \sqrt{ n+1 } \cancel{ \braket{ \psi_{n} | \psi_{n+1} } } - \sqrt{ n + 1 } \cancel{ \braket{ \psi_{n+1} | \psi_{n} } }  \right) \\
> &= 0 \\
> \bra{\psi_{n}} \hat{x}^2 \ket{\psi_{n}} &= \frac{\hbar}{2m\omega} \bra{\psi_{n}} (\hat{a}_{+}+\hat{a}_{-})^2 \ket{\psi_{n}} \\
> &= \frac{\hbar}{2m\omega} \bra{\psi_{n}} \left( (\hat{a}_{+})^2 + (\hat{a}_{-})^2 + {\{ \hat{a}_{+}, \hat{a}_{-} \}} \right) \ket{ \psi_{n}} \\
> &= \frac{\hbar}{2m\omega} \left( \cancel{ \bra{\psi_{n}} (\hat{a}_{+})^2 \ket{\psi_{n}} } + \cancel{ \bra{\psi_{n}} (\hat{a}_{-})^2 \ket{\psi_{n} } } + \frac{2}{\hbar\omega} \bra{\psi_{n}} \hat{H}\ket{\psi_{n}}    \right)\\
> &= \frac{E_{n}}{m\omega^2} = \left( n+\frac{1}{2} \right) \frac{\hbar}{m\omega} \\
> 
> \bra{\psi_{n}} \hat{p}^2 \ket{\psi_{n} } &= -\frac{\hbar m\omega}{2} \bra{\psi_{n}} (\hat{a}_{+}-\hat{a}_{-})^2 \ket{\psi_{n}} \\
> &= -\frac{\hbar m\omega}{2} \bra{\psi_{n}} \left( (\hat{a}_{+})^2 + (\hat{a}_{-})^2 -{\{ \hat{a}_{+}, \hat{a}_{-} \}} \right) \ket{ \psi_{n}} \\
> &= -\frac{\hbar m\omega}{2} \left( \cancel{ \bra{\psi_{n}} (\hat{a}_{+})^2 \ket{\psi_{n}} } + \cancel{ \bra{\psi_{n}} (\hat{a}_{-})^2 \ket{\psi_{n} } } - \frac{2}{\hbar\omega} \bra{\psi_{n}} \hat{H}\ket{\psi_{n}}    \right)\\
> &= m E_{n} = \left( n+\frac{1}{2} \right) m\hbar\omega
> \end{align*}
> $$
> proving [[#^Ep]], [[#^Ex2]], and [[#^Ep2]],
> whence [[#^EV]] and [[#^ET]] immediately follow.
> <span class="QED"/>

### Properties of the ladder operators


1. $\hat{a}_{\mp}\hat{a}_{\pm} = \frac{\hat{H}}{\hbar\omega}\pm\frac{1}{2}$ ^LP1
2. $[\hat{a}_{-},\hat{a}_{+}] = 1$ ^LP2
3. $\hat{H} = \hbar\omega \left( \hat{a}_{\pm}\hat{a}_{\mp} \pm \frac{1}{2} \right)$ ^LP3
4. $[\hat{H}, \hat{a}_{\pm}] = \pm \hbar\omega \hat{a}_{\pm}$ ^LP4
5. $(\hat{a}_{\pm})^{\dagger} = \hat{a}_{\mp}$ ^LP5
6. $\hat{x} = \sqrt{ \frac{\hbar}{2m\omega} } (\hat{a}_{+} + \hat{a}_{-})$ ^LP6
7. $\hat{p} = i\sqrt{ \frac{\hbar m\omega}{2} } (\hat{a}_{+} - \hat{a}_{-})$ ^LP7
8. $\hat{a}_{+}\ket{\psi_{n}} = \sqrt{ n+1 } \ket{\psi_{n+1}}$ ^LP8
9. $\hat{a}_{-}\ket{\psi_{n}} = \sqrt{ n }\ket{\psi_{n-1}}$ for $n > 0$ ^LP9
10. $\{ \hat{a}_{\pm},\hat{a}_{\mp} \} = \frac{2\hat{H}}{\hbar\omega}$ ^LP10

> [!check]- Proof of 1–5, 8–10
> Properties 1–3 and 10 follow from
> $$
> \begin{align*}
> \hat{a}_{\mp}\hat{a}_{\pm} &= \frac{1}{2\hbar m\omega}\left(\hat{p}^2+(m\omega \hat{x})^2\right) \mp \frac{i}{2\hbar}[\hat{x},\hat{p}]\\
> &=  \frac{\hat{H}}{\hbar\omega}\pm\frac{1}{2} \\
> \end{align*}
> $$
> For [[#^LP4]] note
> $$
> \begin{align*}
> [\hat{H}, \hat{a}_{\pm}] &= \left[ \hbar \omega\left( \hat{a}_{\pm} \hat{a}_{\mp} \pm \frac{1}{2} \right) , \hat{a}_{\pm}\right] \\
> &= \hbar\omega [\hat{a}_{\pm} \hat{a}_{\mp}, \hat{a}_{\pm}] \pm \cancel{ \hbar\omega\left[ \frac{1}{2}, \hat{a}_{\pm} \right] } \\
> &=\hbar\omega(\hat{a}_{\pm} \hat{a}_{\mp} \hat{a}_{\pm} - \hat{a}_{\pm}\hat{a}_{\pm} \hat{a}_{\mp}) \\
> &= \hbar\omega \hat{a}_{\pm} [\hat{a}_{\mp}, \hat{a}_{\pm}] \\
> &= \pm \hbar\omega\hat{a}_{\pm} 
> \end{align*}
> $$
> which shows that these are indeed [[Ladder operator|ladder operators]],
> and thus [[#^LP5]] follows from [[Ladder operator#^P1]].[^comp]
> 
> From [[#^LP5]] we have 
> $$
> \begin{align*}
> \bra{\psi_{n}} (\hat{a}_{\pm})^{\dagger} \hat{a}_{\pm} \ket{\psi_{n}} = \bra{\psi_{n}} \hat{a}
> _{\mp} \hat{a}_{\pm} \ket{\psi_{n}} 
> \end{align*}
> $$
> but from the Schrödinger equation, [[#^LP3]], and the [[#^energies]] formula,
> it follows that
> $$
> \begin{align*}
> \hat{a}_{+} \hat{a}_{-} \ket{\psi_{n}} = n \ket{\psi_{n}},
> \quad
> \hat{a}_{-}\hat{a}_{+} \ket{\psi_{n}} = (n+1) \ket{\psi_{n}} 
> \end{align*}
> $$
> hence
> $$
> \begin{align*}
> \bra{\psi_{n}} (\hat{a}_{+}) ^{\dagger} \hat{a}_{+} \ket{\psi_{n}} &= \bra{\psi_{n}} \hat{a}_{-}\hat{a}_{+} \ket{\psi_{n}} = (n+1) \braket{ \psi_{n} | \psi_{n} } \\
> \bra{\psi_{n}} (\hat{a}_{-}) ^{\dagger} \hat{a}_{-} \ket{\psi_{n}} &= \bra{\psi_{n}} \hat{a}_{+}\hat{a}_{-} \ket{\psi_{n}} = n \braket{ \psi_{n} | \psi_{n} } 
> \end{align*}
> $$
> thus if $\ket{\psi_{n}}$ and $\ket{\psi_{n \pm 1}}$ are normalized, $\hat{a}_{+}\ket{\psi_{n}} = \sqrt{ n+1 } \ket{\psi_{n+1}}$ and $\hat{a}_{-}\ket{\psi_{n}}= \sqrt{ n }\ket{\psi_{n-1}}$,
> proving [[#^LP8]] and [[#^LP9]]
> <span class="QED"/>

  [^comp]: This follows from completeness since the behaviour of $\hat{a}_{-}$ matches that predicted by [[Ladder operator#^P1]] for $(\hat{a}_{+})^{\dagger}$ all eigenfunctions, and therefore is the same operator.

#
---
#state/tidy | #lang/en | #SemBr
