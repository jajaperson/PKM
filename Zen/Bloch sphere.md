---
tags:
  - public
---
[[Quantum computing MOC]]
# Bloch sphere

The **Bloch sphere** is a geometric model for describing and visualizing states in two-level quantum systems, i.e. [[Qubit|qubits]],
with the advantage of having no redundancy physically.
A qubit may be described by[^2011]
$$
\begin{align*}
\ket{\psi} = e^{i \gamma} \left( \cos\left( \frac{\theta}{2} \right)\ket{0}  + e^{i\phi} \sin\left( \frac{\theta}{2} \right) \ket{1}  \right)
\end{align*}
$$
where $0 \leq \theta \leq \pi$ and $0 \leq \phi < 2\pi$.
Since [[Global phase has no physical meaning]] the $\gamma$ is ignored,
and $\theta$ and $\phi$ are interpreted as [[Spherical coördinates#Physics convention|spherical coördinates]].
Thus all physically distinguishable states correspond to exactly one point on the so-called **Bloch sphere**,

![[@williamsExplorationsQuantumComputing2011_1.3.png#invert|500]]

where the north pole corresponds to $\ket{0}$ and the south pole to $\ket{1}$.
Note that a $2\pi$ rotation will pick up a sign, but this is also an example of global phase.

[^2011]: 2011\. [[Sources/@williamsExplorationsQuantumComputing2011|Explorations in Quantum Computing]]

#
---
#state/tidy | #lang/en | #SemBr
