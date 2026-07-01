"use client"
import React, { useState, useRef, useEffect, useCallback } from 'react'

const NAVBAR_HEIGHT = 120

const ProductDetailsDesktop = ({ data }: { data: any }) => {

    const [open, setOpen] = useState<number | null>(null)
    const answerRefs = useRef<(HTMLDivElement | null)[]>([])
    const rightPanelRef = useRef<HTMLDivElement>(null)
    const sectionRef = useRef<HTMLElement>(null)
    const [panelHeight, setPanelHeight] = useState<number | null>(null)
    const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)
    const isAtBottomRef = useRef(false)
    const [isReadMore, setIsReadMore] = useState(false)
    const lastHeightRef = useRef<number>(0)
    if (!data) { return null }
    const { productImages, accordion, productDetails, ctaContact, cta, title, itemCode, price } = data

    /*
     * CONSTRAINT LOGIC — runs on scroll + on accordion toggle
     */
    const updatePanelHeight = useCallback(() => {
        const panel = rightPanelRef.current
        const section = sectionRef.current
        if (!panel || !section) return

        const sectionRect = section.getBoundingClientRect()
        const panelRect = panel.getBoundingClientRect()

        // Check if we're at the bottom of the section
        const sectionBottom = sectionRect.bottom
        const viewportBottom = window.innerHeight
        const isAtSectionBottom = sectionBottom <= viewportBottom + 100

        if (isAtSectionBottom !== isAtBottomRef.current) {
            isAtBottomRef.current = isAtSectionBottom
        }

        // If at bottom, use fit-content
        if (isAtSectionBottom) {
            if (panel.style.maxHeight !== 'fit-content') {
                panel.style.maxHeight = 'fit-content'
                panel.style.overflowY = 'visible'
                setPanelHeight(null)
            }
            return
        }

        // Calculate available height
        const spaceToSectionBottom = sectionRect.bottom - panelRect.top
        const viewportAvailable = window.innerHeight - NAVBAR_HEIGHT
        let availableHeight = Math.min(viewportAvailable, spaceToSectionBottom)
        const minHeight = 300
        const finalHeight = Math.max(availableHeight, minHeight)

        // Only update if height changed significantly
        if (Math.abs(lastHeightRef.current - finalHeight) > 3) {
            panel.style.maxHeight = `${finalHeight}px`
            panel.style.overflowY = 'auto'
            lastHeightRef.current = finalHeight
            setPanelHeight(finalHeight)
        }
    }, [])

    // Debounced scroll handler with smooth updates
    const handleScroll = useCallback(() => {
        if (scrollTimeoutRef.current) {
            cancelAnimationFrame(scrollTimeoutRef.current as unknown as number)
        }

        scrollTimeoutRef.current = requestAnimationFrame(() => {
            updatePanelHeight()
        }) as unknown as NodeJS.Timeout
    }, [updatePanelHeight])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })
        window.addEventListener('resize', handleScroll, { passive: true })
        handleScroll()

        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', handleScroll)
            if (scrollTimeoutRef.current) {
                cancelAnimationFrame(scrollTimeoutRef.current as unknown as number)
            }
        }
    }, [handleScroll])

    useEffect(() => {
        const t = setTimeout(() => {
            updatePanelHeight()
            // If accordion is open, ensure content is visible
            if (open !== null && answerRefs.current[open] && !isAtBottomRef.current) {
                const answerEl = answerRefs.current[open]
                if (answerEl) {
                    const panel = rightPanelRef.current
                    if (panel) {
                        const answerRect = answerEl.getBoundingClientRect()
                        const panelRect = panel.getBoundingClientRect()
                        // If answer is cut off, adjust scroll smoothly
                        if (answerRect.bottom > panelRect.bottom) {
                            const scrollAmount = answerRect.bottom - panelRect.bottom + 20
                            panel.scrollTop += scrollAmount
                        }
                    }
                }
            }
        }, 350)
        return () => clearTimeout(t)
    }, [open, updatePanelHeight])

    return (
        <section ref={sectionRef} className="w-full hidden lg:flex flex-row items-start mb-[50px]">

            {/* LEFT — image stack */}
            <ul className="w-[50%] flex flex-col">
                {productImages.map((item:any) => (
                    <li key={item.id} className="w-full h-[670px] overflow-hidden">
                        <img
                            src={item.img}
                            alt={`${title} – view ${item.id}`}
                            className="w-full h-full object-cover object-center"
                        />
                    </li>
                ))}
            </ul>

            {/* RIGHT — sticky panel */}
            <div
                ref={rightPanelRef}
                className="w-[50%] self-start"
                style={{
                    position: 'sticky',
                    top: `${NAVBAR_HEIGHT}px`,
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none' as any,
                    maxHeight: panelHeight !== null ? `${panelHeight}px` : 'fit-content',
                    overflowY: panelHeight !== null ? 'auto' : 'visible',
                    transition: 'max-height 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)', // Smooth easing
                }}
            >
                {/* Hide webkit scrollbar */}
                <style>{`
                    .pd-panel::-webkit-scrollbar { 
                        display: none; 
                    }
                    .pd-panel {
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                    }
                `}</style>

                <div className="pd-panel max-w-[500px] mx-auto py-12 px-8 flex flex-col">

                    {/* Header */}
                    <div className="flex justify-between items-start gap-[40px] mb-[40px]">
                        <div>
                            <p className="font-menu-nav-14 font-Akkurat tracking-[0.25em] uppercase text-mid-grey mb-[30px]">
                                {itemCode}
                            </p>
                            <h1 className="font-card-24 tracking-wide text-primary-2 font-Akkurat">
                                {title}
                            </h1>
                            <p className="tracking-wide font-Akkurat text-mid-grey font-text-18">
                                {price}
                            </p>
                        </div>
                        <button aria-label="Add to wishlist" className="mt-1 shrink-0 p-1">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M3.6095 10.0395L10 16.6667L16.3905 10.0395C17.1009 9.30278 17.5 8.30358 17.5 7.26171C17.5 5.09214 15.804 3.33334 13.7119 3.33334C12.7073 3.33334 11.7438 3.74722 11.0334 4.48394L10 5.55557L8.96664 4.48394C8.25624 3.74722 7.29273 3.33334 6.28807 3.33334C4.19598 3.33334 2.5 5.09214 2.5 7.26171C2.5 8.30358 2.8991 9.30278 3.6095 10.0395Z" stroke="#1A1A1A" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col justify-center items-center gap-[20px] mb-[30px]">
                        <button className="w-full py-[17px] rounded-[8px] bg-primary-2 text-primary-1 font-text-18 tracking-[0.2em] hover:bg-neutral-700 transition-colors duration-200">
                            {cta.label}
                        </button>
                        <button className="w-fit border-neutral-200 border-b tracking-[0.2em] uppercase font-footer-copyright-14 text-primary-2 font-Akkurat transition-colors duration-200">
                            {ctaContact.label}
                        </button>
                    </div>

                    {/* Description */}
                    <div className={`flex flex-col ${isReadMore ? 'gap-[30px]' : 'gap-0'} font-product-16 font-Akkurat text-mid-grey`}>
                        <div className={`${!isReadMore ? 'h-[164px] overflow-y-hidden' : 'h-auto'} relative`}>
                            {productDetails?.desc?.map((item: any, index: number) => (
                                <p className="tracking-wide" key={item?.id}>
                                    {item?.text}
                                </p>
                            ))}
                            {!isReadMore && (
                                <div
                                    className="absolute bottom-0 left-0 right-0 pointer-events-none"
                                    style={{
                                        height: '80px',
                                        background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.85) 50%, #FFFFFF 100%)',
                                        backdropFilter: 'blur(1px)',
                                        WebkitBackdropFilter: 'blur(1px)',
                                    }}
                                />
                            )}
                        </div>

                        <button className='text-primary-2 border-b w-fit border-[var(--color-black)]' onClick={() => setIsReadMore((pre) => !pre)}>
                            {
                                !isReadMore ? 'Read more' : 'Read Less'
                            }
                        </button>
                    </div>

                    <hr className="border-neutral-200 mt-[40px]" />

                    {/* Accordions */}
                    <ul className="flex flex-col divide-y divide-neutral-200">
                        {accordion.map((item:any, index:number) => {
                            const isOpen = open === index
                            return (
                                <li key={item.id}>
                                    <button
                                        className="w-full py-[18px] flex justify-between items-center text-primary-2 font-text-18 font-Akkurat text-left"
                                        onClick={() => setOpen(isOpen ? null : index)}
                                        aria-expanded={isOpen}
                                    >
                                        <span className="tracking-[0.18em]">
                                            {item.question}
                                        </span>
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="transition-transform duration-300"
                                            style={{ transform: isOpen ? 'rotate(0deg)' : 'rotate(0deg)' }}
                                        >
                                            {isOpen ? (
                                                // Minus icon
                                                <path
                                                    d="M2.92872 9.99999L17.0708 9.99999"
                                                    stroke="#1A1A1A"
                                                    strokeWidth="1.07143"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            ) : (
                                                // Plus icon
                                                <>
                                                    <path
                                                        d="M9.99977 2.92894V17.0711"
                                                        stroke="#1A1A1A"
                                                        strokeWidth="1.07143"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M2.92872 9.99999L17.0708 9.99999"
                                                        stroke="#1A1A1A"
                                                        strokeWidth="1.07143"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </>
                                            )}
                                        </svg>
                                    </button>
                                    <div
                                        ref={el => { answerRefs.current[index] = el }}
                                        className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
                                        style={{
                                            maxHeight: isOpen
                                                ? `${answerRefs.current[index]?.scrollHeight ?? 500}px`
                                                : '0px'
                                        }}
                                    >
                                        <p className="font-product-16 font-Akkurat text-mid-grey tracking-wide pb-[18px]">
                                            {item.answer}
                                        </p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>

                </div>
            </div>
        </section>
    )
}

export default ProductDetailsDesktop