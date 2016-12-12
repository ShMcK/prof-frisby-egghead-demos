const Task = require('data.task')
const { inc, identity } = require('ramda')

describe('12', () => {
  it('should succeed', () => {
    const result = Task.of(1)
      .fork(() => 'err', () => 'success')
    expect(result).toBe('success')
  })

  it('should fail', () => {
    const result = Task.rejected(1)
      .map(inc)
      .fork(() => 'err', () => 'success')
    expect(result).toBe('err')
  })

  it('should chain tasks', () => {
    const result = Task.of(1)
      .map(inc)
      .chain(x => Task.of(x + 1))
      .fork(() => 'err', identity)
  })

  const launchMissiles = () =>
    new Task((rej, res) => {
      console.log('launch missiles')
      res('missile')
    })

  it('should launch missiles', () => {
    const result = launchMissiles()
      .map(x => x + '!')
      .fork(console.log, console.log)

      // can not extract value, only log it
      // expect(result).toBe('missile!')
  })


})
