# vxo@hand mashup with Angular

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build. If you plan to host your project not in the root directory of your domain, you need to use the `--base-href <FOLDER>` flag. For example, you host this project under www.mydomain.com/mashup/ you need to run the following command: `ng build --base-href /mashup/` 

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## PHP files
For two components (career and compare), PHP files are necessary. Those PHP files need to be accessible, that means you need to host them seperatly. You find the PHP files in the folder `/src/php`. Currently they are hosted under `http://celtest1.lnu.se/mashup/php/` and this url is included in the code. If you want to host your own php files (e.g. for local development or to make changes at the php files), you need to change the url in the following files:
```
/src/app/compare/compare.service.ts
/src/app/career/career.service.ts
```


