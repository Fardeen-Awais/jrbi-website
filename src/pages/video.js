import React from 'react'
import Video from '@/components/Video'
import { createClient } from '@sanity/client';
export default function video({ youtube }) {
    return (
        <div className=''>
            <Video youtube={youtube} />
        </div>
    )
}

export async function getServerSideProps(context) {
    const client = createClient({
        projectId: "54m8bn61", //Project id is in the sanity.json
        dataset: "production",
        useCdn: false,
    });
    const youtube = await client.fetch(`*[_type == "youtube"]`);
    return {
        props: {
            youtube
        },
    };
}