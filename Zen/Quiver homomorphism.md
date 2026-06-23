---
tags:
  - public
---
[[Graph theory MOC]]
# Quiver homomorphism

A **homomorphism** $f : \Gamma \to \Delta$ of [[quiver|quivers]] is a pair of functions
$$
\begin{align*}
f_{0} &: \Gamma_{0} \to \Delta_{0}
&
f_{1} &: \Gamma_{1} \to \Delta_{1}
\end{align*}
$$
on vertices and edges respectively such that  #m/def/cat
$$
\begin{align*}
f_{1}(\Gamma(v,w)) \sube \Delta(f_{0}(v), f_{0}(w)).
\end{align*}
$$
^M1

Regarding [[Quiver#^presheaf]], this is precisely a [[natural transformation]] $\Gamma \to \Delta$,
i.e. we have
$$
\begin{align*}
(\Delta s)(f_{1}(a)) &= f_{0}((\Gamma s)(a)) \\
(\Delta t)(f_{1}(a)) &= f_{0}((\Gamma t)(a)) 
\end{align*}
$$
^M2


> [!check]- Proof these are equivalent
> Suppose [[#^M2]] holds.
> Let $b \in f_{1}(\Gamma(v,w))$, i.e. $b = f_{1}(a)$ for some $a \in \Gamma_{1}$ such that $(\Gamma s)(a) = v$ and $(\Delta s)(a) = w$,
> in which case 
> $$
> \begin{align*}
> (\Delta s)(b) = f_{0}((\Gamma s)(a)) = f_{0}(v) \\
> (\Delta t)(b) = f_{0}((\Gamma t)(a)) = f_{0}(w) \\
> \end{align*}
> $$
> and thus $b \in \Delta(f_{0}(v),f_{0}(w))$.
> Therefore $f_{1} (\Gamma(v,w)) \sube \Delta(f_{0}(v),f_{0}(w))$.
> 
> Now suppose [[#^M1]] holds.
> Let $a \in \Gamma_{1}$, $v = (\Gamma s)(a)$, and $w = (\Delta t)(a)$.
> Then $a \in \Gamma(v,w)$, so $f_{1}(a) \in \Delta(f_{0}(v), f_{0}(w))$,
> whence
> $$
> \begin{align*}
> (\Delta s)(f_{1}(a)) = f_{0}(v) = f_{0}((\Gamma s)(a)) \\
> (\Delta t)(f_{1}(a)) = f_{0}(w) = f_{0}((\Gamma t)(a))
> \end{align*}
> $$
> as required. <span class="QED"/>

These form the morphisms in [[Category of quivers]].

#
---
#state/tidy | #lang/en | #SemBr
