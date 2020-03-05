// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export function tokenGetter() {
  return localStorage.getItem("access_token");
}

export const environment = {
  production: false,
  apiRoot: 'http://10.129.149.33:1337/',
  jwtConfig: {
    tokenGetter: tokenGetter,
    whitelistedDomains: ["10.129.149.33"],
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
