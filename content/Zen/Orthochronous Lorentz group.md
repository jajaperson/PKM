---
tags:
  - public
---
[[Lorentz group]]
# Orthochronous Lorentz group

The **orthochronous Lorentz group** $L^\uparrow = \mathrm{O}^\uparrow(3,1)$ is the group of all [[Lorentz group|Lorentz transformations]] preserving the direction of time, #m/def/group/lorentz 
i.e.
$$
\begin{align*}
\mathrm{O}^\uparrow(3,1) = \{  \Lambda \in \mathrm{O}(3,1) : \Lambda^0{}_{0} \geq 1 \}
\end{align*}
$$
since $\abs{\Lambda^0{}_{0}} < 1$ is forbidden (see discussion below),
this consists of all Lorentz transformations with positive $\Lambda^0{}_{0}$.

> [!info]- Discussion
> First note that by definition for all $(\Lambda^\mu{}_{\nu}) \in L$,[^2018]
> $$
> \begin{align*}
> \Lambda^\mu{}_{\kappa}\eta_{\mu \nu}\Lambda^\nu{}_{\lambda} = \eta_{\kappa\lambda} 
> \end{align*}
> $$
> and taking adjoints
> $$
> \begin{align*}
> \Lambda^\kappa{}_{\mu}\eta^{\mu \nu}\Lambda^\lambda{}_{\nu} = \eta^{\kappa\lambda}
> \end{align*}
> $$
> the $00$ component of which yield
> $$
> \begin{align*}
> -(\Lambda^0{}_{0})^2 + \Lambda^i{}_{0}\Lambda^i{}_{0} = \Lambda^\mu{}_{0}\eta_{\mu \nu}\Lambda^\nu{}_{0} &= \eta_{00} = -1 \\
> -(\Lambda^0{}_{0})^2 + \Lambda^0{}_{i}\Lambda^0{}_{i} = \Lambda^0{}_{\mu}\eta^{\mu \nu}\Lambda^0{}_{\nu} &= \eta^{00} = -1
> \end{align*}
> $$
> implying the properties
> $$
> \begin{align*}
> (\Lambda^0{}_{0})^2 &= 1 + \Lambda^i{}_{0} \delta_{ij} \Lambda^j{}_{0} \geq 1 \\
> &= 1 + \Lambda^0{}_{i}\delta^{ij}\Lambda^0{}_{j} \geq 1
> \end{align*}
> $$
> ^eq1
> 
> the former yields equality iff $\Lambda^i{}_{0}=0$ for $i=1,2,3$
> the latter yields equality iff $\Lambda^0{}_{i}=0$ for each $i$.
> Thus in particular $\Lambda^0{}_{0}=1$ iff $\Lambda^0{}_{i} = \Lambda^i{}_{0}= 0$ for each $i$,
> in which case $(\Lambda^i{}_{j}) \in \mathrm{O}(3)$.
> Now since $(\Lambda^0{}_{0})^2 \geq 1$,
> ${\Lambda^0{}_{0}} \in \mathbb{R} \setminus(-1,1)$
> which splits $L$ into disconnected components based on the sign of $\Lambda^0{}_{0}$.

[^2018]: 2018\. [[Sources/@oblakLorentzGroupCelestial2018|From the Lorentz Group to the Celestial Sphere]], §1.3, p. 9

