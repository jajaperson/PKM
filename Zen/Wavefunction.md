---
alias: Born's rule
tags:
  - public
---
[[Quantum mechanics MOC]]
# Wavefunction

In [[Quantum mechanics MOC|quantum mechanics]], a **wavefunction** $\Psi : D \to \mathbb{C} : (x,t) \to \Psi(x,t)$ is a description of the quantum mechanical state of an isolated quantum system.
Here $D$ is the space of all **degrees of freedom**.
The wavefunction must satisfy [[Schrödinger equation]],
which given an initial condition describes the evolution of the wavefunction over time.

A wavefunction is said to be **normalized** iff $\int _{D} \Psi(x,t)^*  \Psi(x,t) \, dx = 1$ for all $t$.
Since the [[Quantum time evolution operator]] is unitary, this automatically holds for all $t$.
According to **Born's statistical interpretation**, for a normalized wavefunction $\Psi(x,t)^*\Psi(x,t)$ gives a [[probability density function|probability density]] of observing the system in state $D$.[^2018]
All scalar multiples of a normalized wavefunction represent the same physical state,
and non-normalizable wavefunctions must be rejected as nonphysical.[^vec]

[^2018]: 2018\. [[Sources/@griffithsIntroductionQuantumMechanics2018|Introduction to Quantum Mechanics]], §1.2, p. 17
[^vec]: It begs the question, why consider non-normalized wavefunctions at all? 
  The answer is that this is required to make the space of wavefunctions into a [[Hilbert space|vector (Hilbert) space]], 
  which brings the machinery of linear algebra into the game.

## Basis

- [[Wavefunction in position-space]]

#
---
#state/develop | #lang/en | #SemBr


