---
tags:
  - public
---
[[Graph theory MOC]]
# Quiver homomorphism

A **homomorphism** $\eta : \Gamma_{1} \to \Gamma_{2}$ of [[quiver|quivers]] $\Gamma_{1}, \Gamma_{2} : \cat Q \to \Set$ is just a [[natural transformation]] of the corresponding functors, #m/def/cat
i.e. a pair of functions $\eta_{V} : \Gamma_{1}V \to \Gamma_{2}V$ and $\eta_{E} : \Gamma_{1}E \to \Gamma_{2}E$ mapping vertices and edges respectively such that
$$
\begin{align*}
(\Gamma_{2}s)(\eta_{E}(a)) &= \eta_{V}((\Gamma_{1}s)(a)) \\
(\Gamma_{2}t)(\eta_{E}(a)) &= \eta_{V}((\Gamma_{1}t)(a)) 
\end{align*}
$$
^H1

for all $a \in \Gamma_{1}E$, or equivalently
$$
\begin{align*}
\eta_{E} (\Gamma_{1}(v,w)) \sube \Gamma_{2}(\eta_{V}(v),\eta_{V}(w))
\end{align*}
$$
^H2

for all $v,w \in \Gamma_{1}V$.

> [!check]- Proof these are equivalent
> Suppose [[#^H1]] holds.
> Let $b \in \eta_{E}(\Gamma_{1}(v,w))$, i.e. $b = \eta_{E}(a)$ for some $a \in \Gamma_{1}E$ such that $(\Gamma_{1}s)(a) = v$ and $(\Gamma_{2}s)(a) = w$,
> in which case 
> $$
> \begin{align*}
> (\Gamma_{2}s)(b) = \eta_{V}((\Gamma_{1}s)(a)) = \eta_{V}(v) \\
> (\Gamma_{2}t)(b) = \eta_{V}((\Gamma_{1}t)(a)) = \eta_{V}(w) \\
> \end{align*}
> $$
> and thus $b \in \Gamma_{2}(\eta_{V}(v),\eta_{V}(w))$.
> Therefore $\eta_{E} (\Gamma_{1}(v,w)) \sube \Gamma_{2}(\eta_{V}(v),\eta_{V}(w))$.
> 
> Now suppose [[#^H2]] holds.
> Let $a \in \Gamma_{1}E$, $v = (\Gamma_{1}s)(a)$, and $w = (\Gamma_{2}t)(a)$.
> Then $a \in \Gamma_{1}(v,w)$, so $\eta_{E}(a) \in \Gamma_{2}(\eta_{V}(v), \eta_{V}(w))$,
> whence
> $$
> \begin{align*}
> (\Gamma_{2}s)(\eta_{E}(a)) = \eta_{V}(v) = \eta_{V}((\Gamma_{1}s)(a)) \\
> (\Gamma_{2}t)(\eta_{E}(a)) = \eta_{V}(w) = \eta_{V}((\Gamma_{1}t)(a))
> \end{align*}
> $$
> as required. <span class="QED"/>

These form the morphisms in [[Category of quivers]].

#
---
#state/tidy | #lang/en | #SemBr
