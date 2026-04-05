---
tags:
  - public
---
[[Electrodynamics MOC]]
# Poynting's theorem

**Poynting's theorem** states the rate of energy going into charged matter in a volume $\Omega$ is equal to the decrease in energy stored in the fields in $\Omega$ minus the rate of energy transported out of $\Omega$ by the fields[^2023]
$$
\begin{align*}
P = \iiint_{\Omega} \vab E \cdot \vab J\,d\tau = -\frac{d}{dt}\iiint_{\Omega}u\,d\tau-\oiint_{\partial\Omega} \vab S\cdot d\vab a
\end{align*}
$$ 
^Integral

or equivalently by [[Острогра́дский's divergence theorem]]
$$
\begin{align*}
\vab E \cdot \vab J = -\frac{ \partial u }{ \partial t }  - \vab{\nabla}\cdot\vab S
\end{align*}
$$ 
^Differential

where
$$
\begin{align*}
u &= \frac{1}{2}\left( \frac{1}{\mu_{0}}B^2+\epsilon_{0}E^2 \right) 
& \vab S &= \frac{1}{\mu_{0}}\vab E \times \vab B
\end{align*}
$$
are the [[Electromagnetic energy density]] and [[Poynting vector]] respectively.
In the case $\vab E \cdot \vab J = 0$ everywhere we get a [[continuity equation]] for electromagnetic energy.

[^2023]: 2023\. [[Sources/@grassoElectromagnetismSpecialRelativity2023|Electromagnetism and special relativity]], p. 73

> [!check]- Derivation from Maxwell's equations
> First note that by the [[Lorentz force law]], the force density acting on the charge density it $\vab f_{\pm} = \rho_{\pm}(\vab E + \vab v_{\pm} \times \vab B)$
> whence the work done is
> $$
> \begin{align*}
> dW_{\pm} &= \vab f_{\pm} \cdot d\vab\ell_{\pm} = \rho_{\pm}(\vab E + \vab v_{\pm} \times \vab B) \cdot (\vab v_{\pm} \,dt) = \rho_{\pm} \vab E \cdot \vab v_{\pm}\,dt
> \end{align*}
> $$
> and the power per unit volume is
> $$
> \begin{align*}
> \frac{dW}{dt} = \vab E \cdot(\rho_{+}\vab v_{+} + \rho_{-}\vab v_{-}) = \vab E \cdot \vab J
> \end{align*}
> $$
> Applying [[Ampère's circuital law#^Differential]] to eliminate $\vab J$
> $$
> \begin{align*}
> \vab E \cdot \vab J = \frac{1}{\mu_{0}}\vab E \cdot(\vab{\nabla}\times \vab E) - \epsilon_{0}\vab E \cdot \frac{ \partial \vab E }{ \partial t } 
> \end{align*}
> $$
> Now by a [[Product rule]] and [[Faraday's law of induction]]
> $$
> \begin{align*}
> \vab{\nabla}\cdot(\vab E \times \vab B) &= \vab B \cdot(\vab{\nabla}\times\vab E) - \vab E \cdot (\vab{\nabla} \times \vab B) \\
> &= \vab B \cdot \frac{ \partial \vab B }{ \partial t }  - \vab E \cdot(\vab{\nabla}\times\vab B)
> \end{align*}
> $$
> so
> $$
> \begin{align*}
> \vab E \cdot \vab J &= -\frac{1}{\mu_{0}}\vab B \cdot \frac{ \partial \vab B }{ \partial t }  - \epsilon_{0} \vab E \cdot \frac{ \partial \vab E }{ \partial t }  - \frac{1}{\mu_{0}}\vab{\nabla}\cdot(\vab E \times \vab B) \\
> &= -\frac{1}{2}\frac{ \partial }{ \partial t } \left( \frac{1}{\mu_{0}}B^2 + \epsilon_{0}E^2 \right) - \frac{1}{\mu_{0}}\vab{\nabla}\cdot(\vab E \times \vab B)
> \end{align*}
> $$
> giving the expressions above.
> <span class="QED"/>


#
---
#state/tidy | #lang/en | #SemBr 