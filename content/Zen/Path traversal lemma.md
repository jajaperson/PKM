---
tags:
  - public
---
[[Homotopy of paths]]
# Path traversal lemma

Let $\alpha : x \rightsquigarrow y$ be a [[continuous path]] and $\phi : [0,1] \to [0,1]$ be a continuous function with $\phi(0)=0$ and $\phi(1)=1$.
Then $\alpha \circ  \phi$ is a continuous path [[Homotopy of paths|homotopic]] to $\alpha$. #m/thm/homotopy 

> [!check]- Proof
> Let $\alpha_{s}(t) = \alpha((1-s)t + s\phi(t))$.
> Then $\alpha_{0}(t) = \alpha(t)$ and $\alpha_{1}(t) = \alpha \circ \phi(t)$.
> Additionally, $\alpha_{s}(0) = \alpha(0)$ and $\alpha_{s}(1) = \alpha(1)$.
> Hence $\mathrm{A} : (t,s) \mapsto \alpha_{s}(t)$ is a [[homotopy of paths]].
> <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr
