---
tags:
  - public
---
[[Module theory MOC]]
# Quotient module

Given a [[Module]] $M \in \lMod R$ and a [[Submodule]] $N \leq M$, the quotient module $M / N$ is the [[quotient group]] with a natural $R$-action: #m/def/module
$$
\begin{align*}
r \cdot (v + N) = r \cdot v + N
\end{align*}
$$
for any $r \in R$ and $v \in M$.

> [!tip]- More explicitly
> $M / N$ is just $M$ with all elements of $N$ collapsed to zero.
> More formally, using the [[congruence relation]]
> $$
> \begin{align*}
> x \equiv y \iff x - y \in N
> \end{align*}
> $$
> we have $M / N = M / {\equiv}$ with $\alpha[a] + \beta [b] = [\alpha a + \beta b]$.

We thus have the [[short exact sequence]] in $\lMod R$
$$
\begin{align*}
0 \to N \hookrightarrow M \stackrel{\pi}{\twoheadrightarrow} M / N \to 0
\end{align*}
$$

## Universal property

The quotient module with the canonical projection $(M / N, \pi)$ is characterised up to unique isomorphism by the universal property:

$N \sube \ker \pi$.
If $N \in \lMod R$ is a module and $\varphi \in \lMod R(M, N)$ is a morphism with $S \in \ker \varphi$,
then there exists a unique morphism $\overline{\varphi} \in \lMod R(M / S,N)$ so that $\varphi = \overline{\varphi}\pi$.

#
---
#state/develop | #lang/en | #SemBr
