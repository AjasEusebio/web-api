import test from 'node:test'
import assert from 'node:assert'
import { DEFAULT_HEADER } from '../../../src/util/util.js'
import {
  routes
} from './../../../src/routes/heroRoute.js'

const callTracker = new assert.CallTracker()
process.on('exit', () => callTracker.verify())
 
test('Hero routes - endpoints test suite', async (t) => {
  await t.todo('it should call /heroes:get route', async () => {
    const databaseMock = [{
      "id":"a28809cc-b930-4b77-ba2e-41d760d9c92a",
      "name":"Batman",
      "age":50,
      "power":"rich"
    }] 

    const heroServiceStub = {
      find: async () => databaseMock
    }

    const endpoints = routes({
      heroService: heroServiceStub
    })

    const endpoint = 'heroes:get'
    const request = {}
    const response = {
      write: callTracker.calls(item => {
        const expected = JSON.stringify({
          results: databaseMock
        })
        assert.strictEqual(
          item,
          expected,
          'Write should be called with the correct payload'
        )
      }),
      end: callTracker.calls(item => {
        assert.strictEqual(
          item,
          undefined,
          'end should be called without params'
        )
      })
    }

    const route = endpoints[endpoint]
    await route(request, response)
  })
  await t.todo('it should call /heroes:post route')
}) 

