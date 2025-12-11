---
tags:
  - public
---
[[Regular covering]]
# Deck transformation group of a regular covering as quotient

Let $p : \tilde{X} \twoheadrightarrow X$ be a connected and path-connected [[regular covering]], $x_{0} \in X$, and $\tilde{x}_{0} \in p^{-1}\{ x_{0} \}$.
Let $H = \pi_{1}p(\pi_{1}(\tilde{X},\tilde{x}_{0}))$ be the basepoint-invariant [[Characteristic subgroup of a covering|characteristic subgroup]] and $\Gamma = \Aut_{\Cov_{X}}(p)$ be the [[Deck transformation|deck transformation group]] of $p$.
Then[^loose] #m/thm/homotopy 
$$
\begin{align*}
\Gamma \cong \pi_{1}(X,x_{0}) / H
\end{align*}
$$

[^loose]: 2010, [[@looseAlgebraischeTopologie2010|Algebraische Topologie]], ¶2.3.39, p. 97


> [!check]- Proof
> We will show that an isomorphism is given by
> $$
> \begin{align*}
> \Phi : \Gamma &\to \pi_{1}(X,x_{0})/H \\
> \gamma &\mapsto [\alpha_{\gamma}]  H = H [\alpha_{\gamma}]
> \end{align*}
> $$
> where $\tilde{\alpha}_{\gamma} : \mathbb{I} \to \tilde{X}$ is a path from $\tilde{x}_{0}$ to $\gamma (\tilde{x}_{0})$ and $\alpha_{\gamma} = p \circ \tilde{\alpha}_{\gamma}$.
> 
> If $\tilde{\beta}_{\gamma} : \mathbb{I} \to \tilde{X}$ is an alternative path from $\tilde{x}_{0}$ to $\gamma(\tilde{x}_{0})$ then $\pi_{1}p [\overline{\tilde{\beta}_{\gamma}} \odot\tilde{\alpha}_{\gamma}] = [\overline{\beta_{\gamma}} \odot \alpha_{\gamma}] \in H$ and thus
> $$
> \begin{align*}
> [\beta_{\gamma}]H = [\beta_{\gamma}] [\overline{\beta_{\gamma}} \odot \alpha_{\gamma}] H = [\alpha_{\gamma}]H
> \end{align*}
> $$
> so $\Phi[\gamma]$ is independent of the choice of ${\alpha_{\gamma}}$.
> 
> It is also clear that $\Phi$ is a homomorphism, since $\Phi(\id) = H$ and for any $\gamma,\eta \in \Gamma$
> $$
> \begin{align*}
> \Phi(\gamma \eta) = [\alpha_{\gamma \eta}]H = [p \circ \gamma \circ \tilde{\alpha}_{\eta}][\alpha_{\gamma}] = [\alpha_{\eta}][\alpha_{\gamma}]H =\Phi(\gamma)\Phi(\eta)
> \end{align*}
> $$
> 
> Let $\gamma \in \Gamma$ such that $\Phi(\gamma) = H$.
> Then $[\alpha_{\gamma}] \in H$ and thus $[\tilde{\alpha}_{\gamma}] \in \pi_{1}(\tilde{X}, \tilde{x}_{0})$ (by [[Lift of a map to a covering space#First lemma Uniqueness]]).
> Then $\gamma(\tilde{x}_{0}) = \tilde{\alpha}_{\gamma}(1) = \tilde{x}_{0}$,
> so since [[the deck transformation group acts properly discontinuously]] $\gamma = e$.
> Therefore $\Phi$ is a [[group monomorphism]].
> 
> Let $[\beta] H \in G / H$ and let $\tilde{\beta}$ be the [[Lift of a map to a covering space|lift]] of $\beta$ with $\tilde{\beta}(0) = \tilde{x}_{0}$.
> Since $\Gamma$ [[A covering is regular iff its deck transformation group acts transitively on fibres|acts transitively on fibres]] there exists a $\gamma \in \Gamma$ with $\gamma(\tilde{x}_{0}) = \tilde{\beta}(1)$,
> and thus $\Phi(\gamma) = [\beta]H$.
> Therefore $\Phi$ is a [[group epimorphism]] and thus an isomorphism.
> <span class="QED"/>

In particular, if $\tilde{X}$ is [[Simple connectedness|simply connected]] then $\Gamma \cong \pi_{1}(X, x_{0})$ — see [[Universal covering]].

#
---
#state/tidy | #lang/en | #SemBr
