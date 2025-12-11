---
tags:
  - public
---
[[Central extension of an abelian group]]
# Cyclic central extension of a free abelian group

Let $A = \mathbb{Z}^S$ be a [[Free module|free abelian group]] of finite [[Rank of a module|rank]] $n$.
Then there is a bijection between the set of [[Alternating multilinear map|alternating]] $\mathbb{Z}$-[[Multilinear map|bilinear maps]]
$$
\begin{align*}
c_{0} : A \times A \to \mathbb{Z}_{p}^+
\end{align*}
$$
and equivalence classes of [[Central extension of an abelian group|central extensions]]
$$
\begin{align*}
1 \to \mathbb{Z}_{p}^+ \stackrel{\exp}{\hookrightarrow} \hat{A} \stackrel{\pi}{\twoheadrightarrow} A \to 1
\end{align*}
$$
given by taking $c_{0}$ as the [[Central extension of an abelian group|associated commutator map]], and using the [[Central group extension#Correspondence between 2-cocycles and central extensions]].[^1988] #m/thm/group

  [^1988]: 1988\. [[Sources/@frenkelVertexOperatorAlgebras1988|Vertex operator algebras and the Monster]], ¶5.2.3, pp. 106–107

> [!check]- Proof
> That equivalent central extensions determine the same commutator map follows from [[Central extension of an abelian group#^P3]] and [[Central group extension#Correspondence between 2-cocycles and central extensions]].
> 
> Now let
> $$
> \begin{align*}
> c_{0}: A \times A \to \mathbb{Z}_{p}^+
> \end{align*}
> $$
> be an alternating $\mathbb{Z}$-bilinear map and let $S = \{ a_{i} \}_{i=1}^n$.
> Let
> $$
> \begin{align*}
> \varepsilon_{0} : A \times A &\to \mathbb{Z}_{p}^+ \\
> (\alpha_{i},\alpha_{j}) &\mapsto \begin{cases}
> c_{0}(\alpha_{i},\alpha_{j}) & i > j  \\
> 0 & i \leq j
> \end{cases}
> \end{align*}
> $$
> Then $\varepsilon_{0}$ is $\mathbb{Z}$-bilinear and thus a 2-cocycle,
> amd $\varepsilon_{0}(a,b) - \varepsilon_{0}(b,a) = c_{0}(a,b)$.
> By the [[Central group extension#Correspondence between 2-cocycles and central extensions]], there is a central extension of the form above with 2-cocycle $\varepsilon_{0}$ and thus commutator map $c_{0}$.
> 
> Finally let
> $$
> \begin{align*}
> 1 \to \mathbb{Z}_{p}^+ \hookrightarrow B \stackrel{\pi'}\twoheadrightarrow A \to 1
> \end{align*}
> $$
> be a central extension with the same commutator map $c_{0}$.
> Define a $\Set$-section $s_{(-)}$ of $\pi'$ so that
> $$
> \begin{align*}
> s_{(-)} : \sum_{k=1}^n m_{k}a_{k} = \prod_{k=1}^n s_{a_{k}}^{m_{k}}
> \end{align*}
> $$
> Then
> $$
> \begin{align*}
> s_{a}s_{b} = s_{a+b} \mathrm{e}^{\varepsilon_{0}(a,b)}
> \end{align*}
> $$
> for any $a,b \in A$,
> so by the [[Central group extension#Correspondence between 2-cocycles and central extensions]] these extensions are equivalent. <span class="QED"/>
> 

## Automorphisms

Letting $\pi x = \overline{x}$ and
$$
\begin{align*}
\Aut(\hat{A}; \mathrm{e}) &= \{ \varphi \in \Aut \hat{A} : \varphi \exp = \exp \} \\
\Aut(A; c_{0}) &= \{ \psi \in \Aut A : c_{0}(\psi, \psi) = c_{0} \}
\end{align*}
$$
we have the [[group extension]][^1988b]
$$
\begin{align*}
1 \to \Ab(A, \mathbb{Z}_{p}^+) \stackrel{*}{\hookrightarrow} \Aut(\hat{A}; \mathrm{e}) \stackrel{\pi}{\twoheadrightarrow} \Aut(A; c_{0}) \to 1
\end{align*}
$$
where for $\lambda \in \Ab(A, \mathbb{Z}_{p}^+) \cong (\mathbb{Z}_{p}^+)^n$, #m/thm/group
$$
\begin{align*}
\lambda^* : \hat{A} &\to \hat{A} \\
x &\mapsto x \mathrm{e}^{\lambda \bar{x}}
\end{align*}
$$

> [!check]- Proof
> Note $\lambda^*$ is a [[group homomorphism]] for any $\lambda \in \Ab(A, \mathbb{Z}_{p}^+)$ since
> $$
> \begin{align*}
> \lambda^* (xy) = x \mathrm{e}^{\lambda \overline{x}} y\mathrm{e}^{\lambda \overline{y}} = xy\mathrm{e}^{\lambda \overline{x} + \lambda \overline{y}} = xy \mathrm{e}^{\lambda \overline{xy}} = (\lambda^* x)(\lambda^* y)
> \end{align*}
> $$
> and that $*$ is itself a group homomorphism since for $\lambda,\mu \in \Ab(A, \mathbb{Z}_{p}^+)$
> $$
> \begin{align*}
> (\lambda + \mu)^*x = x \mathrm{e}^{\lambda \overline{x}+ \mu \overline{x}} = \lambda^*(x \mathrm{e}^{\mu \overline{x}}) = \lambda^* \mu^* x
> \end{align*}
> $$
> Furthermore, the induced automorphism $\overline{\lambda^*} = \id_{A}$ for any $\lambda \in \Ab(A, \mathbb{Z}_{p}^+)$.
> 
> Now let $\varphi \in \Aut(\hat{A}; \mathrm{e})$ be an automorphism such that $\overline{\varphi} = \id_{A}$.
> It follows that $\varphi x = x \mathrm{e}^{f(x)}$ for some function $f : \hat{A} \to \mathbb{Z}_{p}^+$.
> Noting that
> $$
> \begin{align*}
> x \mathrm{e}^{f(x)} = \varphi x = \varphi(x\mathrm{e}^s) = x\mathrm{e}^{f(x \mathrm{e}^s)}
> \end{align*}
> $$
> it follows that $f(x) = \lambda \overline{x}$ for some function $\lambda : A \to \mathbb{Z}_{p}^+$,
> and since
> $$
> \begin{align*}
> xy \mathrm{e}^{\lambda \overline{xy}} &= \varphi(xy) 
> = (\varphi x)(\varphi y) = x\mathrm{e}^{\lambda \overline{x}}y \mathrm{e}^{\lambda \overline{y}} \\
> &= xy \mathrm{e}^{\lambda \overline{x} + \lambda \overline{y}}
> \end{align*}
> $$
> it follows $\lambda \in \Ab(A, \mathbb{Z}_{p}^+)$.
> 
> Now consider a general $\varphi \in \Aut(\hat{A}; \mathrm{e})$.
> Then
> $$
> \begin{align*}
> c_{0}(\bar{\varphi}\bar{x}, \bar{\varphi}\bar{y}) = \ln[\varphi x,\varphi y] = \ln\varphi[x,y] = \ln[x,y] = c_{0}(\overline{x},\overline{y})
> \end{align*}
> $$
> for all $x,y \in \hat{A}$, so $\overline{\varphi} \in \Aut(A; c_{0})$.
> Conversely, given $\psi  \in \Aut(A;c_{0})$ we consider the central extension
> $$
> \begin{align*}
> 1 \to \mathbb{Z}_{p}^+ &\hookrightarrow \hat{A} \stackrel{\psi\pi}{\twoheadrightarrow} A \to 1
> \end{align*}
> $$
> which has the commutator map $c_{0}$, and thus from the above correspondence,
> this extension is equivalent to the original one, giving an automorphism in $\Aut(\hat{A};\mathrm{e})$. <span class="QED"/>

Furthermore, any automorphism $\vartheta \in \Aut(\hat{A};\mathrm{e})$ such that $\overline{\vartheta}=-1$ is itself an involution.
  
  [^1988b]: 1988\. [[Sources/@frenkelVertexOperatorAlgebras1988|Vertex operator algebras and the Monster]], ¶5.4.1, p. 112

## Special cases

- [[2 central extension of a free abelian group]]

#
---
#state/tidy | #lang/en | #SemBr
