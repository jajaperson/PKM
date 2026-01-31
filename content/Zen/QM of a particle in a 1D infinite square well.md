---
tags:
  - public
---
[[QM in 1D position-space]]
# QM of a particle in a 1D infinite square well

A particle in the **infinite square well potential**
$$
\begin{align*}
V(x) = \begin{cases}
0 & x \in [-a, a] \\
\infty & \text{elsewhere}
\end{cases}
\end{align*}
$$
has stationary states in position basis for $n \in \mathbb{N}$
$$
\begin{align*}
\psi_{n}(x) = \begin{cases}
\sqrt{ \frac{1}{a} } \sin \frac{n\pi x}{2a} & \text{$n$ even, $x \in [-a,a]$} \\
\sqrt{ \frac{1}{a} } \cos \frac{n\pi x}{2a} & \text{$n$ odd, $x \in [-a,a]$} \\
0 & \text{otherwise}
\end{cases}
\end{align*}
$$
with energies
$$
\begin{align*}
E_{n} = \frac{n^2\pi^2\hbar^2}{8ma}
\end{align*}
$$
General solutions to the full Schrödinger equation therefore have the form $\sum c_{n} \psi_{n}(x) e^{-iE_{n}t / \hbar}$.

> [!check]- Proof
> Inside $[-a,a]$ the TISE reads
> $$
> \begin{align*}
> -\frac{\hbar^2}{2m} \frac{ \partial^{2} }{ \partial x^{2} } \psi = E\psi
> \end{align*}
> $$
> or
> $$
> \begin{align*}
> \frac{ \partial^{2} }{ \partial x^{2} }\psi = -k^2 \psi, \qquad k = \frac{\sqrt{ 2mE }}{\hbar}
> \end{align*}
> $$
> noting that $E < 0$ states are forbidden (which would come up in the solutions anyway).
> The general solution is then
> $$
> \begin{align*}
> \psi(x) = \tilde{A} \sin k x + \tilde{B} \cos kx
> \end{align*}
> $$
> we take boundary conditions $\psi(-a) = \psi(a) = 0$.
> Now
> $$
> \begin{align*}
> \psi(-a) &= A \sin(-ka) + B \cos(-ka) \\
> &= -A \sin ka + B\cos ka
> \end{align*}
> $$
> giving solutions giving solutions for $k_{n} = \frac{n\pi}{2 a}$ with $A = 0$ for odd $n$ and $B = 0$ for even $n$.
> The $n=0$ solution is not normalizable and hence is rejected as unphysical,
> and negative $n$ gives a rescaling of a positive $n$ solution.
> Thus the energies are
> $$
> \begin{align*}
> E_{n} = \frac{\hbar^2k_{n}^2}{2m} = \frac{n^2\pi^2\hbar^2}{8ma}
> \end{align*}
> $$
> Normalisation for odd $n$ gives
> $$
> \begin{align*}
> 1 = \braket{ \psi_{n} | \psi_{n} }   
> &= \abs B^2 \int_{-a}^{a} \cos^2 \frac{n\pi x}{2a}  \, dx \\
> &= {\abs B^2} \int_{0}^{a} \left( 1 + \cos \frac{n\pi x}{a} \right) \, dx \\
> &= {\abs B^2} \left[ x + \frac{a}{\pi n} \sin \frac{n\pi x}{a} \right] _{x=0}^{x=a} \\
> &= \abs B^2 a
> \end{align*}
> $$
> Likewise for even $n$ we have
> $$
> \begin{align*}
> 1= \braket{ \psi_{n} | \psi_{n} } &= \abs A^2 \int_{-a}^a \sin^2 \frac{n\pi x}{2a} \, dx \\
> &= \abs A^2 \int_{0}^{a} \left( 1-\cos \frac{n\pi x}{a} \right) \, dx \\
> &= \abs A^2 \left[ x - \frac{a}{\pi n}\sin \frac{n\pi x}{a} \right]_{x=0}^{x=a} \\
> &= \abs A^2 a
> \end{align*}
> $$
> So $A = B = \sqrt{ 1 / a }$.
> <span class="QED"/>



#
---
#state/tidy | #lang/en | #SemBr
