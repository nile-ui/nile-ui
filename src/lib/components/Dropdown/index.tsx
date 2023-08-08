"client only";
import classNames from 'classnames'
import React, { useState } from 'react'

export default function Dropdown() {
    const [open, setOpen] = useState(false)
  return (
    <div
            className={classNames("dropdown", {
                'open': open
            })}
          >
            <div>
                <button
                onClick={() => setOpen(!open)}
                className="btn primary no-float has-caret"
                >
                Default Dropdown
                </button>
            </div>
            <div className="dropdown-content">
              <div className="dropdown-menu">
                <h5 className="dropdown-title">Simple title</h5>
                <div className="dropdown-item">Item 1</div>
                <div className="dropdown-item">Item 2</div>
              </div>
            </div>
          </div>
  )
}
