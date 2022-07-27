# FAQ

<details>
  <summary>Does this architecture scales?</summary>

Yes, absolutely!

As long as you're adding a homogeneous line of apps like `PCA SkinHealth`(`/apps/pca-skin`) or `EltaMD`(`/apps/elta-md`) you'd be good. Being a mono-repo and having well-defined module boundaries lets you add more `apps/*` easily in the future with less work. It also helps you enforce the dependency constraints like using the same frameworks and their versions(like React, TailwindCSS, etc.) all across.
</details>

<details>
  <summary>Is this a Micro-frontend(runtime integration)?</summary>

No. It's a mono-repo-based frontend with similar goals and a better degree of control of the eventual experience. The code's included at the compile time instead of runtime.
</details>

<details>
  <summary>Why not a Micro-frontend(runtime integration)?</summary>

 The current application features and architectural demands don't need a micro-frontend but maximum code re-usability across various apps we're developing/managing. Requesting re-usable code while running an application, introduces a host of architectural, development, and deployment concerns that extend beyond the scope of MVP and the apps we're presently building for, and anticipate to be added later in the repository. It's one of the requirements that the final app will have just one build/output where everything is pre-packaged, and branded as per the designs.
</details>

<details>
  <summary>What if we still want a Micro-frontend or run-time integration?</summary>

  - It could require re-architecting/re-wiring and partial re-engineering of the development done so far
  - There would be the obvious scope and timeline impact and factors like team skillset, development velocity, maintenance overhead, etc. may require a re-consideration

    But before we dive into how we should answer the why's.
    - What's the ROI, we anticipate achieving?
    - Is all of the development/maintenance overhead justifiable and worth it?
    - Is everything important today?
    - Do we have the skillset and bandwidth to meet current/MVP objectives as well as the anticipated work?
    - If the anticipated work is bound to happen very soon what do we know about it today, that can help us make more appropriate/mindful decisions
    - What are we willing to own, develop and keep maintaining in the future? just PCA Skin, Elta MD, any similar app that'll come to us in the future through the right channels or concerns of the other apps too that might not share a lot of things with us except a few things here and there, and for the things they share we(PCA Skin or EltaMD) want to act as a service for their components wherever it's hosted
    Homogeneity is the key to whatever we've built so far and we cannot make very informed choices in anticipation, or control the things happening outside what we can directly manage unless we're building very generic solutions.


    ### Thoughts on Run-time integration
    Simple stuff like `Button`, and `Input` fields are so essential they're not exported for runtime consumption. It's only some of the compound components that may be needed to be shared, but that too begs a question like -  If `OrderTable` is useful for apps like `pca-skin`, `elta-md` only, what benefit are we looking forward to getting by enabling it for run-time sharing? `OrderTable` is just a wrapper around something like [react-table](https://www.npmjs.com/package/react-table), and contains logic that's common(not unique) to `pca-skin` and `elta-md`. Apps like `pca-skin` and `elta-md` just own the configuration for columns + data and tell they need it.

    If an independent brand-x(not managed by us in our repo) needs it(currently out of scope) and considering it does serve a purpose, that brand might need to give us a minimum guarantee that it has every foundational library with the same version for things to work flawlessly (which could be a lock-in for the target app). Runtime integration imposes certain constraints that make it a tedious process for the target apps to always be inline, and the source apps to always be mindful of the use cases. For example, if we take the currently essential libraries - brand-x will be required to have precisely the same React, React-DOM, and TailwindCSS libraries available with it in the environment where our compound components are used. It may present an additional burden on an App that'd like to move freely and decide its course. For the amount of sight and care, it requires from source to target, getting inspiration from the source, and copying code feels simple. Plus, we need to see if we can impose such constraints on the consumer?

    For the same-repo apps(app managed by us in this repo), these constraints are validated at the compile time and can be guaranteed at run-time too.
    Components made available for run-time use don't compile their libraries, and the host app is supposed to provide the environment for them to run. Without this guarantee, issues could be reported to the code maintained by us.

 If we say "yes" to all of the above requirements, and want run-time share-ability of code for apps beyond our control
  - We'll require the real app scenarios/use cases, designs and UI needs as a requirement (as we're considering the scope from other apps)._It would be difficult to correctly determine, and satisfy a use case not precisely imitating what's already done for the current apps managed in this repo. For example, If a table can have additional columns, and controls, a target app would be required that can demonstrate its working/expectations. The problem/responsibility scope of the controls may also increase with a `pca-skin`, `elta-md` control compiling stuff that it might not need._
  - Pt. 1 will let us assess if the components we're developing can serve all the use cases and make necessary changes that can serve our current apps(`pca-skin`, `elta-md`) as well as `app-x`. _Currently, What an app like `pca-skin` or `elta-md` needs(button, heading, etc) is already adapted and themed for it(at development/build time). If their code is shared, the shared code might eventually look like either `pca-skin` or `elta-md`. White-labelled controls follow convention for styling which are useful only when the apps are built like `pca-skin` or `elta-md` and part of the same build process(see [what-we've-built](./what-weve-built.md))._
  - The component development(theming, branding, styling) will require a bit of re-architecting to bring in more libraries and solutions to create more self-contained components. _Currently, we're using TailwindCSS, and a framework like `TailwindCSS` allows us to omit styles/CSS that's not needed. In the same repo both the library/package and application code is scanned, and only what's used is left behind in the final CSS for `pca-skin` or `elta-md`. An application outside our code, that will use our control will have to download either the `pca-skin` or the `elta-md` CSS in their entirety for the UI to appear correctly._
</details>
