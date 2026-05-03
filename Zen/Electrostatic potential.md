---
tags:
  - public
---
[[Electrostatics MOC]]
# Electrostatic Potential
Electric potential is a scalar field associated with an [[Electric field]].
It is a form of a [[Conservative vector field|scalar potential]],
and is therefore only possible since $\vab E$ is [[Conservative vector field|irrotational]] for static charge distributions.
$$
\begin{align*}
\Delta V = -\int_\vab a^\vab b{\vab E \cdot d \vab \ell}
\end{align*}
$$
Which can be converted back into an $\vab E$-field as follows
$$
\begin{align*}
\vab E(\vab \ell) = - \vab\nabla V(\vab \ell)
\end{align*}
$$
Note in order to define a field $V : \mathbb R^3 \to \mathbb R$ we have to pick a reference point $\mathcal{O}$ where the potential is zero.
This is because voltage is a quantity of difference,
not an absolute quantity.
Conventionally this is taken to be infinitely far from the charge distribution,
where $\vab E$ goes to zero.

Intuitively, regions of positive charge are potential hills, regions of negative charge are potential valleys,
and the electric field points down the slope.

Electric potential is _scalar additive_, hence it obeys the [[Principle of Superposition]].[^2013]

[^2013]: 2013\. [[@griffithsIntroductionElectrodynamics2013|Introduction to electrodynamics]], p. 82 (§2.3.2)

For the more general (dynamic) case, see [[Electric and magnetic potentials]].

## Poisson's equation
Due to [[Gauß's law]], an electric potential must satisfy [[Poisson's equation]]
$$
\begin{align*}
\nabla^2 V = -\frac{\rho}{\epsilon_{0}}
\end{align*}
$$
where $\nabla^2 = \vab{\nabla} \cdot \vab{\nabla}$ is the [[Laplacian]].
It follows that the potential satisfies [[Laplace's equation]] in all regions empty of charge.

## From a charge distribution

It follows easily from the [[Electric potential of a point charge]] that given the volume [[Charge density]] $\rho(\vab r')$,
it follows
$$
\begin{align*}
V(\vab r) = \frac{1}{4\pi\epsilon_{0}} \iiint_{\mathbb{R}^3} \frac{\rho(\vab r')}{\Sr} \, d\tau' 
\end{align*}
$$
where $\mathbb{R}^3$ represents all space,
and by convention $V\to 0$ as $r \to \infty$.

## Boundary conditions
At any boundary, the derivative of the potential normal to the boundary is discontinuous[^bound], with
$$
\begin{align*}
\frac{ \partial V_\text{above} }{ \partial n } - \frac{ \partial V_\text{below} }{ \partial n } = -\frac{\sigma}{\epsilon_{0}}
\end{align*}
$$

[^bound]: 2013\. [[@griffithsIntroductionElectrodynamics2013|Introduction to electrodynamics]], p. 90 (§2.3.5)

---
#state/tidy | #SemBr | #lang/en
