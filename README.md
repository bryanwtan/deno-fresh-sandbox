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
    - this is a very contrived example where all of the wrapping functions pass through the parameters unchanged.
    - any given `withBackgroundColor` could be replaced with something like `connect(mapStateToProps, mapDispatchToProps)`
    - wrapping functions can be used to expose a different interface shape above or below. (you would communicate that by accepting the parameters at a given wrapper and passing the props you desire onward).