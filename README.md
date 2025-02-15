# On the Beach Frontend Software Engineer Code Test

## Choice of Libraries

### Headless UI

Headless UI provides accessible, unstyled components out of the box, making it easy to adapt them to any design system. It includes commonly used components that are fully accessible, reducing the need to implement accessibility from scratch. Additionally, Headless UI supports transitions, making it simple to add animations. The library integrates seamlessly with Tailwind CSS, keeping the code clean and maintainable. I frequently use this library in my projects due to its flexibility and accessibility features.

### Tailwind CSS

Tailwind CSS allows for rapid development with utility-first classes, ensuring a clean and scalable styling approach. It helps maintain a consistent design while reducing the need for custom CSS files.

### `cn` (clsx + Tailwind Merge)

I used the `cn` utility to conditionally apply Tailwind classes efficiently. This makes it easier to dynamically update styles without cluttering the JSX.

## What I Could Have Achieved with More Time

- **End-to-end (E2E) tests** for full user flow coverage using cypress.
- **Transitions for Disclosure components** using Headless UI for smoother UI interactions.
- **Using an icon library** like React Icons instead of emojis for better consistency and scalability.
- **More unit tests and \*\***`data-testid`\***\* attributes** to improve test coverage.
- **Better loading and error states** to enhance the user experience. At the minute very basic error and loading states have been implemented.
- **Setup Storybook** to document and test UI components in isolation.
- **Optimizing for SSR (Server-Side Rendering)** by making the page a server component, only keeping the necessary parts as client components.

## What I Should Have Done Differently

- **Move the Data Fetching Logic to CardList.tsx** to better separate concerns. Initially, I kept sorting state and data fetching together for convenience, but a cleaner approach would be moving fetching logic to `CardList.tsx` and passing the `sortOption` as a prop.
- **Make the page a server component** (SSR), serving static assets like images on the server while keeping only interactive logic as a client component.

## Technical Difficulites

While implementing the solution, I encountered an issue where the API responded with a 403 Forbidden error. The response preview suggested the request was being blocked by a CAPTCHA or bot prevention mechanism. However, when making the same request server-side, it worked without issues.

To work around this, I proxied the request through a Next.js API route, allowing the server to fetch the data and return it to the client without triggering the CAPTCHA block.

---

_**Tip**: Read these instructions carefully! There's important details in here to help you produce a great test. If in doubt, trust whatever is written over how the example image looks._

You're expected to spend around an evening on this test, probably around 2-5 hours. Don't go overboard - when you've done enough work, stop and document in the Readme what else you would do if you had more time (though do look at the “**Things we’re looking for**” section below - this is a clue as to what we’re really interested in seeing - bonus points for explaining roughly how you’d achieve each point!)

You can use AI to help you with the test, but bear in mind we’ll be asking questions about your code at the interview stage so make sure you understand what it’s all doing.

If anything isn’t clear, please reach out to us with your questions. We’re happy to help.

**What we want to see**

Produce a HTML, CSS and JavaScript representation of the given `design.png` below with the following features:

- Sort the results by price (this should be the default)
- Sort the results by star rating and highlight when active
- Sort the results alphabetically by hotel name and highlight when active
- Ability to toggle expanded hotel description

![](design.png)

**How you’ll build it**

- You must consume the data from this file asynchronously https://static.onthebeach.co.uk/fe-code-test/data.json (you'll find the hotel images you need in there)
- You can find the background image here https://static.onthebeach.co.uk/fe-code-test/background.png
- We are looking for a client side solution, there should be no server logic involved. Imagine this will be a component added to a large website
- Feel free to use JavaScript libraries or frameworks
- You may use things like CSS Preprocessors and JavaScript build tools, but if you do please include the dependencies/source files
- Feel free to source your own icons - emojis are fine too! 🔤 💵 ⭐️ 🔽 🔼

Some colours, to save you hunting around for them

- Dark blue: `#17317F`
- Yellow: `#FEDC07`
- Grey: `#CCC`

**Things we’re looking for**

We’re not just looking for technical ability - we also want to gain an insight into your thought process.

- Some form of testing - we'd particularly like to see component testing using a tool such as [Testing Library](https://testing-library.com/) or a suitable alternative
- Small Git commits with clear messages
- Semantic HTML
- Modular and responsive CSS
- Error/warning free JavaScript
- Clean flow of state throughout the application
- We’d love to see comments in the code or the Readme explaining your thought process/where you might have struggled with this test (especially if you’re applying for a junior position)
