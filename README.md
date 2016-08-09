# karmia-utility-random
Karmia utility random module

## Usage
```JavaScript
const karmia_utility_random = require('karmia-utility-random'),
    krandom = new karmia_utility_random();
```

### string(length, options)
- length ```<number>```
- options ```<Object>```

```JavaScript
// Includes all characters
utility.string.random(16);

// Excludes special characters
utility.string.random(16, {special: false});

// Excludes number
utility.string.random(16, {number: false});

// Exclude upper and special characters
utility.string.random(16, {upper: false, special: false});

// Exclude lower and special characters
utility.string.random(16, {lower: false, special: false});
```

### integer(max, min)
- max ```<number>``` Default: Number.MAX_SAFE_INTEGER
- min ```<number>``` Default: 0

```JavaScript
utility.random.integer(); // 0〜Number.MAX_SAFE_INTEGER
```
