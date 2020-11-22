import themeKit from '@shopify/themekit';
import yargs from 'yargs';

const { env = development, allowLive = false } = yargs(process.argv).argv;

await themekit.command(deploy, { env, allowLive });
await themekit.command(watch, { env, allowLive });