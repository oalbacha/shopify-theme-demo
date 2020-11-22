import themeKit from '@shopify/themekit'
import yargs from 'yargs'

const {env = development, allowLive = true} = yargs(process.argv).argv

await themekit.command(deploy, {env, allowLive})