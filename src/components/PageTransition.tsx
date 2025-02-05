// "use client"

// import { useEffect } from 'react'
// import { usePathname } from 'next/navigation'

// export default function PageTransition() {
//   const pathname = usePathname()

//   useEffect(() => {
//     const container = document.createElement('div')
//     container.className = 'fixed inset-0 flex z-50 overflow-hidden'
//     document.body.appendChild(container)

//     const stripes = Array.from({ length: Math.ceil(window.innerWidth / 20) }).map((_, i) => {
//       const stripe = document.createElement('div')
//       stripe.className = 'h-full w-5 bg-gray-800'
//       stripe.style.transition = `transform 0.4s cubic-bezier(0.65, 0, 0.35, 1) ${i * 0.002}s`
//       stripe.style.transform = 'translateX(100vw)'
//       container.appendChild(stripe)
//       return stripe
//     })

//     // First animation
//     requestAnimationFrame(() => {
//       stripes.forEach(stripe => {
//         stripe.style.transform = 'translateX(0)'
//       })
//     })

//     setTimeout(() => {
//       stripes.forEach(stripe => {
//         stripe.style.transition = `transform 0.1s cubic-bezier(0.4, 0, 1, 1) ${i * 0.01}s`
//         stripe.style.transform = 'translateX(-100vw)'
//       })
//     }, 1200)

//     // Start reverse animation at cleanup point
//     setTimeout(() => {
//       // Reset stripes position
//       stripes.forEach((stripe, i) => {
//         stripe.style.transition = 'none'
//         stripe.style.transform = 'translateX(100vw)'
//       })
      
//       // Start reverse animation
//       requestAnimationFrame(() => {
//         stripes.forEach((stripe, i) => {
//           stripe.style.transition = `transform 1.2s cubic-bezier(0.65, 0, 0.35, 1) ${i * 0.02}s`
//           stripe.style.transform = 'translateX(0)'
//         })
//       })

//       setTimeout(() => {
//         stripes.forEach((stripe, i) => {
//           stripe.style.transition = `transform 0.1s cubic-bezier(0.4, 0, 1, 1) ${i * 0.01}s`
//           stripe.style.transform = 'translateX(-100vw)'
//         })
//       }, 300)
//     }, 600)

//     // Final cleanup
//     setTimeout(() => {
//       container.remove()
//     }, 1600)

//     return () => container.remove()
//   }, [pathname])

//   return null
// }