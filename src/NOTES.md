# Notes

❌ ✅

## Setup 1: Tutorial TypeScript

1. Terminal: `npm init -y`
2. Terminal: `npm i --save-dev typescript`
3. Terminal: `npx tsc --init`
4. Create Folders: **src** and **public** folder
5. Create Script: `"start": "tsc --watch"` in **package.json**
6. Terminal: `npm start`
7. Search: `outDir` in **tsconfig.json**
8. Change `outDir` value from `"./"` to `"./public"`
9. Delete **name.js** from **src** folder _(**new** destination of the **.js** files)_
10. Insert `<script src="public/name.js" defer></script>` in **index.html**


First setup from the tutorial _"is great for some really basic TypeScript setups where you just need to write some simple TypeScript to convert it to JavaScript and use it in your application."_

_"But oftentimes you're also going to be having a more complex application where you're downloading libraries from **node modules** for example, and this setup does not work if you try to install libraries inside your **node modules** folder."_


## Setup 2: Tutorial TypeScript 

_Take into account that the **form** element:   
`const form = document.getElementById("#new-task-form") as HTMLFormElement | null`   
could be **null**, and the easiest way to do that is by adding a question mark at the end of `input (this is called optional chaining):`_

```
form?.addEventListener("submit", e => {
    e.preventDefault()
    
  ❌ if (input.value == "" || input.value == null) return
  ✅ if (input?.value == "" || input?.value == null) return

})
```

**tsconfig.json**
> Change value of "module": from ~~"commonjs"~~ to **"es6"**

Comment out `"isolatedModules": true` in **tsconfig.json**