---
tags:
  - public
---
[[Geometry MOC]]
# Incidence relation

**Incidence** is a [[Relation set|relation]] between geometric subspaces (points, lines, planes, &c.),
generalizing the notion of a point being on a line, a line being in a plane, a plane containing a line, &c.
In each case the subspaces are said to be **incident** with one another.

## Incidence matrix

Given subspaces $(p_i)_{i=1}^n$ of one type and subspaces $(\ell_i)_{i=1}^m$ of another, 
the incidence relationship between these may be summarized by an $m \times n$ **incidence matrix** #m/def/geo 
$$
\begin{align*}
[\I] = \begin{bmatrix}
[\ell_{1} \I p_{1}] & \cdots & [\ell_{1} \I p_{n}] \\
\vdots & \ddots & \vdots \\
[\ell_{m} \I p_{1}] & \dots & [\ell_{m} \I p_{n}]
\end{bmatrix} \in \mathcal{M}_{m \times n}(\mathbb{K}_{2})
\end{align*}
$$
where we have invoked the [[Iverson bracket]].


#
---
#state/tidy | #lang/en | #SemBr
