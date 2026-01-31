---
tags:
  - public
---
[[Quantum mechanics MOC]]
# QM in 3D position-space

Consider the Hilbert space $L^2(\mathbb{R}^3)$ with vectors represented in the position basis $\Psi(\mathbf{r},t) = \braket{\mathbf{r} | \psi(t)}$.
The momentum operators are given by
$$
\begin{align*}
\hat{p}_{j} &= -i\hbar \partial _{j} \\
\unitv{p} &=  -i\hbar \nabla
\end{align*}
$$
and thus the [[Hamiltonian operator]] by
$$
\begin{align*}
\hat{H}(t) = - \frac{\hbar^2}{2m} \nabla^2 + V(\unitv{r}, t)
\end{align*}
$$
and the [[Schrödinger equation]] becomes
$$
\begin{align*}
i\hbar \frac{ \partial }{ \partial t } \Psi(\mathbf{r},t)= -\frac{\hbar^2}{2m} \nabla^2 \Psi(\mathbf{r},t) + V(\mathbf{r},t) \Psi(\mathbf{r},t)
\end{align*}
$$

## Time independent Schrödinger equation
If $V$ is time-independent the [[Schrödinger equation#Time independent Schrödinger equation|stationary states]] are given by the time-independent Schrödinger equation
$$
\begin{align*}
\Psi_{n}(\mathbf{r},t) &= \psi_{n}(\mathbf{r}) e^{-iE_{n}t / \hbar} \\
E_{n} \psi_{n} &= -\frac{\hbar^2}{2m} \nabla^2\psi_{n} + V(\unitv r) \psi_{n}
\end{align*}
$$
and thus general solutions are given by
$$
\begin{align*}
\Psi(\mathbf{r},t)= \sum c_{n}\psi_{n}(\mathbf{r}) e^{-iE_{n}t/\hbar}
\end{align*}
$$

## Properties

1. The canonical commutation relations are
  $$
  \begin{align*}
  [\hat{r}_{j}, \hat{p}_{k}] = i\hbar\delta_{jk} \qquad
  [\hat{r}_{j},\hat{r}_{k}] = 0 \qquad
  [\hat{p}_{j},\hat{p}_{k}] = 0
  \end{align*}
  $$
  an example of the [[Standard Heisenberg algebra for QM]].
2. $[f(\hat{\mathbf{r}}), \hat{p}_{j}] = i\hbar \partial_{j}f(\hat{\mathbf{r}})$
3. The energy of a normalizable solution must exceed the infimum of the potential.

> [!check]- Proof of 1–2
> For any $\ket{\psi} \in \mathcal{H}$ with $\psi(\mathbf{r}) = \braket{ \mathbf{r} | \psi }$
> $$
> \begin{align*}
> [\hat{r}_{j}, \hat{p}_{k}] \ket{\psi} 
> &=  (- r_{j} i\hbar \partial _{k} + i\hbar \partial _{k} r_{j}) \psi  \\
> &= -r_{j} i\hbar \partial _{k} \psi  + r_{j} i\hbar \partial _{k} \psi + i\hbar \psi  \partial_{k}r_{j} \\
> &= i\hbar\delta_{jk} \ket{\psi}  \\
> [\hat{r}_{j},\hat{r}_{k}] \ket{\psi}  &= (r_{j}r_{k}) \psi \\
> &= 0 \\
> [\hat{p}_{j},\hat{p}_{k}] \ket{\psi}  &= (-\hbar^2 \partial _{j} \partial _{k} + \hbar^2 \partial _{k}\partial _{j}) \psi \\
> &= 0
> \end{align*}
> $$
> as required <span class="QED"/>
> 
> Since any normalizable solution is a linear combination of [[Schrödinger equation|stationary states]],
> it is sufficient to show all stationary states have definite energy greater than this infimum.
> According to the [[#Time independent Schrödinger equation]]
> $$
> \begin{align*}
> \nabla^2 \psi = \frac{2m}{\hbar^2}(V(\mathbf{r}) - E) \psi
> \end{align*}
> $$
> If $E \leq V(\mathbf{r})$ for all $\mathbf{r} \in \mathbb{R}^3$ then $\nabla^2\psi(\mathbf{r})$ never has the opposite sign to $\psi(\mathbf{r})$.
> If $\psi(\mathbf{r})$ is positive then $\psi$ is concave up,
> and if $\psi(\mathbf{r})$ is negative then $\psi$ is concave down.
> Hence $\psi(\mathbf{r})$ never approaches zero as $\mathbf{r} \to \infty$.
> <span class="QED"/>

## Spherical coördinates

In [[Spherical coördinates]] the Hamiltonian is
$$
\begin{align*}
\hat{H} &=
-\frac{\hbar^2}{2m} \left( \frac{1}{r^2} \frac{ \partial }{ \partial r } \left( r^2 \frac{ \partial }{ \partial r }  \right) + \frac{1}{r^2\sin \theta} \frac{ \partial  }{ \partial \theta } \left( \sin\theta \frac{ \partial }{ \partial \theta }  \right) + \frac{1}{r^2 \sin^2 \theta} \frac{ \partial^{2}  }{ \partial \phi^{2} }  \right)  + \hat{V} \\
&= \frac{1}{2mr^2} \left( -\hbar^2 \frac{ \partial }{ \partial r } \left( r^2 \frac{ \partial }{ \partial r }  \right)+ \hat{L}^2 \right) + \hat{V}
\end{align*}
$$
## Examples

- [[QM of a particle in a 3D infinite square well]]
- [[Spherically symmetric potential]]
- Spin
  - [[Larmor precession]]
  - [[Stern-Gerlach experiment]]

## See also

-  [[Orbital angular momentum operator]]

#
---
#state/tidy | #lang/en | #SemBr
