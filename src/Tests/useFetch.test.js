import { renderHook, act } from '@testing-library/react'
import useFetch from '../hooks/useFetch'


describe('useFetch hook', () => {
  const data = { results: [{ nombre: 'marianito' }] }
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(data),
      ok: true
    })
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
  test('deberia devolver datos', async () => {
    let hook
    await act(async () => {
      const url = 'test.com'
      hook = renderHook(() => useFetch(url))


    })
    const { result } = hook
    expect(result.current.data).toEqual(data.results)
  })

  test('deberia setear error si el res no es ok', async() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(data),
      ok: false
    })
    let hook
      await act(async () => {
      const url = 'test.com'
      hook = renderHook(() => useFetch(url))
    })
    const { result } = hook
    expect(result.current.error).toBeTruthy()


  })



})