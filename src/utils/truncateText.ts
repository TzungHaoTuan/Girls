export const truncateText = (str: string) => {
    if (str.length > 15) {
        return str.substring(0, 15) + "..."
    }
    return str
}

