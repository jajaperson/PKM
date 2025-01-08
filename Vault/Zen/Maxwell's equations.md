---
tags:
  - public
---
[[Electrodynamics MOC]]
# Maxwell's equations
1. [[Gauß's law]]
2. [[Gauß's law for magnetic flux]]
3. [[Faraday's law of induction]]
4. [[Ampère's circuital law]]

 Maxwell's equations form the basis of [[Electrodynamics MOC|Electrodynamics]], 
 along with the [[Lorentz force law]]. 
 The differential and integral forms are translated using generalisations of the [[Fundamental theorem of calculus]],
 namely [[Острогра́дский's divergence theorem]] and [[Stokes's theorem]].
 Note that [[Gauß's law for magnetic flux]] and [[Faraday's law of induction]] are automatically satisfied by defining the fields in terms of [[Electric and magnetic potentials]].

See also [[Maxwell's equations in materials]]

## Differential form
These use the mathematical language of [[Divergence]] and [[Curl]].

1.  The divergence of an electric field at a given point 
	(how much field lines move away from that point)
	is proportional to the charge density at that point.
	$$
	\begin{align*}
	\vab\nabla \cdot \vab E = \frac{\rho_q}{\varepsilon_0}
	\end{align*}
	$$ 
	^D1
2. The divergence of a magnetic field is $\vab 0$ at all points,
	i.e. they do not diverge, since there are no monopoles.
	Thus a magnetic field is [[Incompressible vector field|solenoidal]].
	$$
	\begin{align*}
	\vab\nabla \cdot \vab B = 0
	\end{align*}
	$$
	^D2
3. Curl (tendency for field lines to orbit)
   in an electric field results in a change in a magnetic field,
   and vice versa.
   $$
	\begin{align*}
	\vab\nabla \times \vab E = -\frac{\partial \vab B}{\partial t}
	\end{align*}
	$$
	^D3
4. Electric current passing through a closed circuit
   results in the magnetic curl,
   and vice versa.[^adjust]
   $$
	\begin{align*}
	\vab\nabla \times \vab B = \mu_0 \left( 
		\vab J + \varepsilon_0 \frac{\partial \vab E}{\partial t}
	\right)
	\end{align*}
	$$
	^D4

[^adjust]: Note that partial term here is an adjustment that was made by Maxwell.

## Integral form
These use the mathematical language of the [[Double integral]],
[[Triple integral]];
and more specifically closed [[Circulation]] and [[Flux]]

1. The nett number of electric field lines 
   escaping through the boundary of some solid $\Omega$
   is proportional to the amount of charge contained within that solid
   (contained charge can be calculated using an integral over [[Charge density]]).
   $$
	\begin{align*}
	\Phi_E 
	= \oiint_{\partial \Omega}{\vab E \cdot d\vab a}
	= \frac{1}{\varepsilon_0} \iiint_\Omega{\rho_q\, d\tau'}
	\end{align*}
	$$
	^I1
2. The nett number of magnetic field lines 
   escaping through the boundary of some solid $\Omega$
   is always $0$,
   i.e. the number of magnetic field lines leaving a space
   is equal to the number entering that space,
   since there are no monopoles.
   $$
	\begin{align*}
	\oiint_{\partial \Omega}{\vab B \cdot d\vab a} = 0
	\end{align*}
	$$
	^I2
3. Electric current moving anticlockwise in a closed loop
   creates a change in magnetic flux inside the loop
   in the direction of negative orientation.
   $$
	\begin{align*}
	\mathcal{E} =\oint_{\partial \Sigma}{\vab E \cdot d \vab \ell} 
	&= -\frac{\partial \Phi_B}{\partial t} \\\\
	&= -\frac{\partial}{\partial t} \iint_\Sigma{\vab B \cdot d \vab a}
	\end{align*}
	$$
	^I3
4. Nett current moving through a cross section solid conductor $\Sigma$
   or a change in electric flux cutting through $\Sigma$
   (working together additively)
   results in a magnetic field [[Circulation|circulating]] around the conductor,
   and vice versa.
   $$
	\begin{align*}
	\oint_{\partial \Sigma}{\vab B \cdot d \vab \ell}
	&= \mu_0 \left( 
		I_{\Sigma} + \varepsilon_0 \frac{\partial \Phi_E}{\partial t}
	\right) \\\\
	&= \mu_0 \left( 
		\iint_\Sigma{\vab J \cdot d\vab a} + \varepsilon_0 \frac{\partial}{\partial t} \iint_\Sigma{\vab E \cdot d\vab a}
	\right)
	\end{align*}
	$$
	^I4


## Quantities

- **Fields**
  - [[Electric field]] $\vab E$
  - [[Magnetic field]] $\vab B$
- **Sources**
  - [[Current density]] $\vab J$
  - [[Charge density]] $\rho$
- **Constants**
  - [[Permeability of free space]] $\mu_{0}$
  - [[Permativity of free space]] $\epsilon_{0}$

---
#state/tidy | #SemBr | #lang/en