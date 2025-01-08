---
tags:
  - public
---
[[Types of linear operator]]
# Hermitian operator

A **Hermitian operatior** $\hat{Q}$ on a [[Hilbert space]] $V$ is a [[Linear endomorphism|linear operator]] satisfying #m/def/linalg 
$$
\begin{align*}
\braket{ v | \hat{Q} w } = \braket{ \hat{Q}v | w } 
\end{align*}
$$
for all $v,w \in V$, i.e. $\hat{Q}^{\dagger} = \hat{Q}$.[^self]

[^self]: A self-adjoint operator has the additional property that the domain of $\hat{Q}$ and $\hat{Q}^{\dagger}$ are the same.
2018\. [[Sources/@griffithsIntroductionQuantumMechanics2018|Introduction to quantum mechanics]], problem 3.48, p. 130

## Properties

1. The [[matrix exponential]] of $i$ times a Hermitian operator is a [[Unitary operator]] ^P1
2. A Hermitian operator has only real eigenvalues^[A more general statement holds for the [[Spectrum]], not proved here.]^P2
3. Eigenvectors of different eigenvalues are orthogonal. ^P3

> [!check]- Proof of 1–3
> From [[Matrix exponential#^P4]] and [[Matrix exponential#^P3]] it follows
> $$
> \begin{align*}
> (e^{i\hat{H}})^{\dagger} e^{i\hat{H}} &= e^{-i\hat{H}}e^{i\hat{H}} = e^{\mathbf{O}} = \mathbf{I}
> \end{align*}
> $$
> proving [[#^P1]] 
> 
> Let $v$ be an eigenvector of Hermitian $\hat{Q}$ with eigenvalue $\lambda$,
> Then
> $$
> \begin{align*}
> \lambda = \frac{\braket{ v | \hat{Q}v } }{\braket{ v | v } } = \frac{\braket{ \hat{Q}v | v } }{\braket{ v | v } } = \lambda^*
> \end{align*}
> $$
> hence $\lambda$ is real, proving property [[#^P2]]
> 
> Let $\hat{Q}v = \lambda v$ and $\hat{Q}u = \mu u$ with $\lambda \neq \mu$.
> Then
> $$
> \begin{align*}
> \lambda \braket{ u | v } = \braket{ u | \hat{Q}v } = \braket{ \hat{Q}u | v } = \mu^* \braket{ u | v } = \mu \braket{ u | v } 
> \end{align*}
> $$
> where we invoked [[#^P2]] for the last equality;
> hence $(\lambda - \mu) \braket{ u|v  } = 0$ and since $\lambda \neq\mu$ it follows $\braket{ u|v }=0$,
> thus proving property [[#^P3]]
> <span class="QED"/>

### Continuous spectrum

Without proof, eigenvectors of continuous spectrum have the following properties

1. They are non-normalizable (‘generalized eigenfunctions’ — related to formal definition of spectrum?)
2. They are [[Dirac orthonormality|Dirac orthonormal]]

#
---
#state/tidy | #lang/en | #SemBr
