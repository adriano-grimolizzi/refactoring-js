# Extract Method

You have a code fragment that can be grouped together.

*turn the fragment into a method whose name explains its purpose*

## Motivation

This is one of the most common refactorings.
When a piece of code:
- is too long
- needs a comment to understand its purpose

...you turn that fragment of code into its own method.

Small methods only work when their name is meaningful. Length is not an issue, the key is the semantic distance between the method's name and its body. You should extract if it improves clarity, even if the name is longer than the code you have extracted.

## Mechanics

- Create a new method, and name it after the intention of the method (**what** it does, rather than **how**).
    - *If the code you want to extract is very simple, such as a single message or function call, you should extract it if the name of the new method will reveal the intention of the code in a better way. If you can't come up with a more meaningful name, don't extract the code.*
- Copy the extracted code from the source method into the new target method.
- Scan the extracted code for references to any variables that are local in scope to the source method. These are local variables and parameters to the method.
