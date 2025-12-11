---
tags:
  - public
aliases:
  - preïmage of image
  - image of preïmage
---
[[Image and preïmage]]
# The preïmage of the image and image of the preïmage are not necessarily the identity

Given an arbitrary function $f : X \to Y$, we understand the image $f^\star : \mathcal{P}(X) \to \mathcal{P}(Y)$ and the preïmage $f_{\star} : \mathcal{P}(Y) \to \mathcal{P}(X)$.
The result of composing these functions together is not necessarily the identity,
but rather has the following properties: #m/thm/general
$$
\begin{align*}
A &\sube f_\star (f^{\star}(A)) \\
B &\supseteq f^\star (f_{\star}(B))
\end{align*}
$$
where $A \sube X$ and $B \sube Y$.

> [!check]- Proof
> Let $a \in A$.
> Then $f(a) \in f^\star(A)$,
> and thus $a \in f_{\star}(f^\star(A))$.
> Therefore $A \sube f_{\star}(f^\star(A))$.
> 
> Similarly, let $b \in f^\star(f_{\star}(B))$.
> It follows that there exists $x \in f_{\star}(B)$ such that $f(x) = b$,
> whence $b = f(x) \in B$.
> <span class="QED"/>



#
---
#state/tidy | #lang/en | #SemBr
