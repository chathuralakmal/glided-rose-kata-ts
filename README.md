# Gilded Rose

This is the Gilded Rose kata in TypeScript.

## Changes Made

- **Modularization:**
  - `AgedBrieItem`: Represents the "Aged Brie" item category.
  - `BackstageItem`: Represents the "Backstage passes to a TAFKAL80ETC concert" item category.
  - `ConjuredItem`: Represents the "Conjured Mana Cake" item category.

  Each of these classes extends the base `Item` class, inheriting common attributes like `name`, `sellIn`, and `quality`. The modularization allows for a clearer separation of concerns, making it easier to manage and extend the codebase.

- **Unit Testing:**
  - Comprehensive Jest unit tests for each item category.
  - Tests cover basic functionality, edge cases for quality and sellIn values, and scenario-specific behavior for each item category.

  The use of mock classes (e.g., `MockAgedBrieItem`) facilitates controlled testing environments, allowing for the simulation of specific behaviors without relying on the actual implementations.


## Getting started

Install dependencies

```sh
npm install
```

## Run the unit tests from the Command-Line

```sh
npm run test:jest
```


## Run the TextTest fixture from the Command-Line

_You may need to install `ts-node`_

```sh
npx ts-node test/golden-master-text-test.ts
```

Or with number of days as args:
```sh
npx ts-node test/golden-master-text-test.ts 10
```

You should make sure the command shown above works when you execute it in a terminal before trying to use TextTest (see below).


## Run the TextTest approval test that comes with this project

There are instructions in the [TextTest Readme](../texttests/README.md) for setting up TextTest. You will need to specify the Python executable and interpreter in [config.gr](../texttests/config.gr). Uncomment these lines:

    executable:${TEXTTEST_HOME}/python/texttest_fixture.py
    interpreter:python


