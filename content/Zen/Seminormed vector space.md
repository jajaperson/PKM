---
alias: seminorm
tags:
  - public
---
[[Analysis MOC]]
# Seminormed vector space

A **seminormed vector space** $(V, \mathbb{K}, \|\cdot\|)$ is a [[Vector space]] over a [[Subfield]] $\mathbb{K}$ of $\mathbb{C}$ equipped with a **seminorm** $\|\cdot\| : V \to \mathbb{R}$,
a weakening of a [[Normed vector space|norm]] satisfying the following conditions for any $x,y \in V$ and $\alpha \in \mathbb{K}$ #m/def/anal/vec

1. **Absolute homogeneity:** $\|\alpha x\| = |\alpha|\|x\|$ ^S1
2. **Triangle inequality:** $\|x + y\| \leq \|x \| + \|y\|$ ^S2

whence follows

3. **Nonnegativity:** $\|x\| \geq 0$ ^S3

By strengthening [[#^S3|nonnegativity]] to [[Normed vector space#^N3|positive-definiteness]] the seminorm becomes a full [[Normed vector space|norm]].

## Properties

1. [[A seminorm induces a normed quotient]]

#
---
#state/tidy | #lang/en | #SemBr
