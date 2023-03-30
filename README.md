# RefactoringBook001---First-Example
First example of refactoring from the Martin Fowler book Refactoring: Improving the Design of Existing Code. Each commit has a message with details of the step.

## Refactoring Steps in reversed order

bd5d8d5 Using *Replace Conditional With Polymorphism* delegate specific performance volumeCredits calculations to its repectives subclasses
a2e9f22 Using *Replace Conditional With Polymorphism* delegate specific performance amount calculations to its repectives subclasses
a26c1e7 Create performance calculator subclasses for tragedy and comedy play types
d8f6810 Using *Replace Constructor With Factory Function* create createPerformanceCalculator and call it inside enrichPerformance
9cf5723 Turn the volumeCreditsFor function into a delegating function so it call the new function to calculate the volumeCredits using an instance of the PerformanceCalculator class
a8c4f7d Turn the amountFor function into a delegating function so it call the new function to calculate the amount using an instance of the PerformanceCalculator class
897e4d0 Using *Move Function* to move amount calculatio to PerformanceCalculator
11904fa Using *Change Function Declaration* to pass the play to the PerformanceCalculator class
4bceee8 Creat a PerformanceCalculator class to host the conditional calculation functions
b2e7cfe Write a html version of statement
4ed7231 Use *Move Function* to move USD to top level for reuse in html render
71dd99f Move createStatementData function to his own file
537cd73 Inside createStatementData, change the createStatementData variable name to result for convention
cd237a5 Using *Extract Function* to separate the first phase with createStatementData
424387d Using *Replace Loop With Pipeline* inside totalAmount
7179937 Using *Replace Loop With Pipeline* inside totalVolumeCredits
5beca79 Using *Move Function* to move totalAmount from renderPlainText function to statement function
c74333d Using *Move Function* to move totalVolumeCredit from renderPlainText function to statement function
ea07dbc Using *Move Function* to move volumeCreditsFor from renderPlainText function to statement function
7fa9d5a Using *Move Function* to move amountFor from renderPlainText function to statement function
f49a75a Using *Move Function* to move playFor from renderPlainText function to statement function
5d9d656 Add performances to the statementData structure and make room for play, so I can remove the invoice parameter
2af3fc6 Add a intermediate data structure inside statement function to pass data to renderPlainText function
5522db9 Start the *Split Phase* using the *Extract Function* to create renderPlainText function
4b07855 Rename function temp name to totalAmount and totalAmount local variable to result
a5c0446 Using *Inline Variable* in totalAmount local variable
625cd9e Using *Extract Function* and *Replace Temp With Query* to remove totalAmount Calculation. Obs: The new function name is temporary just for ilustration.
85617bc Using *Slide Statements* in totalAmount declaration so it can be next to totalAmount acumulation
77589b2 Using *Split Loop* in totalAmount acumulation
8e0d057 Using *Inline Variable* for volumeCredits inside statement function
bcbd950 Using *Extract Function* and *Replace Temp With Query* to remove volumeCredits acumulation from statement function
aba188e Using *Slide Statement* to move the volumeCredits variable declaration next to the loop
94b79e0 Using *Split Loop* for removing volumeCredits
e70e1d1 Using *Change Function Declaraction* change format function name to usd and move the duplicated division by 100 into the function
28084b3 Change the function variable format to the function declaration format
466a9cd In the context of volumeCreditsFor function, rename the perf parameter to aPerformance
371fd16 Inside volumeCreditsFor function, rename volumeCredits to result
006b950 Using *Extract Function* replace volumeCredit calculation with volumeCreditFor function call
dc8c198 Using *Inline Variable* replace thisAmount for amountFor function
36f4736 Remove play parameter from amountFor function to satisfy *Change Function Declaration
10bbcfa Replace play variable inside amountFor function to playFor function so we can use the *Change Function Declaration*
46e2403 Use *Inline Variable* for play local variable
ff2787b In amountFor: - Change thisAmount to result, since it is the value to be returned - Change performance parameter to aPerformance, since we want to capture a specific role information (the a undefined article) - Use *Replace Temp with Query* on the play temporary variable in statement function
324d3a9 Extract switch statement to function amountFor
2736a53 Initial program to refator
