import React from 'react'
import Video from '@/components/Video'
import { createClient } from 'next-sanity';
export default function video({ youtube }) {
    return (
        <div className='my-20 md:my-10'>
            <Video youtube={youtube} />
        </div>
    )
}

export async function getServerSideProps(context) {
    const client = createClient({
        projectId: "rpf7v2k6", //Project id is in the sanity.json
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