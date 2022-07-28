# fresh project

### Usage

Install Deno:


https://deno.land/manual/getting_started/installation


Start the project:

```
deno task start
```

This will watch the project directory and restart as necessary.

Interesting files

-[main page](routes/index.tsx)

-[baseline counter](islands/Counter.tsx)

-[example higher order component](utils/withBackgroundColor.tsx)

-[example composition of many higher order components](islands/SuperCounter.ts)
1. contrived example where wrapping functions pass through the parameters unchanged.
2. any `withBackgroundColor` can be replaced with something like `connect(mapStateToProps, mapDispatchToProps)`
3. functions can expose/guard interface shapes above or below. (by accepting params at a given wrapper and passing desired props onward).