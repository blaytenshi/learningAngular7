import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// This is the very first base file that is run when we
// initially load the index.html. Think of this as the base index.js
// file that calls RenderDOM in React.
// The bootstrapModule function is passed AppModule.
// AppModule is what is being exported from app.module.ts
// This is how we're able to see the stuff in AppModule
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
