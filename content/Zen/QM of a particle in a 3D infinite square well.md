---
aliases:
  - Particle in a box
tags:
  - public
---
[[QM in 3D position-space]]
# QM of a particle in a 3D infinite square well

A particle in the **infinite square well potential**
$$
\begin{align*}
V(\mathbf{r}) = \begin{cases}
0 & \mathbf{r} \in [-a,a]^3 \\
\infty & \text{elsewhere}
\end{cases}
\end{align*}
$$
has stationary states $\varphi_{n_{x},n_{y},n_{z}}(x,y,z)$ that are (tensor) products of stationary states $\psi_{n}(x)$ [[QM of a particle in a 1D infinite square well|analogous 1D]] potential, i.e.
$$
\begin{align*}
\varphi_{n_{x},n_{y},n_{z}}(x,y,z) = \psi_{n_{x}}(x)\psi_{n_{y}}(y)\psi_{n_{z}}(z)
\end{align*}
$$
with energies
$$
\begin{align*}
E_{n_{x},n_{y},n_{z}} = \frac{\pi^2\hbar^2}{8ma}(n_{x}^2 + n_{y}^2 + n_{z}^2)
\end{align*}
$$

> [!check]- Proof by separation of variables
> Inside $[-a,a]^3$ the TISE reads
> $$
> \begin{align*}
> -\frac{\hbar}{2m} \nabla^2 \psi = E\psi
> \end{align*}
> $$
> we look for solutions of the form
> $$
> \begin{align*}
> \psi(\mathbf{r}) = X(x)Y(y)Z(z)
> \end{align*}
> $$
> for which the TISE becomes
> $$
> \begin{align*}
> -\frac{\hbar}{2m} (X'' YZ + Y''XZ + Z''XY) = EXYZ
> \end{align*}
> $$
> hence
> $$
> \begin{align*}
> \frac{X''}{X} + \frac{Y''}{Y} + \frac{Z''}{Z} = -\frac{2mE}{\hbar^2}
> \end{align*}
> $$
> since each of the terms are functions of $x$, $y$, and $z$ respectively,
> the only way the LHS can equal the constant RHS is if each of the terms equals a constant, i.e.
> $$
> \begin{align*}
> X'' &= -k_{j}^2X \\
> Y'' &= -k_{j}^2Y \\
> Z'' &= -k_{j}^2Z
> \end{align*}
> $$
> Once boundary conditions are applied, the general solutions for $X$, $Y$, and $Z$ are thus precisely those for [[QM of a particle in a 1D infinite square well]].
> Let $\varphi_{n}(x)$ denote solutions for the 1D case.
> We thus have
> $$
> \begin{align*}
> \psi_{n_{x}, n_{y}, n_{z}} = \varphi_{n_{x}}(x) \varphi_{n_{y}}(y) \varphi_{n_{z}}(z)
> \end{align*}
> $$
> which is already normalized.
> <span class="QED"/>
> 
#
---
#state/tidy | #lang/en | #SemBr
