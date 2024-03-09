#!/bin/bash
mkdir -p src/lib/libraries/extensions/extensionLoader
cp extension.hcratch3.github.io/main/extensionLoader_entry.png src/lib/libraries/extensions/extensionLoader/
cp extension.hcratch3.github.io/main/extensionLoader_inset.png src/lib/libraries/extensions/extensionLoader/
mv src/lib/libraries/extensions/index.jsx src/lib/libraries/extensions/index.jsx_orig
cp extension.hcratch3.github.io/index.jsx src/lib/libraries/extensions/index.jsx
