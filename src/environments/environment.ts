// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

export const apiUrl = "https://localhost:44349";
export const apiAccount = {
  authenticate: "https://localhost:44349/api/account/authenticate/",
}

export const apiPost = {
  tags: "https://localhost:44349/api/post/tags/",
  createPost: "https://localhost:44349/api/post/create/",
  posts: "https://localhost:44349/api/post/posts/"
}



/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
