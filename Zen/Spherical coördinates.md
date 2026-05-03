---
tags:
  - public
---
[[Coördinate system]]
# Spherical coördinates
Spherical coördinates have two variants which essentially vary only in argument order.
One variant is traditionally used in [[#Mathematical convention|maths]] while another is used in [[#Physics convention|physics]].

In general, the argument that occurs in ==all three== cartesian axes and ==two sine functions== will have the domain ==$[0,\pi]$==.
<!--SR:!2023-11-02,66,230!2023-11-03,14,190!2023-09-25,10,206-->

See [[Spherical coördinates in differential geometry]] for a formal treatment.

## Mathematical convention
Where $\rho$ is the radial distance,
$\theta$ is the azimuthal angle
and $\phi$ is the polar angle
$$
\vab r : \vthree{\rho}{\theta}{\phi} \mapsto \vthree{\rho \cos{\theta}\sin{\phi}}{\rho\sin{\theta}\sin{\phi}}{\rho \cos{\phi}}
$$
with the signature ==$\vab r: [0,\infty) \times [0,2\pi) \times [0,\pi] \to \mathbb R^3$==.
<!--SR:!2023-03-23,11,210-->

## Physics convention

The physics convention (`ISO 80000-2:2019`) is swapped:
Where $\rho$ is the radial distance,
$\theta$ is the polar angle
and $\phi$ is the azimuthal angle^[2021\. [[Sources/@emamCovariantPhysicsClassical2021|Covariant physics: From classical mechanics to general relativity and beyond]], p. 5]
$$
\vab r : \vthree{\rho}{\theta}{\phi} \mapsto 
\vthree{\rho \sin{\theta}\cos{\phi}}{\rho \sin{\theta}\sin{\phi}}{\rho \cos{\theta}}
$$
with the signature ==$\vab r : [0,\infty) \times [0,\pi] \times [0,2\pi) \to \mathbb R^3$==.
<!--SR:!2023-03-16,10,250-->

This has the benefit of generating a [[Surface orientation|conventionally-orientated]] parameterisation of a sphere's surface
$$
\begin{align*}
\vab r &: \vtwo{\theta}{\phi} \mapsto \vthree
{R \sin{\theta}\cos{\phi}}
{R \sin{\theta}\sin{\phi}}
{R \cos{\theta}} \\
&: [0,\pi] \times [0,2\pi) \to \mathbb R^3 \\
\vab N &: \vtwo{\theta}{\phi} \mapsto \vthree
{R^2\sin^2{\theta} \cos{\phi}}
{R^2 \sin^2{\theta} \sin{\phi}}
{R^2\sin{\theta}\cos{\theta}}
\end{align*}
$$

### Calculus
The following differential quantities may be useful[^2013]


1. $$
  \begin{align*}
  d \vab \ell = dr \, \unitv r + r\,d\theta\,\unitv \theta + r\sin\theta\,d\phi\unitv \phi
  \end{align*}
  $$
  2. $$
  \begin{align*}
  d \tau = r^2 \sin\theta\,dr\,d\theta\,d\phi = r^2 \,dr\, d\Omega
  \end{align*}
  $$
  3. $$
  \begin{align*}
  \grad F = \frac{ \partial T }{ \partial r } \unitv r + \frac{1}{r} \frac{ \partial T }{ \partial \theta } \unitv \theta + \frac{1}{r\sin\theta} \frac{ \partial T }{ \partial \phi } \unitv \phi 
  \end{align*}
  $$
  4. $$
  \begin{align*}
  \nabla^2 F = \frac{1}{r^2}\frac{ \partial  }{ \partial r } \left( r^2 \frac{ \partial F }{ \partial r }  \right) + \frac{1}{r^2 \sin\theta} \frac{ \partial  }{ \partial \theta } \left( \sin\theta \frac{ \partial F }{ \partial \theta } \right) + \frac{1}{r^2\sin^2\theta}\frac{ \partial^{2} F }{ \partial \phi^{2} }   
  \end{align*}
  $$
  1. $$
  \begin{align*}
  \opn{div} \vab F = \frac{1}{r^2} \frac{ \partial  }{ \partial r } (r^2 F_{r}) + \frac{1}{r\sin\theta} \frac{ \partial  }{ \partial \theta } (\sin(\theta) F_{\theta}) + \frac{1}{r\sin\theta} \frac{ \partial F_{\phi} }{ \partial \phi } 
  \end{align*}
  $$
  6. $$
  \begin{align*}
  \curl \vab F &= \frac{1}{r\sin\theta} \left( \frac{ \partial  }{ \partial \theta } (\sin(\theta )F_{\theta}) - \frac{ \partial F_{\theta} }{ \partial \phi }  \right)\unitv r \\
  &+\frac{1}{r}\left( \frac{1}{\sin\theta}\frac{ \partial F_{r} }{ \partial \phi } - \frac{ \partial }{ \partial r } (r F_{r}) \right) \unitv \theta \\
  &+ \frac{1}{r} \left( \frac{ \partial }{ \partial r } (r F_{\theta}) - \frac{ \partial F_{r} }{ \partial \theta }  \right)  \unitv \phi
  \end{align*}
  $$


[^2013]: 2013\. [[@griffithsIntroductionElectrodynamics2013|Introduction to electrodynamics]], pp. 40, 42 (§1.4.1)

#
---
#state/tidy | #SemBr | #flashcards/maths/convention