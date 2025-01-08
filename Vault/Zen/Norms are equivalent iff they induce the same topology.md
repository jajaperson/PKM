---
tags:
  - public
---
[[Equivalence of norms]]
# Norms are equivalent iff they induce the same topology

Let $(X, \mathbb{K})$ be a vector space and $p,q : X \to \mathbb{R}$ be norms.
Let $\mathcal{T}_{p}$ and $\mathcal{T}_{q}$ be the [[Metric topology|topologies]] on $X$ induced by $p$ and $q$ respectively.
Then $p$ and $q$ are [[Equivalence of norms|equivalent norms]] iff $\mathcal{T}_{p} = \mathcal{T}_{q}$. #m/thm/topology 

> [!missing]- Proof
> First suppose that $p$ and $q$ are equivalent,
> i.e. there exist $b \geq a > 0$ such that $aq(x) \leq p(x) \leq bq(x)$ for all $x \in X$.
> Now suppose $U \sube X$ is open under $p$.
> Then for every $x \in U$ there exists some $\delta > 0$ such that $p(y - x) < \delta \implies y \in U$.
> But $p(y - x) \leq bq(y - x)$,
> and thus for every $x \in U$ there exists $\frac{\delta}{b} > 0$ such that $q(y-x) < \frac{\delta}{b} \implies p(y-x) < \delta \implies y \in U$.
> Hence $U$ is open under $q$.
> Therefore $\mathcal{T}_{p} \sube \mathcal{T}_{q}$
> Since equivalence of norms is symmetric,
> by the same argument $\mathcal{T}_{q} \sube \mathcal{T}_{p}$,
> and thus $\mathcal{T}_{p} = \mathcal{T}_{q}$.

#
---
#state/develop | #lang/en | #SemBr
