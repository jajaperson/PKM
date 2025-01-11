---
tags:
  - public
---
[[Idempotent of the complex group ring]]
# Irreducible character as function of an idempotent

Let $e_{\mu\alpha} \in \mathbb{C}[G]$ be a [[Idempotent of the complex group ring|primitive idempotent]] generating the [[Ideal of the complex group ring|minimal left ideäl]] $L^{\mu\alpha}$ carrying irrep $\Gamma^\mu$.
Then the [[Group character|character]] $\chi^\mu$ of $\Gamma^\mu$ is given by #m/thm/rep
$$
\begin{align*}
\chi^\mu(g) = \abs{C(g)} \sum_{h \in [g]_{\sim}} \overline{e_{\mu\alpha}(h)}
\end{align*}
$$
where $[g]_{\sim}$ denotes the [[Conjugation by an element|conjugacy class]] of $g$ and $C(g)$ its [[Centralizer in a group|centraliser group]] with $|C(g)|$ equal to the size of the group divided by the size of the conjugacy class.

> [!check]- Proof
> Using the [[Group ring#Hilbert space|inner product]] and [[Group ring|convolution]] on $\mathbb{C}[G]$ 
> $$
> \begin{align*}
> \chi^\mu(g^{-1}) &= \sum_{x \in G} \braket{ \delta_{x} | \Gamma^\mu(g^{-1}) \delta_{x} } = \sum_{x \in G} \braket{ \delta_{x} | \Lambda(g^{-1}) \Rho_{\mathbb{C}[G]}(e_{\mu\alpha})\delta_{x} } \\
> &= \sum_{x \in G} \braket{ \delta_{x} | \delta_{g^{-1}x} * e_{\mu\alpha}}
> = \sum_{x,y \in G} \overline{\delta_{x}(y)} [\delta_{g^{-1}y} * e_{\mu\alpha}](y) \\
> &= \sum_{x \in G} [\delta_{{g^{-1}y}} * e_{\mu\alpha}](x) = \sum_{x,y \in G} \delta_{g^{-1}x}(xy^{-1}) e_{\mu\alpha}(y)
> \end{align*}
> $$
> and since $g^{-1}x = xy^{-1}$ $\implies$ $x^{-1}g^{-1}x = y^{-1}$ $\implies$ $xgx^{-1} = y$,
> $$
> \begin{align*}
> \chi^\mu(g) = \overline{\chi^\mu(g^{-1})} = \sum_{x \in G} \overline{e_{\mu\alpha}(xgx^{-1})}
> \end{align*}
> $$
> Applying the [[Orbit-stabilizer theorem]] (see its proof), it follows that
> $$
> \begin{align*}
> \chi^\mu(g) = \abs{C(g)} \sum_{h \in [g]_{\sim}} \overline{e_{\mu\alpha}(h)}
> \end{align*}
> $$
> as required.[^kep]
> <span class="QED"/>

It follows that $d_{\mu} = \abs{G} \overline{e_{\mu\alpha}(e)}$.

[^kep]: An alternative proof is given in 2023, [[@keppelerGroupsRepresentations2023|Groups and representations]], pp. 60–61, but I like mine better.

#
---
#state/tidy | #lang/en | #SemBr
