---
tags:
  - public
---
[[Local Lagrangian]]
# Path Lagrangian

Let $M$ be a $C^\alpha$-[[Differentiable manifold|manifold]] and $\mathcal{P}(a,b,p_{a},p_{b})$ be the space of $C^\alpha$-paths $\gamma$ from $p_{a}$ to $p_{b}$, i.e.
$$
\begin{align*}
\gamma : [a,b] \to M : a \mapsto p_{a} : b \mapsto p_{b}.
\end{align*}
$$
A first order [[local Lagrangian]] on $\mathcal{P}(a,b,p_{a},p_{b})$ has the form
$$
\begin{align*}
L[\gamma] = L (t, \gamma(t), \dot{\gamma}(t)) \, \mathrm{d}t
\end{align*}
$$
where we abuse notation to invoke a $C^\alpha$-function
$$
\begin{align*}
L :  \mathbb{R} \times T M \to \mathbb{R}
\end{align*}
$$
so that the [[action functional]] $\mathscr{L} : \mathcal{P}(a,b,p_{a},p_{b}) \to \mathbb{R}$ has the form
$$
\begin{align*}
\mathscr{L}[\gamma] = \int_{a}^b L(t,\gamma(t), \dot{\gamma}(t)) \, \mathrm{d}t
\end{align*}.
$$

  [^2020]: 2020\. [[Sources/@nicolaescuLecturesGeometryManifolds2020|Lectures on the geometry of manifolds]], §5.1

## Euler-Lagrange equations

Let $x : U \to \mathbb{R}^m$ be [[Coördinate chart|local coördinates]] for $M$.
A path $\gamma \in \mathcal{P}(a,b,p_{a}, p_{b})$ is stationary[^1] iff #m/thm/variations 
$$
\begin{align*}
0 = \frac{\partial L}{\partial \gamma^\mu}
- \frac{\mathrm{d}}{\mathrm{d}t} \frac{ \partial L }{ \partial \dot{\gamma}^\mu } 
\end{align*}
$$
where we denote ${\gamma}^\mu = x^\mu \circ \gamma$.


[^1]: i.e. the [[first variation]] $\delta \mathscr{L}[\gamma]$ vanishes.

> [!check]- Proof
> Let $\alpha : (-\epsilon_{0},\epsilon_{0}) \to \mathcal{P}(a,b,p_{a},p_{b})$ be a variation of $\gamma$.
> Then
> $$
> \begin{align*}
> \mathscr{L}[\alpha(\epsilon)] 
> &= \int _{a}^b L(t,\alpha(\epsilon; t),\dot{\alpha}(\epsilon; t)) \, \mathrm{d}t  
> 
> \end{align*}
> $$
> whence
> $$
> \begin{align*}
> \delta \mathscr{L}[\gamma;\alpha]
> &= \left.\frac{\mathrm{d}}{\mathrm{d}\epsilon} \right|_{\epsilon=0} \int _{a}^b L(t, \alpha(\epsilon; t), \dot{\alpha}(\epsilon; t)) \, \mathrm{d}t \\
> &= \int _{a}^b \left.\frac{\mathrm{d}}{\mathrm{d}\epsilon}\right|_{\epsilon=0} L(t, \alpha(\epsilon; t), \dot{\alpha}(\epsilon; t)) \, \mathrm{d}t \\
> &= \int _{a}^b \left( \frac{ \partial L }{ \partial \gamma^\mu } \frac{ \partial \alpha^\mu }{ \partial \epsilon } (0; t)
> + \frac{ \partial L }{ \partial \dot{\gamma}^\mu } \frac{ \partial \dot{\alpha}^\mu }{ \partial \epsilon } (0;t)
> \right) \, \mathrm{d}t \\
> &= \int _{a}^b \left( \frac{ \partial L }{ \partial \gamma^\mu } \frac{ \partial \alpha^\mu }{ \partial \epsilon } (0;t) 
> + \frac{ \partial L }{ \partial \dot{\gamma}^\mu } \frac{ \partial^2 \alpha^\mu  }{ \partial t\ \partial \epsilon } (0; t)
> \right) \, \mathrm{d}t.
> \end{align*}
> $$
> Applying [[Integration by parts]] on the latter term, and noting the boundary term vanishes since we are in $\mathcal{P}(a,b,p_{a},p_{b})$, we get
> $$
> \begin{align*}
> \delta \mathscr{L}[\gamma;\alpha]
> &= \int _{a}^b \left( \frac{ \partial L }{ \partial \gamma^\mu } - \frac{\mathrm{d}}{\mathrm{d}t} \frac{ \partial L }{ \partial \dot{\gamma}^\mu }  \right) \frac{\partial\alpha^\mu}{\partial\epsilon}(0;t) \, \mathrm{d}x = 0
> \end{align*}
> $$
> so by the [[Fundamental lemma of variational calculus]]
> $$
> \begin{align*}
> 0 = \frac{\partial L}{\partial \gamma^\mu}
> - \frac{\mathrm{d}}{\mathrm{d}t} \frac{ \partial L }{ \partial \dot{\gamma}^\mu } 
> \end{align*}
> $$
> as claimed. <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr