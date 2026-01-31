---
tags:
  - public
---
[[Linear equations MOC]]
# System of linear equations
A **system of linear equations** is a set of linear equations considered collectively, #m/def/linalg 
i.e. equations of the form
$$
\begin{align*}
a_0x_0 + a_1x_1 \dots + a_nx_n = b
\end{align*}
$$
where a solution to the system involves determining value(s) of each $x_n$
that satisfy every equation in the system.

- A special type of system of linear equations is the [[Homogenous system of linear equations]].
- It is also common to write such a system in the equivalent [[Matrix of a system of linear equations|matrix representation]].

## Number of solutions
Systems of linear equations may either have zero, one (unique), or infinite solutions.
Only systems with at least as many equations as unknowns
can have a single solution,
but such a system can also have zero or infinite solutions.

### Zero solutions
Zero solution systems can typically be interpreted geometrically with some notion of _parallelism_.

For example, a zero solution equation in a $2 \times 2$ system[^dim]
with zero solutions geometrically represents parallel lines
(since lines on the same plane which don't intersect are by definition parallel).

[^dim]: Henceforth any discussion of _dimension_ of a system corresponds to the dimension of the coefficient matrix in the system's [[Matrix of a system of linear equations|matrix representation]].

For a $3 \times 3$ system, there are a few more possibilities:
not only are there situations of three parallel planes:
it is also possible for the planes to intersect, just not all in one place.
This could either mean parallel planes or parallel lines of intersection.

![[linear equations with no solutions in 3D.png#invert]]

### One unique solution
One solution occurs when neither of the following occur

- No lines (2 variables) or planes (3 variables) are parallel.
- No lines/planes can be made orthogonal to each respective line/plane such that these orthogonal lines/planes are all parallel.

### Infinite solutions
Geometrically, infinite solutions will occur 
either if all three planes overlap entirely,
that is to say that all three planes are one and the same;
or if the three planes all intersect along a single line,
radiating outwards like spokes from an axis.


#
---
#state/tidy | #SemBr
