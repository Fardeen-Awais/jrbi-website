import React from 'react'
import Assesments from '@/components/assesments'
import { createClient } from '@sanity/client';

const assesment = ({asses}) => {
  return (
    <div>
      <Assesments asses={asses}/>
      </div>
  )
}
export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "54m8bn61", //Project id is in the sanity.json
    dataset: "production",
    useCdn: false,
  });
  const asses = await client.fetch(`*[_type == "assessment"]`); //The 
  return {
    props: {
      asses, //Return the fetch variable
    },
  };
}

export default assesment