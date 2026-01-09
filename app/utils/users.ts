import AboutMe from "~/components/user/profile/AboutMe.vue";
import Achievement from "~/components/user/profile/Achievement.vue";
import Hobby from "~/components/user/profile/Hobby.vue";
import Personal from "~/components/user/profile/Personal.vue";
import ShareProfile from "~/components/user/profile/ShareProfile.vue";
import type { ProfileTab } from '~~/shared/types/Tabs'

export const profileTabs = (): ProfileTab[] => {

    return [
        { 
            id: 1, 
            title: 'Logros', 
            components: [
                { component: Achievement }
            ] 
        },
        { 
            id: 2, 
            title: 'Perfil', 
            components: [
                { component: AboutMe, props: { user: true }},
                { component: Hobby, props: { user: true }}
            ]
        },
        { 
            id: 3, 
            title: 'Información', 
            components: [ 
                { component: Personal, props: { user: true }} 
            ] 
        },
        { 
            id: 4, 
            title: 'Compartir', 
            components: [ 
                { component: ShareProfile, props: { user: true }} 
            ] 
        },
    ];
}

export const bgRoleUserColor = (roleId: number) => {

    const colors: Record<string, string> = {
        1: 'bg-blue-500',
        2: 'bg-purple-500',
        3: 'bg-emerald-500'
    }

    return colors[roleId] ?? 'bg-pink-500'
}
