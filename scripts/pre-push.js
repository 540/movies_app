const spawn = require('cross-spawn')
const colors = require('colors')

;(async function () {
  /**
   * Check git staged files that are not commited.
   * This is important because tests may be passing locally and
   * failing when running in CI.
   */
  const gitResult = await exec('git diff HEAD --quiet')
  if (gitResult !== 0) {
    console.log(
      colors.bold.red('You must not have any uncommitted files prior to push.'),
    )
    process.exit(1)
  }

  /**
   * Run unit tests
   */
  process.env.TZ = 'UTC'
  const unitTestResult = await exec(
    'yarn jest -c jest.config.unit.js --bail --maxWorkers=40%',
  )
  if (unitTestResult !== 0) {
    process.exit(1)
  }

  /**
   * Run integration tests
   */
  const integrationTestResult = await exec(
    'yarn jest -c jest.config.integration.js --bail --maxWorkers=40%',
  )
  if (integrationTestResult !== 0) {
    process.exit(1)
  }

  /**
   * Run dependencies analyzer
   */
  const dependenciesAnalyzerResult = await exec('yarn knip')
  if (dependenciesAnalyzerResult !== 0) {
    console.log('\n⚠️ TE HAS DEJADO ALGO (revisa los logs de "knip") ⚠️\n')
  }
})()
function exec(cmd) {
  const cmdParts = cmd.split(' ')
  const cmdCommand = cmdParts[0]
  const cmdArguments = cmdParts.splice(1)

  return new Promise(resolve => {
    const process = spawn(cmdCommand, cmdArguments, {
      stdio: 'inherit',
    })
    process.on('close', function (code) {
      resolve(code)
    })
  })
}

process.on('unhandledRejection', error => {
  console.log(error)
  process.exit(1)
})
