import { useLoaderData, useNavigation } from "react-router-dom";

export default function Data() {
  const url = useLoaderData();
  //the navigation hook is used to check the state of the current navigation.
  const navigation = useNavigation();

  if (navigation.state === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img width='500' height='500' src={url} alt="Dog photo" />
    </div>
  )
}

// api to fetch the location of the image from the database.
export const dataFetcher = async () => {
  try {
    const res = await fetch('https://random.dog/woof.json');
    const data = await res.json();
    
    return data.url;
  } catch(error) {
    console.log("Error fetching");
    return null;
  }
}