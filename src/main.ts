import * as core from '@actions/core'
import * as github from '@actions/github'

// import {wait} from './wait'

async function run(): Promise<void> {
  try {
    const robotsTxt: string = core.getInput('robots-txt')
    const filePath: string = core.getInput('file-path')

    // debug is only output if you set the secret `ACTIONS_STEP_DEBUG` to true
    core.info(`"🤖 robots-txt:"\n${robotsTxt}\n\n`)
    core.info(`"📂 file-path:"\n${filePath}\n\n`)

    const payload = JSON.stringify(github.context.payload, undefined, 2)
    core.info(`📦 github.context.payload: ${payload}`)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
