# REFACTORING JS

This is a JS implementation of the example code in the book "Refactoring" by Martin Fowler.

Check the commits for the refactoring steps!

## Extract Method

The `generateStatement()` method is too long. Smaller pieces of code are more manageable, easier to work with and move around.

**What to extract?** An obvious piece here is the switch statement.

**How to extract?** Look for any variable in the fragment that is local in scope to the parent method. This segment uses two: `rental` (not modified) and `totalAmount` (modified). Any non modified variable can be passed in as a parameter. Modified variables need more care. If there is only one, it can be returned. `totalAmount` is initialised to 0 each time around the loop and is not altered until the switch gets to it, so it's possible to just assign the result.

## Move Method

The `getAmount()` method uses information from the `Rental` class only. In most cases, a method should be on the object whose data it uses, thus it should be moved to that class.

## Replacing the Conditional Logic on Price Code with Polymorphism

The first part of the problem is the switch statement. It's a bad idea to do a switch based on attribute of another object. If you must use a switch, it should be on your own data, not on someone else's.

In moving the `getCharge()` method to the `Movie` class, you must pass in the `daysRented` parameter, which is data from the `Rental` class. This method effectively uses two pieces of data, the length of the rental and the type of the movie. Why passing the length of the rental to the movie rather than the movie type to the rental? It's because the proposed changes are all about adding new types. Type information generally tends to be more volatile. If I change the movie type, I want the least ripple effect, so it's preferred to calculate the charge within the movie.
 