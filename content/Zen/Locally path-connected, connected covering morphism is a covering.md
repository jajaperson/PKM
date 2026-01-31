---
tags:
  - public
---
[[Category of coverings]]
# Locally path-connected, connected covering morphism is a covering

Let $p : (\tilde{X}, x_{0}) \twoheadrightarrow (X,x_{0})$ and $q: (\tilde{X}', \tilde{x}_{0}') \twoheadrightarrow (X,x_{0})$ be [[Local (path) connectedness|locally path-connected]], [[Connectedness|connected]] coverings and $f : (\tilde{X},\tilde{x}_{0}) \to (\tilde{X}',\tilde{x}_{0}')$ be a [[Category of coverings|covering morphism]].
Then $f$ is itself a locally path-connected and connected covering of $(\tilde{X}', \tilde{x}_{0}')$. #m/thm/homotopy 

> [!check]- Proof
> Let $\tilde{x}' \in \tilde{X}'$, and let $\tilde{\alpha}' : \mathbb{I} \to \tilde{X}'$ be a path from $\tilde{x}_{0}'$ to $\tilde{x}'$.
> Further let $\alpha = q \circ \tilde{\alpha}'$ and $\tilde{\alpha} : \mathbb{I} \to \tilde{X}$ be the unique [[Lift of a map to a covering space|lift]] of $\alpha$ with $\tilde{\alpha}(0) = \tilde{x}_{0}$.
> Then
> $$
> \begin{align*}
> \alpha = p \circ \tilde{\alpha} = q\circ f \circ \tilde{\alpha} = q \circ \tilde{\alpha}'
> \end{align*}
> $$
> and thus both $f \circ \tilde{\alpha}$ and $\tilde \alpha'$ are lifts of $\alpha$ over $q$ with $f \circ \tilde{\alpha}(0) = \tilde{\alpha}'(0) = \tilde{x}'_{0}$,
> so $f \circ \tilde{\alpha} = \tilde{\alpha}'$ and in particular $f(\tilde{\alpha}(1)) = \tilde{x}'$.
> Thus $f$ is surjective.
> 
> Let $x_{1} \in X$.
> Then $x_{1}$ has a open neighbourhood $U$ that is evenly covered by both $p$ and $q$ (simply take the intersection of open neighbourhoods with respect to each covering)
> which we may assume to be connected without loss of generality (otherwise take the connected component containing $x_{1}$).
> Now let $\{ \tilde{U}_{i} \}_{i \in I}$ and $\{ \tilde{U}'_{j} \}_{j \in J}$ denote the sheets over $U$ in $\tilde{X}$ and $\tilde{X}'$ respectively.
> By connectedness it follows that for each $i \in I$, $f(\tilde{U}_{i}) \sube \tilde{U}'_{j}$ for exactly one $j \in J$.
> Fix some $i \in I$ and let $j \in J$ as above.
> It follows
> $$
> \begin{align*}
> (f \restriction \tilde{U}_{i})^{-1} = (p \restriction \tilde{U}_{i})^{-1} \circ (q \restriction \tilde{U}'_{j})
> \end{align*}
> $$
> since
> $$
> \begin{align*}
> (p \restriction \tilde{U}_{i})^{-1} \circ (q \restriction \tilde{U}'_{j}) \circ (f \restriction \tilde{U}_{i})&= (p \restriction \tilde{U}_{i})^{-1} \circ (p \restriction \tilde{U}_{i}) = \id_{\tilde{U}_{i}} \\
> (f \restriction \tilde{U}_{i}) \circ (p \restriction \tilde{U}_{i})^{-1} \circ (q \restriction \tilde{U}'_{j}) &= (f \circ \tilde{U}_{i}) \circ (q \circ f \restriction \tilde{U}_{i})^{-1} \circ (q \restriction \tilde{U}'_{j}) \\
> &= (f \circ \tilde{U}_{i}) \circ ((q \restriction \tilde{U}'_{j}) \circ (f \restriction \tilde{U}_{i}))^{-1} \circ (q \restriction \tilde{U}'_{j}) \\
> &= (f \circ \tilde{U}_{i}) \circ (f \restriction \tilde{U}_{i})^{-1} \circ (q \restriction \tilde{U}'_{j})^{-1} \circ (q \restriction \tilde{U}'_{j}) \\
> &= \id_{\tilde{U}_{j}'}
> \end{align*}
> $$
> hence $(f \restriction \tilde{U}_{i}) : \tilde{U}_{i} \to \tilde{U}'_{j}$ is a homeomorphism.
> Clearly $f^{-1}(\tilde{U}'_{j}) \sube p^{-1}(U)$, and so from above it follows that the former is some disjoint union of $\tilde{U}_{i}$.
> Therefore $f$ is a locally path-connected, connected covering.
> <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr
