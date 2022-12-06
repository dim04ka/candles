import { Transition } from 'react-transition-group';
import { useIntersectionObserver } from '../hooks'

import React, { useRef } from 'react';


interface AnimateProps {
  classNames: string,
  timeout: number,
  children: any
}

const Animate = ({ classNames, timeout, children }: AnimateProps) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, {})
  const isVisible = !!entry?.isIntersecting

  return (
    <div>
      <Transition in={isVisible} timeout={timeout}>
        {state => (
          <div className={`${classNames} ${state}`} ref={ref}>
            {children}
          </div>
        )}
      </Transition>

    </div>
  )
}

export default React.memo(Animate)