---
tags:
  - public
aliases:
  - connexion coëfficients
---
[[Affine connexion]]
# Connexion disagreement tensor

Let $\nabla$ and $\tilde{\nabla}$ denote [[affine connexion|affine connexions]] on a $C^\alpha$-[[Differentiable manifold|manifold]] $M$.
The **connexion disagreement tensor** $C^c{}_{ab} \in \mathcal{T}^1_{2}(M)$ of $\nabla$ with $\tilde{\nabla}$ is a [[tensor field]] defined
so that for $\omega_{a} \in \Omega^1(M)$ we have[^2009]
$$
\begin{align*}
C^c{}_{ab} \, \omega_{c} &:= (\tilde{\nabla}_{a} - \nabla_{a}) \omega_{b}
\end{align*}
$$
and thus
$$
\begin{align*}
\nabla_{a} \omega_{b} = \tilde{\nabla}_{a}\omega_{b} - C^c{}_{ab} \, \omega_{c}.
\end{align*}
$$

> [!check]- Proof of tensoriality
> We need to show that
> $$
> \begin{align*}
> C(\omega)_{ab} := C^c{}_{ab}\,\omega_{c} = (\tilde{\nabla}_{a} - \nabla_{a})  \omega_{b}
> \end{align*}
> $$
> is a $C^\alpha(M)$-linear map into $\mathcal{T}_{2}^0(M)$.
> To this end let $f \in C^\alpha(M)$. 
> Then by the Leibniz rule,
> $$
> \begin{align*}
> C(f \omega)_{ab} &= (\tilde{\nabla}_{a} - \nabla_{a})  (f \omega)_{b} 
> = \mathrm{d}f_{a}\, \omega_{b} + f\tilde{\nabla}_{a}\omega_{b} - \mathrm{d}f_{a}\, \omega_{b} \\
> &= f(\tilde{\nabla}_{a} - \nabla_{a})\omega_{b} = f\,C(\omega)_{ab}
> \end{align*}
> $$
> as required. <span class="QED"/>

  [^2009]: 2009\. [[Sources/@waldGeneralRelativity2009|General relativity]], §1.1, pp. 32–33.

> [!warning]- A word of warning for physicists
> Physicists might be uncomfortable with the assertion that $C^c{}_{ab}$ is a tensor,
> and most introductory general relativity courses will spend a lot of time stressing that connexion coëfficients such as the [[Christoffel symbols]] are _not_ tensors.
> Depending on perspective this is either a misunderstanding or disagreement.
> The connexion coëfficients for a coördinate chart is not covariant since it depended on the choice of coördinate chart,
> but if you consider the [[partial derivative as a local affine connexion]] as extra data attached to our manifold which we retain after change of coördinates,
> they suddenly are tensorial.

In particular, given [[Coördinate chart|local coördinates]] $x : U \to \mathbb{R}^m$ and considering [[partial derivative as a local affine connexion]],
we typically denote the connexion disagreement of an affine connexion $\nabla$ with $\partial$ is denoted $\Gamma^c{}_{ab}$ and we have
$$
\begin{align*}
\nabla_{a} \omega_{b} = \partial_{a}\omega_{b} - \Gamma^c{}_{ab}\, \omega_{c}.
\end{align*}
$$
or in components
$$
\begin{align*}
\nabla_{\mu} \omega_{\nu} = \partial_{\mu} \omega_{\nu} - \Gamma^\delta{}_{\mu\nu} \, \omega_{\delta}.
\end{align*}
$$
We call $\Gamma^\delta{}_{\mu\nu}$ the **connexion coëfficients**.
If $\nabla$ is the [[Levi-Civita symbol]] the connexion coëfficients are called the [[Christoffel symbols]].

## Covariant derivative disagreement on vector fields

With the same notation as above, let $X^a \in \mathfrak{X}(M)$ be a [[vector field]].
Then
$$
\begin{align*}
\nabla_{a}X^b = \tilde{\nabla}_{a}X^b + C^b{}_{ac} \, X^c.
\end{align*}
$$


> [!check]- Proof
> Let $X^a \in \mathfrak{X}(M)$ and $\omega_{a} \in \Omega^1(M)$.
> Then since covariant derivatives all agree with the [[exterior derivative]] on [[Scalar field|scalar fields]], we have
> $$
> \begin{align*}
> (\tilde{\nabla}_{a} - \nabla_{a})(\omega_{b}X^b) = 0.
> \end{align*}
> $$
> Therefore by the Leibniz rule
> $$
> \begin{align*}
> 0 
> &= \omega_{b}\, \tilde{\nabla}_{a}X^b + X^b \, \tilde{\nabla}_{a} \omega_{b}
> - \omega_{b}\,\nabla_{a}X^b - X^b \, \nabla_{a} \omega_{b} \\
> &= \omega_{b}(\tilde{\nabla}_{a}-\nabla_{a})X^b + X^b (\tilde{\nabla}_{a}-\nabla_{a})\omega_{b} \\
> &= \omega_{b}(\tilde{\nabla}_{a}- \nabla_{a})X^b + X^b \, C^c{}_{ab}\,\omega_{c} \\
> &= \omega_{b} \left(  (\tilde{\nabla}_{a}- \nabla_{a})X^b + C^b{}_{ac}\,X^c \right) 
> \end{align*}
> $$
> for all $\omega_{a} \in \Omega^1(M)$.
> The conclusion follows. <span class="QED"/>

## Covariant derivative disagreement on tensor fields

With the same notation as above, let $T^{a_{1} \cdots a_{p}}_{b_{1}\cdots b_{q}} \in \mathcal{T}^p_{q}(M)$ be a [[tensor field]],
where we will suppress position since no raising or lowering will take place.
Then by induction on applications of the Leibniz rule we see
$$
\begin{align*}
\nabla_{c} T^{a_{1}\cdots a_{p}}_{b_{1}\cdots b_{q}} = \tilde{\nabla}_{c}T^{a_{1}\cdots a_{p}}_{b_{1}\cdots b_{q}} + \sum_{i=1}^p C^{a_{i}}{}_{cd} \, T^{a_{1}\cdots d\cdots a_{p}}_{b_{1}\cdots b_{q}} - \sum_{i=1}^q C^d{}_{c b_{i}} T^{a_{1}\cdots a_{p}}_{b_{1}\cdots d \cdots b_{q}}.
\end{align*}
$$
In other words, to convert from one connexion to the other for the covariant derivative of a general tensor field $T^{a_{1} \cdots a_{p}}_{b_{1}\cdots b_{q}}$,
we must 

- add a contraction with each upper index of $T^{a_{1} \cdots a_{p}}_{b_{1}\cdots b_{q}}$,
- subtract a contraction with each lower index of $T^{a_{1} \cdots a_{p}}_{b_{1}\cdots b_{q}}$.

## Other properties

1. If both $\nabla$ and $\tilde{\nabla}$ are [[Torsion tensor|torsion-free]], or more generally if they have the same [[Contorsion tensor]], then $C^c{}_{ab} = C^c{}_{(ab)}$ is symmetric in its lower indices. ^P1

#
---
#state/tidy | #lang/en | #SemBr

[^1]: Namely their action on scalar fields must agree with the [[exterior derivative]].
