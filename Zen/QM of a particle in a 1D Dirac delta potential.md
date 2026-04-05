---
tags:
  - public
---
[[QM in 1D position-space]]
# QM of a particle in a 1D Dirac delta potential

A particle in a [[Dirac delta]] potential $V(x) = -\alpha \delta(x)$[^2018]
has exactly one [[Bound and scattering states|bound state]]
$$
\begin{align*}
\psi(x) &= \frac{\sqrt{ m\alpha }}{\hbar} e^{-m\alpha\abs x / \hbar^2} \\
E&= -\frac{m\alpha^2}{2\hbar^2}
\end{align*}
$$
and [[Bound and scattering states|scattering states]]^[yet to be dirac normalized]
$$
\begin{align*}
\psi(x) = \begin{cases}
Ae^{ikx} + Be^{-ikx}  & x \leq 0 \\
Fe^{ikx} + Ge^{-ikx} & x \geq 0
\end{cases}
\end{align*}
$$
where $F-G = A(1+2i\beta) - B(1 - 2i \beta)$ and $\beta = \frac{m\alpha}{\hbar^2 k}$

[^2018]: 2018\. [[Sources/@griffithsIntroductionQuantumMechanics2018|Introduction to quantum mechanics]], §2.5.2, pp. 63ff.

> [!check]- Proof
> We begin with [[Bound and scattering states|bound states]] (i.e. $E < 0$).
> Letting $\kappa = \sqrt{ -2mE }/\hbar$ the Schrödinger equation for $x \neq 0$ reads
> $$
> \begin{align*}
> \frac{d^2\psi}{dx^2} = \kappa^2 \psi
> \end{align*}
> $$
> which has the general solution $\psi(x) = \tilde{A} e^{\kappa x}+ \tilde{B}e^{-\kappa x}$.
> Applying the boundary conditions $\psi(\pm\infty) = 0$ and continuity of $\psi$ we conclude $\psi(x) = Be^{- \kappa \abs x}$.
> Integrating the complete Schrödinger equation over $(-\epsilon,\epsilon)$ gives
> $$
> \begin{align*}
> E \int_{-\epsilon}^{\epsilon} \psi(x) \, dx &= - \frac{\hbar^2}{2m} \int_{-\epsilon}^{\epsilon} \frac{d^2\psi}{dx^2} \, dx -\alpha \int_{-\epsilon}^{\epsilon} \delta(x) \psi(x) \, dx \\
> &= -\frac{\hbar^2}{2m} \left[ \frac{d^2\psi}{dx^2} \right]_{x=-\epsilon}^{x=\epsilon} - \alpha \psi(0)
> \end{align*}
> $$
> and taking the limit $\epsilon \to 0$ gives
> $$
> \begin{align*}
> - \frac{2m\alpha}{\hbar^2} B 
> &= \frac{d\psi}{dx}(0^+) - \frac{d\psi}{dx}(0^{-}) = 2\kappa B
> \end{align*}
> $$
> hence $\kappa = -m \alpha / \hbar^2$ and
> $$
> \begin{align*}
> E = -\frac{\hbar^2\kappa^2}{2m} = -\frac{m\alpha^2}{2\hbar^2}
> \end{align*}
> $$
> Normalization yields
> $$
> \begin{align*}
> 1 &= \abs B^2 \int_{-\infty}^{\infty} e^{-2 \kappa \abs x} \, dx
> = 2\abs B^2 \int_{0}^{\infty} e^{-2\kappa x} \, dx = \frac{\abs B^2}{\kappa}
> \end{align*}
> $$
> hence $B = \sqrt{ \kappa } = \sqrt{ m\alpha } / \hbar$.
> 
> For [[Bound and scattering states|scattering states]] ($E \geq 0$),
> let $k = \sqrt{ 2mE }/\hbar$.
> The Schrödinger equation for $x \neq 0$ thence becomes
> $$
> \begin{align*}
> \frac{d^2\psi}{dx^2} = -k^2 \psi
> \end{align*}
> $$
> it follows
> $$
> \begin{align*}
> \psi(x) = \begin{cases}
> \tilde{A}e^{ikx} + \tilde{B}e^{-ikx} & x \leq 0 \\
> \tilde{F}e^{ikx} + \tilde{G}e^{-ikx} & x\geq 0
> \end{cases}
> \end{align*}
> $$
> where continuity requires $A+B=F+G$.
> The derivatives are
> $$
> \begin{align*}
> \frac{d\psi}{dx}(0^{-}) &= ik-A - B) \\
> \frac{d\psi}{dx}(0^{-}) &= ik(F-G)
> \end{align*}
> $$
> hence
> $$
> \begin{align*}
> -\frac{2m\alpha}{\hbar^2} (A-B) = ik(F-G-A+B)
> \end{align*}
> $$
> which may be reärranged to
> $$
> \begin{align*}
> F-G = A(1+2i\beta)-B(1-2i\beta)
> \end{align*}
> $$
> where $\beta = m\alpha/\hbar^2k$
> <span class="QED"/>

## Properties

1. The reflection and transmission coëfficients (regardless of which side the particle enters) for scattering states are ^P1
  $$
  \begin{align*}
  R &= \frac{1}{1+(2\hbar^2 E / m\alpha^2)} \\
  T &= \frac{1}{1+(2m\alpha^2/ 2\hbar^2 E)}
  \end{align*}
  $$
  which do not depend on the sign of $\alpha$.
2. The bound state has the following expectation values ^P2
    - $\langle \hat{x} \rangle = 0$
    - $\langle \hat{p} \rangle=0$
    - $\langle \hat{x}^2 \rangle = \frac{\hbar^2}{2m^2\alpha^2}$
    - $\langle \hat{p}^2 \rangle = \left( \frac{m\alpha}{\hbar} \right)^2$

> [!check]- Proof of 1–2
> Since the velocities of the particle are equal on either side of the potential,
> it is sufficient to compare the coëfficients of the unnormalized scattering state.
> Since the setup is symmetric, without loss of generality let the particle scatter from the left, so $G=0$.
> Thus $A$ corresponds to the incident wave amplitude,
> $B$ to the reflected wave,
> and $F$ to the transmitted wave.
> $$
> \begin{align*}
> B &= \frac{i\beta}{1-i\beta}A \\
> F &= \frac{1}{1-i\beta}A
> \end{align*}
> $$
> thus
> $$
> \begin{align*}
> R &= \frac{\abs B^2}{\abs A^2} = \frac{\beta^2}{1+\beta^2} = \frac{1}{1+(2\hbar^2 E / m\alpha^2)} \\
> T &= \frac{\abs F^2}{\abs A^2} = \frac{1}{1+\beta^2} = \frac{1}{1+(2m\alpha^2/ 2\hbar^2 E)}
> \end{align*}
> $$
> as claimed by [[#^P1]].
> Note that these are unchanged for negative $\alpha$.
> 
> First we compute the necessary derivatives
> $$
> \begin{align*}
> \frac{d}{dx}\psi(x) &= \frac{\sqrt{ m\alpha }}{\hbar}\begin{cases}
> \frac{m\alpha}{\hbar^2} e^{m\alpha x/\hbar^2} & x\leq 0 \\
> -\frac{m\alpha}{\hbar^2}e^{-m\alpha x/\hbar^2} & x \geq 0
> \end{cases} \\
> &= \left( \frac{m\alpha}{\hbar^2} \right)^{3/2}(\Theta(-x) e^{m\alpha x/\hbar^2} - \Theta(x) e^{-m\alpha x/\hbar^2}) \\
> \frac{d^2}{dx^2}\psi(x) &= \left( \frac{m\alpha}{\hbar^2} \right)^{3/2} \left( -\delta(x) (e^{{m\alpha x /\hbar}} + e^{-m\alpha x/\hbar}) + \frac{m\alpha}{\hbar^2}\Theta(-x) (e^{m\alpha x/\hbar^2} + \Theta(x) e^{-m\alpha x/\hbar^2}) \right) \\
> &= \left( \frac{m\alpha}{\hbar^2} \right)^{3/2} \left( -2\delta(x) + \frac{m\alpha}{\hbar^2} e^{-m\alpha \abs x / \hbar^2} \right)
> \end{align*}
> $$
> where $\Theta$ is the [[Heaviside function]].
> Thus
> $$
> \begin{align*}
> \bra{\psi} \hat{x} \ket{\psi} &= \frac{{ m\alpha }}{\hbar^2} \int_{-\infty}^{\infty}  \underbrace{ xe^{-2m\alpha\abs x / \hbar^2} }_{ \text{odd} } \, dx = 0 \\
> \bra{\psi} \hat{x}^2 \ket{\psi} &= \frac{m\alpha}{\hbar^2} \int_{-\infty}^{\infty} \underbrace{ x^2 e^{-2m\alpha\abs x /\hbar^2} }_{ \text{even} } \, dx \\
> &= \frac{2m\alpha}{\hbar^2} \int_{0}^{\infty} x^2 e^{-2m\alpha x / \hbar^2} \, dx \\
> &= \frac{2m\alpha}{\hbar^2} (2!) \left( \frac{\hbar^2}{2m\alpha } \right)^3 \\
> &= \frac{\hbar^4}{2m^2\alpha^2} \\
> \bra{\psi} \hat{p}\ket{\psi} &= -i\hbar \int_{-\infty}^{\infty} \psi(x) \frac{d}{dx}\psi(x) \, dx \\
> &= -\frac{i\hbar m\alpha}{\hbar^2} \int_{-\infty}^{\infty}  \underbrace{ (\Theta(-x) -\Theta(x)) \psi(x)^2 }_{ \text{odd} } \, dx \\
> &= 0 \\
> \bra{\psi} \hat{p}^2 \ket{\psi} &= -\hbar^2 \int_{-\infty}^{\infty} \psi(x) \frac{d^2}{dx^2}\psi(x) \, dx \\
> &= -  \left( \frac{m\alpha}{\hbar} \right)^{2} \int_{-\infty}^{\infty} e^{-m\alpha\abs x / \hbar^2} \left( -2\delta(x) + \frac{m\alpha}{\hbar^2} e^{-m\alpha \abs x / \hbar^2} \right) \, dx \\
> &= \left( \frac{m\alpha}{\hbar} \right)^2 \left[ 2 - \frac{m\alpha}{\hbar^2} 2\int_{-\infty}^{\infty}  e^{-2m\alpha \abs x / \hbar^2} \, dx  \right]  \\
> &= \left( \frac{m\alpha}{\hbar} \right)^2 \left[ 2 - \frac{m\alpha}{\hbar^2} \frac{\hbar^2}{2m\alpha}  \right] \\
> &= \left( \frac{m\alpha}{\hbar} \right)^2 \left[ 2 - \frac{m\alpha}{\hbar^2} \frac{\hbar^2}{m\alpha}  \right] \\
> &= \left( \frac{m\alpha}{\hbar} \right)^2
> \end{align*}
> $$
> proving [[#^P2]].
> <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr
