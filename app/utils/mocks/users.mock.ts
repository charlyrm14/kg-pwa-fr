import type { ApiResponse, UserBirthday } from "#imports"

export const MOCK_USER_BIRTHDAY: ApiResponse<UserBirthday[]> = {
    data: [
        {
            name: "Carlos I.",
            last_name: "Ramos",
            mother_last_name: null,
            email: "charlyrm14@gmail.com",
            uuid: "771f8eb5-a52e-40e4-af21-af947bf76048",
            student_code: null,
            profile: {
                about_me: "This is a lorem ipsum dolor sit amet consectetur adipiscing elit taciti, pulvinar congue aliquet rhoncus tempus interdum ut est, non morbi massa laoreet fringilla proin hendrerit. Donec nec inceptos a dictum et ante mattis fusce dictumst, purus aliquet suscipit aptent litora taciti dui orci dapibus, vel nunc erat cum maecenas laoreet tincidunt diam. Tellus sed purus convallis curae faucibus tempus congue imperdiet quisque, euismod neque consequat orci ullamcorper elementum eleifend vitae lectus, hendrerit ultricies habitasse a ut donec accumsan mauris.",
                birthdate: "1990-12-03",
                age: 35,
                gender: "MASCULINO"
            },
            current_level: "Nivel Foca"
        }, 
        {
            name: "Valentina E.",
            last_name: "Hérnandez",
            mother_last_name: null,
            email: "vhernandezkg@gmail.com",
            uuid: "4f507188-2b7e-4263-9e06-dcb01ea9c0e4",
            student_code: "STU-20251013-8656",
            profile: {
                about_me: "This is a lorem ipsum dolor sit amet consectetur adipiscing elit taciti, pulvinar congue aliquet rhoncus tempus interdum ut est, non morbi massa laoreet fringilla proin hendrerit. Donec nec inceptos a dictum et ante mattis fusce dictumst, purus aliquet suscipit aptent litora taciti dui orci dapibus, vel nunc erat cum maecenas laoreet tincidunt diam. Tellus sed purus convallis curae faucibus tempus congue imperdiet quisque, euismod neque consequat orci ullamcorper elementum eleifend vitae lectus, hendrerit ultricies habitasse a ut donec accumsan mauris.",
                birthdate: "2015-12-03",
                age: 10,
                gender: "FEMENINO"
            },
            current_level: "Nivel Foca"
        }
    ]
}