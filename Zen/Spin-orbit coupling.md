---
tags:
  - public
---
[[Fine structure]]
# Spin-orbit coupling

**Spin-orbit coupling** refers to non-relativistic [[Fine structure]] splitting caused by the interaction of electron [[Magnetic moment|magnetic moments]] (related to their spins) and the electromagnetic field produced by the nucleus.
Since in the rest frame of the electron the nucleus appears to orbit the nucleus, this results in a magnetic field as experienced by the electron, resulting in the [[Larmor precession|Larmor interaction]] with Hamiltonian ${H}_{L}$.
The relativistic [[Thomas correction]] yields the perturbing Hamiltonian
$$
\begin{align*}
{H}_{\mathrm{so}} &= {H}_{\mathrm{L}} + {H}_{\mathrm{T}} \\
&= \frac{(g_{s}-1)\mu_{B}}{\hbar m_{e}q_{e}c^2} \frac{1}{r} \frac{ \partial U(r)}{ \partial r } \mathbf{L} \cdot \mathbf{S} \\
&\approx \frac{\mu_{B}}{\hbar m_{e}q_{e}c^2} \frac{1}{r} \frac{ \partial U(r)}{ \partial r } \mathbf{L} \cdot \mathbf{S}
\end{align*}
$$
where $U(r) = -e V(r)$ is the potential energy of an electron due to the [[Coulomb potential]], $\mu_{B}$ is the [[Bohr magneton]], and $g_{s} \approx 2.0023$ is the electron spin [[g-factor]].
Therefore the full Hamiltonian is
$$
\begin{align*}
{H} &= {H}_{\mathrm{co}} + {H}_{\mathrm{re}} + {H}_{\mathrm{so}} \\
\end{align*}
$$
Thus spin-orbit coupling is effectively split into regimes depending on the magnitude of perturbing Hamiltonians ${H}_{\mathrm{so}}$ and ${H}_{\mathrm{re}}$ and thus the order their effects must be considered:

- For ${H}_{\mathrm{re}} \gg {H}_{\mathrm{so}}$ we have [[LS-coupling]] where single electron $l,s$ sum to $L,S$ and couple as $J$. 
  Occurs for atoms with a small to medium atomic number.
- For ${H}_{\mathrm{so}} \ll {H}_{\mathrm{re}}$ we have [[jj-coupling]] where single electron $l,s$ couple to $j$ and interact.
  Occurs for atoms with a large atomic number.

The magnitude of splitting depends on the expectation value
$$
\begin{align*}
\langle {H}_{\mathrm{so}} \rangle &= \frac{(g_{s}-1)\mu_{B}}{\hbar m_{e}q_{e}c^2} \left\langle  \frac{1}{r} \frac{ \partial U(r) }{ \partial r }   \right\rangle \langle \mathbf{L} \cdot \mathbf{S} \rangle \\
&= \frac{(g_{s}-1)\mu_{B}}{\hbar m_{e}q_{e}c^2}  \frac{Zq_{e}^2}{4\pi\epsilon_{0}} \frac{Z^3}{a_{0}^2n^3 \ell\left( \ell+\frac{1}{2}\right)(\ell+1)} \langle \mathbf{L} \cdot \mathbf{S} \rangle  \\
&= C_{n\ell}\langle \mathbf{L} \cdot \mathbf S \rangle \\&= C_{n\ell} \frac{\hbar}{2} (j(j+1))-\ell(\ell+1)-s(s+1))
\end{align*}
$$
since
$$
\begin{align*}
J^2 = (\mathbf{L} + \mathbf{S}) \cdot (\mathbf{L}+\mathbf{S}) = L^2 + S^2 + 2 \mathbf{L} \cdot \mathbf{S}
\end{align*}
$$

#
---
#state/tidy | #lang/en | #SemBr
