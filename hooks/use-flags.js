import FLAGS from '../constants/flags'
import useWindowSize from '../hooks/use-window-size'
import { useState } from 'react'
import get from 'lodash/get'

const FLAG_COUNT = get(FLAGS, 'length', 0)

const useFlags = () => {
  const [flagIndex, setFlagIndex] = useState(0)
  const { height } = useWindowSize()

  const getNextFlag = () => {
    const nextIndex = flagIndex + 1
    if (nextIndex < FLAG_COUNT) {
      setFlagIndex(nextIndex)
    } else {
      setFlagIndex(0)
    }
  }

  const currentFlag = FLAGS[flagIndex]
  const previousFlag = flagIndex === 0 ? FLAGS[FLAG_COUNT - 1] : FLAGS[flagIndex - 1]

  return {
    currentFlag,
    getNextFlag,
    height,
    previousFlag
  }
}

export default useFlags
