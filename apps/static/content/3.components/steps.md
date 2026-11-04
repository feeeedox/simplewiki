---
title: Steps
description: Display sequential instructions using the SimpleWiki steps component.
navigation:
  title: Steps
  order: 10
---

# Steps

The `steps` component displays a sequence of instructions or actions in a numbered format.

It is useful for tutorials, installation guides, setup instructions, and other step-by-step processes.

---

## Basic Usage

```md
::steps

:::div{title="Install dependencies"}

Run the required installation command.

:::

:::div{title="Configure the project"}

Update the configuration files with your settings.

:::

:::div{title="Start the application"}

Launch the application and verify everything works.

:::

::
```

Result:

::steps

:::div{title="Install dependencies"}

Run the required installation command.

:::

:::div{title="Configure the project"}

Update the configuration files with your settings.

:::

:::div{title="Start the application"}

Launch the application and verify everything works.

:::

::

---

## Custom Titles

Each step can have its own title using the `title` property.

```md
::steps

:::div{title="Create an account"}

Register a new account before continuing.

:::

:::div{title="Verify your email"}

Click the verification link sent to your inbox.

:::

::
```

Result:

::steps

:::div{title="Create an account"}

Register a new account before continuing.

:::

:::div{title="Verify your email"}

Click the verification link sent to your inbox.

:::

::

---

## Without a Title

If no title is provided, the component automatically generates a default title.

```md
::steps

:::

This step uses the default title.

:::

::
```

Result:

::steps

:::div

This step uses the default title.

:::

::

---

## Markdown Support

Steps support Markdown formatting and other SimpleWiki components.

````md
::steps
    :::div{title="Install the package"}

    Run:

    ```bash
    npm install example-package
    ```

    :::

    :::div{title="Enable the feature"}

    ::info-box{type="tip"}
    Make sure the feature is enabled in your configuration.
    ::

    :::
::
````

Result:

::steps
    :::div{title="Install the package"}

    Run:

    ```bash
    npm install example-package
    ```

    :::

    :::div{title="Enable the feature"}

    ::info-box{type="tip"}
    Make sure the feature is enabled in your configuration.
    ::

    :::
::
