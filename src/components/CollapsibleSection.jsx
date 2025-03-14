import { useState, Children, cloneElement } from 'react'
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/solid'

const CollapsibleSection = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  // Ensure children is always an array
  const childArray = Children.toArray(children)
  if (childArray.length === 0) return null

  // The first child will always be visible
  const triggerElement = childArray[0]

  // Wrap the trigger element in a clickable div
  const trigger = cloneElement(triggerElement, {
    onClick: () => setIsOpen(!isOpen),
    className: `${
      triggerElement.props.className || ''
    } cursor-pointer inline-flex items-center gap-2`,
    children: (
      <>
        {isOpen ? (
          <ChevronDownIcon className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
        ) : (
          <ChevronRightIcon className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
        )}
        {triggerElement.props.children}
      </>
    ),
  })

  return (
    <>
      {trigger}
      <div className={isOpen ? 'block' : 'hidden'}>{childArray.slice(1)}</div>
    </>
  )
}

export default CollapsibleSection
