---
tags:
  - public
---
[[Tests for series divergence]]
# Limit comparison test
The **limit comparison test** takes the limit of the ratio between corresponding terms of two sequences
in order to compare the rates at which the sequences go to zero.
Given two infinite series $\sum_{n=1}^\infty a_{n}$ and $\sum_{n=1}^\infty b_{n}$
such that $a_{n} \geq 0$ and $b_{n} > 0$ for sufficiently large $n$,
we find the positive ratio
$$
\begin{align*}
c = \lim_{ n \to \infty } \frac{a_{n}}{b_{n}}
\end{align*}
$$
which gives us three cases:[^2023]

1. **$0 < c < \infty$** means $a_n \approx c \cdot b_n$ for large $n$,
   and therefore the series approach scalar multiples of each other.
   Therefore, they are either both convergent or both divergent.
  $$
  \begin{align*}
  \sum_{n=1}^\infty a_{n} \in \mathbb{R} \iff \sum_{n=1}^\infty b_{n} \in \mathbb{R}
  \end{align*}
  $$
2. **$c = 0$** means $b_n$ becomes much larger than $a_n$ in the long run,
   and therefore the series $\sum_{n=1}^\infty b_{n}$ is an upper bound on $\sum_{n=1}^\infty a_{n}$.
   Hence if $\sum_{n=1}^\infty b_{n}$ converges $\sum_{n=1}^\infty a_{n}$ converges.
  $$
  \begin{align*}
  \sum_{n=1}^\infty a_{n} \in \mathbb{R} &\impliedby \sum_{n=1}^\infty b_{n} \in \mathbb{R} \\
  \sum_{n=1}^\infty a_{n} \notin \mathbb{R} &\implies \sum_{n=1}^\infty b_{n} \notin \mathbb{R}
  \end{align*}
  $$
3. **$c = \infty$** means the opposite of the above case,
   and hence if $\sum_{n=1}^\infty a_{n}$ converges $\sum_{n=1}^\infty b_{n}$ converges.
  $$
  \begin{align*}
  \sum_{n=1}^\infty a_{n} \in \mathbb{R} &\implies \sum_{n=1}^\infty b_{n} \in \mathbb{R} \\
  \sum_{n=1}^\infty a_{n} \notin \mathbb{R} &\impliedby \sum_{n=1}^\infty b_{n} \notin \mathbb{R}
  \end{align*}
  $$

This is advantageous over the similar [[Comparison test]] in cases where two sequences approach scalings of each other as $n \to \infty$.

  [^2023]: 2023\. [[Sources/@bassomMATH1012MathematicalTheory2023|MATH1012: Mathematical theory and methods]], p. 126

#
---
#state/tidy | #SemBr | #lang/en
