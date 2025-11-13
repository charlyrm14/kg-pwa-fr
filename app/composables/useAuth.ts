import { MOCK_USER_CREDENTIALS, MOCK_TOKEN_COOKIE } from "#imports"

export function useAuth() {

    const config = useRuntimeConfig();

    type ErrorState = {
        status: boolean
        description: string
    }

    const token = useCookie<string | null>(config.public.tokenAccessName)
    const error = reactive<ErrorState>({
        status: false,
        description: '',
    })

    const IS_MOCK_API_MODE = config.public.mockApiMode

    let initialAuthStatus: boolean;

    if (IS_MOCK_API_MODE) {
        initialAuthStatus = false;
    } else {
        initialAuthStatus = true; 
    }

    const isAuthenticated = ref<boolean>(initialAuthStatus)

    const login = async(email: string, password: string) => {
        try {

            if(IS_MOCK_API_MODE) {

                await new Promise(resolve => setTimeout(resolve, 800))
                
                if(email === MOCK_USER_CREDENTIALS.email && password === MOCK_USER_CREDENTIALS.password) {

                    token.value = MOCK_TOKEN_COOKIE
                    isAuthenticated.value = true
                    await navigateTo('/')
                    
                } else {
                    
                    handleError('Invalid credentials Dude')
                    throw new Error('Invalid mock credentials')
                }

            } else {
                console.log('API login functionality')
            }

        } catch(e: any) {

            console.log('Error during login process:' + e)

        } 
    }

    const handleError = (description: string) => {
        error.status = true
        error.description = description
        resetError()
    }

    const resetError = () => {
        setTimeout(() => {
            error.status = false
            error.description = ''
        }, 4000);
    }

    return {
        isAuthenticated,
        error,
        IS_MOCK_API_MODE,
        MOCK_USER_CREDENTIALS,
        login
    }
}