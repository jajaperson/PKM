---
tags:
  - public
---
[[Coördinate system]]
# Cylindrical coördinates
Cylindrical coördinates are an orthogonal coördinate system useful for problems involving **cylindrical symmetry**, eg. about a pipe or solenoid.
They are a natural extension of [[Polar coördinates]]

They can be defined by the transformation
$$
\begin{align*}
\vab r : \vthree{s}{\phi}{z} \to \vthree{s\cos\phi}{s\sin\phi}{z}
\end{align*}
$$
with the signature $\vab r : (0, \infty) \times [0, 2\pi) \times [0, \infty) \rightarrowtail \mathbb{R}^3 \setminus \{ (0,0,z) : z \in \mathbb{R} \}$.
Any point on the $z$-axis cannot be given a unique coördinate.,
since any $\phi$ yields the same point

## Calculus
The following differential quantities may be useful[^2013]
1. $$
    \begin{align*}
    d \vab \ell = ds \, \unitv s + r\,d\phi\,\unitv\phi + dz\, \unitv z
    \end{align*}
    $$
  2. $$
    \begin{align*}
    d\tau = s\,ds\,d\phi\,dz
    \end{align*}
    $$
  3. $$
    \begin{align*}
    \grad F = \frac{ \partial F }{ \partial s } \unitv s + \frac{1}{s} \frac{ \partial F }{ \partial \phi } \unitv \phi + \frac{ \partial F }{ \partial z } \unitv z
    \end{align*}
    $$
  4. $$
    \begin{align*}
    \Delta F = \frac{1}{s} \frac{ \partial  }{ \partial s } \left( s \frac{ \partial F }{ \partial s }  \right) + \frac{1}{s^2}\frac{ \partial^{2} F }{ \partial \phi^{2} } + \frac{ \partial^{2} F }{ \partial z^{2} }  
    \end{align*}
    $$
  5. $$
    \begin{align*}
    \opn{div} \vab F = \frac{1}{s} \frac{ \partial  }{ \partial s } (s F_{s}) + \frac{1}{s} \frac{ \partial F_{\phi} }{ \partial \phi } + \frac{ \partial F_{z} }{ \partial z } 
    \end{align*}
    $$
  6. $$
    \begin{align*}
    \curl \vab F &= \left( \frac{1}{s} \frac{ \partial F_{z} }{ \partial \phi } - \frac{ \partial F_{\phi} }{ \partial z }  \right) \unitv s \\&+ \left( \frac{ \partial F_{s} }{ \partial z } - \frac{ \partial F_{z} }{ \partial s }  \right) \unitv \phi \\&+ \frac{1}{s} \left( \frac{ \partial  }{ \partial s } (sF_{\phi}) - \frac{ \partial F_{s} }{ \partial \phi }  \right)   \unitv z
    \end{align*}
    $$


[^2013]: 2013\. [[@griffithsIntroductionElectrodynamics2013|Introduction to electrodynamics]], p. 44 (§1.4.2)


#
---
#state/tidy  | #lang/en | #SemBr
