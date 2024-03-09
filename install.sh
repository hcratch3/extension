#!/bin/bash
mkdir -p src/lib/libraries/extensions/extensionLoader
cp extension.hcratch3.github.io/main/extensionLoader.png src/lib/libraries/extensions/extensionLoader/
cp extension.hcratch3.github.io/main/extensionLoader-small.svg src/lib/libraries/extensions/extensionLoader/
cp extension.hcratch3.github.io/main/index.jsx src/lib/libraries/extensions/extensionLoader
mv src/lib/libraries/extensions/index.jsx src/lib/libraries/extensions/index.jsx_orig
cp extension.hcratch3.github.io/index.jsx src/lib/libraries/extensions/index.jsx
