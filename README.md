# REFACTORING JS

This is a JS implementation of the example code in the book "Refactoring" by Martin Fowler.

Check the commits for the refactoring steps!

## Extract Method

The `generateStatement()` method is too long. Smaller pieces of code are more manageable, easier to work with and move around.

**What to extract?** An obvious piece here is the switch statement.

**How to extract?** Look for any variable in the fragment that is local in scope to the parent method. This segment uses two: `rental` (not modified) and `totalAmount` (modified). Any non modified variable can be passed in as a parameter. Modified variables need more care. If there is only one, it can be returned. `totalAmount` is initialised to 0 each time around the loop and is not altered until the switch gets to it, so it's possible to just assign the result.
