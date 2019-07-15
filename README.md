# JS Shared Data

This package provides a front-end solution for the `coderello/laravel-shared-data` package.

## Install

```bash
yarn add js-shared-data
```

## Usage

Let's imagine that we shared such data from the backend using `coderello/laravel-shared-data`:

```php
share([
    'user' => [
        'full_name' => 'Ilya Sakovich',
        'username' => 'hivokas',
        'email' => 'me@hivokas.com',
    ],
    'balance' => 120,
]);
```

On the front-end side we can access this data using `shared()` helper.

```js
import { shared } from 'js-shared-data';

// retrieve the user object
const user = shared('user');

// retrieve the username from the user object
const username = shared('user.username');

// retrieve the balance
const balance = shared('balance');

// specify the default value which will be used if value for specified path doesn't exist
const status = shared('status', 'Working...');
```

## Customization

```js
import { sharedData } from 'js-shared-data';

// specify the default value globally
sharedData.setDefaultValue(null);

// specify the namespace which contains an object with all shared data
sharedData.setNamespace('App');

// specify the source
sharedData.setSource(window);
```