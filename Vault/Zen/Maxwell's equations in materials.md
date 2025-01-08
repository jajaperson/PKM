---
tags:
  - public
---
[[Electrodynamics MOC]]
# Maxwell's equations in materials

By introducing the auxiliary [[Electric displacement|$\vab D$-field]] and [[H-field]]
and separating free charge and current from those arising from [[Electric dipole moment|electric polarization]] and [[Magnetic dipole moment|magnetization]], 
[[Maxwell's equations]] may become

1. [[Gauß's law for diëlectrics]]
2. [[Gauß's law for magnetic flux]]
3. [[Faraday's law of induction]]
4. [[Ampère's law for magnets]]

## Differential form

1. $$
  \begin{align*}
  \vab{\nabla} \cdot \vab D = \rho_{f}
  \end{align*}
  $$
2. $$
	\begin{align*}
	\vab\nabla \cdot \vab B = 0
	\end{align*}
	$$
3. $$
	\begin{align*}
	\vab\nabla \times \vab E = -\frac{\partial \vab B}{\partial t}
	\end{align*}
	$$
4. $$
  \begin{align*}
  \vab{\nabla} \times \vab H = \vab J_{f} + \frac{ \partial \vab D }{ \partial t } 
  \end{align*}
  $$

## Integral  form

1. $$
  \begin{align*}
  \oiint_{\partial\Omega} \vab D \cdot d\vab a = \iiint_{\Omega} \rho_{f} \, d\tau'
  \end{align*}
  $$
2. $$
	\begin{align*}
	\oiint_{\partial \Omega}{\vab B \cdot d\vab a} = 0
	\end{align*}
	$$
3. $$
	\begin{align*}
	\mathcal{E} =\oint_{\partial \Sigma}{\vab E \cdot d \vab \ell} 
	&= -\frac{\partial \Phi_B}{\partial t} \\\\
	&= -\frac{\partial}{\partial t} \iint_\Sigma{\vab B \cdot d \vab a}
	\end{align*}
	$$
4. $$
  \begin{align*}
  \oint_{\partial\Sigma} \vab H \cdot d\vab r &= \mu_{0}\left( I_{f,\Sigma} + \frac{ \partial \Phi_{D,\Sigma} }{ \partial t }  \right)  \\ 
  &= \left( \iint_{\Sigma} \vab J_{f} \cdot d\vab a + \frac{d}{dt} \iint_{\Sigma} \vab D \cdot d\vab a \right) 
  \end{align*}
  $$

## Sources

Noting the expressions for [[Electric potential of a polarized material|bound charge density]] and [[Magnetic potential of a magnetized material|bound current density]],
as well as current due to changes in [[Electric dipole moment|electric polarization density]], we have
$$
\begin{align*}
\rho &= \rho_{f} + \rho_{b} \\
&= \rho_{f} - \vab{\nabla} \cdot  \vab P \\
\vab J &= \vab J_{f} + \vab J_{b} + \frac{ \partial \vab P }{ \partial t } \\
&=  \vab J_{f}  + \vab{\nabla} \times \vab M + \frac{ \partial \vab P }{ \partial t }
\end{align*}
$$

#
---
#state/tidy | #lang/en | #SemBr 