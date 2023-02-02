import { useState, useEffect, useRef, useContext } from "react"
import { motion, useAnimation } from "framer-motion"
import { NavbarContext } from "contexts"
import { Logo } from "./Logo"
import { More, Portfolio, Summary } from "./Dropdowns/DropdownSection"
import NavPageName from "./NavPageName"
import { NavItems as nav } from "contents/NavItems"
import { MiniNavItem } from "./MiniNavItem"

export default function Navbar() {
  const [expand, setExpand] = useState(true)
  const { scrolled, pageName } = useContext(NavbarContext)
  const NavbarValues = { expand, isExpanded: setExpand, pageName }

  const dropdownRef = useRef<HTMLDivElement>(null)

  const [height, setHeight] = useState(0)

  useEffect(() => {
    dropdownRef.current!.style.height = `${height ?? 0}px`

    const scrolledDefault = !scrolled ? 0 : 80
    const currentHeight = dropdownRef.current?.scrollHeight ?? scrolledDefault

    const handleHeight = () => {
      !expand ? setHeight(currentHeight) : setHeight(scrolledDefault)
    }

    handleHeight()

    const closeKeyboard = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (!expand) {
          setExpand(true)
        }
      }
    }

    window.addEventListener("resize", handleHeight)
    document.addEventListener("keydown", closeKeyboard)

    return () => {
      window.removeEventListener("resize", handleHeight)
      document.removeEventListener("keydown", closeKeyboard)
    }
  }, [expand, height, scrolled])

  const btnHandle = !expand ? "menu-btn-open" : "menu-btn-close"
  const dropdownHandle = !expand ? "" : " pointer-events-none"

  const nameShowInitial = { opacity: 0, top: -10 }
  const nameShowOpen = { opacity: 1, top: 0 }

  const miniNavInitial = { opacity: 1, x: -6 }
  const miniNavHide = { opacity: 0, x: 0 }

  const nameShow = () => {
    if (!expand) return nameShowOpen
    if (!scrolled) return nameShowInitial
    return nameShowOpen
  }

  const miniNav = () => {
    if (!expand) return miniNavHide
    return miniNavInitial
  }

  return (
    <div className="w-full fixed top-0 px-9 py-1 transition-colors duration-300 !z-[10]">
      <div className="mx-auto max-w-screen-2xl px-0 pt-2 flex justify-between items-center">
        <NavbarContext.Provider value={NavbarValues}>
          <div>
            <Logo />
            <motion.span
              initial={nameShowInitial}
              animate={nameShow()}
              transition={{ duration: 0.25 }}
              className={`relative z-[100] ${
                !scrolled ? "pointer-events-none" : "pointer-events-auto"
              }`}
            >
              <NavPageName />
            </motion.span>
          </div>
          <div className="flex items-center gap-x-1 relative z-3">
            <motion.div
              className={`hidden md:flex items-center gap-x-1 select-none ${
                !expand ? "pointer-events-none" : "pointer-events-auto"
              }`}
              initial={miniNavInitial}
              animate={miniNav()}
              transition={{ duration: 0.25 }}
            >
              {nav.summary.map((items, i) => (
                <MiniNavItem
                  key={i}
                  icon={items.icon}
                  name={items.name}
                  link={items.link}
                />
              ))}
            </motion.div>
            <button
              onClick={() => setExpand(!expand)}
              aria-label="Open/close menu"
              className={`${btnHandle} relative px-2 py-3 h-[3.5rem] w-[3.75rem] rounded-md z-3`}
            ></button>
          </div>

          <div
            ref={dropdownRef}
            id="menu-container"
            className={`overflow-hidden absolute z-[auto] top-0 left-0 right-0 px-9 bg-neutral-900 duration-[320ms]${dropdownHandle}`}
            style={{ height: "0px" }}
          >
            <div className="max-w-screen-2xl mx-auto px-0 pt-1 flex items-center">
              <Logo white />
            </div>
            <nav
              id="menu-contents"
              className="transition-transform duration-[350ms] mt-2 overflow-hidden mx-auto max-w-screen-2xl grid grid-flow-col"
              style={{ gridTemplateColumns: "25% 1fr 1fr" }}
            >
              <Summary />
              <Portfolio />
              <More />
            </nav>
          </div>
        </NavbarContext.Provider>
      </div>
    </div>
  )
}