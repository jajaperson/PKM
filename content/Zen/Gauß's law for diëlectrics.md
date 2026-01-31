---
tags:
  - public
---
[[Maxwell's equations in materials]]
# Gauß's law for diëlectrics

It follows from [[Gauß's law]] that the auxiliary field of [[Electric displacement]] $\vab D$ satisfies
$$
\begin{align*}
\vab{\nabla} \cdot \vab D = \rho_{f}
\end{align*}
$$
where $\rho_{f}$ is the [[Electric potential of a polarized material|free]] [[charge density]].

> [!check]- Derivation
> Noting the expression for [[Electric potential of a polarized material#^bcd]],
> $$
> \begin{align*}
> \vab{\nabla} \cdot \vab D
> &= \epsilon_{0} \vab{\nabla} \cdot \vab E + \vab{\nabla} \cdot \vab P \\
> &= \rho - \rho_{b} = \rho_{f}
> \end{align*}
> $$
> as claimed. <span class="QED"/>

Using [[Острогра́дский's divergence theorem]] we see
$$
\begin{align*}
\oiint_{\partial\Omega} \vab D \cdot d\vab a = \iiint_{\Omega} \rho_{f} \, d\tau'
\end{align*}
$$

#
---
#state/tidy | #lang/en | #SemBr
