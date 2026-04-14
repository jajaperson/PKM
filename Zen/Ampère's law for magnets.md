---
tags:
  - public
---
[[Maxwell's equations in materials]]
# Ampère's law for magnets

It follows from [[Ampère's circuital law]] that the auxiliary [[H-field]] satisfies
$$
\begin{align*}
\vab{\nabla} \times \vab H = \vab J_{f} + \frac{ \partial \vab D }{ \partial t } 
\end{align*}
$$
where $\vab J_{f} = \vab J - \vab J_{b} - \frac{ \partial \vab P }{ \partial t }$ is the [[Magnetic potential of a magnetized material|free]] [[current density]].

> [!check]- Derivation
> Noting the expression for [[Magnetic potential of a magnetized material#^bcd]]
> $$
> \begin{align*}
> \vab{\nabla} \times \vab H &= \frac{1}{\mu_{0}} \vab{\nabla}\times \vab B - \vab{\nabla} \times \vab M \\
> &= \vab J  + \epsilon_{0} \frac{ \partial \vab E }{ \partial t } - \vab J_{b} \\
> &= \vab J_{f} + \frac{ \partial \vab P }{ \partial t }  + \epsilon_{0}\frac{ \partial \vab E }{ \partial t } \\
> &= \vab J_{f} + \frac{ \partial \vab D }{ \partial t } 
> \end{align*}
> $$
> where we used the fact that changing [[Electric dipole moment|electric polarization density]] is a source of current
> $$
> \begin{align*}
> \vab J = \vab J_{f} + \vab J_{b} + \frac{ \partial \vab P }{ \partial t } 
> \end{align*}
> $$
> as required. <span class="QED"/>

or equivalently by [[Stokes's theorem]]
$$
\begin{align*}
\oint_{\partial\Sigma} \vab H \cdot d\vab r = \left( \iint_{\Sigma} \vab J_{f} \cdot d\vab a + \frac{d}{dt} \iint_{\Sigma} \vab D \cdot d\vab a \right) = \mu_{0}\left( I_{f,\Sigma} + \frac{ \partial \Phi_{D,\Sigma} }{ \partial t }  \right)  
\end{align*}
$$


#
---
#state/tidy | #lang/en | #SemBr
