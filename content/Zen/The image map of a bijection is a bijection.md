---
tags:
  - public
---
[[Image and preïmage]]
# The image map of a bijection is a bijection

Given a bijection $f : X \to Y$, the [[Image and preïmage|image]] map $f^\star : \mathcal{P}(X) \to \mathcal{P}(Y)$ is also a bijection. #m/thm/general 
Moreover:
$$
\begin{align*}
(f^\star)^{-1} = f_\star = (f^{-1})^\star
\end{align*}
$$

> [!check]- Proof
> Let $f : X \to Y$ be a bijection between arbitrary sets,
> It follows that for a given subset $A \sube X$
> $$
> \begin{align*}
> &x \in f_{\star}(f^\star(A)) \\ 
> \iff &f(x) \in f^\star(A) \\
> \iff &\exists a \in A : f(a) = f(x) \\
> \iff &\exists a \in A : a = x \\
> \iff &x \in A
> \end{align*}
> $$
> thus $A = f_{\star}(f^\star(A))$.
> Likewise, for a given subset $B \sube B$
> $$
> \begin{align*}
> &y \in f^\star(f_{\star}(A)) \\
> \iff &\exists x \in f_{\star}(A) : f(x) = y \\
> \iff &\exists x \in f_{\star}(A) : x = f^{-1}(y) \\
> \iff &f^{-1}(y) \in f_{\star}(A) \\
> \iff &f(f^{-1}(y)) \in A \\
> \iff &y \in A
> \end{align*}
> $$
> thus $A = f^\star(f_{\star}(A))$.
> Therefore $f^\star \circ f_{\star} = f_{\star} \circ f^\star = \id$,
> hence $f^\star$ is a bijection with inverse $f_{\star}$.
> <span class="QED"/>


#
---
#state/tidy | #lang/en | #SemBr
