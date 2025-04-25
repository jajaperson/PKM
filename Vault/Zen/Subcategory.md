---
aliases:
  - full subcategory
  - wide subcategory
tags:
  - public
---
[[Category theory MOC]]
# Subcategory

A **subcategory** $\cat D$ of a [[category]] $\cat C$ is a category containing subclasses of objects and morphisms in $\cat C$, i.e. for any $X,Y \in \cat D$ also $X, Y \in \cat C$ and $\cat D(X,Y) \sube \cat C(X,Y)$. #m/def/cat 
It comes with the natural inclusion $1 : \cat D \to \cat C$ which is clearly a [[Faithful functor]].
A **full subcategory** $\cat D$ is a subcategory of $\cat C$ for which the inclusion functor is [[Fully faithful functor|fully faithful]], #m/def/cat
i.e. $\cat D(X,Y) = \cat C(X,Y)$ for all $X,Y \in \cat D(X,Y)$.
A **wide subcategory** $\cat D$ is a subcategory of $\cat C$ containing all objects of $\cat C$.

## Examples

- $\Ab$ is a full subcategory of $\Grp$

#
---
#state/tidy | #lang/en | #SemBr
