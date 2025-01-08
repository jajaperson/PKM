---
tags:
  - public
---
[[Group homomorphism]]
# Kernel of a group homomorphism

Given a [[Group homomorphism]] $f:G \to H$, with identity $e_{H} \in H$, the **kernel** $\ker f$ is defined as #m/def/group 
$$
\begin{align*}
\ker f = \{ g \in G : f(g) = e_{H} \}
\end{align*}
$$
Every kernel is a [[Normal subgroup]] #m/thm/group 

> [!check]- Proof of normal subgroup
> Clearly $e \in \ker f$.
> Let $a,b \in \ker f$, then $f(a) = f(b) = e$.
> It follows $f(ab^{-1}) = f(a) f(b^{-1}) = f(a)f(b)^{-1} = e$,
> thus $ab^{-1} \in \ker f$.
> Therefore $\ker f$ is a subgroup by [[Subgroup#One step subgroup test]].
> Now let $k \in \ker f$.
> Then for any $g \in G$,
> $f(gkg^{-1}) = f(g)f(k)f(g^{-1}) = f(g)ef(g^{-1}) = f(e) = e$,
> whence $gkg^{-1} \in \ker f$.
> Therefore $\ker f$ is a [[Normal subgroup]].
> <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr 