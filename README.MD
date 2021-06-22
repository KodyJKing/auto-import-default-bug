To reproduce: 
- yarn/npm install
- Open in VSCode
- Make sure to use the workspace version of typescript for your language server.
- Go to Baz.ts, and auto-import Foo, then try to auto-import Bar.

To verify last working version:
- Switch the typescript version in package.json to 4.2.4.
- Repeat the previous steps.
