import { useQuery, gql } from '@apollo/client';

const GET_DOG_PHOTO = gql`
    query Dog($breed: String!) {
        dog(breed: $breed) {
            id
            displayImage
        }
    }
`

export const DogPhoto = ({ breed }) => {
    const {loading, error, data} = useQuery(GET_DOG_PHOTO, {
        variables: { breed }
    })

    if (loading) return null;
    if (error) return `Error! ${error}`;

    return (
        <img src={data.dog.displayImage} style={{ height: 100, width:100}} alt="displayImage" />
    )
}