import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from '../store'

import useIntersectionObserver from './useIntersectionObserver'

const useAppDispatch: () => AppDispatch = useDispatch 
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


export {
  useIntersectionObserver,
  useAppDispatch,
  useAppSelector
}

