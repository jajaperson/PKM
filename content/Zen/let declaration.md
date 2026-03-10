---
tags:
  - public
---
[[Type theory MOC]]
# `let` declaration

In formal type theory and the design of functional programming languages,
`let` declarations are a syntactic augmentation for _internally_ expressing a substitution in-term.
Specifically, the instance of the substitution rule
$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma \fCenter a : A$
\Axiom$\Gamma, x : A \fCenter b : B$
\RL{(S)}
\BinaryInf$\Gamma \fCenter b[a / x] : B[a / x]$
\end{prooftree}
$$
is superseded by
$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma \fCenter a : A$
\Axiom$\Gamma, x : A, \Delta \fCenter b : B$
\RL{(let)}
\BinaryInf$\Gamma \fCenter \text{let $x \leftarrow a$ in $b$}: B[a / x]$
\end{prooftree}
$$
In the former, both the in-term and in-type substitution occur at the level of the metatheory, whereas in the latter the in-term substitution occurs in the theory itself. 
Note this is different to the [[Π type]] which internalizes substitition in terms _as a type_, although $\Pi$ types can be used to achieve similar things.
To ensure metatheoretic substitution still agrees with substitution via a `let` declaration, we impose the judgemental equality
$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma \fCenter a : A$
\Axiom$\Gamma, x : A, \Delta \fCenter b : B$
\RL{(let$\beta$)}
\BinaryInf$\Gamma \fCenter \text{let $x \leftarrow a$ in $b$} = b[a / x] : B[a / x]$
\end{prooftree}
$$

Beyond syntactic nicety, `let` declarations can be used to formulate induction rules for a [[positive type]] independently from a [[Π type]], see e.g. [[Σ type]].

#
---
#state/tidy | #lang/en | #SemBr
