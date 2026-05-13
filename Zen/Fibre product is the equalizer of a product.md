---
aliases: Fibre coproduct is the coëqualizer of a coproduct
tags:
  - public
---
[[Fibre product and coproduct]]
# Fibre product is the equalizer of a product

Suppose [[Products and coproducts|products]] and [[Equalizer and coëqualizer|equalizers]] exist in $\cat C$
and we have a diagram $\mathscr{D}$
$$
\begin{align*}
A \xrightarrow f C \xleftarrow g B
\end{align*}
$$
Then the [[Fibre product and coproduct|fibre product]] $\catlim \mathscr{D}$ exists and is given by $(E,p_{1},p_{2})$ in the commutative diagram #m/thm/cat

![[fibre-product-as-equalizer.svg#invert|c|https://q.uiver.app/#q=WzAsNSxbNCw0LCJDIl0sWzIsNCwiQSJdLFs0LDIsIkIiXSxbMiwyLCJBIFxcdGltZXMgQiJdLFswLDAsIkUiXSxbMiwwLCJnIl0sWzEsMCwiZiIsMl0sWzQsMywiXFxtYXRocm17ZXF9Il0sWzQsMSwicF8xIiwyLHsiY3VydmUiOjF9XSxbNCwyLCJwXzIiLDAseyJjdXJ2ZSI6LTF9XSxbMywyLCJcXHBpXzIiXSxbMywxLCJcXHBpXzEiLDJdXQ==]]

where $\mathrm{eq}$ is the [[Equalizer and coëqualizer|equalizer]] of $(f\pi_{1},g\pi_{2})$.
Conversely, any such fibre product $(E,p_{1},p_{2})$ gives $(p_{1},p_{2})$ as the equalizer of $(f\pi_{1},g\pi_{2})$.[^2010]

> [!check]- Proof
> Let
> $$
> \begin{align*}
> A \xleftarrow{z_{1}} Z \xrightarrow{z_{2}} B
> \end{align*}
> $$
> such that $fz_{1} = gz_{2}$,
> so $(z_{1},z_{2}): Z \to A \times B$ where
> $$
> \begin{align*}
> f\pi_{1} (z_{1},z_{2})= g\pi_{2}(z_{1},z_{2}).
> \end{align*}
> $$
> Now there exists $u : Z \to E$ so that $\mathrm{eq}\,u = (z_{1},z_{2})$.
> Thus
> $$
> \begin{align*}
> p_{1}u = \pi_{1} \, \mathrm{eq}\,u = \pi_{1}(z_{1},z_{2})= z_{1}&, \\
> p_{2} u = \pi_{2} \,\mathrm{eq}\,u = \pi_{2}(z_{1},z_{2}) =z_{2}&.
> \end{align*}
> $$
> Given an alternate $u': Z \to E$ 
> with the property $p_{i}u' = z_{i}$,
> then $\pi_{i}\,\mathrm{eq}\,u' = z_{i}$ so $\mathrm{eq}\,u' = (z_{1},z_{2}) = \mathrm{eq}\,u$,
> and since the equalizer is [[Monomorphism|monic]] $u = u'$. <span class="QED"/>

  [^2010]: 2010\. [[Sources/@awodeyCategoryTheory2010|Category theory]], ¶5.5, pp. 93–94

Dually, the [[Fibre product and coproduct|fibre coproduct]] is the [[Equalizer and coëqualizer|coëqualizer]] of a [[Products and coproducts|coproduct]].

#
---
#state/tidy | #lang/en | #SemBr
