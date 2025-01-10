---
tags:
  - public
---
[[QM in 1D position-space]]
# QM of particle in a 1D finite square well

A particle in the **finite square well** potential
$$
\begin{align*}
V(x) = \begin{cases}
-V_{0} & x \in [-a,a] \\
0 & \text{elsewhere}
\end{cases}
\end{align*}
$$
where
$$
\begin{align*}
\kappa&=\frac{\sqrt{ -2mE }}{\hbar} = \frac{\sqrt{ z_{0}^2 + z^2 }}{a} \\
l &= \frac{\sqrt{ -2m(E+V_{0}) }}{\hbar} = \frac{z}{a} 
\end{align*}
$$
has odd bound states
$$
\begin{align*}
\psi(x) &= \begin{cases}
A e^{\kappa x} & x < -a \\
F \sin lx & x \in [-a,a] \\
-A e^{-\kappa x} & z=x > a
\end{cases}
\end{align*}
$$
where 
$$
\begin{align*}
A &= -Fe^{\kappa a}\sin la\\
\cot z &= \sqrt{ \frac{z^2_{0}}{z^2} - 1 }
\end{align*}
$$
and even bound states
$$
\begin{align*}
\psi(x) &= \begin{cases}
A e^{\kappa x} & x < -a \\
F \cos lx & x \in [-a,a] \\
A e^{-\kappa x} & z=x > a
\end{cases}
\end{align*}
$$
where
$$
\begin{align*}
A &= Fe^{\kappa a}\cos la\\
\tan z &= \sqrt{ \frac{z^2_{0}}{z^2} - 1 }
\end{align*}
$$

> [!check]- Proof
> [[Bound and scattering states|Bound states]] correspond to $-V_{0} \leq E < 0$.
> [](Bound%20and%20scattering%20states.md)llows that $\psi(-x) = \pm \psi(x)$.
> For $x \in (-\infty,a)$ the Schrödinger equation becomes
> $$
> \begin{align*}
> E\psi(x) &= -\frac{\hbar^2}{2m} \frac{d^2}{dx^2}\psi(x) \\ 
> \frac{d^2}{dx^2}\psi(x) &= - \frac{2mE}{\hbar^2} \psi(x) \\
> &= \kappa^2 \psi(x)
> \end{align*}
> $$
> where $\kappa = \sqrt{ -2mE } / \hbar$.
> Thus $\psi(x) = Ae^{-\kappa x} + Be^{\kappa x}$ for $x \in (-\infty,a)$, and applying $\lim_{ x \to -\infty }\psi(x)=0$ we conclude $A = 0$.
> For $x \in [-a,a]$ the Schrödinger equation is
> $$
> \begin{align*}
> E \psi(x) &= -\frac{\hbar^2}{2m} \frac{d^2}{dx^2}\psi(x) - V_{0}\psi(x) \\
> \frac{d^2}{dx^2}\psi(x) &= -\frac{2m(E+V_{0})}{\hbar^2}\psi(x) \\
> &= - l^2 \psi(x)
> \end{align*}
> $$
> where $l = \sqrt{ -2m(E+V_{0}) }  \hbar$.
> Thus $\psi(x) = F \sin lx + G\cos lx$ for $x \in [-a,a]$.
> For odd solutions, $\psi(-x) = -\psi(x)$,
> hence
> $$
> \begin{align*}
> \psi(x) &= \begin{cases}
> A e^{\kappa x} & x < -a \\
> F \sin lx & x \in [-a,a] \\
> -A e^{-\kappa x} & z=x > a
> \end{cases}
> \\ \\
> \psi(-x) &= \begin{cases}
> A\kappa e^{\kappa x} & x<-a \\
> Fl\cos lx & x \in [-a,a] \\
> A\kappa e^{\kappa x} & x > a
> \end{cases}
> \end{align*}
> $$
> thus, by continuity we have $Ae^{-\kappa a} = -F\sin la$ and by smoothness we have $A\kappa e^{-\kappa a} = F l \cos l a$.
> Thus $\kappa = -l \cot la$
> Let $z = la$ and $z_{0} = \frac{a}{\hbar}\sqrt{ 2mV_{0} }$.
> Since $\kappa^2+l^2=\frac{2mV_{0}}{\hbar^2}$,
> it follows $\kappa a=\sqrt{ z^2_{0} - z^2 }$,
> hence
> $$
> \begin{align*}
> \cot z = -\frac{\kappa a}{la} = \frac{\sqrt{ z_{0}^2-z^2 }}{z} = \sqrt{ \frac{z^2_{0}}{z^2} - 1 }
> \end{align*}
> $$
> which may be solved numerically.
> A similar treatment for the even case[^2018] gives the result stated above.
> <span class="QED"/>

[^2018]: 2018\. [[Sources/@griffithsIntroductionQuantumMechanics2018|Introduction to quantum mechanics]], §2.6, p. 72


#
---
#state/tidy | #lang/en | #SemBr
