---
tags:
  - public
---
[[Russel-Saunders term symbol]]
# Finding Russel-Saunders levels

Given an electron configuration for two electrons, one can find the possible [[Russel-Saunders term symbol|Russel-Saunders levels]] using the following algorithm

1. Enumerate product states $\ket{m_{\ell},m_{s}}\ket{m_{\ell}',m_{s}}'$ which exhaust all possible nonzero states upon antisymmetrization, i.e. all states consistent with the [[Pauli exclusion principle]].
2. Sort the product states by $M_{S}$ and $M_{L}$ in a table. There should be symmetry. Diagonal cells have the same $M_{J}=M_{L}+M_{S}$.
3. Create an $M_{J}$-abundance table and derive thence a $J$-abundance table. Also write a $(M_{L},M_{S})$-abundance table.
4. Repeat the following until no states remain: Subtract off rectangular regions of the $(M_{L},M_{S})$-abundance table corresponding to some $L,S$ pair and enumerate the levels (i.e. for each $J = L \oplus S$). Update the $J$-abundance table. 

Consider a $2p^2$ configuration.
The product states (to be antisymmetrized) are

> [!tip]- Example
> $$
> \begin{matrix}
> \ket{1,+} \ket{1,-}  & \ket{1,+} \ket{0,+} & \ket{1,+}\ket{0,-}  & \ket{1,+} \ket{-1,+}  & \ket{1,+} \ket{-1,-}  \\
>  & \ket{1,-} \ket{0,+} & \ket{1,-} \ket{0,-}  & \ket{1,-}\ket{-1,+}  & \ket{1,-} \ket{-1,-}  \\
>  &  & \ket{0,+} \ket{0,-}  & \ket{0,+} \ket{-1,+}  & \ket{0,+} \ket{-1,-}  \\
>  &  &  & \ket{-1,+} \ket{-1,+}  & \ket{-1,+} \ket{-1,-}  \\
>  &  &  &  & \ket{-1,-} \ket{-1,-} 
> \end{matrix}
> $$
> 
> giving
> 
> | $(M_{L},M_{S})$ | 1   | 0   | -1  |
> | --------------- | --- | --- | --- |
> | 2               |     | 1   |     |
> | 1               | 1   | 2   | 1   |
> | 0               | 1   | 3   | 1   |
> | -1              | 1   | 2   | 1   |
> | -2              |     | 1   |     |
> 
> and 
> 
> | $M_{J}$ | 2   | 1   | 0   | -1  | 2   |
> | ------- | --- | --- | --- | --- | --- |
> | $\#$    | 2   | 3   | 5   | 3   | 2    |
> 
> hence
> 
> | $J$  | 2   | 1   | 0   |
> | ---- | --- | --- | --- |
> | $\#$ | 2   | 1   | 2    |
> 
> Remove the $L=2,S=0$ level $^1\mathrm{D}_{2}$:
> 
> 
> | $(M_{L},M_{S})$ | 1   | 0   | -1  |
> | --------------- | --- | --- | --- |
> | 2               |     |     |     |
> | 1               | 1   | 1   | 1   |
> | 0               | 1   | 2   | 1   |
> | -1              | 1   | 1   | 1   |
> | -2              |     |     |     |
> 
> | $J$  | 2   | 1   | 0   |
> | ---- | --- | --- | --- |
> | $\#$ | 1   | 1   | 2   |
> 
> Remove the $L=S=1$ levels $^3\mathrm{P}_{2,1,0}$
> 
> 
> | $(M_{L},M_{S})$ | 1   | 0   | -1  |
> | --------------- | --- | --- | --- |
> | 2               |     |     |     |
> | 1               |     |     |     |
> | 0               |     | 2   |     |
> | -1              |     |     |     |
> | -2              |     |     |     |
> 
> | $J$  | 2   | 1   | 0   |
> | ---- | --- | --- | --- |
> | $\#$ | 0   | 0   | 1   |
> 
> Leaving only the $L=S=0$ level $^1\mathrm{S}_{0}$.
> To summarize:
> 
> | $L$ | $S$ | Levels                 | № states |
> | --- | --- | ---------------------- | -------- |
> | 2   | 0   | $^1\mathrm{D}_{2}$     | 5        |
> | 1   | 1   | $^3\mathrm{P}_{2,1,0}$ | 5,3,1    |
> | 0   | 1   | $^1\mathrm{S}_{0}$     | 1        |
>   


#
---
#state/tidy | #lang/en | #SemBr
