## Orch

Deployed to netlify:

- [App](https://gracious-knuth-ddcb37.netlify.com/)
- [Storybook](https://suspicious-cori-cccefc.netlify.com/?path=/story/assets--icons)

#### general

- SPA react app, bootstraped with CRA.
- Routing handled with `@reach/router`
- Styling done with `styled-components` and `styled-system`
- Theme file contains most of the style definitions
- Components accept props for styling

#### state

- State is managed by a reducer and context. It contains the games, cart items and wishlist items.
- I normalise the data for easy key lookups through out the app.
- This could be split up going forward for architecture and performance reasons, but it's not an issue for an app of this size.

#### docs and tests

- Documentation is done with storybook
- I hit the time limit so I didn't add tests, what I would do is:
  - cypress end-to-end test for critical paths, in this case,
    add an item to the cart and the go to the cart.
  - jest with react-testing-library for component level assertions
  - visual snapshots like, chromatic or percy, for the ui-components
