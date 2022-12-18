# My Screen Recorder Url:

https://www.loom.com/share/ba3da4befbae48a8a3f164bdf5975ff6

## Brief

I used the React-window library for recycler methodology to display only a few items to the user. also used useCallBack and use debounce for search input.

## Extra questions

- What are some edge cases you would take care of before shipping this to production?

  1.  Think a lot about the variable and method names, complemete related, without abstraction
  2.  Extract a block of code to a function with meaningfull name
  3.  move a helper code to helper folder, a const to constants folder ...
  4.  define consts for everything that is const
  5.  Do not use export default, do not change state directly, use [...state]
  6.  use react.memo when ever component is only rerendering for parent rerendering
  7.  make sure change state only inside useEffect() or handlers
      and ...

- What changes would you make to your solution to make it mobile responsive?
  depends on css lib, give classname cl for xs, md, lg. or set mediaquery.
- What's important for you to work well in a fully remote team?
  1. Based on the API documents undrstanding of properties, validations
  2. It would be great to have fast response from backend developers for my api questions
  3. daily/weekly meeting to talk about the tasks and the plan for project and deadlines.
  4. good collaboration through online platforms

## Deliverables

- I Invite [@pieterbeulque](https://github.com/pieterbeulque) and [@umartayyab](https://github.com/umartayyab) to a GitHub repo with my completed project.

## Getting Started

The app is designed to work out of the box.

```shell
yarn install
yarn dev
```

The app should be available via [http://localhost:3000](http://localhost:3000).