> [!check]- Proof of defining property
> Let $\Lambda \in \mathrm{O}^\uparrow(3,1)$.
> Consider a timelike vector $v \in \mathbb{R}^4$,
> i.e. $\eta_{\mu\nu}v^\mu v^\nu < 0$ implying $v^{0}v^0 > v_{i}v^i$.
> Now if $v^0 > 0$, then
> $$
> \begin{align*}
> \Lambda^0{}_{\mu}v^\mu
> &= \Lambda^0{}_{0}v^0 + \Lambda^0{}_{i}v^i \\
> &\geq \Lambda^0{}_{0}v^0 - \sqrt{ \Lambda^0{}_{i}\Lambda_{0}{}^i } \sqrt{ v_{i}v^i } \\
> &= \Lambda^0{}_{0}v^0 - \sqrt{ (\Lambda^0{}_{0})^2 + 1 } \sqrt{ v_{i}v^i } \\
> &> \Lambda^0{}_{0}v^0 - \Lambda^0{}_{0} v^0 = 0 \\
> \end{align*}
> $$
> Now let $\Lambda' \in \mathrm{O}^\downarrow(3,1)$,
> and $v$ be timelike with $v^0 < 0$.
> It follows $-v$ is timelike with $v^0 > 0$ and $-\Lambda' \in \mathrm{O}^\uparrow(3,1)$,
> thus
> $$
> \begin{align*}
> \Lambda^0{}_{\mu}(-1)v'^\mu &> 0 \\
> \implies \Lambda^0{}_{\mu}v'^\mu &< 0 \\
> (-1)\Lambda'^0{}_{\mu} v^\mu &> 0 \\
> \implies \Lambda'^0{}_{\mu} v^\mu &< 0 \\
> (-1)\Lambda'^{0}{}_{\mu}(-1)v'^\mu &> 0 \\
> \implies \Lambda'^0{}_{\mu}v'^\mu &> 0
> \end{align*}
> $$
> Hence an arbitrary $\Lambda \in \mathrm{O}(3,1)$ 
> preserves the direction of time
> iff $\Lambda^{0}{}_{0} \geq 1$
> and reverses the direction of time
> iff $\Lambda^0{}_{0} \leq -1$.
> 
> From this it immediately follows that $\mathrm{O}^\uparrow(3,1)$ is a group,
> since if $\Lambda$ and $\Lambda'$ preserve the direction of time
> so too must $\Lambda \Lambda'$ and $\Lambda^{-1}$.
> Furthermore it follows that $\mathrm{O}^\uparrow(3,1)$ is a [[Normal subgroup]]
> since for any $\Lambda \in \mathrm{O}^\uparrow(3,1)$ and $\Lambda' \in \mathrm{O}^\downarrow(3,1)$ we the result of $\Lambda'^{-1}\Lambda \Lambda'$ will preserve the direction of time.
> <span class="QED"/>


> [!check]- Alternate proof of normal subgroup
> Define $\varphi(\Lambda) = \sgn(\Lambda^{0}{}_{0})$.
> Let $\Lambda, \Lambda' \in \mathrm{O}(3,1)$.
> If $\varphi(\Lambda)\varphi(\Lambda')=1$ then applying the inequalities in [[#^eq1]] and the [[Cauchy-Schwarz inequality]]
> $$
> \begin{align*}
> (\Lambda \Lambda')^0{}_{0} &= \Lambda^0{}_{\mu}\Lambda'^\mu{}_{0} = \Lambda^0{}_{0}\Lambda'^0{}_{0} + \Lambda^0{}_{i}\Lambda'^i{}_{0} \\
> &\geq \Lambda^0{}_{0}\Lambda'^0{}_{0} - \abs{\Lambda^0{}_{i}\Lambda^i{}_{0}} 
> =   \abs{\Lambda^0{}_{0}}\abs{\Lambda'^0{}_{0}} - \abs{\Lambda^0{}_{i}\Lambda^i{}_{0}} \\
> &> \sqrt{ \Lambda^0{}_{i}\Lambda_{0}{}^i }\sqrt{ \Lambda^i{}_{0}\Lambda_{i}{}^0} - \abs{\Lambda^0{}_{i}\Lambda^i{}_{0}}
> \geq 0
> \end{align*}
> $$
> and indeed $(\Lambda\Lambda')^0{}_{0} > 0$ since otherwise it would have null determinant.
> Similarly if $\sigma = -1$
> $$
> \begin{align*}
> (\Lambda \Lambda')^0{}_{0} &= \Lambda^0{}_{\mu}\Lambda'^\mu{}_{0} = \Lambda^0{}_{0}\Lambda'^0{}_{0} + \Lambda^0{}_{i}\Lambda'^i{}_{0} \\
> &\leq \Lambda^0{}_{0}\Lambda'^0{}_{0} + \abs{\Lambda^0{}_{i}\Lambda^i{}_{0}} 
> =  -\abs{\Lambda^0{}_{0}}\abs{\Lambda'^0{}_{0}} + \abs{\Lambda^0{}_{i}\Lambda^i{}_{0}} \\
> &< \sqrt{ \Lambda^0{}_{i}\Lambda_{0}{}^i }\sqrt{ \Lambda^i{}_{0}\Lambda_{i}{}^0} - \abs{\Lambda^0{}_{i}\Lambda^i{}_{0}}
> \leq 0
> \end{align*}
> $$
> and by the same $(\Lambda\Lambda')^0{}_{0} < 0$ since otherwise it would have null determinant.
> Hence $\varphi : \mathrm{O}(3,1) \to \mathbb{Z}_{2}$ is a group homomorphism
> and its [[Kernel of a group homomorphism|kernel]] $\ker \varphi = \mathrm{O}^\uparrow(3,1)$ is a [[normal subgroup]].
> <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr 