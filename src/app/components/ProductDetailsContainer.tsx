'use client'
import React, { lazy, Suspense } from 'react'

const ProductDetailsDesktop = lazy(() => import('./ProductDetailsDesktop'))
const ProductDetailsTabMob = lazy(() => import('./ProductDetailsTabMob'))

const LoadingFallback = () => (
    <div className="w-full min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-gray-200 border-t-black rounded-full animate-spin"></div>
            <p className="text-sm text-gray-500 font-Akkurat">Loading...</p>
        </div>
    </div>
)

const ProductDetailsContainer = () => {
    
    const data = {
        itemCode: 'M2B903',
        title: 'Alma BB',
        price: 'OMR 800',
        cta: { label: 'Add to Bag', href: '#' },
        ctaContact: { label: 'Contact on WhatsApp', href: '#' },
        productDetails: {
            desc: [
                {
                    id: 1,
                    text: 'This signature Bagzei handbag showcases refined craftsmanship with a structured finish and elegant modern silhouette. Accented with polished gold-toned hardware, a soft microfibre lining, and thoughtful compartments for everyday essentials.'
                },
                {
                    id: 2,
                    text: 'This signature Bagzei handbag showcases refined craftsmanship with a structured finish and elegant modern silhouette. Accented with polished gold-toned hardware, a soft microfibre lining, and thoughtful compartments for everyday essentials.'
                }
            ],
            dimensions: '9.1 x 6.7 x 4.3 inches  (Length x Height x Width)',
            materials: [
                'Black calfskin leather',
                'Gold-toned hardware',
                'Microfibre lining',
                'Magnetic snap closure',
                '1 exterior zipped pocket',
                'Adjustable leather strap',
            ],
        },
        accordion: [
            {
                id: 1, question: 'Details & Care',
                answer: 'Wipe gently with a soft, dry cloth. Avoid prolonged exposure to direct sunlight or humidity. Store in the provided dust bag when not in use. Keep away from water, cosmetics, and perfume.'
            },
            {
                id: 2, question: 'Delivery & Returns',
                answer: 'Complimentary express delivery on all orders. Returns accepted within 14 days in original, unworn condition with all tags attached and original packaging. Complimentary express delivery on all orders. Returns accepted within 14 days in original, unworn condition with all tags attached and original packaging. Complimentary express delivery on all orders. Returns accepted within 14 days in original, unworn condition with all tags attached and original packaging. Complimentary express delivery on all orders. Returns accepted within 14 days in original, unworn condition with all tags attached and original packaging. Complimentary express delivery on all orders. Returns accepted within 14 days in original, unworn condition with all tags attached and original packaging. Complimentary express delivery on all orders. Returns accepted within 14 days in original, unworn condition with all tags attached and original packaging.'
            },
            {
                id: 3, question: 'Find in Store',
                answer: 'Discover this item in store with a personal advisor. Locate your nearest boutique to arrange a private appointment or viewing.'
            },
        ],
        productImages: [
            { id: 1, img: '/assets/images/product-details/pd-1.png' },
            { id: 2, img: '/assets/images/product-details/pd-2.png' },
            { id: 3, img: '/assets/images/product-details/pd-3.png' },
            { id: 4, img: '/assets/images/product-details/pd-4.png' },
        ],
    }

    return (
        <>
            <Suspense fallback={<LoadingFallback />}>
                <ProductDetailsDesktop data={data} />
            </Suspense>
            <Suspense fallback={<LoadingFallback />}>
                <ProductDetailsTabMob data={data} />
            </Suspense>
        </>
    )
}

export default ProductDetailsContainer