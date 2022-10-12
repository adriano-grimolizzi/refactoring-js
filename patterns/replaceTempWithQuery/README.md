# Replace Temp with Query

You are using a temporary variable to hold the result of an expression.

*Extract the expression into a method. Replace all references to the temp with the expression. The new method can then be used in other methods.*

## Motivation

The problem with temps is that they are temporary and local. Because thay can be seen only in the context of the method in which they are used, they tend to encurage longer methods. By replacing the temp with a query method, any method in the class can get the information.

## Mechanics

- Look for a temporary variable that is assigned to only once.
    - *If a temp is set more than once consider **Split Temporary Variable**.*
- Declare the temp as immutable (const).
    - *This will ensure that the the temp is only assigned to once.*
- Extract the right-hand side of the assignment into a method.
    - *Don't export the method. You may find more use for it later, but you can easily relax the protection later.*
    - *Ensure that the extracted method is free of side effects, that is, it doesn't modify any object. Otherwise use **Separate Query from Modifier**.*
- Use **Replace Temp with Query** on the temp.
