---
tags:
  - public
---
[[Electrodynamics MOC]]
# Charge continuity equation
The **charge continuity equation** is an expression of local conservation of charge
relating the divergence of [[current density|current]] to the depletion of [[Charge density|charge]].
$$
\begin{align*}
\vab{\nabla}\cdot\vab J = - \frac{ \partial \rho }{ \partial t } 
\end{align*}
$$ 
^eq1

Intuitively, if current is diverging from a point then that point must be losing charge.
It is equivalent to the statement
$$
\begin{align*}
\oiint_{\partial \Omega} \vab J \cdot d\vab a = -\frac{d}{dt} \iiint_{\Omega}\rho\,d\tau'
\end{align*}
$$
(the flux of current through the surface of a solid is equal to the rate at which the solid loses charge) by applying [[Острогра́дский's divergence theorem]][^2023].

[^2023]: 2023\. [[Sources/@hillAdvancedMathematicalMethods2023|Advanced Mathematical Methods]], p. 39

> [!check]- Derivation from Maxwell's equations
> Taking the divergence of [[Ampère's circuital law#^Differential]] and applying [[Gauß's law#^Differential]]
> $$
> \begin{align*}
> \cancel{ \vab \nabla \cdot \vab \nabla \times \vab B } - \epsilon_{0}\mu_{0}\frac{ \partial }{ \partial t } \vab \nabla \cdot\vab E &= \mu_{0}\vab \nabla \cdot\vab J  \\ \\
> -\epsilon_{0}\mu_{0} \frac{ \partial }{ \partial t } \frac{\rho}{\epsilon_{0}} &= \mu_{0}\vab\nabla \cdot\vab J
> \end{align*}
> $$
> giving [[#^eq1]]. <span class="QED"/>

This is an example of a [[continuity equation]].

#
---
#state/tidy  | #lang/en | #SemBr
