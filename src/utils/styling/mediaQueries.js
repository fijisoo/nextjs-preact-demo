export const breakpoints = {
    sm: 420,
    smM: 670,
    md: 920,
    mdM: 1100,
    lg: 1280,
    xl: 99999,
}

export const mediaQueries = key => {
    return style => `@media (min-width: ${breakpoints[key]}px) { ${style} }`
}
