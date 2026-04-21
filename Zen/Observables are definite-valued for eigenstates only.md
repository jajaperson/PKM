---
tags:
  - public
---
[[Quantum mechanics MOC]]
# Observables are definite-valued for eigenstates only

Let $\hat{Q}$ be a [[Hermitian operator]] corresponding to an [[Observable]] $Q$,
and consider a system with normalized state $\ket{\psi}$.
Then the outcome of measuring $Q$ is definitely $q$ iff $\hat{Q} \ket{\psi}= q\ket{\psi}$.

> [!check]- Proof
> $Q$ is definitely $q$ iff $\langle Q \rangle=q$ and 
> $$
> \begin{align*}
> 0 =\sigma^2_{Q} &= \langle (\hat{Q} - \langle \hat{Q} \rangle \mathbf{I})^2 \rangle \\
> &= \bra{\psi}  (\hat{Q}-q\mathbf{I})^2 \ket{\psi} \\
> &= \bra{\psi}  (\hat{Q}-q \mathbf{I})^{\dagger} (\hat{Q}-q\mathbf{I}) \ket{\psi}
> \end{align*}
> $$
> which holds iff $(\hat{Q} - q\mathbf{I}) \ket{\psi} = 0$, i.e. $\ket{\psi}$ is an eigenstate with eigenvalue $q$,
> which necessitates $\langle \hat{Q} \rangle= q \braket{ \psi | \psi } = q$
> <span class="QED"/>

#
---
#state/tidy #lang/en | #SemBr
