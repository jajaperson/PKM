---
alias: permittivity
tags:
  - public
---
[[Diëlectric]]
# Linear diëlectric

A **linear diëlectric** is a material whose [[Electric dipole moment|electric polarization density]] is proportional to the electric field[^E], i.e.
$$
\begin{align*}
\vab P = \epsilon_{0}
\end{align*} \chi_{e} \vab E
$$
where $\chi_{e}$ is the empirically determined **electric susceptibility**.
The permittivity of a linear diëlectric is then
$$
\begin{align*}
\epsilon = \epsilon_{0}(1+\chi_{e}) = \epsilon_{0}\epsilon_{r}
\end{align*}
$$
and the [[Electric displacement]] is given by
$$
\begin{align*}
\vab D = \epsilon \vab E
\end{align*}
$$

  [^E]: Note that $\vab E$ is the total electric field, including that caused by the polarized material itself.
## Homogenous linear diëlectric

In case a volume $\Omega$ is occupied by a homogenous linear diëlectic, i.e. one with constant $\chi_{e}$, we have
$$
\begin{align*}
\rho_{b} = -\frac{\chi_{e}}{1+\chi_{e}} \rho_{f}
\end{align*}
$$
hence if there is no free charge there is also no bound charge, and [[Laplace's equation]] will hold for $\vab E$ within $\Omega$.

#
---
#state/tidy | #lang/en | #SemBr
