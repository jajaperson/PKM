---
aliases:
  - sheet number
tags:
  - public
---
[[Covering]]
# Sheet number of a connected covering

Let $p : (\tilde{X}, \tilde{x}_{0}) \twoheadrightarrow (X,x_{0})$ be a connected covering.
Then the **sheet number**, i.e. the number of fibres $\abs{p^{-1}\{ x \}}$, is given by the [[Lagrange's theorem|subgroup index]] of the [[Characteristic subgroup of a covering|characteristic subgroup]] of $p$ in the [[fundamental group]][^loose] #m/thm/homotopy 
$$
\begin{align*}
|p^{-1}\{ x \}| = [\pi_{1}(X,x_{0}) : \pi_{1}p(\pi_{1}(\tilde{X},\tilde{x}_{0}))]
\end{align*}
$$
[^loose]: 2010, [[@looseAlgebraischeTopologie2010|Algebraische Topologie]], pp. 91–92.

> [!check]- Proof
> Let $G = \pi_{1}(X,x_{0})$ and $H = \pi_{1}p(\pi_{1}(\tilde{X},\tilde{x}_{0}))$.
> Since $H$ is a subgroup its left cosets in $H$ are disjoint.
> Let $A$ be a set of loops $A \ni \alpha  : \mathbb{I} \to X$ with base $x_{0}$, each a representative of a different left coset $[\alpha] \odot H$ so that
> $$
> \begin{align*}
> G = \dot{\bigcup}_{\alpha \in A} [\alpha] \odot H
> \end{align*}
> $$
> and thus $[G:H] = |A|$.
> We claim the map
> $$
> \begin{align*}
> \Phi : A &\to p^{-1} \{ x_{0} \} \\
> \alpha &\mapsto \tilde{\alpha}(1)
> \end{align*}
> $$
> is injective, where $\tilde{\alpha}$ is the [[Lift of a map to a covering space#Second lemma Lifts of paths|unique lift]] of $\alpha$ based at $\tilde{x}_{0}$.
> 
> To show this map is independent of choice of representative, let $\beta : \mathbb{I } \to X$ be a loop such that $[\beta] \odot H = [\alpha] \odot H$.
> Then $[\beta] = [\alpha] \odot[u]$ where $[u] = [p \circ \tilde{u}] \in H$.
> Letting $\tilde{u}$, $\tilde{\alpha}$, $\tilde{\beta}$ be the lifts of  $u,\alpha,\beta$ respectively, it follows that $\tilde{\beta} \simeq \tilde{\alpha} \odot \tilde{u}$,
> and in particular $\tilde{\beta}(1) = \tilde{\alpha}(1)$.
> Therefore $\Phi$ is well-defined.
> 
> For injectivity, let $\alpha,\beta \in A$ such that $\tilde{\alpha}(1) = \tilde{\beta}(1)$.
> It follows
> $$
> \begin{align*}
> [\beta]^{-1}\odot [\alpha] &= \pi_{1}p([\tilde{\beta}]^{-1}\odot [\tilde{\alpha}]) \in H \\
> \end{align*}
> $$
> so $[\alpha] = [\beta]\odot [\beta]^{-1}\odot[\alpha] \in [\beta] \odot H$ and thus $[\alpha] \odot H = [\beta] \odot H$.
> Thus $\alpha=\beta$ by construction of $A$.
> 
> For surjectivity, let $\tilde{x}_{0}' \in p^{-1}\{ x_{0} \}$ and let $\tilde{\gamma} : \mathbb{I} \to \tilde{X}$ be a path from $\tilde{x}_{0}$ to $\tilde{x}_{0}'$.
> Then $\tilde{\gamma}$ is the unique lift of a loop $\gamma = p \circ \tilde{\gamma}$ with basepoint $x_{0}$,
> and therefore there exists some $\alpha \in A$ so that $[\beta] \in [\alpha]H$,
> whence $\Phi [\alpha] = \tilde{x}_{0}'$.


> [!check]- Proof of universal sheet number without lifts
> Define an equivalence relation $\sim$ on $X$, so that $x \sim y$ iff $\abs{p^{-1} \{ x \}} = \abs{p^{-1} \{ y \}}$.
> The equivalence classes are then unions of evenly covered open sets and hence open.
> But $X$ is the discrete union of these equivalence classes, so since $X$ is [[Connectedness|connected]] there can only be one equivalence class.
> <span class="QED"/>


## Corollaries

- [[A simply connected space has no non-trivial covering]]

#
---
#state/tidy | #lang/en | #SemBr
