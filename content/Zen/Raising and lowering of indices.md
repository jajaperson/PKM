---
tags:
  - public
aliases:
  - musical isomorphism
---
[[Differential geometry MOC]]
# Raising and lowering of indices

Let $M$ be a [[Semi-Riemannian manifold]].
The metric $g_{ab}$ on $M$ specifies an isomorphism between the space $\mathfrak{X}(M)$ of [[vector field|vector fields]] and the space $\Omega^1(M)$ of [[1-form|1-forms]]
by so-called **raising and lowering of indices**.

> [!note]+
> We will work in [[abstract index notation]], but the same process works once a [[Manifold frame|local frame]] is chosen.

Given a vector field $v^a \in \mathfrak{X}(M)$, we can define
$$
\begin{align*}
v_{a} := g_{ab} \, v^b \in \Omega^1(M),
\end{align*}
$$
and similarly for a 1-form $\omega \in \Omega^1(M)$, we can define
$$
\begin{align*}
\omega^a := g^{ab} \, \omega_{b}.
\end{align*}
$$
This is consistent since by definition $g^{ab} \, g_{bc} = \delta^a_{c}$.
Iterating this process, we can raise and lower arbitrary indices of any [[tensor field]].

## Musical notation
 
These isomorphism given here is sometimes called the **musical isomorphism** where we use the notation
$$
\begin{align*}
(v^a)^\flat_{b} &= v_{b} & (\omega_{a})^{\sharp}_{b}
\end{align*}
$$

#
---
#state/tidy | #lang/en | #SemBr
