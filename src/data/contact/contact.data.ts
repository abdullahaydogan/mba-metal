import manufacturingWorkerImage from '../../assets/images/capabilities/manufacturing-worker.jpg';
import weldingImage from '../../assets/images/capabilities/welding.jpg';

/* -------------------------------------------------------------------------- */
/*                                   TYPES                                    */
/* -------------------------------------------------------------------------- */

export type ContactMethodId =
    | 'phone'
    | 'whatsapp'
    | 'email'
    | 'workingHours';

export interface ContactMethodItem {
    id: ContactMethodId;
    featured?: boolean;
}

export interface WorkingHourItem {
    id:
        | 'weekdays'
        | 'saturday'
        | 'sunday';
}

/* -------------------------------------------------------------------------- */
/*                                   DATA                                     */
/* -------------------------------------------------------------------------- */

export const contactPageData = {
    hero: {
        image: manufacturingWorkerImage,

        scrollTarget: '#contact-details',
    },

    contactMethods: [
        {
            id: 'phone',
            featured: true,
        },
        {
            id: 'whatsapp',
        },
        {
            id: 'email',
        },
        {
            id: 'workingHours',
        },
    ] satisfies ContactMethodItem[],

    workingHours: [
        {
            id: 'weekdays',
        },
        {
            id: 'saturday',
        },
        {
            id: 'sunday',
        },
    ] satisfies WorkingHourItem[],

    form: {
        image: weldingImage,
    },

    cta: {
        image: manufacturingWorkerImage,
    },
} as const;