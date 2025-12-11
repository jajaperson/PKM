---
tags:
  - public
---
[[Algebraic number theory MOC]]
# Minkowski embedding

Let $K$ be a [[number field]] with [[Signature of a number field|signature]] $(r_{1},r_{2})$ with real embeddings $\{ \sigma_{i} \}_{i=1}^{r_{1}}$ and representative unreal embeddings $\{ \tau_{i} \}_{i=1}^{r_{2}}$.
The **Minkowski embedding** #m/def/num/alg 
$$
\begin{align*}
\iota : K \hookrightarrow\mathbb{R}^{r_{1}} \times \mathbb{R}^{2r_{2}} \cong \mathbb{R}^n
\end{align*}
$$
is determined by $(\sigma_{m}, \dots, \sigma_{r_{1}}, \tau_{1}, \dots, \tau_{r_{2}})$
where we identify $\mathbb{C}^{r_{2}} \cong \mathbb{R}^{2r_{2}}$.

## Fundamental property

Let $\mathcal{O}_{K}$ be the [[Algebraic integer|ring of integers]]. Then $\iota(\mathcal{O}_{K})$ is a [[Lattice subgroup#Classical lattice]] of rank $n$, moreover it has [[Covolume of a classical lattice|covolume]] #m/thm/num/alg 
$$
\begin{align*}
\opn{covol} \iota(\mathcal{O}_{K}) =  2^{-r_{2}} \sqrt{ \abs{\Delta_{K:\mathbb{Q}}} }
\end{align*}
$$
where $\Delta_{K:\mathbb{Q}}$ is the [[Discriminant of a number field|discriminant]].[^2022]

> [!check]- Proof
> Suppose $\{ \alpha_{i} \}_{i=1}^n \subset \mathcal{O}_{K}$ is an [[Bases for a number field#Integral basis]] for $K$.
> It suffices to show that $\{ \iota(\alpha_{i}) \}_{i=1}^n$ form a basis for $\mathbb{R}^n$.
> To this end, let
> $$
> \begin{align*}
> A_{1} = \begin{bmatrix}
> \sigma_{1}(\alpha_{1})  & \cdots  & \sigma_{1}(\alpha_{n}) \\
> \vdots & \ddots  & \vdots \\
> \sigma_{r_{1}}(\alpha_{1}) & \cdots & \sigma_{r_{1}}(\alpha_{n}) \\
> \Re \tau_{1}(\alpha_{1}) & \cdots & \Re \tau_{1}(\alpha_{n}) \\
> \Im \tau_{1}(\alpha_{1}) & \dots & \Im \tau_{1}(\alpha_{n}) \\
> \vdots & \ddots  & \vdots \\
> \Re \tau_{r_{2}}(\alpha_{1}) & \cdots & \Re \tau_{r_{2}}(\alpha_{n}) \\
> \Im \tau_{r_{2}}(\alpha_{1})  & \cdots  & \Im \tau_{r_{2}}(\alpha_{n})
> \end{bmatrix} \in \opn M_{n,n}(\mathbb{C})
> \end{align*}
> $$
> be the matrix containing all these embeddings of the $\alpha_{i}$.
> We now apply the following [[Elementary row operation|elementary row operations]]:
> 
> 1. Add $i \Im \tau_{j}(\alpha_{k})$ to $\Re \tau_{j}(\alpha_{k})$ giving
> $$
> \begin{align*}
> A_{2} = \begin{bmatrix}
> \sigma_{1}(\alpha_{1})  & \cdots  & \sigma_{1}(\alpha_{n}) \\
> \vdots & \ddots  & \vdots \\
> \sigma_{r_{1}}(\alpha_{1}) & \cdots & \sigma_{r_{1}}(\alpha_{n}) \\
> \tau_{1}(\alpha_{1}) & \cdots & \tau_{1}(\alpha_{n}) \\
> \Im \tau_{1}(\alpha_{1}) & \dots & \Im \tau_{1}(\alpha_{n}) \\
> \vdots & \ddots  & \vdots \\
> \tau_{r_{2}}(\alpha_{1}) & \cdots & \tau_{r_{2}}(\alpha_{n}) \\
> \Im \tau_{r_{2}}(\alpha_{1})  & \cdots  & \Im \tau_{r_{2}}(\alpha_{n})
> \end{bmatrix}.
> \end{align*}
> $$
> 2. Multiply $\Im \tau_{j}(\alpha_{k})$ by $-2i$ giving
> $$
> \begin{align*}
> A_{3} = \begin{bmatrix}
> \sigma_{1}(\alpha_{1})  & \cdots  & \sigma_{1}(\alpha_{n}) \\
> \vdots & \ddots  & \vdots \\
> \sigma_{r_{1}}(\alpha_{1}) & \cdots & \sigma_{r_{1}}(\alpha_{n}) \\
> \tau_{1}(\alpha_{1}) & \cdots & \tau_{1}(\alpha_{n}) \\
> -2i \Im \tau_{1}(\alpha_{1}) & \dots & -2i \Im \tau_{1}(\alpha_{n}) \\
> \vdots & \ddots  & \vdots \\
> \tau_{r_{2}}(\alpha_{1}) & \cdots & \tau_{r_{2}}(\alpha_{n}) \\
> -2i \Im \tau_{r_{2}}(\alpha_{1})  & \cdots  & -2i \Im \tau_{r_{2}}(\alpha_{n})
> \end{bmatrix}.
> \end{align*}
> $$
> 3. Add $\tau_{j}(\alpha_{k})$ to $-2i \Im \tau_{j}(\alpha_{k})$ giving
> $$
> \begin{align*}
> A_{4} = \begin{bmatrix}
> \sigma_{1}(\alpha_{1})  & \cdots  & \sigma_{1}(\alpha_{n}) \\
> \vdots & \ddots  & \vdots \\
> \sigma_{r_{1}}(\alpha_{1}) & \cdots & \sigma_{r_{1}}(\alpha_{n}) \\
> \tau_{1}(\alpha_{1}) & \cdots & \tau_{1}(\alpha_{n}) \\
> \overline{\tau_{1}}(\alpha_{1}) & \cdots & \overline{\tau_{1}}(\alpha_{n}) \\
> \vdots & \ddots  & \vdots \\
> \tau_{r_{2}}(\alpha_{1}) & \cdots & \tau_{r_{2}}(\alpha_{n}) \\
> \overline{\tau_{r_{2}}}(\alpha_{1}) & \cdots & \overline{\tau_{r_{2}}}(\alpha_{n}) 
> \end{bmatrix}.
> \end{align*}
> $$
> 
> We see now that $A_{4}= T(\alpha_{1},\dots ,\alpha_{n})$ as defined in [[Discriminant of a separable extension]],
> and thus
> $$
> \begin{align*}
> \opn{covol} \iota(\mathcal{O_{K}}) = \abs{\det A_{1}} = 2^{-r_{2}} \abs{ \det T(\alpha_{1},\dots ,\alpha_{n}) }=  2^{-r_{2}} \sqrt{ \abs{\Delta_{K:\mathbb{Q}}} } \neq 0
> \end{align*}
> $$
> as required. <span class="QED"/>

  [^2022]: 2022\. [[Sources/@bakerAlgebraicNumberTheory2022|Algebraic number theory course notes]], ¶3.1, p. 58

## Norm

This generalizes by [[Covolume of a classical lattice#^P1]] for an ideal $\mathfrak{a} \trianglelefteq \mathcal{O}_{K}$ so that
$$
\begin{align*}
\opn{covol} \iota(\mathcal{O}_{K}) =  2^{-r_{2}} \sqrt{ \abs{\Delta_{K:\mathbb{Q}}} } \opn N(\mathfrak{a})
\end{align*}
$$
whence we define the norm on $\mathbb{R}^{r_{1}} \times \mathbb{R}^{2r_{2}}$ by
$$
\begin{align*}
\opn N(a_{1},\dots,a_{r_{1}},x_{1},y_{1},\dots,x_{r_{2}},y_{r_{2}}) = a_{1} \cdots a_{r_{1}} (x_{1}^2 + y_{1}^2) \cdots (x_{r_{2}}^2+y_{r_{2}}^2)
\end{align*}
$$
so that
$$
\begin{align*}
\opn N(\iota(\alpha)) = \opn N_{K:\mathbb{Q}}(\alpha).
\end{align*}
$$

## Properties

- [[Minkowski's bound]]

#
---
#state/tidy | #lang/en | #SemBr
