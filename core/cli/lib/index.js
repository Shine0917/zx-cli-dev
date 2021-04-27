'use strict'

const pkg = require('../package.json')
const semver = require('semver')
const userHome =require('user-home')
const pathExists = require('path-exists').sync
const constant = require('./const')
module.exports = core

function core () {
  checkPkgVersion()
  checkRoot()
  checkNodeVersion()
  checkUserHome()
  console.log('exec core :>> ')
  // TODO
}

// 检查版本号
function checkPkgVersion() {
  require('npmlog').info('当前脚手架版本号是： ', pkg.version)
}

function checkNodeVersion() {
  const currentVersion = process.version
  const lowestVersion = constant.LOWER_NODE_VERSION
  if(!semver.gte(currentVersion, lowestVersion)) {
    throw new Error(colors.yellow(`zx-cli 需要安装${lowestVersion} 版本及以上的nodejs`))
  }
}
// 检查root 启动
function checkRoot() {
  const rootCheck = require('root-check')
  rootCheck()
}

// 检查用户主目录
function checkUserHome() {
  if(!userHome || !pathExists(userHome)) {
    throw new Error(colors.red(`当前用户主目录不存在~`))
  }
}

// 检查环境变量
function checkEnv() {
  const dotEnv = require('dotenv')

}

// 创建默认的环境变量配置
function createDefaultConfig() {
  // 创建一个cliConfig 对象
  const cliConfig = {
    home:userHome,
  }

  if(process.env.CLI_HOME) {
    cliConfig['cliHome'] = path.join(userHome,process.env.CLI_HOME)
  }else {
    cliConfig['cliHome'] =path.join(userHome,constant.DEFAULT_CLI_HOME)
  }
}

// 检查当前版本是否为最新版本
function checkGlobalUpdate() {
  const currentVersion = pkg.version

  const npmName = pkg.name
  // const {getNpmSemverVersion} = require(@zx-cli-dev/)
}