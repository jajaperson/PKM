---
tags:
  - public
alias: bound charge density
mathLink-blocks:
  bcd: bound charge density
---
[[Diëlectric]]
# Electric potential of a polarized material

The potential due to a polarized [[diëlectric]] $\Omega$ is given by
$$
\begin{align*}
V(\vab r) 
&= \frac{1}{4\pi\epsilon_{0}} \iiint_{\Omega} \frac{\vab P(\vab r') \cdot \unitv \SR}{\Sr^2}\,d\tau'  \\
&= \frac{1}{4\pi\epsilon_{0}} \oiint_{\partial\Omega} \frac{\sigma_{b}(\vab r')}{\Sr}\,da'
+ \frac{1}{4\pi\epsilon_{0}} \iiint_{\Omega} \frac{\rho_{b}(\vab r')}{\Sr} \,d\tau'
\end{align*}
$$
where $\vab P$ is the [[Electric dipole moment|electric polarization density]],
and $\sigma_{b}$ and $\rho_{b}$ are the surface and volume **bound charge densities** respectively given by
$$
\begin{align*}
\sigma_{b}(\vab r') &= \vab P(\vab r') \cdot \unitv n 
&
\rho_{b}(\vab r') &= -\vab{\nabla} \cdot \vab P(\vab r')
\end{align*}
$$
^bcd

If additional **free charge** is present,
the principle of superposition may be used to combine the potentials due to free charge and due to polarization (i.e. bound charge).

> [!check]- Derivation
> Applying [[Integration by parts#^GE1]]
> $$
> \begin{align*}
> V(\vab r) 
> &= \frac{1}{4\pi\epsilon_{0}} \iiint_{\Omega} \frac{\vab P(\vab r) \cdot \unitv \SR}{\Sr^2} \,d\tau' \\
> &= \frac{1}{4\pi\epsilon_{0}} \iiint_{\Omega} \vab P(\vab r) \cdot \vab{\nabla}'[\Sr^{-1}] \, d\tau' \\
> &= \frac{1}{4\pi\epsilon_{0}}\oiint_{\partial\Omega} \frac{\vab P(\vab r') \cdot d\vab a}{\Sr} - \frac{1}{4\pi\epsilon_{0}} \iiint_{\Omega} \frac{\vab{\nabla}'\cdot\vab P(\vab r')}{\Sr} \,d\tau'
> \end{align*}
> $$
> as required. <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr