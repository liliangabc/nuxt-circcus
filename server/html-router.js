import express from 'express'
import proxy from 'http-proxy-middleware'

import { IFRAMEURL } from './config'

const router = express.Router()

router.use('/**', proxy({
  target: IFRAMEURL,
  changeOrigin: true,
  pathRewrite: { '^/html': '' }
}))

export default router