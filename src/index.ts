import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';

import { parse } from 'dotenv';

import { Plugin } from '@yarnpkg/core';

const plugin: Plugin = {
  hooks: {
    setupScriptEnvironment(project, scriptEnv) {
      if (scriptEnv.NODE_ENV !== 'production' || scriptEnv.READ_ENV_FILES === 'true') {
        try {
          const dotenvFiles = readdirSync(project.cwd).filter(file => /\.env.*/.test(file));
          Object.assign(scriptEnv, ...dotenvFiles.map(file => parse(readFileSync(path.join(project.cwd, file)))));
        } catch (err) {
          console.warn(err.message ? err.message : err);
        }
      }
    },
  },
};

export default plugin;
