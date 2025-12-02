import AboutMe from "~/components/user/profile/AboutMe.vue";
import Achievement from "~/components/user/profile/Achievement.vue";
import Hobby from "~/components/user/profile/Hobby.vue";
import Personal from "~/components/user/profile/Personal.vue";
import ShareProfile from "~/components/user/profile/ShareProfile.vue";

export const profileTabs = () => {

    return [
        { 
            id: 1, 
            title: 'Logros', 
            components: [ Achievement] 
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