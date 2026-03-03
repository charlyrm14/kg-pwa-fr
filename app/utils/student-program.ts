export const iconSkillProgress = (percentage: number = 0): string => {

    const icon: Record<number, string> = {
        0: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                stroke-width="2" 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                class="lucide lucide-circle-icon lucide-circle text-gray-500 dark:text-gray-300">
                    <circle cx="12" cy="12" r="10"/>
            </svg>`,
        100: `<svg 
                xmlns="http://www.w3.org/2000/svg" width="20" height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                stroke-width="3" 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                class="lucide lucide-check-icon lucide-check text-green-500 font-bold">
                    <path d="M20 6 9 17l-5-5"/>
            </svg>`
    }

    return (icon[percentage] ?? icon[0]) as string
}