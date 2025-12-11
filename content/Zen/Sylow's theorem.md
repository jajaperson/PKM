---
tags:
  - public
---
[[Group theory MOC]]
# Sylow's theorem

Let $G$ be a [[finite group]] of order $p^r m$ where $p$ is [[Prime number|prime]] and $p \not \mid m$. 
Then #m/thm/group 

1. $\opn{Syl}_{p}(G)$, the set of [[Sylow p-subgroup|Sylow $p$-subgroups]], is non-empty; ^S1
2. Every [[p-group|$p$-subgroup]] of $G$ is contained in a [[Sylow p-subgroup]]; ^S2
3. All Sylow $p$-subgroups are conjugate in $G$; ^S3
4. If $n_{p} = \abs{\opn{Syl}_{p}(G)}$ then $n_p$ divides $m$ and $n_{p} \equiv_{p} 1$. ^S4

> [!check]- Proof due to Wielandt
> In this proof [[group action|group actions]] are taken to be right actions.
> 
> Let $\Omega$ be the set of all subsets of $G$ of size $p^r$,
> and $G$ act on $\Omega$ by right multiplication. Note
> $$
> \begin{align*}
> \abs{\Omega} = {p^r m \choose p^r} = \frac{p^r m}{p^r} \frac{(p^r m - 1)}{p^r - 1} \cdots \frac{p^r m - (p^r - 1)}{1}
> \end{align*}
> $$
> which is not divisible by $p$,
> so there must be a $G$-orbit on $\Omega$ of degree not divisible by $p$,
> Let $\Sigma$ be such an orbit and $S \in \Sigma$.
> Let $P = (G)\rho_{S} = \{ g \in G : Sg = S \} \leq G$.
> We claim $\abs P = p^r$, whence follows $P$ is a Sylow $p$-subgroup.
> Since $\abs G = p^r m = \abs{\Sigma} \abs{P}$, we know $p^r \mid \abs{P}$.
> Now
> $$
> \begin{align*}
> (P)\rho_{s} = \{ g \in P : sg = s \} = 1
> \end{align*}
> $$
> and $(P)\rho$ acting on $S$ is [[Free group action|free]],
> so each $(P)\rho$-orbit of $S$ has size $\abs P$.
> Herefore $\abs P \mid \abs S$ and thus $P \in \opn{Syl}_{p}(G)$.
> 
> To recap, if $S \in \Omega$ and $\abs{S^{(G)\rho}}$ is not divisible by $p$,
> then $(G)\rho_{S} \in \opn{Syl}_{p}(G)$, proving [[#^S1]].
> 
> Now let $H$ be a $p$-subgroup of $G$, and $\Sigma$ be as above.
> Then $(H)\rho$ acts on $\Sigma$.
> The $(H)\rho$-orbits on $\Sigma$ have sizes which are powers of $p$.
> Since $\abs{\Sigma}$ does not divide $p$, it follows there must exist a singleton orbit $\{ T \}$,
> so $(H)\rho \leq (G)\rho_{T}$, the latter being a Sylow $p$-subgroup, proving [[#^S2]].
> 
> Let $P_{1},P_{2} \in \opn{Syl}_{p}(G)$.
> From directly above, $P_{1} = (G)\rho_{T_{1}}$ and $P_{2} = (G)\rho_{T_{2}}$
> for some $T_{1},T_{2} \in \Sigma \sube G$,
> thus $T_{1}g = T_{2}$ for some $g \in G$.
> It follows
> $$
> \begin{align*}
> P_{1}^g ={(G)\rho_{T_{1}}}^g = (G)\rho_{T_{2}} = P_{2}
> \end{align*}
> $$
> proving [[#^S3]].
> 
> $G$ acts (transitively by [[#^S3]]) on $\opn{Syl}_{p}(G)$ by conjugation,
> and $\abs{G} = \abs{\opn{Syl}_{p}(G)} \abs{\opn N_{G}(P)}$ where $\opn N_{G}(P)$ is the [[Normalizer in a group|normalizer]] of $P \in \opn{Syl}_{p}(G)$
> by the [[Orbit-stabilizer theorem]].
> Since $P \leq \opn N_{G}(P)$, it follows $p^r$ divides $\abs{\opn N_{G}(P)}$,
> whence $\abs{\opn{Syl}_{p}(G)}$ divides $m$.
> 
> $P$ acts by conjugation on $\opn{Syl}_{p}(G)$, and by [[#^S2]] $P = (G)\rho_{S}$ for some $S \in \Sigma$.
> The only orbit of size 1 is $\{ P \}$:
> For if $Q \in \opn{Syl}_{p}(G)$ then $Q^g = Q$ for all $g \in P$,
> so $P \leq \opn N_{G}(Q)$.
> Since $PQ \leq \opn N_{G}(Q)$,
> and $PQ$ is a $p$-group, so $P = Q$.
> 
> All orbits of $P$ on $\opn{Syl}_{p}(G)$ have size a $p$-power,
> therefore all orbits other than $\{ P \}$ have size divisible by $p$.
> Therefore $n_{p} \equiv_{p} 1$, proving [[#^S4]]. <span class="QED"/>


#
---
#state/tidy | #lang/en | #SemBr
