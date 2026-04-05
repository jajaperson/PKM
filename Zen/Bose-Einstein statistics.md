---
tags:
  - public
---
[[Statistical thermodynamics MOC]]
# Bose-Einstein statistics

**Bose-Einstein statistics** is applicable to a system of $N$ identical and indistinguishable [[Boson|bosons]], i.e. particles not obeying the [[Pauli exclusion principle]] and thus able to occupy the same states.
A unique microstate is therefore labelled by every combination of occupation numbers $K_i$ for each particle state $\ket{i}$,
such that all occupation numbers add to $N = \sum_{i} K_{i}$
$$
\begin{align*}
\vab K \in \mathrm{BE} = \left\{  \vab K \in (\mathbb{N}_{0})^N : \sum_{i} K_{i} = N  \right\}
\end{align*}
$$
and the energy of such a microstate is given by
$$
\begin{align*}
E_{\vab K} = \sum_{i} K_{i} \varepsilon_{i} = \vab K \cdot \vab \varepsilon
\end{align*}
$$
Hence the [[Canonical ensemble|canonical partition function]] is given by
$$
\begin{align*}
Z = \sum_{\vab K \in \mathrm{BE}} \exp\left( \frac{-\vab K \cdot \vab \varepsilon}{k_{B}T} \right)
\end{align*}
$$

#
---
#state/develop | #lang/en | #SemBr
