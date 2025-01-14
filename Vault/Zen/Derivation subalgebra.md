---
tags:
  - public
aliases:
  - $\der(\mathfrak g)$
---
[[Algebra theory MOC]]
# Derivation subalgebra

Let $\der(A)$ be the set of all [[Derivation on an algebra|derivations]] of an [[Algebra over a field|algebra]] $(V, B)$ over $\mathbb{K}$, i.e.
$$
\begin{align*}
\der(A) = \{ D \in \End_{\mathbb{K}} V : (\forall a,b \in A)[D B(a,b) = B(D(a),b) + B(a,D(b))] \}
\end{align*}
$$
Then $\der(A)$ is a [[Lie subalgebra]] of the [[commutator]] algebra of the [[endomorphism ring]], #m/thm/falg 
i.e. the commutator of two derivations is itself a derivation. 

> [!check]- Proof
> Let $D,\Delta \in \mathcal{D}(A)$ and $a,b \in V$. Then
> $$
> \begin{align*}
> [D,\Delta]B(a,b)
> &= D\Delta B(a,b) - \Delta DB(a,b) \\
> &= D(B(\Delta(a),b) + B(a,\Delta(b))) - \Delta(B(D(a),b) + B(a,D(b))) \\
> &= \begin{pmatrix}
> B(D\Delta(a),b) + \cancel{ B(\Delta(a),D(b)) } + \cancel{ B(D(a),\Delta(b)) }+ B(a,D\Delta(b)) \\
> \hphantom{.} -B(\Delta D(a), b) - \cancel{ B(D(a),\Delta(b)) }- \cancel{ B(\Delta(a),D(b)) } - B(a, \Delta D(b))
> \end{pmatrix} \\
> &= B(D\Delta(a), b) - B(\Delta D(a),b) + B(a, D\Delta(b)) - B(a, \Delta D(b)) \\
> &= B(D\Delta(a) - \Delta D(a),b) +B (a, D\Delta(b)-\Delta D(b)) \\
> &= B([D,\Delta]a,b) + B(a, [D,\Delta]b)
> \end{align*}
> $$
> hence $[D,\Delta] \in \mathcal{D}(A)$. <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr