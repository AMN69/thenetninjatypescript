// AMN - Important: ts creates automatically on the same folder .js files when
// compiles. To avoid having duplicated files names on the same folder 
// we can on the terminal execute tsc --init and it creates the tsconfig.json
// file that you can see in the folders structure.
// Then on this tsconfig.json file you can use two lines to separete the 
// files. For example here we have the js files on /public and the ts files on 
// /src. The two lines are (check it in the tsconfig.json):
// "outDir": "./public",                        
// "rootDir": "./src",  

// Another important thing to avoid any ts file outside the /src folder being 
// created in the /public folder is using the following property in the 
// json:
//"include": ["src"]
// this is saying the tsc (typescript compiler) to only duplicate as .js 
// files that are under the /src folder.

console.log('testing');

